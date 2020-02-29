import { MainLogoComponent } from './main-logo/main-logo.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MenuButtonComponent,
    MainLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuButtonComponent,
    MainLogoComponent
  ]
})
export class SharedModule { }
