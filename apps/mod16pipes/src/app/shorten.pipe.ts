import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'shorten', pure: true })
export class ShortenPipe implements PipeTransform {
    transform(value: string, limit: number) {
        return value.length > limit ? `${value.substring(0, limit)}...` : value;
    }
}
