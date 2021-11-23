import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    PageNotFoundComponent,
    AppComponent,
    PaginationComponent,
    DataListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
