import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdate'
})
export class FilterdatePipe implements PipeTransform {

  transform(value: any): any {
    let fullyear = value.getFullYear();
    let month = value.getMonth();
    let day = value.getDate()

    let readableformat = day +'-'+ month+'-'+fullyear
    return readableformat;
  }

}
