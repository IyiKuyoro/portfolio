import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUpload, } from '@fortawesome/free-solid-svg-icons';

import { ArticlesService } from '../../../services/articles.service';
import { IApiResponse } from '../../../models/IApiResponse.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  editorStyle = {
    height: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  };
  faUpload = faUpload;
  articleForm: FormGroup;
  image: any;

  constructor(
    private router: Router,
    private articleService: ArticlesService,
  ) {
    this.articleForm = new FormGroup({
      'image': new FormControl(null),
      'title': new FormControl('', Validators.required),
      'article': new FormControl('', Validators.required),
      'category': new FormControl('tech', Validators.required),
    });
  }

  ngOnInit() {
  }

  selectFile(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => this.image = reader.result;
  }

  onSubmit() {
    const article = {
      title: this.articleForm.get('title').value,
      authors: 'Opeoluwa Iyi-Kuyoro',
      category: this.articleForm.get('category').value,
      body: this.articleForm.get('article').value
    };

    this.articleService.postArticle(article).subscribe((data: IApiResponse) => {
      if (data.success) {
        this.router.navigate(['/']);
      }
    });
  }
}
