import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateLocalizer'
})
export class DateLocalizerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return null;
  }

}
