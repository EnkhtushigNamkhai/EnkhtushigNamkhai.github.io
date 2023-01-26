import { OnDestroy, OnInit } from '@angular/core';
import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import * as i0 from "@angular/core";
export declare class CarouselIndicatorsComponent implements OnInit, OnDestroy {
    private carouselService;
    private carouselState;
    items: (number | undefined)[];
    active: number;
    private carouselIndexSubscription?;
    constructor(carouselService: CarouselService, carouselState: CarouselState);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(index: number): void;
    private carouselStateSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselIndicatorsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselIndicatorsComponent, "c-carousel-indicators", never, {}, {}, never, never, false, never>;
}
