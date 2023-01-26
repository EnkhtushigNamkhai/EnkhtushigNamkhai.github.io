import { ElementRef, Renderer2 } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class FormCheckInputDirective {
    private renderer;
    private hostElement;
    static ngAcceptInputType_indeterminate: BooleanInput;
    /**
     * Specifies the type of component.
     * @type {'checkbox' | 'radio'}
     * @default 'checkbox'
     */
    type: ('checkbox' | 'radio');
    /**
     * Set component indeterminate state.
     * @type boolean
     */
    set indeterminate(value: boolean);
    get indeterminate(): boolean;
    private _indeterminate;
    /**
     * Set component validation state to valid.
     * @type boolean
     */
    valid?: boolean;
    get hostClasses(): any;
    get checked(): boolean;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<FormCheckInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormCheckInputDirective, "input[cFormCheckInput]", never, { "type": "type"; "indeterminate": "indeterminate"; "valid": "valid"; }, {}, never, never, false, never>;
}
