/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxSplitLayoutComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'dataSource', 'ready', 'height', 'width'];
        // jqxSplitLayoutComponent events
        this.onResize = new EventEmitter();
        this.onStateChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSplitLayout(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSplitLayout(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSplitLayout(this.properties[i])) {
                        this.host.jqxSplitLayout(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitLayout', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxSplitLayout('setOptions', options);
    }
    // jqxSplitLayoutComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitLayout('disabled', arg);
        }
        else {
            return this.host.jqxSplitLayout('disabled');
        }
    }
    dataSource(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitLayout('dataSource', arg);
        }
        else {
            return this.host.jqxSplitLayout('dataSource');
        }
    }
    ready(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitLayout('ready', arg);
        }
        else {
            return this.host.jqxSplitLayout('ready');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitLayout('height', arg);
        }
        else {
            return this.host.jqxSplitLayout('height');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitLayout('width', arg);
        }
        else {
            return this.host.jqxSplitLayout('width');
        }
    }
    // jqxSplitLayoutComponent functions
    refresh() {
        this.host.jqxSplitLayout('refresh');
    }
    __wireEvents__() {
        this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
        this.host.on('stateChange', (eventData) => { this.onStateChange.emit(eventData); });
    }
} //jqxSplitLayoutComponent
jqxSplitLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSplitLayoutComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxSplitLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxSplitLayoutComponent, selector: "jqxSplitLayout", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrDataSource: ["dataSource", "attrDataSource"], attrReady: ["ready", "attrReady"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onResize: "onResize", onStateChange: "onStateChange" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSplitLayoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxSplitLayout',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDataSource: [{
                type: Input,
                args: ['dataSource']
            }], attrReady: [{
                type: Input,
                args: ['ready']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onResize: [{
                type: Output
            }], onStateChange: [{
                type: Output
            }] } });
