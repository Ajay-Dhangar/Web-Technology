/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxPivotGridComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['source', 'localization', 'scrollBarsEnabled', 'selectionEnabled', 'multipleSelectionEnabled', 'treeStyleRows', 'autoResize', 'itemsRenderer', 'cellsRenderer'];
        // jqxPivotGridComponent events
        this.onPivotitemexpanding = new EventEmitter();
        this.onPivotitemexpanded = new EventEmitter();
        this.onPivotitemcollapsing = new EventEmitter();
        this.onPivotitemcollapsed = new EventEmitter();
        this.onSortchanging = new EventEmitter();
        this.onSortchanged = new EventEmitter();
        this.onSortremoving = new EventEmitter();
        this.onSortremoved = new EventEmitter();
        this.onPivotitemselectionchanged = new EventEmitter();
        this.onPivotcellmousedown = new EventEmitter();
        this.onPivotcellmouseup = new EventEmitter();
        this.onPivotcellclick = new EventEmitter();
        this.onPivotcelldblclick = new EventEmitter();
        this.onPivotitemmousedown = new EventEmitter();
        this.onPivotitemmouseup = new EventEmitter();
        this.onPivotitemclick = new EventEmitter();
        this.onPivotitemdblclick = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
    }
    ngOnInit() {
        if (this.autoCreate) {
            this.createComponent();
        }
    }
    ;
    ngOnChanges(changes) {
        if (this.host) {
            for (let i = 0; i < this.properties.length; i++) {
                let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                let areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPivotGrid(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPivotGrid(this.properties[i])) {
                        this.host.jqxPivotGrid(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    }
    arraysEqual(attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (let i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    }
    manageAttributes() {
        let options = {};
        for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    }
    moveClasses(parentEl, childEl) {
        let classes = parentEl.classList;
        if (classes.length > 0) {
            childEl.classList.add(...classes);
        }
        parentEl.className = '';
    }
    moveStyles(parentEl, childEl) {
        let style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    }
    createComponent(options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPivotGrid', options);
        this.__updateRect__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
        this.refresh();
    }
    setOptions(options) {
        this.host.jqxPivotGrid('setOptions', options);
    }
    // jqxPivotGridComponent properties
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('source', arg);
        }
        else {
            return this.host.jqxPivotGrid('source');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('localization', arg);
        }
        else {
            return this.host.jqxPivotGrid('localization');
        }
    }
    scrollBarsEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('scrollBarsEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('scrollBarsEnabled');
        }
    }
    selectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('selectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('selectionEnabled');
        }
    }
    multipleSelectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('multipleSelectionEnabled', arg);
        }
        else {
            return this.host.jqxPivotGrid('multipleSelectionEnabled');
        }
    }
    treeStyleRows(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('treeStyleRows', arg);
        }
        else {
            return this.host.jqxPivotGrid('treeStyleRows');
        }
    }
    autoResize(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('autoResize', arg);
        }
        else {
            return this.host.jqxPivotGrid('autoResize');
        }
    }
    itemsRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('itemsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('itemsRenderer');
        }
    }
    cellsRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPivotGrid('cellsRenderer', arg);
        }
        else {
            return this.host.jqxPivotGrid('cellsRenderer');
        }
    }
    // jqxPivotGridComponent functions
    getInstance() {
        return this.host.jqxPivotGrid('getInstance');
    }
    refresh() {
        this.host.jqxPivotGrid('refresh');
    }
    getPivotRows() {
        return this.host.jqxPivotGrid('getPivotRows');
    }
    getPivotColumns() {
        return this.host.jqxPivotGrid('getPivotColumns');
    }
    getPivotCells() {
        return this.host.jqxPivotGrid('getPivotCells');
    }
    __wireEvents__() {
        this.host.on('pivotitemexpanding', (eventData) => { this.onPivotitemexpanding.emit(eventData); });
        this.host.on('pivotitemexpanded', (eventData) => { this.onPivotitemexpanded.emit(eventData); });
        this.host.on('pivotitemcollapsing', (eventData) => { this.onPivotitemcollapsing.emit(eventData); });
        this.host.on('pivotitemcollapsed', (eventData) => { this.onPivotitemcollapsed.emit(eventData); });
        this.host.on('sortchanging', (eventData) => { this.onSortchanging.emit(eventData); });
        this.host.on('sortchanged', (eventData) => { this.onSortchanged.emit(eventData); });
        this.host.on('sortremoving', (eventData) => { this.onSortremoving.emit(eventData); });
        this.host.on('sortremoved', (eventData) => { this.onSortremoved.emit(eventData); });
        this.host.on('pivotitemselectionchanged', (eventData) => { this.onPivotitemselectionchanged.emit(eventData); });
        this.host.on('pivotcellmousedown', (eventData) => { this.onPivotcellmousedown.emit(eventData); });
        this.host.on('pivotcellmouseup', (eventData) => { this.onPivotcellmouseup.emit(eventData); });
        this.host.on('pivotcellclick', (eventData) => { this.onPivotcellclick.emit(eventData); });
        this.host.on('pivotcelldblclick', (eventData) => { this.onPivotcelldblclick.emit(eventData); });
        this.host.on('pivotitemmousedown', (eventData) => { this.onPivotitemmousedown.emit(eventData); });
        this.host.on('pivotitemmouseup', (eventData) => { this.onPivotitemmouseup.emit(eventData); });
        this.host.on('pivotitemclick', (eventData) => { this.onPivotitemclick.emit(eventData); });
        this.host.on('pivotitemdblclick', (eventData) => { this.onPivotitemdblclick.emit(eventData); });
    }
} //jqxPivotGridComponent
jqxPivotGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPivotGridComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxPivotGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxPivotGridComponent, selector: "jqxPivotGrid", inputs: { attrSource: ["source", "attrSource"], attrLocalization: ["localization", "attrLocalization"], attrScrollBarsEnabled: ["scrollBarsEnabled", "attrScrollBarsEnabled"], attrSelectionEnabled: ["selectionEnabled", "attrSelectionEnabled"], attrMultipleSelectionEnabled: ["multipleSelectionEnabled", "attrMultipleSelectionEnabled"], attrTreeStyleRows: ["treeStyleRows", "attrTreeStyleRows"], attrAutoResize: ["autoResize", "attrAutoResize"], attrItemsRenderer: ["itemsRenderer", "attrItemsRenderer"], attrCellsRenderer: ["cellsRenderer", "attrCellsRenderer"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onPivotitemexpanding: "onPivotitemexpanding", onPivotitemexpanded: "onPivotitemexpanded", onPivotitemcollapsing: "onPivotitemcollapsing", onPivotitemcollapsed: "onPivotitemcollapsed", onSortchanging: "onSortchanging", onSortchanged: "onSortchanged", onSortremoving: "onSortremoving", onSortremoved: "onSortremoved", onPivotitemselectionchanged: "onPivotitemselectionchanged", onPivotcellmousedown: "onPivotcellmousedown", onPivotcellmouseup: "onPivotcellmouseup", onPivotcellclick: "onPivotcellclick", onPivotcelldblclick: "onPivotcelldblclick", onPivotitemmousedown: "onPivotitemmousedown", onPivotitemmouseup: "onPivotitemmouseup", onPivotitemclick: "onPivotitemclick", onPivotitemdblclick: "onPivotitemdblclick" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPivotGridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxPivotGrid',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrSource: [{
                type: Input,
                args: ['source']
            }], attrLocalization: [{
                type: Input,
                args: ['localization']
            }], attrScrollBarsEnabled: [{
                type: Input,
                args: ['scrollBarsEnabled']
            }], attrSelectionEnabled: [{
                type: Input,
                args: ['selectionEnabled']
            }], attrMultipleSelectionEnabled: [{
                type: Input,
                args: ['multipleSelectionEnabled']
            }], attrTreeStyleRows: [{
                type: Input,
                args: ['treeStyleRows']
            }], attrAutoResize: [{
                type: Input,
                args: ['autoResize']
            }], attrItemsRenderer: [{
                type: Input,
                args: ['itemsRenderer']
            }], attrCellsRenderer: [{
                type: Input,
                args: ['cellsRenderer']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onPivotitemexpanding: [{
                type: Output
            }], onPivotitemexpanded: [{
                type: Output
            }], onPivotitemcollapsing: [{
                type: Output
            }], onPivotitemcollapsed: [{
                type: Output
            }], onSortchanging: [{
                type: Output
            }], onSortchanged: [{
                type: Output
            }], onSortremoving: [{
                type: Output
            }], onSortremoved: [{
                type: Output
            }], onPivotitemselectionchanged: [{
                type: Output
            }], onPivotcellmousedown: [{
                type: Output
            }], onPivotcellmouseup: [{
                type: Output
            }], onPivotcellclick: [{
                type: Output
            }], onPivotcelldblclick: [{
                type: Output
            }], onPivotitemmousedown: [{
                type: Output
            }], onPivotitemmouseup: [{
                type: Output
            }], onPivotitemclick: [{
                type: Output
            }], onPivotitemdblclick: [{
                type: Output
            }] } });
