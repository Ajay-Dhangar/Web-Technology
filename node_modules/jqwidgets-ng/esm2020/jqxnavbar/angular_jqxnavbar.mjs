/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxNavBarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['columns', 'disabled', 'height', 'minimized', 'minimizeButtonPosition', 'minimizedHeight', 'minimizedTitle', 'orientation', 'popupAnimationDelay', 'rtl', 'selection', 'selectedItem', 'theme', 'width'];
        // jqxNavBarComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavBar(this.properties[i])) {
                        this.host.jqxNavBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavBar', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxNavBar('setOptions', options);
    }
    // jqxNavBarComponent properties
    columns(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('columns', arg);
        }
        else {
            return this.host.jqxNavBar('columns');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('disabled', arg);
        }
        else {
            return this.host.jqxNavBar('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('height', arg);
        }
        else {
            return this.host.jqxNavBar('height');
        }
    }
    minimized(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimized', arg);
        }
        else {
            return this.host.jqxNavBar('minimized');
        }
    }
    minimizeButtonPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizeButtonPosition', arg);
        }
        else {
            return this.host.jqxNavBar('minimizeButtonPosition');
        }
    }
    minimizedHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedHeight', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedHeight');
        }
    }
    minimizedTitle(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('minimizedTitle', arg);
        }
        else {
            return this.host.jqxNavBar('minimizedTitle');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('orientation', arg);
        }
        else {
            return this.host.jqxNavBar('orientation');
        }
    }
    popupAnimationDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('popupAnimationDelay', arg);
        }
        else {
            return this.host.jqxNavBar('popupAnimationDelay');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('rtl', arg);
        }
        else {
            return this.host.jqxNavBar('rtl');
        }
    }
    selection(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selection', arg);
        }
        else {
            return this.host.jqxNavBar('selection');
        }
    }
    selectedItem(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('selectedItem', arg);
        }
        else {
            return this.host.jqxNavBar('selectedItem');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('theme', arg);
        }
        else {
            return this.host.jqxNavBar('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNavBar('width', arg);
        }
        else {
            return this.host.jqxNavBar('width');
        }
    }
    // jqxNavBarComponent functions
    close() {
        this.host.jqxNavBar('close');
    }
    destroy() {
        this.host.jqxNavBar('destroy');
    }
    getSelectedIndex() {
        return this.host.jqxNavBar('getSelectedIndex');
    }
    open() {
        this.host.jqxNavBar('open');
    }
    selectAt(index) {
        this.host.jqxNavBar('selectAt', index);
    }
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
} //jqxNavBarComponent
jqxNavBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavBarComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxNavBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxNavBarComponent, selector: "jqxNavBar", inputs: { attrColumns: ["columns", "attrColumns"], attrDisabled: ["disabled", "attrDisabled"], attrMinimized: ["minimized", "attrMinimized"], attrMinimizeButtonPosition: ["minimizeButtonPosition", "attrMinimizeButtonPosition"], attrMinimizedHeight: ["minimizedHeight", "attrMinimizedHeight"], attrMinimizedTitle: ["minimizedTitle", "attrMinimizedTitle"], attrOrientation: ["orientation", "attrOrientation"], attrPopupAnimationDelay: ["popupAnimationDelay", "attrPopupAnimationDelay"], attrRtl: ["rtl", "attrRtl"], attrSelection: ["selection", "attrSelection"], attrSelectedItem: ["selectedItem", "attrSelectedItem"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxNavBar',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrColumns: [{
                type: Input,
                args: ['columns']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrMinimized: [{
                type: Input,
                args: ['minimized']
            }], attrMinimizeButtonPosition: [{
                type: Input,
                args: ['minimizeButtonPosition']
            }], attrMinimizedHeight: [{
                type: Input,
                args: ['minimizedHeight']
            }], attrMinimizedTitle: [{
                type: Input,
                args: ['minimizedTitle']
            }], attrOrientation: [{
                type: Input,
                args: ['orientation']
            }], attrPopupAnimationDelay: [{
                type: Input,
                args: ['popupAnimationDelay']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSelection: [{
                type: Input,
                args: ['selection']
            }], attrSelectedItem: [{
                type: Input,
                args: ['selectedItem']
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
            }], onChange: [{
                type: Output
            }] } });
