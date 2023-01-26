import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IBreadcrumbItem } from '../breadcrumb-item/breadcrumb-item';
import { Observable } from 'rxjs';
import { BreadcrumbRouterService } from './breadcrumb-router.service';
import * as i0 from "@angular/core";
export declare class BreadcrumbRouterComponent implements OnChanges, OnDestroy, OnInit {
    service: BreadcrumbRouterService;
    /**
     * Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior. [docs]
     * @type IBreadcrumbItem[]
     */
    items?: IBreadcrumbItem[];
    breadcrumbs: Observable<IBreadcrumbItem[]> | undefined;
    constructor(service: BreadcrumbRouterService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setup(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbRouterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbRouterComponent, "c-breadcrumb-router, [cBreadcrumbRouter]", never, { "items": "items"; }, {}, never, never, false, never>;
}
