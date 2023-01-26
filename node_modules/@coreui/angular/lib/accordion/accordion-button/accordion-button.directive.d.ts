import * as i0 from "@angular/core";
export declare class AccordionButtonDirective {
    /**
     * Toggles an accordion button collapsed state. Use in accordionHeaderTemplate. [docs]
     * @type boolean
     */
    collapsed: boolean;
    /**
    * Default type for cAccordionButton. [docs]
     * @type string
     * @default 'button'
     */
    type: string;
    get hostClasses(): any;
    get ariaExpanded(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AccordionButtonDirective, "[cAccordionButton]", never, { "collapsed": "collapsed"; "type": "type"; }, {}, never, never, false, never>;
}
