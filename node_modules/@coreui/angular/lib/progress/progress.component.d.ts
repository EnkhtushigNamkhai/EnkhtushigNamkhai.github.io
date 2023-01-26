import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class ProgressComponent {
    static ngAcceptInputType_height: NumberInput;
    static ngAcceptInputType_thin: BooleanInput;
    static ngAcceptInputType_white: BooleanInput;
    /**
     * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
     * @type number
     */
    set height(value: number);
    get height(): number;
    private _height;
    /**
     * Displays thin progress.
     * @type boolean
     */
    set thin(value: boolean);
    get thin(): boolean;
    private _thin;
    /**
     * Change the default color to white.
     * @type boolean
     */
    get white(): boolean;
    set white(value: boolean);
    private _white;
    get hostClasses(): any;
    get hostStyle(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressComponent, "c-progress", never, { "height": "height"; "thin": "thin"; "white": "white"; }, {}, never, ["*"], false, never>;
}
