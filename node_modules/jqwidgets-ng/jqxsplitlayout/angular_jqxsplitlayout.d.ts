/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxSplitLayoutComponent implements OnChanges {
    attrDisabled: boolean;
    attrDataSource: any;
    attrReady: any;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxSplitLayout;
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
    dataSource(arg?: any): any;
    ready(arg?: any): any;
    height(arg?: string | number): string | number;
    width(arg?: string | number): string | number;
    refresh(): void;
    onResize: EventEmitter<any>;
    onStateChange: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxSplitLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxSplitLayoutComponent, "jqxSplitLayout", never, { "attrDisabled": "disabled"; "attrDataSource": "dataSource"; "attrReady": "ready"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onResize": "onResize"; "onStateChange": "onStateChange"; }, never, ["*"]>;
}
