import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireObject, AngularFireList} from 'angularfire2/database';
import { Upload } from './upload';
import * as firebase from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  public downloadURL
public fileName
  afStorage: any;






  constructor( 
    private db:AngularFireDatabase,
    )
   { }
  private basePath:string = '/uploads';
  uploads: AngularFireObject<Upload[]>;

  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
        this.saveFileData(upload)
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }

// =============================get files-====================================  
 pushFileToStorage(fileUpload: Upload,progress: {percentage: number}) {
  const storageRef = firebase.storage().ref();
  storageRef.child(`${this.basePath}/${fileUpload.file.name}`)
  .put(fileUpload.file)

this.saveFileData(fileUpload);
fileUpload.url = this.downloadURL;
fileUpload.name = this.fileName;


}



// getFileUploads(numberItems): AngularFireList<Upload> {
//   return this.db.list(this.basePath, ref =>
//     ref.limitToLast(numberItems));
// }
 //display image to user
  
 private basePath = '/uploads'
 getFileUploads(numberItems): AngularFireList<Upload> {
   return this.db.list(this.basePath, ref =>
     ref.limitToLast(numberItems));
 }





deleteUpload (Upload : Upload ) {
  this.deleteFileDatabase(Upload.$key)
    .then(() => {
      this.deleteFileStorage(Upload.name);
    })
    .catch(error => console.log(error));
}

private deleteFileDatabase(key: string) {
  return this.db.list(`${this.basePath}/`).remove(key);
}

private deleteFileStorage(name: string) {
  const storageRef = firebase.storage().ref();
  storageRef.child(`${this.basePath}/${name}`).delete();
}
}
