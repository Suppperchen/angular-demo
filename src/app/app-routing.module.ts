import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EyeComponent} from "./eye/eye.component";
import {KidneyComponent} from "./kidney/kidney.component";
import {HandwriteComponent} from "./handwrite/handwrite.component";
const routes: Routes = [
  { path: 'retinal-vessel', component: EyeComponent},
  { path: 'pseudoCT', component: KidneyComponent},
  { path: 'handwrite', component: HandwriteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
