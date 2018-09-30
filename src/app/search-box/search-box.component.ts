import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { BookingInformation } from '../../models/booking-info';
import { SearchResponse } from '../../models/search-response';
import { Flights } from '../../models/flights';

import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

   @Output() loadingComponent = new EventEmitter<boolean>();
   @Output() onSearchResults = new EventEmitter<SearchResponse>();

  search: BookingInformation;
  filteredOriginCities: string[] = [];
  filteredDestinationCities: string[] = [];
  totalCitiesListedOnServer: string[] = [];

   invalidForm: boolean = false;

  constructor(private find: SearchService, private elementRef: ElementRef) { 
    this.search = {
      destinationCity: '', originCity: '', departureDate: '', returnDate: '', oneway: true, passengers: 1,
      refine: 1000
    }
  }

  ngOnInit() {
    this.find.getCitiesListedOnServer().then(cities => {
      this.totalCitiesListedOnServer = cities;
    })
    .catch(e=><any>window.alert("It seems you are directly serving from file. The app would not be able to perform perfectly due to Cross origin restriction."))
 
  }

  public valueSelected(city: string, isOrigin: boolean) {
    console.log("selected", city)
    isOrigin ? this.search.originCity = city : this.search.destinationCity = city;
    isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
  }

  public filterCity(city: string, isOrigin: boolean) {
    city = city.toLowerCase(); // convert to lowercase
    isOrigin ? this.filteredOriginCities = [] : this.filteredDestinationCities = [];
    console.log("city entered", city);
    if (city) {
      this.totalCitiesListedOnServer.filter((x) => {
        if (x.includes(city))
          isOrigin ? this.filteredOriginCities.push(x) : this.filteredDestinationCities.push(x);
      });
    }
  }

  public onSubmit(formInputs): void {
    console.log(formInputs);
    if (formInputs.form.valid) {
      this.invalidForm = false;
      // convert to lowercase
      this.search.destinationCity = this.search.destinationCity.toLowerCase();
      this.search.originCity = this.search.originCity.toLowerCase();
      this.clickSearchButton(this.search);
    }
    else
      this.invalidForm = true;
  }

  public clickSearchButton(searchParams: BookingInformation): void {
    
  }

  public sliderChangeEvent(e) {
    console.log("Slider changed");
    this.clickSearchButton(this.search);
  }

  public updateBookingType(oneway: boolean): void {
    this.search.oneway = oneway;
  }

}
