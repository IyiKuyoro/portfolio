import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUpload, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';

import { ArticlesService } from '../../../services/articles.service';
import { IApiResponse } from '../../../models/IApiResponse.model';
import { ImageUploadService } from '../../../services/image-upload.service';
import { INewArticle } from '../../../models/IArticle.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  Editor = BalloonEditor;
  editorConfig = {
    placeholder: 'Type the content here!',
    extraPlugins: [ this.imagePluginFactory ],
  };
  faUpload = faUpload;
  faTrashAlt = faTrashAlt;
  articleForm: FormGroup;
  image: any;
  imageUploadProgress: number;

  constructor(
    private router: Router,
    private articleService: ArticlesService,
    private imageUploadService: ImageUploadService,
  ) {
    this.articleForm = new FormGroup({
      'image': new FormControl(null),
      'title': new FormControl('', Validators.required),
      'article': new FormControl('', Validators.required),
      'category': new FormControl('tech', Validators.required),
    });
  }

  imagePluginFactory(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new CloudinaryImageUploadAdapter( loader, 'iyikuyoro', 'example', [ 160, 500, 1000, 1052 ]);
    };
  }

  ngOnInit() {
    this.imageUploadService.uploadProgress.subscribe((p: number) => {
      this.imageUploadProgress = p;
    });
  }

  selectFile(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    this.imageUploadService.uploadImage(event.target.files[0], 'iyikuyoro', 'example').subscribe((data: string) => {
      this.image = data;
    });
  }

  removeImage() {
    this.image = null;
  }

  onSubmit() {
    const validImage = this.articleForm.get('image').value;
    let article: INewArticle;

    if (validImage) {
      article = {
        title: this.articleForm.get('title').value,
        authors: 'Opeoluwa Iyi-Kuyoro',
        category: this.articleForm.get('category').value,
        body: this.articleForm.get('article').value,
        imageUrl: this.image,
      };
    } else {
      article = {
        title: this.articleForm.get('title').value,
        authors: 'Opeoluwa Iyi-Kuyoro',
        category: this.articleForm.get('category').value,
        body: this.articleForm.get('article').value,
      };
    }

    this.postArticle(article);
  }

  private postArticle(article: INewArticle) {
    this.articleService.postArticle(article).subscribe((data: IApiResponse) => {
      if (data.success) {
        this.router.navigate(['/']);
        this.imageUploadService.uploadProgress.unsubscribe();
      }
    });
  }
}
