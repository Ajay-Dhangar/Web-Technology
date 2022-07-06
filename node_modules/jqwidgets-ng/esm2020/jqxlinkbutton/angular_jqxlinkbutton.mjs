/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxLinkButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'rtl', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLinkButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLinkButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLinkButton(this.properties[i])) {
                        this.host.jqxLinkButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinkButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxLinkButton('setOptions', options);
    }
    // jqxLinkButtonComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('disabled', arg);
        }
        else {
            return this.host.jqxLinkButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('height', arg);
        }
        else {
            return this.host.jqxLinkButton('height');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('rtl', arg);
        }
        else {
            return this.host.jqxLinkButton('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('theme', arg);
        }
        else {
            return this.host.jqxLinkButton('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxLinkButton('width', arg);
        }
        else {
            return this.host.jqxLinkButton('width');
        }
    }
    __wireEvents__() {
    }
} //jqxLinkButtonComponent
jqxLinkButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinkButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxLinkButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxLinkButtonComponent, selector: "jqxLinkButton", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrRtl: ["rtl", "attrRtl"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinkButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxLinkButton',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
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
            }] } });
