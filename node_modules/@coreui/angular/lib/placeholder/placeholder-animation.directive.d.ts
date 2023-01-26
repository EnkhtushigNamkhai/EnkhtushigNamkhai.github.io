import { AfterContentInit } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';
import * as i0 from "@angular/core";
export declare class PlaceholderAnimationDirective implements AfterContentInit {
    constructor();
    /**
     * Animation type for placeholder
     * @type 'glow' | 'wave'
     * @default undefined
     */
    animation?: 'glow' | 'wave';
    get hostClasses(): any;
    placeholder: PlaceholderDirective;
    private animate;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaceholderAnimationDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PlaceholderAnimationDirective, "[cPlaceholderAnimation]", never, { "animation": "cPlaceholderAnimation"; }, {}, ["placeholder"], never, false, never>;
}
