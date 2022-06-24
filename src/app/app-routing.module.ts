import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: HomePageComponent
  },
  {
    path: 'game/play',
    component: PlayPageComponent,
  },
  {
    path: '**',
    redirectTo: 'game',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
