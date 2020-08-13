import { Component, OnInit } from '@angular/core';

import { SearchService } from './search.service';
import { Country } from './country';
import { Observable, Subject, of } from 'rxjs';
import {
  tap, switchMap, debounceTime, distinctUntilChanged
} from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  public loading = false;
  public countries$: Observable<Country[]> = of([]);
  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService
  ) { }

  public ngOnInit(): void {
    this.countries$ = this.searchTerms.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchCountry(term)),
      tap(_ => this.loading = false)
    );
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

}
