import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  
  nombre:string="";
  preds:string="";
  img:string="";

  constructor(
    private http: HttpClient
  ) {}

Predecir(){
  this.http.get<any>('https://api.genderize.io/?name='+this.nombre+'')
      .subscribe(res => {
        this.preds = res.gender;
        if(res.gender == "female"){
          this.img = 'assets/icon/female.png'
        } else {
          this.img = 'assets/icon/male.png'
        }
      })
}

}
