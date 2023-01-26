import { AfterContentInit, OnDestroy, OnInit, QueryList } from '@angular/core';
import { AccordionService } from '../accordion.service';
import { TemplateIdDirective } from '../../shared';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class AccordionItemComponent implements OnInit, OnDestroy, AfterContentInit {
    private accordionService;
    static ngAcceptInputType_visible: BooleanInput;
    /**
     * Toggle an accordion item programmatically
     * @type boolean
     * @default false
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    set open(value: boolean);
    get open(): boolean;
    get hostClasses(): any;
    contentId: string;
    itemContext: {
        $implicit: boolean;
    };
    templates: any;
    contentTemplates: QueryList<TemplateIdDirective>;
    constructor(accordionService: AccordionService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggleItem(): void;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "c-accordion-item", ["cAccordionItem"], { "visible": "visible"; "open": "open"; }, {}, ["contentTemplates"], ["*", "*"], false, never>;
}
