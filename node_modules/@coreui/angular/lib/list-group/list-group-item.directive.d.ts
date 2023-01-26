import { ElementRef } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Colors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class ListGroupItemDirective {
    private hostElement;
    static ngAcceptInputType_disabled: BooleanInput;
    /**
     * Toggle the active state for the component.
     * @type boolean
     */
    active?: boolean;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Set disabled attr for the host element. [docs]
     * @type boolean
     */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    get isDisabled(): boolean | null;
    get attrDisabled(): "" | null;
    get getTabindex(): string | null;
    get ariaCurrent(): boolean;
    get hostClasses(): any;
    constructor(hostElement: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ListGroupItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListGroupItemDirective, "[cListGroupItem], c-list-group-item", ["cListGroupItem"], { "active": "active"; "color": "color"; "disabled": "disabled"; }, {}, never, never, false, never>;
}
