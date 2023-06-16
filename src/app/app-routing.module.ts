import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Components/index/index.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./Components/index/telainicial.module').then( x => x.TelainicialModule),
    data: {preload:false}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
