import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective {

  static _observer = new IntersectionObserver(LazyLoadDirective.callback);

  static get observer() {
    return this._observer;
  }

  constructor(elr: ElementRef) {
    LazyLoadDirective._observer.observe(elr.nativeElement);
  }

  static callback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        if (lazyImage.dataset.loaded === false) {
          return;
        }

          // console.log('loading ' + lazyImage.dataset.src);
        lazyImage.dataset.loaded = false;
        const image = new Image();
        image.onload = () => {
            lazyImage.dataset.loaded = true;
            lazyImage.src = image.src;
          };
        image.src = lazyImage.dataset.src;
      }
    });
  }
}
