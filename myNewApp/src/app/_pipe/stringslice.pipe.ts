import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringslice'
})
export class StringslicePipe implements PipeTransform {

  transform(value: string,  ...args: number[]): unknown {
    return value.slice(args[0],args[1]);
  }

}
