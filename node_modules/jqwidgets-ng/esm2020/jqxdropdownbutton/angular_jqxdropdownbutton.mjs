/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxDropDownButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowSize', 'autoOpen', 'closeDelay', 'disabled', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownWidth', 'enableBrowserBoundsDetection', 'height', 'initContent', 'openDelay', 'popupZIndex', 'rtl', 'template', 'theme', 'width'];
        // jqxDropDownButtonComponent events
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDropDownButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDropDownButton(this.properties[i])) {
                        this.host.jqxDropDownButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDropDownButton('setOptions', options);
    }
    // jqxDropDownButtonComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('animationType', arg);
        }
        else {
            return this.host.jqxDropDownButton('animationType');
        }
    }
    arrowSize(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('arrowSize', arg);
        }
        else {
            return this.host.jqxDropDownButton('arrowSize');
        }
    }
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('autoOpen', arg);
        }
        else {
            return this.host.jqxDropDownButton('autoOpen');
        }
    }
    closeDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('closeDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('closeDelay');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('disabled', arg);
        }
        else {
            return this.host.jqxDropDownButton('disabled');
        }
    }
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownHorizontalAlignment');
        }
    }
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownVerticalAlignment');
        }
    }
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('dropDownWidth', arg);
        }
        else {
            return this.host.jqxDropDownButton('dropDownWidth');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDropDownButton('enableBrowserBoundsDetection');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('height', arg);
        }
        else {
            return this.host.jqxDropDownButton('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('initContent', arg);
        }
        else {
            return this.host.jqxDropDownButton('initContent');
        }
    }
    openDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('openDelay', arg);
        }
        else {
            return this.host.jqxDropDownButton('openDelay');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('popupZIndex', arg);
        }
        else {
            return this.host.jqxDropDownButton('popupZIndex');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('rtl', arg);
        }
        else {
            return this.host.jqxDropDownButton('rtl');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('template', arg);
        }
        else {
            return this.host.jqxDropDownButton('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('theme', arg);
        }
        else {
            return this.host.jqxDropDownButton('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDropDownButton('width', arg);
        }
        else {
            return this.host.jqxDropDownButton('width');
        }
    }
    // jqxDropDownButtonComponent functions
    close() {
        this.host.jqxDropDownButton('close');
    }
    destroy() {
        this.host.jqxDropDownButton('destroy');
    }
    focus() {
        this.host.jqxDropDownButton('focus');
    }
    getContent() {
        return this.host.jqxDropDownButton('getContent');
    }
    isOpened() {
        return this.host.jqxDropDownButton('isOpened');
    }
    open() {
        this.host.jqxDropDownButton('open');
    }
    setContent(content) {
        this.host.jqxDropDownButton('setContent', content);
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
} //jqxDropDownButtonComponent
jqxDropDownButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxDropDownButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxDropDownButtonComponent, selector: "jqxDropDownButton", inputs: { attrAnimationType: ["animationType", "attrAnimationType"], attrArrowSize: ["arrowSize", "attrArrowSize"], attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrCloseDelay: ["closeDelay", "attrCloseDelay"], attrDisabled: ["disabled", "attrDisabled"], attrDropDownHorizontalAlignment: ["dropDownHorizontalAlignment", "attrDropDownHorizontalAlignment"], attrDropDownVerticalAlignment: ["dropDownVerticalAlignment", "attrDropDownVerticalAlignment"], attrDropDownWidth: ["dropDownWidth", "attrDropDownWidth"], attrEnableBrowserBoundsDetection: ["enableBrowserBoundsDetection", "attrEnableBrowserBoundsDetection"], attrInitContent: ["initContent", "attrInitContent"], attrOpenDelay: ["openDelay", "attrOpenDelay"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrRtl: ["rtl", "attrRtl"], attrTemplate: ["template", "attrTemplate"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClose: "onClose", onOpen: "onOpen" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxDropDownButton',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrArrowSize: [{
                type: Input,
                args: ['arrowSize']
            }], attrAutoOpen: [{
                type: Input,
                args: ['autoOpen']
            }], attrCloseDelay: [{
                type: Input,
                args: ['closeDelay']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDropDownHorizontalAlignment: [{
                type: Input,
                args: ['dropDownHorizontalAlignment']
            }], attrDropDownVerticalAlignment: [{
                type: Input,
                args: ['dropDownVerticalAlignment']
            }], attrDropDownWidth: [{
                type: Input,
                args: ['dropDownWidth']
            }], attrEnableBrowserBoundsDetection: [{
                type: Input,
                args: ['enableBrowserBoundsDetection']
            }], attrInitContent: [{
                type: Input,
                args: ['initContent']
            }], attrOpenDelay: [{
                type: Input,
                args: ['openDelay']
            }], attrPopupZIndex: [{
                type: Input,
                args: ['popupZIndex']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
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
            }], onClose: [{
                type: Output
            }], onOpen: [{
                type: Output
            }] } });
