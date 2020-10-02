import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild('sidenav') sidenav: MatSidenav;


  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  sideMenus = [
    {
      mainMenu : 'Directives',
      subMenus : [
        {path : 'structural-directives' , displayName : "Structural Directives"},
        {path : 'attribute-directives' , displayName : "Attribute Directives"},
      ]
    },
    {
      mainMenu : 'Forms',
      subMenus : [
        {path : 'template-driven' , displayName : "Template Driven"},
        {path : 'reactive-forms' , displayName : "Reactive Forms"},
      ]
    },
    {
      mainMenu : 'RXJS',
      subMenus : [
        {path : 'observables' , displayName : "Observables"},
        {path : 'subject' , displayName : "Subject"},
        {path : 'operators' , displayName : "Operator"},
      ]
    },
    {
      mainMenu : 'Promise',
      subMenus : [
        {path : 'promise' , displayName : "Promise"},
        {path : 'asyncAwait' , displayName : "Aysn Await"}
      ]
    },
    {
      mainMenu : 'Users',
      subMenus : [
        {path : 'user' , displayName : "User"}
      ]
    },
    {
      mainMenu : 'fileupload',
      subMenus : [
        {path : 'fileupload' , displayName : "File Upload"}
      ]
    }
  ]


  mouseenter() {
    console.log('mouse enter');
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    console.log('mouse leave');
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
