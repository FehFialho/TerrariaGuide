import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './features/main-page/main-page.component';
import { ClassesPageComponent } from './features/main-page/classes-page/classes-page.component';
import { BossesPageComponent } from './features/main-page/bosses-page/bosses-page.component';

const routes: Routes = [
  {path: "", component:MainPageComponent, children: [
    {path: "class", component:ClassesPageComponent},
    {path: "boss", component:BossesPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
