import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color='white';
  marginLeft = '30';
  backgroundColor = 'red';


  countries:string[] = [
    'india','australia'
  ]

  isValid:boolean=true;
  selectedCountry:string;

  countryStyles:Object={};

  getStyles(country){
    if(country==='india'){
     return 'blue';
    }else if(country==='australia'){
      return 'yellow';
    }
  }


  getClasses(){
    return 'main-block main-block-color';
  }

}
