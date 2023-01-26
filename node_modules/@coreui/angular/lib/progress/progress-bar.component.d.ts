import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Colors } from '../coreui.types';
import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class ProgressBarComponent implements OnInit, OnChanges {
    private renderer;
    private hostElement;
    static ngAcceptInputType_animated: BooleanInput;
    static ngAcceptInputType_value: NumberInput;
    /**
     * Use to animate the stripes right to left via CSS3 animations.
     * @type boolean
     */
    set animated(value: boolean);
    get animated(): boolean;
    private _animated;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color?: Colors;
    precision: number;
    /**
     * The percent to progress the ProgressBar.
     */
    set value(value: number);
    get value(): number;
    private _value;
    /**
     * Set the progress bar variant to optional striped.
     * @values 'striped'
     */
    variant?: 'striped';
    /**
     * Set default html role attribute.
     * @type string
     */
    role: string;
    private state;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    get min(): number;
    set min(value: number);
    get max(): number;
    set max(value: number);
    get hostClasses(): any;
    ngOnInit(): void;
    setPercent(): void;
    setValues(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarComponent, "c-progress-bar", never, { "animated": "animated"; "color": "color"; "precision": "precision"; "value": "value"; "variant": "variant"; "role": "role"; "min": "min"; "max": "max"; }, {}, never, ["*"], false, never>;
}
