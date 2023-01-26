import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class TableActiveDirective {
    static ngAcceptInputType_active: BooleanInput;
    /**
     * Highlight a table row or cell
     * @type boolean
     */
    set active(value: boolean);
    get active(): boolean;
    private _active;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TableActiveDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TableActiveDirective, "[cTableActive]", never, { "active": "cTableActive"; }, {}, never, never, false, never>;
}
