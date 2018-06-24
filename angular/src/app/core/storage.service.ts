import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()
export class StorageService {

  constructor(protected localStorage: LocalStorage) { }

  addSearch(search) {
    console.log('s' + search);
    const searches = this.getSearch();
    searches.unshift(search);
    this.setLocalStorageSearches(searches);
  }

  getSearch() {
    const localStorageItem = JSON.parse(localStorage.getItem('searches'));
    console.log('item' + localStorageItem);
    return localStorageItem == null ? [] : localStorageItem.searches;
  }

  setLocalStorageSearches(searches) {
    localStorage.setItem('searches', JSON.stringify({ searches }));
  }
  removeSearch() {
    const searches = this.getSearch();
    searches.pop();
    localStorage.clear();
    this.setLocalStorageSearches(searches);
  }

}

