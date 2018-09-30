import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpModule
      ],
      declarations: [
        AppComponent,
        SearchBoxComponent,
        FlightDetailsComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Flight Search Engine'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Flight Search Engine');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Flight Search Engine');
  }));
});
