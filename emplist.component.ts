import { Component } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  
templateUrl: './emplist.component.html',

  styleUrls: ['./emplist.component.css']

})

export class EmplistComponent  {

  
   constructor() { }

//defining the model here

existing_empList: any = [
{name: ‘abc’, designation: ‘SE’, companyName: ‘AcadGild’},
{name: ‘def’, designation: ‘sSE’, companyName: ‘ISRO’},
{name: ‘ghi’, designation: ‘PM’, companyName: ‘Microsoft’}
];

}