import { ElementRef, OnInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputType } from '../../coreui.types';
import * as i0 from "@angular/core";
export declare class FormControlDirective implements OnInit {
    private hostElement;
    static ngAcceptInputType_plaintext: BooleanInput;
    /**
     * Size the component small or large.
     * @type {'sm' | 'lg'}
     */
    sizing?: '' | 'sm' | 'lg' | string;
    /**
     * Set component validation state to valid.
     * @type boolean
     */
    valid?: boolean;
    /**
     * Specifies the type of input element.
     */
    type: Omit<InputType, 'checkbox' | 'radio'>;
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly` [docs]
     */
    set plaintext(value: boolean);
    get plaintext(): boolean;
    private _plaintext;
    constructor(hostElement: ElementRef);
    get hostClasses(): any;
    get hostTag(): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormControlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormControlDirective, "input[cFormControl], textarea[cFormControl]", never, { "sizing": "sizing"; "valid": "valid"; "type": "type"; "plaintext": "plaintext"; }, {}, never, never, false, never>;
}
