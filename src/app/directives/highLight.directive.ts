import { Directive, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[highLight]'
})

export class highLightDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = '#9aff9a';
    }

    @HostListener('dblclick') mouseEnter() {
        this.elementRef.nativeElement.style.backgroundColor = 'orange';
    }
    @HostListener('click') mouseLeave() {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
}