import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  nombre:string="";
  preds:string="";
  msg:string="";
  img:string="";

  constructor(
    private http: HttpClient
  ) {}

Predecir(){
  this.http.get<any>('https://api.agify.io/?name='+this.nombre+'')
      .subscribe(res => {
        this.preds = res.age;
        if(parseFloat(this.preds) <= 18){
          this.msg = 'Joven';
          this.img = 'assets/icon/joven.png';
        } else {
          if(parseFloat(this.preds) <=50){
            this.msg = 'Adulto';
            this.img = 'assets/icon/adulto.png';
          } else {
            this.msg = 'Viejo';
            this.img = 'assets/icon/viejo.png';
          }
        }
      })

}

}