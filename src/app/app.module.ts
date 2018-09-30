import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    InfoBoxComponent,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
