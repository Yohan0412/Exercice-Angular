import { Routes } from '@angular/router';
import { Exercice1Component } from './exercice1/exercice1.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { Component } from '@angular/core';
import { KitchenComponent } from './kitchen/kitchen.component';

export const routes: Routes = [
    
    {path:'',component: MyHomeComponent },
    {path:'Exercice 1', component: Exercice1Component },
    {path:'Exercice 2', component: MonComposantComponent  },
    {path: 'Formu', component: MyFormComponent},
    {path: 'Exercice 7', component: KitchenComponent}
];
