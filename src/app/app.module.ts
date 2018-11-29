import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMinComponent } from './about-min/about-min.component';
import { AboutMaxComponent } from './about-max/about-max.component';
import { IconSectionComponent } from './icon-section/icon-section.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { WhoMinComponent } from './who-min/who-min.component';
import { FooterComponent } from './footer/footer.component';
import { IfUAreComponent } from './if-u-are/if-u-are.component';
import { AreaComponent } from './area/area.component';
import { AreaMoreComponent } from './area-more/area-more.component';
import { UniMinComponent } from './uni-min/uni-min.component';
import { ContentComponent } from './content/content.component';
import { ContentGalleryComponent } from './content-gallery/content-gallery.component';
import { BuyComponent } from './buy/buy.component';
import { BuyGameComponent } from './buy-game/buy-game.component';
import { VideoComponent } from './video/video.component';
import { FotoGalleryComponent } from './foto-gallery/foto-gallery.component';
import { NgwWowModule } from 'ngx-wow';
import { FbComponent } from './fb/fb.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutMinComponent,
    AboutMaxComponent,
    IconSectionComponent,
    ToolListComponent,
    WhoMinComponent,
    FooterComponent,
    IfUAreComponent,
    AreaComponent,
    AreaMoreComponent,
    UniMinComponent,
    ContentComponent,
    ContentGalleryComponent,
    BuyComponent,
    BuyGameComponent,
    VideoComponent,
    FotoGalleryComponent,
    FbComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
