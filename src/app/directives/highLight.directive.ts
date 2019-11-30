import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[highLight]'
})

export class highLightDirective implements OnInit {
    constructor(private elementRef:ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = '#9aff9a'
    }
}