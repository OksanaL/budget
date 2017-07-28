import { Pipe, PipeTransform } from '@angular/core';
/*
 *
*/
@Pipe({name: 'changeViewNumber'})
export class ChangeViewNumberPipe implements PipeTransform {
  transform(data: any, collapsed: boolean, val: number): any {
    if(collapsed) return data.slice(0, val);
    return data;
  }
}