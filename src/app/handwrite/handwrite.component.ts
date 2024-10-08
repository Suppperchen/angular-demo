import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import SignaturePad from 'signature_pad';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-handwrite',
  templateUrl: './handwrite.component.html',
  styleUrls: ['./handwrite.component.css']
})
export class HandwriteComponent implements OnInit{
  @ViewChild("canvas1", { static: true }) canvas!: ElementRef;
  sig!: SignaturePad;
  cheakEmpty = true;
  show = false;
  output = "";
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void{
    this.sig = new SignaturePad(this.canvas.nativeElement);
    this.sig.backgroundColor = 'rgb(0,0,0)'
    this.sig.penColor = 'rgb(255,255,255)'
    this.sig.maxWidth = 7;
    this.sig.minWidth = 7;
    this.sig.clear();
  }


  startDrawing() {
    if (!this.sig.isEmpty()){
      this.cheakEmpty = false;
    }
  }



  savePad() {
    if (this.sig.isEmpty()){
      this.cheakEmpty = true;
      this.output = "";
    }else {
      const base64Data = this.sig.toDataURL();

      let index = base64Data.indexOf(',');
      const basestring = base64Data.substring(index+1);
      var dataJson = {"image":basestring};

      const upload$ = this.http.post<any>("http://localhost:5000/handwrite", dataJson);
      this.show = true;

      upload$.subscribe(res =>{
          this.output = res.KIhandwrite;
          this.show = false;
        })
    }
  }
  clearPad() {
     this.sig.clear();
     this.cheakEmpty = true;
     this.output = "";
   }
}
