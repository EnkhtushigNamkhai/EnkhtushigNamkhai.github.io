import { AfterContentInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { FormCheckLabelDirective } from './form-check-label.directive';
import * as i0 from "@angular/core";
export declare class FormCheckComponent implements AfterContentInit {
    static ngAcceptInputType_inline: BooleanInput;
    static ngAcceptInputType_switch: BooleanInput;
    private _inline;
    /**
     * Group checkboxes or radios on the same horizontal row.
     * @type boolean
     * @default false
     */
    set inline(value: boolean);
    get inline(): boolean;
    /**
     * Size the component large or extra large. Works only with `[switch]="true"` [docs]
     * @type {'lg' | 'xl' | ''}
     */
    sizing?: 'lg' | 'xl' | '';
    /**
   * Render a toggle switch on for checkbox.
   * @type boolean
   * @default false
   */
    set switch(value: boolean);
    get switch(): boolean;
    private _switch;
    get hostClasses(): any;
    formCheckLabel: FormCheckLabelDirective;
    private _formCheckClass;
    get formCheckClass(): boolean;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormCheckComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormCheckComponent, "c-form-check", ["cFormCheck"], { "inline": "inline"; "sizing": "sizing"; "switch": "switch"; }, {}, ["formCheckLabel"], ["*"], false, never>;
}
