import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { PostLisComponentComponent } from './post-lis-component/post-lis-component.component';
import { PostLisItemComponentComponent } from './post-lis-item-component/post-lis-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PostLisComponentComponent,
    PostLisItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
