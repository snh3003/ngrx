import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputformComponent } from './components/inputform/inputform.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './component/card/card.component';
import { CounterComponent } from './components/counter/counter.component';
import { PersonalinfoComponent } from './components/personalinfo/personalinfo.component';
import { AppRoutingModule } from './components/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InputformComponent,
    ListComponent,
    CardComponent,
    CounterComponent,
    PersonalinfoComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
