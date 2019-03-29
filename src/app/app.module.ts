import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MembersPageComponent } from './members-page/members-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { SoftwareComponent } from './software/software.component';
import { ResearchComponent } from './research/research.component';
import { PatentComponent } from './patent/patent.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MembersPageComponent,
    ContactPageComponent,
    EngineeringComponent,
    SoftwareComponent,
    ResearchComponent,
    PatentComponent,
    ConsultingComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '',component: MainPageComponent},
      {path: 'members',component: MembersPageComponent},
      {path: 'contact',component: ContactPageComponent},
      {path: 'engineering',component: EngineeringComponent},
      {path: 'software',component: SoftwareComponent},
      {path: 'research',component: ResearchComponent},
      {path: 'patent',component: PatentComponent},
      {path: 'consulting',component: ConsultingComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
