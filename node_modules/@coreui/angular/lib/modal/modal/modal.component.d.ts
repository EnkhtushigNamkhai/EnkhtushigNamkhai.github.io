import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { BooleanInput } from '@angular/cdk/coercion';
import { ModalService } from '../modal.service';
import { BackdropService } from '../../backdrop/backdrop.service';
import * as i0 from "@angular/core";
export declare class ModalComponent implements OnInit, OnDestroy {
    private document;
    private renderer;
    private hostElement;
    private modalService;
    private backdropService;
    static ngAcceptInputType_scrollable: BooleanInput;
    static ngAcceptInputType_visible: BooleanInput;
    constructor(document: Document, renderer: Renderer2, hostElement: ElementRef, modalService: ModalService, backdropService: BackdropService);
    /**
     * Align the modal in the center or top of the screen.
     * @type {'top' | 'center'}
     * @default 'top'
     */
    alignment?: 'top' | 'center';
    /**
     * Apply a backdrop on body while modal is open.
     * @type boolean | 'static'
     * @default true
     */
    backdrop: boolean | 'static';
    /**
     * Set modal to cover the entire user viewport.
     * @type {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
     * @default undefined
     */
    fullscreen?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /**
     * Closes the modal when escape key is pressed.
     * @type boolean
     * @default true
     */
    keyboard: boolean;
    id?: string;
    /**
     * Size the component small, large, or extra large.
     */
    size?: 'sm' | 'lg' | 'xl';
    /**
     * Remove animation to create modal that simply appear rather than fade in to view.
     */
    transition: boolean;
    /**
     * Default role for modal. [docs]
     * @type string
     * @default 'dialog'
     */
    role: string;
    /**
     * Set aria-modal html attr for modal. [docs]
     * @type boolean
     * @default true
     */
    ariaModal: boolean;
    /**
     * Create a scrollable modal that allows scrolling the modal body.
     * @type boolean
     */
    set scrollable(value: boolean);
    get scrollable(): boolean;
    private _scrollable;
    /**
     * Toggle the visibility of modal component.
     * @type boolean
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    /**
     * Event triggered on modal dismiss.
     */
    visibleChange: EventEmitter<boolean>;
    modalContent: ElementRef;
    private activeBackdrop;
    private stateToggleSubscription;
    get hostClasses(): any;
    get ariaHidden(): boolean | null;
    get tabIndex(): string | null;
    get animateTrigger(): string;
    get show(): boolean;
    set show(value: boolean);
    private _show;
    private get scrollbarWidth();
    animateStart(event: AnimationEvent): void;
    animateDone(event: AnimationEvent): void;
    onKeyDownHandler(event: KeyboardEvent): void;
    private mouseDownTarget;
    onMouseDownHandler($event: MouseEvent): void;
    onClickHandler($event: MouseEvent): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private stateToggleSubscribe;
    private setBackdrop;
    private setBodyStyles;
    private setStaticBackdrop;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "c-modal", ["cModal"], { "alignment": "alignment"; "backdrop": "backdrop"; "fullscreen": "fullscreen"; "keyboard": "keyboard"; "id": "id"; "size": "size"; "transition": "transition"; "role": "role"; "ariaModal": "ariaModal"; "scrollable": "scrollable"; "visible": "visible"; }, { "visibleChange": "visibleChange"; }, never, ["*"], false, never>;
}
