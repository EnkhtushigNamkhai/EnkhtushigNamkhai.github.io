import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class FormFloatingDirective {
    static ngAcceptInputType_floating: BooleanInput;
    /**
     * Enable floating labels
     * @type boolean
     */
    get floating(): boolean;
    set floating(value: boolean);
    private _floating;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFloatingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormFloatingDirective, "[cFormFloating]", never, { "floating": "cFormFloating"; }, {}, never, never, false, never>;
}
