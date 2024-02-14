import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/top-bar/app.module';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



bootstrapApplication(AppComponent, appConfig)
  //.catch(("err") => console.error(err));
