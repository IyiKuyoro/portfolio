import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authors'
})
export class AuthorsPipe implements PipeTransform {
  transform(value: string[]): string {
    let joinedName = '';
    value.forEach((name, index) => {

      if (index === 0) {
        joinedName = name;
      } else if (index !== (value.length - 1) && (index !== 0)) {
        joinedName = `${joinedName}, ${name}`;
      } else {
        joinedName = `${joinedName} and ${name}`;
      }
    });

    return joinedName;
  }
}
