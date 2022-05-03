import { Pipe, PipeTransform } from "@angular/core";
import * as _ from 'lodash';

@Pipe({ name: 'filter', pure: false })
export class FilterPipe implements PipeTransform {
    transform(value: any[], filter: string, property: string) {
        if (filter.length === 0) {
            return value;
        }

        if (value.length === 0) {
            return value;
        }

        const results = _.filter(value, (v: any) => v[property] === filter);

        return results;
    }
}
