/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxDockPanelComponent implements OnChanges {
    attrDisabled: boolean;
    attrLastchildfill: boolean;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxDockPanel;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    disabled(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    lastchildfill(arg?: boolean): boolean;
    width(arg?: string | number): string | number;
    refresh(): void;
    onLayout: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxDockPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxDockPanelComponent, "jqxDockPanel", never, { "attrDisabled": "disabled"; "attrLastchildfill": "lastchildfill"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onLayout": "onLayout"; }, never, ["*"]>;
}
