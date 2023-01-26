import { AfterContentChecked, AfterContentInit } from '@angular/core';
import { CarouselState } from '../carousel-state';
import * as i0 from "@angular/core";
export declare class CarouselInnerComponent implements AfterContentInit, AfterContentChecked {
    private carouselState;
    carouselInnerClass: boolean;
    private contentItems;
    private prevContentItems;
    activeIndex?: number;
    animate?: boolean;
    slide: {
        left: boolean;
    };
    transition: string;
    constructor(carouselState: CarouselState);
    ngAfterContentInit(): void;
    ngAfterContentChecked(): void;
    setItems(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselInnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselInnerComponent, "c-carousel-inner", never, {}, {}, ["contentItems"], ["*"], false, never>;
}
