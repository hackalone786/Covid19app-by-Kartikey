import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rootPath = 'java-proj-covid19app';
const routes: Routes = [
  { path: `${rootPath}`, loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
  { path: '**', redirectTo: `${rootPath}` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
