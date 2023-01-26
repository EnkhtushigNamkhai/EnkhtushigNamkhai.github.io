import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class NavLinkDirective {
    static ngAcceptInputType_cNavLink: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    /**
     * Sets .nav-link class to the host. [docs]
     * @type boolean
     * @default true
     */
    set cNavLink(value: boolean);
    get cNavLink(): boolean;
    private _cNavLink;
    /**
     * Toggle the active state for the component. [docs]
     * @type boolean
     */
    active?: boolean;
    /**
     * Set disabled attr for the host element. [docs]
     * @type boolean
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    get ariaCurrent(): string | null;
    get isDisabled(): boolean | null;
    get attrDisabled(): "" | null;
    get getTabindex(): string | null;
    get getCursorStyle(): string | null;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavLinkDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NavLinkDirective, "[cNavLink]", never, { "cNavLink": "cNavLink"; "active": "active"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
