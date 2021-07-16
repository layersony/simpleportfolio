import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangetored]'
})
export class ChangetoredDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor='green'
   }

}
