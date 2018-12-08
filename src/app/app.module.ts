import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { WatchadComponent } from './watchad/watchad.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SettingsComponent,
    AboutComponent,
    WatchadComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: WatchadComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'about', component: AboutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
