import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, tap, catchError } from 'rxjs/operators';
import { lastValueFrom, Subject, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostsService {
    errorMessage: Subject<string> = new Subject<string>();

    constructor(private _http: HttpClient) { }

    createAndStorePost = (title: string, body: string) => {
        const source = this._http.post<Post>('https://jsonplaceholder.typicode.com/posts', { title, body })
            .subscribe({
                next: response => console.log(response),
                error: (error) => this.errorMessage.next(error),
            });
    };

    fetchPosts = () => {
        const source$ = this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .pipe(map(posts => posts.map((post: Post) => ({ id: post.id, title: post.title, body: post.body }))),
                catchError(error => {
                    console.error(error);
                    return throwError(() => new Error(error));
                })
            );
        // return lastValueFrom(source$);
        // .subscribe((posts: any[]) => { });
        return source$;
    };

    deletePosts = () => {
        const source$ = this._http.delete<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .pipe(map(posts => posts.map((post: Post) => ({ id: post.id, title: post.title, body: post.body }))));
        // return lastValueFrom(source$);
        // .subscribe((posts: any[]) => { });
        return source$;
    };
}