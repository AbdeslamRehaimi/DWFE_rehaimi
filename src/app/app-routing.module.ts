import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./authentification/login/login.component";
import { RegisterComponent } from "./authentification/register/register.component";
import { AuthentificationComponent } from "./authentification/authentification.component";
import { HomeComponent } from "./home/home.component";
import { Authgard } from "./services/AuthGard";
import { ListComponent } from '../app/home/clients/list/list.component';
import { ProduitComponent } from './home/produit/produit.component';
import { FournisseursComponent } from './home/fournisseurs/fournisseurs.component';
import { UsersComponent } from './home/users/users.component';
import { ListProduitComponent } from './home/produit/list-produit/list-produit.component';
import { EditProduitComponent } from './home/produit/edit-produit/edit-produit.component';
import { ListFournisseurComponent } from './home/fournisseurs/list-fournisseur/list-fournisseur.component';
import { NewFournisseurComponent } from './home/fournisseurs/new-fournisseur/new-fournisseur.component';
import { ListUsersComponent } from './home/users/list-users/list-users.component';
import { EditUsersComponent } from './home/users/edit-users/edit-users.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClientsComponent } from './home/clients/clients.component';
import { EditsComponent } from './home/clients/edits/edits.component';

const routes: Routes = [
  {
    path: '', component: WelcomeComponent,
    //canActivate: [Authgard],
  },{
    path: 'welcome', component: WelcomeComponent
  },
  {path: 'auth', component: AuthentificationComponent, children:[
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {path: 'register', component: RegisterComponent},
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: ClientsComponent },
      { path: 'clients', component: ClientsComponent, children: [
        {path: '', component: EditsComponent},
        {path: 'list', component: ListComponent},
        {path: 'edits', component: EditsComponent}
      ] },
      { path: 'products', component: ProduitComponent, children: [
        {path: '', component: EditProduitComponent},
        {path: 'edits', component:EditProduitComponent },
        {path: 'list', component: ListProduitComponent}
      ]},
      { path: 'fournisseurs', component: FournisseursComponent, children: [
        {path: '', component: NewFournisseurComponent},
        {path: 'list', component: ListFournisseurComponent},
        {path: 'edits', component: NewFournisseurComponent}
      ] },
      { path: 'users', component: UsersComponent , children: [
        {path: '', component: ListUsersComponent},
        {path: 'list', component: ListUsersComponent}
      ]}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
