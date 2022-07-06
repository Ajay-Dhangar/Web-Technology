/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxDockingLayoutComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['contextMenu', 'height', 'layout', 'minGroupHeight', 'minGroupWidth', 'resizable', 'rtl', 'theme', 'width'];
        // jqxDockingLayoutComponent events
        this.onDock = new EventEmitter();
        this.onFloatGroupClosed = new EventEmitter();
        this.onFloat = new EventEmitter();
        this.onPin = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onUnpin = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDockingLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDockingLayout(this.properties[i])) {
                        this.host.jqxDockingLayout(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDockingLayout', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDockingLayout('setOptions', options);
    }
    // jqxDockingLayoutComponent properties
    contextMenu(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('contextMenu', arg);
        }
        else {
            return this.host.jqxDockingLayout('contextMenu');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('height', arg);
        }
        else {
            return this.host.jqxDockingLayout('height');
        }
    }
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('layout', arg);
        }
        else {
            return this.host.jqxDockingLayout('layout');
        }
    }
    minGroupHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupHeight', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupHeight');
        }
    }
    minGroupWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('minGroupWidth', arg);
        }
        else {
            return this.host.jqxDockingLayout('minGroupWidth');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('resizable', arg);
        }
        else {
            return this.host.jqxDockingLayout('resizable');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('rtl', arg);
        }
        else {
            return this.host.jqxDockingLayout('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('theme', arg);
        }
        else {
            return this.host.jqxDockingLayout('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDockingLayout('width', arg);
        }
        else {
            return this.host.jqxDockingLayout('width');
        }
    }
    // jqxDockingLayoutComponent functions
    addFloatGroup(width, height, position, panelType, title, content, initContent) {
        this.host.jqxDockingLayout('addFloatGroup', width, height, position, panelType, title, content, initContent);
    }
    destroy() {
        this.host.jqxDockingLayout('destroy');
    }
    loadLayout(layout) {
        this.host.jqxDockingLayout('loadLayout', layout);
    }
    refresh() {
        this.host.jqxDockingLayout('refresh');
    }
    render() {
        this.host.jqxDockingLayout('render');
    }
    saveLayout() {
        return this.host.jqxDockingLayout('saveLayout');
    }
    __wireEvents__() {
        this.host.on('dock', (eventData) => { this.onDock.emit(eventData); });
        this.host.on('floatGroupClosed', (eventData) => { this.onFloatGroupClosed.emit(eventData); });
        this.host.on('float', (eventData) => { this.onFloat.emit(eventData); });
        this.host.on('pin', (eventData) => { this.onPin.emit(eventData); });
        this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
        this.host.on('unpin', (eventData) => { this.onUnpin.emit(eventData); });
    }
} //jqxDockingLayoutComponent
jqxDockingLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingLayoutComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxDockingLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxDockingLayoutComponent, selector: "jqxDockingLayout", inputs: { attrContextMenu: ["contextMenu", "attrContextMenu"], attrLayout: ["layout", "attrLayout"], attrMinGroupHeight: ["minGroupHeight", "attrMinGroupHeight"], attrMinGroupWidth: ["minGroupWidth", "attrMinGroupWidth"], attrResizable: ["resizable", "attrResizable"], attrRtl: ["rtl", "attrRtl"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onDock: "onDock", onFloatGroupClosed: "onFloatGroupClosed", onFloat: "onFloat", onPin: "onPin", onResize: "onResize", onUnpin: "onUnpin" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxDockingLayout',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrContextMenu: [{
                type: Input,
                args: ['contextMenu']
            }], attrLayout: [{
                type: Input,
                args: ['layout']
            }], attrMinGroupHeight: [{
                type: Input,
                args: ['minGroupHeight']
            }], attrMinGroupWidth: [{
                type: Input,
                args: ['minGroupWidth']
            }], attrResizable: [{
                type: Input,
                args: ['resizable']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
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
            }], onDock: [{
                type: Output
            }], onFloatGroupClosed: [{
                type: Output
            }], onFloat: [{
                type: Output
            }], onPin: [{
                type: Output
            }], onResize: [{
                type: Output
            }], onUnpin: [{
                type: Output
            }] } });
