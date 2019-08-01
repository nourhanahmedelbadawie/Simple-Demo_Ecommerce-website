import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./AppComponent";
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { StorageServiceModule, WebStorageService} from 'angular-webstorage-service';



import { HttpClientModule } from '@angular/common/http';
import { ShareService } from './share.service';
import { SearchPipe } from './search.pipe';
import { LoggedinComponent } from './authentication/loggedin/loggedin.component';
import { SignedinComponent } from './authentication/signedin/signedin.component';
import { SignedupComponent } from './authentication/signedup/signedup.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { UploadService } from './uploads/shared/upload.service';
import { UploadFormComponent } from './uploads/upload-form/UploadFormComponent';
import { AngularFireStorage } from 'angularfire2/storage';
import { ServicecartService } from './servicecart.service';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    SearchPipe,
    UploadFormComponent,
    LoggedinComponent,
    SignedinComponent,
    SignedupComponent,
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
HttpClientModule,
FormsModule,
StorageServiceModule ,


  ],
  providers: [HomeComponent,
    AngularFireDatabase,
    UploadService,
    AngularFireStorage,
    ServicecartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
