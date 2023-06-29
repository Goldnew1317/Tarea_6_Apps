import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  clima: any;
  clima_act:string="";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.Clima();
  }

Clima(){
  this.http.get<any>('https://api.openweathermap.org/data/2.5/weather?q=santo%20domingo,DO&appid=7cce830ae1a069f7e4ea2f4e8df7faae&units=metric')
    .subscribe(res => {
      this.clima = res.weather[0].main;
    })
}

}
