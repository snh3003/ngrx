import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { InputformComponent } from './inputform/inputform.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';

const routes: Routes = [
{
    path: '',
    component: InputformComponent
},
  {
    path: 'info',
    component: PersonalinfoComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
