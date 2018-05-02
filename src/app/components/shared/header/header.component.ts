import { Component, OnInit } from '@angular/core';
import { Cities}  from '../../../configs/cities.config'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

	constructor() { }
    cities = Cities.citiesName; 

    selected={a:"Gurgaon"};

    fav(selected){
    var value=localStorage.getItem("loc").toString();
    this.selected.a=value;
    }
    
	ngOnInit() {

		  this.cities.sort(function(a,b){
          return a.localeCompare(b);
       });
	}
}
