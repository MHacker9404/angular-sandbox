import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loadedPosts: Post[] = [];

    constructor(private _postSvc: PostsService) { }

    ngOnInit() {
        this._postSvc.fetchPosts().subscribe(posts => this.loadedPosts = [...posts]);
    }

    onCreatePost = async (form: { title: string; content: string; }) => {
        this._postSvc.createAndStorePost(form.title, form.content);
        this._postSvc.fetchPosts().subscribe(posts => this.loadedPosts = [...posts]);
    }

    onFetchPosts = async () => {
        this._postSvc.fetchPosts().subscribe({
            next: (posts) => this.loadedPosts = [...posts],
            error: () => { },
            complete: () => { }
        });
    };

    onClearPosts() {
        this._postSvc.deletePosts().subscribe(posts => this.loadedPosts = [...posts]);
    }
}
