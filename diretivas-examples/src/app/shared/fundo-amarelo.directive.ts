import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  // constructor(private _elementRef: ElementRef) {
  //   console.log(this._elementRef);

  //   _elementRef.nativeElement.style.backgroundColor = "yellow";
  // }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) {
      console.log(this._renderer);

      this._renderer.setElementStyle(
        this._elementRef.nativeElement, 'background-color', 'yellow'
      );
    }
}
