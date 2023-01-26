import * as i0 from "@angular/core";
export declare class FormSelectDirective {
    /**
     * Size the component small or large.
     */
    sizing?: '' | 'sm' | 'lg' | string;
    /**
     * Set component validation state to valid.
     * @type {boolean | undefined}
     */
    valid?: boolean;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FormSelectDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormSelectDirective, "select[cSelect]", never, { "sizing": "sizing"; "valid": "valid"; }, {}, never, never, false, never>;
}
