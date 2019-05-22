import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faUpload, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { CloudinaryImageUploadAdapter } from 'ckeditor-cloudinary-uploader-adapter';

import { ArticlesService } from '../../../services/articles.service';
import { IApiResponse, INewArticleApiResponse } from '../../../models/IApiResponse.model';
import { ImageUploadService } from '../../../services/image-upload.service';
import { INewArticle, IArticle } from '../../../models/Article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  Editor = BalloonEditor;
  editorConfig = {
    extraPlugins: [ this.imagePluginFactory ],
  };
  toEdit = false;
  faUpload = faUpload;
  faTrashAlt = faTrashAlt;
  articleForm: FormGroup;
  image: any;
  imageUploadProgress: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService,
    private imageUploadService: ImageUploadService,
  ) {
    let article: IArticle;
    if (this.route.snapshot.url[0].path === 'edit-article') {
      article = this.route.snapshot.data['resolvedData'].article;
      this.image = article.imageUrl;
      this.toEdit = true;
    }

    this.articleForm = new FormGroup({
      'image': new FormControl(null),
      'title': new FormControl( article ? article.title : '', Validators.required),
      'article': new FormControl( article ? article.body : '', Validators.required),
      'category': new FormControl( article ? article.category : 'tech', Validators.required),
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

  onSubmit(update = false) {
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

    if (update) {
      this.updateArticle(article);
    } else {
      this.postArticle(article);
    }
  }

  private postArticle(article: INewArticle) {
    this.articleService.postArticle(article).subscribe((data: INewArticleApiResponse) => {
      if (data.success) {
        this.router.navigate(['/article', data.data.slug]);
        this.imageUploadService.uploadProgress.unsubscribe();
      }
    });
  }

  private updateArticle(article: INewArticle) {
    this.articleService.updateArticle(article, this.route.snapshot.paramMap.get('slug'))
      .subscribe((data: IApiResponse) => {
        if (data.success) {
          this.router.navigate(['/article', this.route.snapshot.paramMap.get('slug')]);
        }
      });
  }
}
