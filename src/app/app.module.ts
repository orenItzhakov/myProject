import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OnlyTemplateComponent } from './components/only-template/only-template.component';
import { NoNumbersPipe } from './pipes/no-numbers.pipe';
import { HttpService } from './services/http.service';
import { ChildComponent } from './components/child/child.component';
import { highLightDirective } from './directives/highLight.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    OnlyTemplateComponent,
    NoNumbersPipe,
    ChildComponent,
    highLightDirective,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
