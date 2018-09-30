import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const apiUrl = `./assets/flight-data.json`;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: Http) { }

  public getCitiesListedOnServer(): Promise<string[]> {
    return this.http.get(apiUrl)
      .toPromise()
      .then(data => { return this.extractCities(data.json()); })
      .catch(Promise.reject);
  }
  public extractCities(flightData: any): Promise<string[]> {
    const allCities: string[] = [];
    flightData.flights.map(x => {
      allCities.push(x.origin);
      allCities.push(x.destination);
    });

    const distinctCities = allCities.filter((x, index, originalArr) => {
      return index === originalArr.indexOf(x);
    });
    return Promise.resolve(distinctCities);
  }

}
