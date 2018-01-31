import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutofocusModule } from "angular-autofocus-fix";
import { ChartsModule } from 'ng2-charts';
import { GithubService } from './services/github/gihubservice.service';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ChartComponent } from './components/github/chart/chart.component';
import { StackoverflowComponent } from './components/stackoverflow/stackoverflow.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { AboutComponent } from './components/github/about/about.component';
import { HowtoComponent } from './components/github/howto/howto.component';
import {MaterializeModule} from "angular2-materialize";
import { CommitsComponent } from './components/github/commits/commits.component';
import {Ng4LoadingSpinnerModule} from "ng4-loading-spinner";
import { PreloaderComponent } from './components/preloader/preloader.component';
import { ContributionschartComponent } from './components/github/contributionschart/contributionschart.component';
import { CountsComponent } from './components/github/counts/counts.component';
import {Customreuse} from "./strategies/customreuse";

const appRoutes = [
  {
    path: '',
    component: GithubComponent,
    data: {shouldDetach: true}
  },
  {
    path: 'stackoverflow',
    component: StackoverflowComponent,
    data: {shouldDetach: true}
  },
  {
    path: 'twitter',
    component: TwitterComponent,
    data: {shouldDetach: true}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {shouldDetach: true}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    SearchComponent,
    ChartComponent,
    StackoverflowComponent,
    TwitterComponent,
    AboutComponent,
    HowtoComponent,
    CommitsComponent,
    PreloaderComponent,
    ContributionschartComponent,
    CountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AutofocusModule,
    MaterializeModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GithubService, {provide: RouteReuseStrategy, useClass: Customreuse}],
  bootstrap: [AppComponent]
})
export class AppModule { }
