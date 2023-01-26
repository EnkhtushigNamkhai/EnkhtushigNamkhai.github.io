import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class FormFeedbackComponent {
    static ngAcceptInputType_tooltip: BooleanInput;
    /**
     * If your form layout allows it, you can display validation feedback in a styled tooltip.
     */
    private _tooltip;
    set tooltip(value: boolean);
    get tooltip(): boolean;
    /**
     * Set component validation state to valid.
     */
    valid?: boolean;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFeedbackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFeedbackComponent, "c-form-feedback", never, { "tooltip": "tooltip"; "valid": "valid"; }, {}, never, ["*"], false, never>;
}
