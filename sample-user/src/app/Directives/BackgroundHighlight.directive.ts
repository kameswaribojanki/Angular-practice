import { Directive, ElementRef, Renderer2, HostListener} from "@angular/core";
@Directive({   
    selector:'[appBackgroundHighlight]'
})
export class BackgroundHighlightDirective{
    constructor(private element:ElementRef, private renderer:Renderer2){

    }
    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor='red';
        // console.log(this.element.nativeElement.textContent);
        this.renderer.setStyle(this.element.nativeElement, 'background-color','green');
    }
}