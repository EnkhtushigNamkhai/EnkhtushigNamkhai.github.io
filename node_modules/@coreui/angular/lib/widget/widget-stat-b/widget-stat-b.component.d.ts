import { BooleanInput } from '@angular/cdk/coercion';
import { Colors } from '../../coreui.types';
import { CardComponent } from '../../card';
import * as i0 from "@angular/core";
export declare class WidgetStatBComponent extends CardComponent {
    constructor();
    static ngAcceptInputType_inverse: BooleanInput;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Sets the text-color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    textColor?: Colors | 'white' | 'muted';
    /**
     * Title of the widget to display
     * @type string
     */
    title?: string;
    /**
     * Helper text for your widget.
     * @type string
     */
    text?: string;
    /**
     * Value for your widget to display
     * @type string
     */
    value?: string;
    /**
     * Invert colors from their default dark shade.
     * @type boolean
     */
    get inverse(): boolean;
    set inverse(value: boolean);
    private _inverse;
    get hostClasses(): {
        [x: string]: boolean;
        card: boolean;
        'text-high-emphasis-inverse': boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetStatBComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetStatBComponent, "c-widget-stat-b", ["cWidgetStatB"], { "color": "color"; "textColor": "textColor"; "title": "title"; "text": "text"; "value": "value"; "inverse": "inverse"; }, {}, never, ["*"], false, never>;
}
