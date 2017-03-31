import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})

export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement, 'background-color', '#dcdcdc'
    // );

    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement, 'cursor', 'not-allowed'
    // );

    this.backgroundColor = '#dcdcdc';
    this.cursorMouse = 'not-allowed';
  }

  @HostListener('mouseleave') onmouseleave() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement, 'background-color', '#fff'
    // );

    this.backgroundColor = '#fff';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  // @HostBinding('style.cursor') cursorMouse: string;

  @HostBinding('style.cursor') get setCursor() {
    return this.cursorMouse;
  }

  private cursorMouse: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer
  ) { }
}
