import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, tap } from 'rxjs/operators';
import { lastValueFrom } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostsService {
    constructor(private _http: HttpClient) { }

    createAndStorePost = (title: string, body: string) => {
        const source$ = this._http.post<Post>('https://jsonplaceholder.typicode.com/posts', { title, body });
        // .subscribe((post: Post) => {
        //     console.log(post);
        // });
        // return lastValueFrom(source$);
        return source$;
    };

    fetchPosts = () => {
        const source$ = this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .pipe(map(posts => posts.map((post: Post) => ({ id: post.id, title: post.title, body: post.body }))));
        // return lastValueFrom(source$);
        // .subscribe((posts: any[]) => { });
        return source$;
    };
}