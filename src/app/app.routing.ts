import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Users/login/login.component';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductAddComponent } from './Products/product-add/product-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserGuardService } from './Users/user-guard.service';
import { ProductResolverService } from './Products/product-resolver.service';


const arr: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'login', component: LoginComponent},
 {path:'products',resolve:{productData:ProductResolverService},
 canActivate:[UserGuardService],
children:[
  {path:'',component:ProductListComponent},
  {path:':id',component:ProductAddComponent},
  {path:':id/edit',component:ProductAddComponent}
]
},
 {path: '**', component:PageNotFoundComponent }
 ];

 export const routing = RouterModule.forRoot(arr);
