import { Pipe, PipeTransform } from '@angular/core';
import TimePast from 'time_past';

@Pipe({
  name: 'timepast'
})
export class TimePastPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return TimePast.inWords(value);
  }
}
