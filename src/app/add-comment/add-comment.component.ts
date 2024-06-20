// add-comment.component.ts

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  @Input() postId!: number;

  commentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService) {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const commentText = this.commentForm.value.comment;
    this.postService.addComment(this.postId, commentText).subscribe(() => {
      this.commentForm.reset();
    });
  }
}
