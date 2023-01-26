import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { OffcanvasService } from '../offcanvas.service';
import { BackdropService } from '../../backdrop/backdrop.service';
import * as i0 from "@angular/core";
export declare class OffcanvasComponent implements OnChanges, OnInit, OnDestroy {
    private document;
    private platformId;
    private renderer;
    private hostElement;
    private offcanvasService;
    private backdropService;
    static ngAcceptInputType_scroll: BooleanInput;
    constructor(document: any, platformId: any, renderer: Renderer2, hostElement: ElementRef, offcanvasService: OffcanvasService, backdropService: BackdropService);
    /**
     * Apply a backdrop on body while offcanvas is open.
     * @type boolean
     * @default true
     */
    backdrop: boolean;
    /**
     * Closes the offcanvas when escape key is pressed [docs]
     * @type boolean
     * @default true
     */
    keyboard: boolean;
    /**
     * Components placement, there’s no default placement.
     * @type {'start' | 'end' | 'top' | 'bottom'}
     * @default 'start'
     */
    placement: string | 'start' | 'end' | 'top' | 'bottom';
    /**
     * Allow body scrolling while offcanvas is visible.
     * @type boolean
     */
    set scroll(value: boolean);
    get scroll(): boolean;
    private _scroll;
    id: string;
    /**
     * Default role for offcanvas. [docs]
     * @type string
     * @default 'dialog'
     */
    role: string;
    /**
     * Set aria-modal html attr for offcanvas. [docs]
     * @type boolean
     * @default true
     */
    ariaModal: boolean;
    /**
     * Toggle the visibility of offcanvas component.
     * @type boolean
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    /**
     * Event triggered on visible change.
     */
    visibleChange: EventEmitter<boolean>;
    private activeBackdrop;
    private stateToggleSubscription;
    private backdropClickSubscription;
    get hostClasses(): any;
    get ariaHidden(): boolean | null;
    get tabIndex(): string | null;
    get animateType(): boolean;
    onKeyDownHandler(event: KeyboardEvent): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private stateToggleSubscribe;
    private backdropClickSubscribe;
    private setBackdrop;
    setFocus(): void;
    setScroll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OffcanvasComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OffcanvasComponent, "c-offcanvas", ["cOffcanvas"], { "backdrop": "backdrop"; "keyboard": "keyboard"; "placement": "placement"; "scroll": "scroll"; "id": "id"; "role": "role"; "ariaModal": "ariaModal"; "visible": "visible"; }, { "visibleChange": "visibleChange"; }, never, ["*"], false, never>;
}
