import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Breakpoints, Colors } from '../coreui.types';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class TableDirective implements OnInit {
    private renderer;
    private hostElement;
    static ngAcceptInputType_bordered: BooleanInput;
    static ngAcceptInputType_borderless: BooleanInput;
    static ngAcceptInputType_hover: BooleanInput;
    static ngAcceptInputType_small: BooleanInput;
    static ngAcceptInputType_striped: BooleanInput;
    static ngAcceptInputType_stripedColumns: BooleanInput;
    /**
     * Set the vertical alignment.
     * @type string
     * @values 'bottom' | 'middle' | 'top'
     */
    align?: 'bottom' | 'middle' | 'top';
    /**
     * Sets the border color of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    borderColor?: Colors;
    /**
     * Add borders on all sides of the table and cells.
     * @type boolean
     */
    set bordered(value: boolean);
    get bordered(): boolean;
    private _bordered;
    /**
     * Remove borders on all sides of the table and cells.
     * @type boolean
     */
    set borderless(value: boolean);
    get borderless(): boolean;
    private _borderless;
    /**
     * Put the `<caption>` on the top of the table.
     * @values 'top'
     */
    caption?: 'top';
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Enable a hover state on table rows within table body.
     * @type boolean
     */
    set hover(value: boolean);
    get hover(): boolean;
    private _hover;
    /**
     * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
     * @type: {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
     */
    responsive?: boolean | Omit<Breakpoints, 'xs'>;
    /**
     * Make table more compact by cutting all cell `padding` in half.
     * @type boolean
     */
    set small(value: boolean);
    get small(): boolean;
    private _small;
    /**
     * Add zebra-striping to any table row within the table body.
     * @type boolean
     */
    set striped(value: boolean);
    get striped(): boolean;
    private _striped;
    /**
     * Add zebra-striping to any table column.
     * @type boolean
     * @since 4.2.4
     */
    set stripedColumns(value: boolean);
    get stripedColumns(): boolean;
    private _stripedColumns;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    get hostClasses(): any;
    ngOnInit(): void;
    setResponsiveWrapper(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TableDirective, "[cTable]", never, { "align": "align"; "borderColor": "borderColor"; "bordered": "bordered"; "borderless": "borderless"; "caption": "caption"; "color": "color"; "hover": "hover"; "responsive": "responsive"; "small": "small"; "striped": "striped"; "stripedColumns": "stripedColumns"; }, {}, never, never, false, never>;
}
