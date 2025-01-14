import { TranslateService } from '@ngx-translate/core';
import { Post } from './../../../../models/post.model';
import { PostsService } from '../../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as postsActions from '../../state/posts.action';
import * as fromPosts from '../../state/posts.reducer';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts$: Observable<Post[]>;
  public error$: Observable<String>;

  constructor(
    public postsService: PostsService,
    private store: Store<fromPosts.AppState>,
    public translate: TranslateService,
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new postsActions.LoadPosts());
    this.posts$ = this.store.pipe(select(fromPosts.getPosts));
    this.error$ = this.store.pipe(select(fromPosts.getError));
  }

  public addNewPost(): void {
    this.postsService.addEditPost();
  }
}
