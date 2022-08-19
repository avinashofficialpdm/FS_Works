import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el:ElementRef) { 
    if(localStorage.getItem("token")){
      // this.el.nativeElement.style.display='none'
      this.el.nativeElement.style.color="red"
    }
  }

}
