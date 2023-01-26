import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { TabService } from './tab.service';
import * as i0 from "@angular/core";
export declare class TabContentRefDirective implements OnChanges, OnDestroy, OnInit {
    private changeDetectorRef;
    private tabService;
    constructor(changeDetectorRef: ChangeDetectorRef, tabService: TabService);
    static ngAcceptInputType_disabled: BooleanInput;
    private tabServiceSubscription;
    /**
     * Template Ref
     * @type TemplateRef
     */
    tabContentRef: any;
    /**
     * Set active state of tab content
     * @type boolean
     */
    set active(value: boolean);
    get active(): boolean;
    private _active;
    /**
     * Set disabled state of tab content
     * @type boolean
     */
    set disabled(value: boolean);
    get disabled(): boolean;
    private _disabled;
    /**
     * c-tab-pane index respectively
     * @type number
     */
    tabPaneIdx: number;
    get hostClasses(): {
        active: boolean;
        disabled: boolean;
    };
    get isDisabled(): boolean | null;
    get attrDisabled(): "" | null;
    get getTabindex(): string | null;
    ngOnChanges(changes: SimpleChanges): void;
    toggleOpen($event: any): void;
    setActiveTabPane(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    subscribeTabService(subscribe?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabContentRefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TabContentRefDirective, "[cTabContent]", never, { "tabContentRef": "cTabContent"; "active": "active"; "disabled": "disabled"; "tabPaneIdx": "tabPaneIdx"; }, {}, never, never, false, never>;
}
