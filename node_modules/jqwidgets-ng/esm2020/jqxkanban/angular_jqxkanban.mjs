/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxKanbanComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['columnRenderer', 'columns', 'connectWith', 'headerHeight', 'headerWidth', 'height', 'itemRenderer', 'ready', 'rtl', 'source', 'resources', 'template', 'templateContent', 'theme', 'width'];
        // jqxKanbanComponent events
        this.onColumnAttrClicked = new EventEmitter();
        this.onColumnCollapsed = new EventEmitter();
        this.onColumnExpanded = new EventEmitter();
        this.onItemAttrClicked = new EventEmitter();
        this.onItemMoved = new EventEmitter();
        this.elementRef = containerElement;
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxKanban(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxKanban(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxKanban(this.properties[i])) {
                        this.host.jqxKanban(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKanban', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxKanban('setOptions', options);
    }
    // jqxKanbanComponent properties
    columnRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columnRenderer', arg);
        }
        else {
            return this.host.jqxKanban('columnRenderer');
        }
    }
    columns(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('columns', arg);
        }
        else {
            return this.host.jqxKanban('columns');
        }
    }
    connectWith(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('connectWith', arg);
        }
        else {
            return this.host.jqxKanban('connectWith');
        }
    }
    headerHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerHeight', arg);
        }
        else {
            return this.host.jqxKanban('headerHeight');
        }
    }
    headerWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('headerWidth', arg);
        }
        else {
            return this.host.jqxKanban('headerWidth');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('height', arg);
        }
        else {
            return this.host.jqxKanban('height');
        }
    }
    itemRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('itemRenderer', arg);
        }
        else {
            return this.host.jqxKanban('itemRenderer');
        }
    }
    ready(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('ready', arg);
        }
        else {
            return this.host.jqxKanban('ready');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('rtl', arg);
        }
        else {
            return this.host.jqxKanban('rtl');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('source', arg);
        }
        else {
            return this.host.jqxKanban('source');
        }
    }
    resources(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('resources', arg);
        }
        else {
            return this.host.jqxKanban('resources');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('template', arg);
        }
        else {
            return this.host.jqxKanban('template');
        }
    }
    templateContent(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('templateContent', arg);
        }
        else {
            return this.host.jqxKanban('templateContent');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('theme', arg);
        }
        else {
            return this.host.jqxKanban('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxKanban('width', arg);
        }
        else {
            return this.host.jqxKanban('width');
        }
    }
    // jqxKanbanComponent functions
    addItem(newItem) {
        this.host.jqxKanban('addItem', newItem);
    }
    destroy() {
        this.host.jqxKanban('destroy');
    }
    getColumn(dataField) {
        return this.host.jqxKanban('getColumn', dataField);
    }
    getColumnItems(dataField) {
        return this.host.jqxKanban('getColumnItems', dataField);
    }
    getItems() {
        return this.host.jqxKanban('getItems');
    }
    removeItem(itemId) {
        this.host.jqxKanban('removeItem', itemId);
    }
    updateItem(itemId, newContent) {
        this.host.jqxKanban('updateItem', itemId, newContent);
    }
    __wireEvents__() {
        this.host.on('columnAttrClicked', (eventData) => { this.onColumnAttrClicked.emit(eventData); });
        this.host.on('columnCollapsed', (eventData) => { this.onColumnCollapsed.emit(eventData); });
        this.host.on('columnExpanded', (eventData) => { this.onColumnExpanded.emit(eventData); });
        this.host.on('itemAttrClicked', (eventData) => { this.onItemAttrClicked.emit(eventData); });
        this.host.on('itemMoved', (eventData) => { this.onItemMoved.emit(eventData); });
    }
} //jqxKanbanComponent
jqxKanbanComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKanbanComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxKanbanComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxKanbanComponent, selector: "jqxKanban", inputs: { attrColumnRenderer: ["columnRenderer", "attrColumnRenderer"], attrColumns: ["columns", "attrColumns"], attrConnectWith: ["connectWith", "attrConnectWith"], attrHeaderHeight: ["headerHeight", "attrHeaderHeight"], attrHeaderWidth: ["headerWidth", "attrHeaderWidth"], attrItemRenderer: ["itemRenderer", "attrItemRenderer"], attrReady: ["ready", "attrReady"], attrRtl: ["rtl", "attrRtl"], attrSource: ["source", "attrSource"], attrResources: ["resources", "attrResources"], attrTemplate: ["template", "attrTemplate"], attrTemplateContent: ["templateContent", "attrTemplateContent"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onColumnAttrClicked: "onColumnAttrClicked", onColumnCollapsed: "onColumnCollapsed", onColumnExpanded: "onColumnExpanded", onItemAttrClicked: "onItemAttrClicked", onItemMoved: "onItemMoved" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKanbanComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxKanban',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrColumnRenderer: [{
                type: Input,
                args: ['columnRenderer']
            }], attrColumns: [{
                type: Input,
                args: ['columns']
            }], attrConnectWith: [{
                type: Input,
                args: ['connectWith']
            }], attrHeaderHeight: [{
                type: Input,
                args: ['headerHeight']
            }], attrHeaderWidth: [{
                type: Input,
                args: ['headerWidth']
            }], attrItemRenderer: [{
                type: Input,
                args: ['itemRenderer']
            }], attrReady: [{
                type: Input,
                args: ['ready']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrResources: [{
                type: Input,
                args: ['resources']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
            }], attrTemplateContent: [{
                type: Input,
                args: ['templateContent']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onColumnAttrClicked: [{
                type: Output
            }], onColumnCollapsed: [{
                type: Output
            }], onColumnExpanded: [{
                type: Output
            }], onItemAttrClicked: [{
                type: Output
            }], onItemMoved: [{
                type: Output
            }] } });
