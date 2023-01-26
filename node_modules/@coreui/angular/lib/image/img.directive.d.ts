import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class ImgDirective {
    static ngAcceptInputType_fluid: BooleanInput;
    static ngAcceptInputType_rounded: BooleanInput;
    static ngAcceptInputType_thumbnail: BooleanInput;
    /**
     * Set the horizontal aligment.
     * @type {'' | 'start' | 'end' | 'center'}
     */
    align: '' | 'start' | 'end' | 'center';
    /**
     * Make image responsive.
     * @type boolean
     */
    set fluid(value: boolean);
    get fluid(): boolean;
    private _fluid;
    /**
     * Make image rounded.
     * @type boolean
     */
    set rounded(value: boolean);
    get rounded(): boolean;
    private _rounded;
    /**
     * Give an image a rounded 1px border appearance.
     * @type boolean
     */
    set thumbnail(value: boolean);
    get thumbnail(): boolean;
    private _thumbnail;
    /**
     * Color for image placeholder.
     */
    placeholderColor: string;
    get getStyles(): any;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ImgDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImgDirective, "[cImg]", never, { "align": "align"; "fluid": "fluid"; "rounded": "rounded"; "thumbnail": "thumbnail"; "placeholderColor": "placeholderColor"; }, {}, never, never, false, never>;
}
