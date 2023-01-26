import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class FormDirective {
    static ngAcceptInputType_validated: BooleanInput;
    private _validated;
    /**
     * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
     * @type boolean
     * @default false
     */
    set validated(value: boolean);
    get validated(): boolean;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FormDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormDirective, "form[cForm]", never, { "validated": "validated"; }, {}, never, never, false, never>;
}
