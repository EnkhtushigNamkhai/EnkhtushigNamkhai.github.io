import { Sizes } from '../coreui.types';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class ListGroupDirective {
    static ngAcceptInputType_flush: BooleanInput;
    /**
     * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
     * @type boolean
     */
    set flush(value: boolean);
    get flush(): boolean;
    private _flush;
    /**
     * Specify horizontal layout type.
     */
    horizontal?: boolean | Sizes;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ListGroupDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListGroupDirective, "[cListGroup]", never, { "flush": "flush"; "horizontal": "horizontal"; }, {}, never, never, false, never>;
}
