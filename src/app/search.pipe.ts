import { Pipe, PipeTransform, ElementRef, ViewChild } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

transform(items: {}[], searchText: string): any[] {
  if(!items) return [];
  if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( (it,index) => {
  if(it.name.toLowerCase().startsWith(searchText)){
  
    return it.name
  }
    
  });
 }
}
