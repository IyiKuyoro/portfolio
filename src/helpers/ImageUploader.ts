import { ImageUploadService } from '../services/image-upload.service';
import { Observable } from 'rxjs';

export class ImageHelper {
  static uploadImage(uploadService: ImageUploadService, file: File): Observable<string> {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return uploadService.uploadImage(file, 'iyikuyoro', 'example');
  }
}
