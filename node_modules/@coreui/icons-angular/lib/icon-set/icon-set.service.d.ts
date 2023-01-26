import * as i0 from "@angular/core";
export interface IIconSet {
    [iconName: string]: string[];
}
export declare class IconSetService {
    constructor();
    get iconNames(): {
        [key: string]: string;
    };
    private _iconNames;
    get icons(): IIconSet;
    set icons(iconSet: IIconSet);
    private _icons;
    getIcon(name: string): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<IconSetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IconSetService>;
}
