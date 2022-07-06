/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxQRcodeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['backgroundColor', 'displayLabel', 'embedImage', 'errorLevel', 'imageHeight', 'imageWidth', 'labelColor', 'labelFont', 'labelFontSize', 'labelMarginBottom', 'labelMarginTop', 'labelPosition', 'lineColor', 'squareWidth', 'renderAs', 'value'];
        // jqxQRcodeComponent events
        this.onInvalid = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxQRcode(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxQRcode(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxQRcode(this.properties[i])) {
                        this.host.jqxQRcode(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxQRcode', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxQRcode('setOptions', options);
    }
    // jqxQRcodeComponent properties
    backgroundColor(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('backgroundColor', arg);
        }
        else {
            return this.host.jqxQRcode('backgroundColor');
        }
    }
    displayLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('displayLabel', arg);
        }
        else {
            return this.host.jqxQRcode('displayLabel');
        }
    }
    embedImage(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('embedImage', arg);
        }
        else {
            return this.host.jqxQRcode('embedImage');
        }
    }
    errorLevel(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('errorLevel', arg);
        }
        else {
            return this.host.jqxQRcode('errorLevel');
        }
    }
    imageHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('imageHeight', arg);
        }
        else {
            return this.host.jqxQRcode('imageHeight');
        }
    }
    imageWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('imageWidth', arg);
        }
        else {
            return this.host.jqxQRcode('imageWidth');
        }
    }
    labelColor(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('labelColor', arg);
        }
        else {
            return this.host.jqxQRcode('labelColor');
        }
    }
    labelFont(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('labelFont', arg);
        }
        else {
            return this.host.jqxQRcode('labelFont');
        }
    }
    labelFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('labelFontSize', arg);
        }
        else {
            return this.host.jqxQRcode('labelFontSize');
        }
    }
    labelMarginBottom(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('labelMarginBottom', arg);
        }
        else {
            return this.host.jqxQRcode('labelMarginBottom');
        }
    }
    labelMarginTop(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('labelMarginTop', arg);
        }
        else {
            return this.host.jqxQRcode('labelMarginTop');
        }
    }
    labelPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('labelPosition', arg);
        }
        else {
            return this.host.jqxQRcode('labelPosition');
        }
    }
    lineColor(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('lineColor', arg);
        }
        else {
            return this.host.jqxQRcode('lineColor');
        }
    }
    squareWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('squareWidth', arg);
        }
        else {
            return this.host.jqxQRcode('squareWidth');
        }
    }
    renderAs(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('renderAs', arg);
        }
        else {
            return this.host.jqxQRcode('renderAs');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxQRcode('value', arg);
        }
        else {
            return this.host.jqxQRcode('value');
        }
    }
    // jqxQRcodeComponent functions
    export(format, fileName) {
        return this.host.jqxQRcode('export', format, fileName);
    }
    getDataURL(format) {
        return this.host.jqxQRcode('getDataURL', format);
    }
    getDataURLAsync(format) {
        return this.host.jqxQRcode('getDataURLAsync', format);
    }
    isValid() {
        return this.host.jqxQRcode('isValid');
    }
    __wireEvents__() {
        this.host.on('invalid', (eventData) => { this.onInvalid.emit(eventData); });
    }
} //jqxQRcodeComponent
jqxQRcodeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxQRcodeComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxQRcodeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxQRcodeComponent, selector: "jqxQRcode", inputs: { attrBackgroundColor: ["backgroundColor", "attrBackgroundColor"], attrDisplayLabel: ["displayLabel", "attrDisplayLabel"], attrEmbedImage: ["embedImage", "attrEmbedImage"], attrErrorLevel: ["errorLevel", "attrErrorLevel"], attrImageHeight: ["imageHeight", "attrImageHeight"], attrImageWidth: ["imageWidth", "attrImageWidth"], attrLabelColor: ["labelColor", "attrLabelColor"], attrLabelFont: ["labelFont", "attrLabelFont"], attrLabelFontSize: ["labelFontSize", "attrLabelFontSize"], attrLabelMarginBottom: ["labelMarginBottom", "attrLabelMarginBottom"], attrLabelMarginTop: ["labelMarginTop", "attrLabelMarginTop"], attrLabelPosition: ["labelPosition", "attrLabelPosition"], attrLineColor: ["lineColor", "attrLineColor"], attrSquareWidth: ["squareWidth", "attrSquareWidth"], attrRenderAs: ["renderAs", "attrRenderAs"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onInvalid: "onInvalid" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxQRcodeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxQRcode',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrBackgroundColor: [{
                type: Input,
                args: ['backgroundColor']
            }], attrDisplayLabel: [{
                type: Input,
                args: ['displayLabel']
            }], attrEmbedImage: [{
                type: Input,
                args: ['embedImage']
            }], attrErrorLevel: [{
                type: Input,
                args: ['errorLevel']
            }], attrImageHeight: [{
                type: Input,
                args: ['imageHeight']
            }], attrImageWidth: [{
                type: Input,
                args: ['imageWidth']
            }], attrLabelColor: [{
                type: Input,
                args: ['labelColor']
            }], attrLabelFont: [{
                type: Input,
                args: ['labelFont']
            }], attrLabelFontSize: [{
                type: Input,
                args: ['labelFontSize']
            }], attrLabelMarginBottom: [{
                type: Input,
                args: ['labelMarginBottom']
            }], attrLabelMarginTop: [{
                type: Input,
                args: ['labelMarginTop']
            }], attrLabelPosition: [{
                type: Input,
                args: ['labelPosition']
            }], attrLineColor: [{
                type: Input,
                args: ['lineColor']
            }], attrSquareWidth: [{
                type: Input,
                args: ['squareWidth']
            }], attrRenderAs: [{
                type: Input,
                args: ['renderAs']
            }], attrValue: [{
                type: Input,
                args: ['value']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onInvalid: [{
                type: Output
            }] } });
