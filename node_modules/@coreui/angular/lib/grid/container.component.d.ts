import { BooleanInput } from '@angular/cdk/coercion';
import { IContainer } from './container.type';
import { Breakpoints } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class ContainerComponent implements IContainer {
    static ngAcceptInputType_fluid: BooleanInput;
    /**
     * Set container 100% wide until a breakpoint.
     */
    breakpoint: Exclude<Breakpoints, 'xs'>;
    /**
     * Set container 100% wide, spanning the entire width of the viewport.
     */
    set fluid(value: boolean);
    get fluid(): boolean;
    private _fluid;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerComponent, "c-container, [cContainer]", never, { "breakpoint": "breakpoint"; "fluid": "fluid"; }, {}, never, ["*"], false, never>;
}
