import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beer_filter'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchName: string, searchTag: string, searchType: string): any[] {
    if(!items) { 
        return [];
    }

    if(searchName) {
        searchName = searchName.toLowerCase();
        items = items.filter(x=> x.name.toLowerCase().includes(searchName));
    };

    if(searchType) {
        searchType = searchType.toLowerCase();
        items = items.filter(x=> x.type.toLowerCase().includes(searchType));
    };

    if(searchTag) {

        searchTag = searchTag.toLowerCase();
        items = items.filter(x=> x.tags.indexOf(searchTag) >= 0);
    };

    return items;
   }
}