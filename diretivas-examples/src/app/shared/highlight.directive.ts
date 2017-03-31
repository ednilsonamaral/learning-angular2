import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highlightColor;
    this.cursorMouse = 'not-allowed';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.cursor') cursorMouse: string;

  @Input() defaultColor: string = '#fff';
  // @Input () highlightColor: string = '#dcdcdc';
  @Input ('highlight') highlightColor: string = '#dcdcdc';

  constructor( ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
