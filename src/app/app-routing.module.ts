import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { MouseComponent } from './mouse/mouse.component';
import { RabbitComponent } from './rabbit/rabbit.component';

const routes: Routes = [
  { path: "cat", component: CatComponent },
  { path: "dog", component: DogComponent },
  { path: "mouse", component: MouseComponent },
  { path: "rabbit", component: RabbitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
