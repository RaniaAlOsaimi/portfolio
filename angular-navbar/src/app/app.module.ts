import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SocialComponent } from './social/social.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatListModule } from '@angular/material/list';
import { EmailComponent } from './email/email.component';
import { ImageComponent } from './image/image.component';
import { ContentComponent } from './content/content.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AboutComponent } from './about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';




const MaterialComponent = [
  MatButtonModule,
   


 ];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SocialComponent,
    EmailComponent,
    ImageComponent,
    ContentComponent,
    ButtonsComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MaterialComponent,
    MatIconModule,
    FontAwesomeModule,
    MatListModule,
    FlexLayoutModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }
