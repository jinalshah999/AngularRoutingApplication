import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './Products/product-details/product-details.component';
import { ProductAddComponent } from './Products/product-add/product-add.component';
import { LoginComponent } from './Users/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './lowerCaseUrlSerializer';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    {
      provide:UrlSerializer,
      useClass:LowerCaseUrlSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
