import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  pais:string="";
  unis: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

Mostrar(){
  this.http.get(' http://universities.hipolabs.com/search?country='+this.pais+'')
      .subscribe((res) => {
        this.unis = res;
  })

}

}
