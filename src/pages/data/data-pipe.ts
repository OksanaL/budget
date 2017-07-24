import { Pipe, PipeTransform } from '@angular/core';
/*
 *
*/
@Pipe({name: 'changeViewNumber'})
export class ChangeViewNumberPipe implements PipeTransform {
  transform(data: any, val: number): any {
    if(val) return data.slice(0, val);
    return data;
  }
}