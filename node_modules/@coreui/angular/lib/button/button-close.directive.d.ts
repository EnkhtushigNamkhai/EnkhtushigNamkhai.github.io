import { BooleanInput } from '@angular/cdk/coercion';
import { ButtonDirective } from './button.directive';
import * as i0 from "@angular/core";
export declare class ButtonCloseDirective extends ButtonDirective {
    static ngAcceptInputType_white: BooleanInput;
    private _white;
    /**
     * Change the default color to white.
     * @type boolean
     */
    get white(): boolean;
    set white(value: boolean);
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonCloseDirective, "[cButtonClose]", never, { "white": "white"; }, {}, never, never, false, never>;
}
