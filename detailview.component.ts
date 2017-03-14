import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//This is the controller for the new component that should load on click on a list item  in emplist view
@Component({
  selector: 'app-dashboard',
  
templateUrl: './detailview.component.html',

  styleUrls: ['./detailview.component.css']

})

export class DetailviewComponent implements OnInit {

  
   constructor(public currentRoute:ActivatedRoute) { }

//defining local properties of class to read the URL parameters into
  parameter_name:any;
  parameter_designation:any;
  parameter_company:any;
   
  ngOnInit(){ //reading the parameters of URL into local properties
	this.currentRoute.params.subscribe( params=>{
		this.parameter_name=params['name'];
		this.parameter_designation=params['designation'];
		this.parameter_company=params['companyName'];
	})
	
   }
}
