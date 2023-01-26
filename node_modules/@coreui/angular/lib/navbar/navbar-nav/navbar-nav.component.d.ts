import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class NavbarNavComponent {
    static ngAcceptInputType_scroll: BooleanInput;
    /**
     * Enable vertical scrolling of a collapsed navbar toggleable contents.
     * @type boolean
     */
    set scroll(value: boolean);
    get scroll(): boolean;
    private _scroll;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavbarNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavbarNavComponent, "c-navbar-nav", never, { "scroll": "scroll"; }, {}, never, ["*"], false, never>;
}
