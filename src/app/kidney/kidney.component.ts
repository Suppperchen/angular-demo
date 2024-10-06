import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-kidney',
  templateUrl: './kidney.component.html',
  styleUrls: ['./kidney.component.css']
})
export class KidneyComponent {
  imageBase64 = '';
  typeList = ['image/png','image/tiff','image/gif','image/jpeg'];
  warningMessage = '';
  showKIImage = 'data:image/png;base64,';
  show = false;
  showSpinner = false;
  constructor(private http: HttpClient) {}
  onFileSelected(event :any){
    let file:File = event.target.files[0];
      if (file && this.typeList.includes(file.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageBase64 = reader.result as string;
          //console.log(this.imageBase64);
          this.warningMessage = '';
        };
      }else if(file && !this.typeList.includes(file.type)) {
        this.warningMessage = `the type "${file.type}" may not correct.`
        this.imageBase64 = '';
      }else {
        this.imageBase64 = '';
      }
      this.show = false;

  }
  sendImage():void{

    this.show = false;
      if(this.imageBase64!=''){
        this.showSpinner = true;
        let index = this.imageBase64.indexOf(',');
        const basestring = this.imageBase64.substring(index+1);
        var dataJson = {"image":basestring}
        const upload$ = this.http.post<any>("http://localhost:5000/post-ct", dataJson);
        upload$.subscribe(res =>{
          this.showKIImage = 'data:image/png;base64,'+res.KIImage;
          this.show = true;
          this.showSpinner = false;

        })
      }

  }

}
