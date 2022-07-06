/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'enableDefault', 'cursor', 'textPosition', 'textImageRelation', 'theme', 'template', 'width', 'value'];
        // jqxButtonComponent events
        this.onClick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxButton(this.properties[i])) {
                        this.host.jqxButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxButton', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxButton('setOptions', options);
    }
    // jqxButtonComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('disabled', arg);
        }
        else {
            return this.host.jqxButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('height', arg);
        }
        else {
            return this.host.jqxButton('height');
        }
    }
    imgSrc(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgSrc', arg);
        }
        else {
            return this.host.jqxButton('imgSrc');
        }
    }
    imgWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgWidth', arg);
        }
        else {
            return this.host.jqxButton('imgWidth');
        }
    }
    imgHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgHeight', arg);
        }
        else {
            return this.host.jqxButton('imgHeight');
        }
    }
    imgPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('imgPosition', arg);
        }
        else {
            return this.host.jqxButton('imgPosition');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxButton('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('rtl', arg);
        }
        else {
            return this.host.jqxButton('rtl');
        }
    }
    enableDefault(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('enableDefault', arg);
        }
        else {
            return this.host.jqxButton('enableDefault');
        }
    }
    cursor(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('cursor', arg);
        }
        else {
            return this.host.jqxButton('cursor');
        }
    }
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('textPosition', arg);
        }
        else {
            return this.host.jqxButton('textPosition');
        }
    }
    textImageRelation(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxButton('textImageRelation');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('theme', arg);
        }
        else {
            return this.host.jqxButton('theme');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('template', arg);
        }
        else {
            return this.host.jqxButton('template');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('width', arg);
        }
        else {
            return this.host.jqxButton('width');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxButton('value', arg);
        }
        else {
            return this.host.jqxButton('value');
        }
    }
    // jqxButtonComponent functions
    destroy() {
        this.host.jqxButton('destroy');
    }
    focus() {
        this.host.jqxButton('focus');
    }
    render() {
        this.host.jqxButton('render');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxButton('val', value);
        }
        else {
            return this.host.jqxButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
    }
} //jqxButtonComponent
jqxButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxButtonComponent, selector: "jqxButton", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrImgSrc: ["imgSrc", "attrImgSrc"], attrImgWidth: ["imgWidth", "attrImgWidth"], attrImgHeight: ["imgHeight", "attrImgHeight"], attrImgPosition: ["imgPosition", "attrImgPosition"], attrRoundedCorners: ["roundedCorners", "attrRoundedCorners"], attrRtl: ["rtl", "attrRtl"], attrEnableDefault: ["enableDefault", "attrEnableDefault"], attrCursor: ["cursor", "attrCursor"], attrTextPosition: ["textPosition", "attrTextPosition"], attrTextImageRelation: ["textImageRelation", "attrTextImageRelation"], attrTheme: ["theme", "attrTheme"], attrTemplate: ["template", "attrTemplate"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClick: "onClick" }, usesOnChanges: true, ngImport: i0, template: '<button><ng-content></ng-content></button>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxButton',
                    template: '<button><ng-content></ng-content></button>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrImgSrc: [{
                type: Input,
                args: ['imgSrc']
            }], attrImgWidth: [{
                type: Input,
                args: ['imgWidth']
            }], attrImgHeight: [{
                type: Input,
                args: ['imgHeight']
            }], attrImgPosition: [{
                type: Input,
                args: ['imgPosition']
            }], attrRoundedCorners: [{
                type: Input,
                args: ['roundedCorners']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrEnableDefault: [{
                type: Input,
                args: ['enableDefault']
            }], attrCursor: [{
                type: Input,
                args: ['cursor']
            }], attrTextPosition: [{
                type: Input,
                args: ['textPosition']
            }], attrTextImageRelation: [{
                type: Input,
                args: ['textImageRelation']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
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
            }], onClick: [{
                type: Output
            }] } });
