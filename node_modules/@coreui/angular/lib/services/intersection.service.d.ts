import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
interface IIntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}
export declare class IntersectionService implements OnDestroy {
    constructor();
    private intersecting;
    intersecting$: import("rxjs").Observable<boolean>;
    private intersectionObserver;
    private hostElement;
    private defaultObserverOptions;
    createIntersectionObserver(hostElement: {
        nativeElement: Element;
    }, observerOptions?: IIntersectionObserverInit): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntersectionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IntersectionService>;
}
export {};
