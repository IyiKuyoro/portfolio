import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { NewExternalArticle } from '../../../models/Article.model';
import { ImageHelper } from '../../../helpers/ImageUploader';
import { ImageUploadService } from '../../../services/image-upload.service';
import { Subscription } from 'rxjs';
import { ArticlesService } from '../../../services/articles.service';
import { IApiArticleResponse } from '../../../models/IApiArticleResponse.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: FormGroup;
  imageUploadProgress: number;
  imageUploadProgressSubscription: Subscription;
  image: string;

  constructor(
    private formBuilder: FormBuilder,
    private imageUploadService: ImageUploadService,
    private articleService: ArticlesService,
    private router: Router,
    private dialogRef: MatDialogRef<AddArticleComponent>,
  ) {}

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', [Validators.required, Validators.pattern(/^https:\/\/\S+$/)]],
      category: ['tech', Validators.required],
    });

    this.imageUploadProgressSubscription = this.imageUploadService.uploadProgress.subscribe((p: number) => {
      this.imageUploadProgress = p;
    });
  }

  selectFile(event) {
    ImageHelper.uploadImage(this.imageUploadService, event.target.files[0]).subscribe((data: string) => {
      this.image = data;
    });
  }

  onSubmit() {
    const article = new NewExternalArticle(
      this.articleForm.get('title').value,
      this.articleForm.get('link').value,
      this.articleForm.get('category').value,
      this.image || null
    );

    this.articleService.postExternalArticle(article).subscribe((data: IApiArticleResponse) => {
      if (data.success) {
        this.dialogRef.close();
        this.router.navigate(['/']);
      }
    });
  }
}
