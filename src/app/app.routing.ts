import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';



const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'catalogo', component: CatalogoComponent},
    {path:'contacto', component: ContactoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);