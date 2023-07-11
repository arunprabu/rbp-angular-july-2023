import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { FormsModule } from '@angular/forms';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';
import { EmployeeInfoComponent } from './concepts/components/employee-info/employee-info.component';
import { UserProfileComponent } from './concepts/components/user-profile/user-profile.component';

// Main switching box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ConceptsComponent,
    MenuListComponent,
    EmployeeInfoComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // for ngModel
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
