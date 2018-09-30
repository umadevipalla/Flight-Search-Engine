import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { Http, HttpModule } from '@angular/http';


describe('SearchService', () => {
  let service:SearchService;
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpModule],
  }));

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
