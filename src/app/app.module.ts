import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainBannerComponent } from './Components/main-banner/main-banner.component';
import { LatestArticleComponent } from './Components/latest-article/latest-article.component';
import {GraphQLModule} from "./graphql.module";
import { TopArticlesComponent } from './Components/toparticles/top-articles.component';
import { NewsletterSubscriptionComponent } from './Components/newsletter-subscribtion/newsletter-subscription.component';
import { TopArticleComponent } from './Components/top-article/top-article.component';
import { ArticlePageComponent } from './Components/article-page/article-page.component';
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './Components/home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import { ArticleExtractPipe } from './Pipes/ArticleExtract/article-extract.pipe';
import { TopArticlesExtractPipe } from './Pipes/TopArticlesExtract/top-articles-extract.pipe';
import {FormsModule} from "@angular/forms";
import { AllArticlesComponent } from './Components/all-articles/all-articles.component';
import { AboutChefComponent } from './about-chef/about-chef.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    LatestArticleComponent,
    TopArticlesComponent,
    NewsletterSubscriptionComponent,
    TopArticleComponent,
    ArticlePageComponent,
    HomePageComponent,
    ArticleExtractPipe,
    TopArticlesExtractPipe,
    AllArticlesComponent,
    AboutChefComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    GraphQLModule,
    FormsModule
  ],
  providers: [ArticleExtractPipe, TopArticlesExtractPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
