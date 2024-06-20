// post.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://api.example.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  addComment(postId: number, comment: string): Observable<void> {
    const commentObj = { postId, comment };
    return this.http.post<void>(`${this.apiUrl}/${postId}/comments`, commentObj);
  }
}
