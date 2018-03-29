import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: any): any {
    if(searchText === undefined) return value;

    return value.filter((value)=>{
      return value.description.toLowerCase().includes(searchText.toLowerCase());
    })
  }

}
