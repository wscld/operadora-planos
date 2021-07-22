import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakline'
})
export class BreaklinePipe implements PipeTransform {

  transform(value: string, ...args: any[]) {
    return value.replace('|', '<br>');
  }

}
