import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrunc'
})
export class TextTruncPipe implements PipeTransform {

  transform(value: string, charCount: number = 100): any {
    if (value.length > charCount) {
      const nt = value.substr(0, charCount);
      const ls = nt.lastIndexOf(' ');
      return nt.substr(0, ls) + '...';
    }
    return value;
  }

}
