/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxSplitterComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'orientation', 'panels', 'resizable', 'splitBarSize', 'showSplitBar', 'theme', 'width'];
        // jqxSplitterComponent events
        this.onCollapsed = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onResize = new EventEmitter();
        this.onResizeStart = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSplitter(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSplitter(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSplitter(this.properties[i])) {
                        this.host.jqxSplitter(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSplitter', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxSplitter('setOptions', options);
    }
    // jqxSplitterComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('disabled', arg);
        }
        else {
            return this.host.jqxSplitter('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('height', arg);
        }
        else {
            return this.host.jqxSplitter('height');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('orientation', arg);
        }
        else {
            return this.host.jqxSplitter('orientation');
        }
    }
    panels(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('panels', arg);
        }
        else {
            return this.host.jqxSplitter('panels');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('resizable', arg);
        }
        else {
            return this.host.jqxSplitter('resizable');
        }
    }
    splitBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('splitBarSize', arg);
        }
        else {
            return this.host.jqxSplitter('splitBarSize');
        }
    }
    showSplitBar(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('showSplitBar', arg);
        }
        else {
            return this.host.jqxSplitter('showSplitBar');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('theme', arg);
        }
        else {
            return this.host.jqxSplitter('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSplitter('width', arg);
        }
        else {
            return this.host.jqxSplitter('width');
        }
    }
    // jqxSplitterComponent functions
    collapse() {
        this.host.jqxSplitter('collapse');
    }
    destroy() {
        this.host.jqxSplitter('destroy');
    }
    disable() {
        this.host.jqxSplitter('disable');
    }
    enable() {
        this.host.jqxSplitter('enable');
    }
    expand() {
        this.host.jqxSplitter('expand');
    }
    render() {
        this.host.jqxSplitter('render');
    }
    refresh() {
        this.host.jqxSplitter('refresh');
    }
    __wireEvents__() {
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
        this.host.on('resize', (eventData) => { this.onResize.emit(eventData); });
        this.host.on('resizeStart', (eventData) => { this.onResizeStart.emit(eventData); });
    }
} //jqxSplitterComponent
jqxSplitterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSplitterComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxSplitterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxSplitterComponent, selector: "jqxSplitter", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrOrientation: ["orientation", "attrOrientation"], attrPanels: ["panels", "attrPanels"], attrResizable: ["resizable", "attrResizable"], attrSplitBarSize: ["splitBarSize", "attrSplitBarSize"], attrShowSplitBar: ["showSplitBar", "attrShowSplitBar"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onCollapsed: "onCollapsed", onExpanded: "onExpanded", onResize: "onResize", onResizeStart: "onResizeStart" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSplitterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxSplitter',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrOrientation: [{
                type: Input,
                args: ['orientation']
            }], attrPanels: [{
                type: Input,
                args: ['panels']
            }], attrResizable: [{
                type: Input,
                args: ['resizable']
            }], attrSplitBarSize: [{
                type: Input,
                args: ['splitBarSize']
            }], attrShowSplitBar: [{
                type: Input,
                args: ['showSplitBar']
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
            }], onCollapsed: [{
                type: Output
            }], onExpanded: [{
                type: Output
            }], onResize: [{
                type: Output
            }], onResizeStart: [{
                type: Output
            }] } });
