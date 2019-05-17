import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ImageUploadService {
  uploadProgress: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  uploadImage(file, cloudName: string, unsignedUploadPreset: string): Observable<string> {
    const imageUrl: BehaviorSubject<string> = new BehaviorSubject('');
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.upload.addEventListener('progress', (e) => {
      const progress = Math.round((e.loaded * 100) / e.total);
      this.uploadProgress.next(progress);
    });

    xhr.onreadystatechange = (event) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const cloudImageUrl = response.secure_url;

        imageUrl.next(cloudImageUrl);
      }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload');
    fd.append('file', file);
    xhr.send(fd);

    return imageUrl;
  }
}
