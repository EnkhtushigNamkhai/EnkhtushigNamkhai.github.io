import { AfterContentInit, QueryList } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { CardComponent } from '../../card';
import { TemplateIdDirective } from '../../shared';
import * as i0 from "@angular/core";
export declare class WidgetStatCComponent extends CardComponent implements AfterContentInit {
    constructor();
    static ngAcceptInputType_inverse: BooleanInput;
    /**
     * Icon for your component.
     * @type string
     */
    icon?: string;
    /**
     * Title of the widget to display
     * @type string
     */
    title?: string;
    /**
     * Value for your widget to display
     * @type string
     */
    value?: string | number;
    /**
     * Invert colors from their default dark shade.
     * @type boolean
     */
    get inverse(): boolean;
    set inverse(value: boolean);
    private _inverse;
    templates: any;
    contentTemplates: QueryList<TemplateIdDirective>;
    get hostExtendedClass(): {
        'high-emphasis-inverse': boolean;
    };
    get iconClasses(): {
        [x: string]: boolean;
        'mb-4': boolean;
        'text-end': boolean;
        'text-medium-emphasis': boolean;
        'text-medium-emphasis-inverse': boolean;
    };
    get titleClasses(): {
        [x: string]: boolean;
        'text-medium-emphasis': boolean;
        'text-medium-emphasis-inverse': boolean;
    };
    get valueClasses(): {
        [x: string]: boolean;
        'fs-4': boolean;
        'fw-semibold': boolean;
        'text-high-emphasis': boolean;
        'text-high-emphasis-inverse': boolean;
    };
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetStatCComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetStatCComponent, "c-widget-stat-c", ["cWidgetStatC"], { "icon": "icon"; "title": "title"; "value": "value"; "inverse": "inverse"; }, {}, ["contentTemplates"], ["*"], false, never>;
}
