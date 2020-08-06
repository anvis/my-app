import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterStocksbyWatchListPipe'})
export class filterStocksbyWatchListPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
      debugger;
      if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
  debugger;
      return it.watchListName.toLowerCase().includes(searchText);});
  }
}
