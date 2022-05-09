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
    isFetching = false;
    error: string | undefined;

    constructor(private _postSvc: PostsService) { }

    ngOnInit() {
        this.isFetching = true;
        this._postSvc.fetchPosts().subscribe(posts => {
            this.loadedPosts = [...posts];
            this.isFetching = false;
        }
        );
    }

    onCreatePost = async (form: { title: string; content: string; }) => {
        this.isFetching = true;
        this._postSvc.createAndStorePost(form.title, form.content);
        this._postSvc.fetchPosts().subscribe({
            next: (posts: Post[]) => {
                this.loadedPosts = [...posts];
                this.isFetching = false;
            },
            error: (error) => {
                console.error(error);
                this.error = error;
            },
            complete: () => {
                this.isFetching = false;
            }
        });
    };

    onFetchPosts = async () => {
        this.isFetching = true;
        this._postSvc.fetchPosts().subscribe({
            next: (posts) => this.loadedPosts = [...posts],
            error: (error) => {
                console.error(error);
                this.error = error;
            },
            complete: () => {
                this.isFetching = false;
            }
        });
    };

    onClearPosts() {
        this._postSvc.deletePosts().subscribe(posts => this.loadedPosts = [...posts]);
    }
}
