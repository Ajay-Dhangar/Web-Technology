/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxScrollViewComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'bounceEnabled', 'buttonsOffset', 'currentPage', 'disabled', 'height', 'moveThreshold', 'showButtons', 'slideShow', 'slideDuration', 'theme', 'width'];
        // jqxScrollViewComponent events
        this.onPageChanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScrollView(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScrollView(this.properties[i])) {
                        this.host.jqxScrollView(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScrollView', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxScrollView('setOptions', options);
    }
    // jqxScrollViewComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('animationDuration', arg);
        }
        else {
            return this.host.jqxScrollView('animationDuration');
        }
    }
    bounceEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('bounceEnabled', arg);
        }
        else {
            return this.host.jqxScrollView('bounceEnabled');
        }
    }
    buttonsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('buttonsOffset', arg);
        }
        else {
            return this.host.jqxScrollView('buttonsOffset');
        }
    }
    currentPage(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('currentPage', arg);
        }
        else {
            return this.host.jqxScrollView('currentPage');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('disabled', arg);
        }
        else {
            return this.host.jqxScrollView('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('height', arg);
        }
        else {
            return this.host.jqxScrollView('height');
        }
    }
    moveThreshold(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('moveThreshold', arg);
        }
        else {
            return this.host.jqxScrollView('moveThreshold');
        }
    }
    showButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('showButtons', arg);
        }
        else {
            return this.host.jqxScrollView('showButtons');
        }
    }
    slideShow(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideShow', arg);
        }
        else {
            return this.host.jqxScrollView('slideShow');
        }
    }
    slideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('slideDuration', arg);
        }
        else {
            return this.host.jqxScrollView('slideDuration');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('theme', arg);
        }
        else {
            return this.host.jqxScrollView('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxScrollView('width', arg);
        }
        else {
            return this.host.jqxScrollView('width');
        }
    }
    // jqxScrollViewComponent functions
    back() {
        this.host.jqxScrollView('back');
    }
    changePage(index) {
        this.host.jqxScrollView('changePage', index);
    }
    forward() {
        this.host.jqxScrollView('forward');
    }
    refresh() {
        this.host.jqxScrollView('refresh');
    }
    __wireEvents__() {
        this.host.on('pageChanged', (eventData) => { this.onPageChanged.emit(eventData); });
    }
} //jqxScrollViewComponent
jqxScrollViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxScrollViewComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxScrollViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxScrollViewComponent, selector: "jqxScrollView", inputs: { attrAnimationDuration: ["animationDuration", "attrAnimationDuration"], attrBounceEnabled: ["bounceEnabled", "attrBounceEnabled"], attrButtonsOffset: ["buttonsOffset", "attrButtonsOffset"], attrCurrentPage: ["currentPage", "attrCurrentPage"], attrDisabled: ["disabled", "attrDisabled"], attrMoveThreshold: ["moveThreshold", "attrMoveThreshold"], attrShowButtons: ["showButtons", "attrShowButtons"], attrSlideShow: ["slideShow", "attrSlideShow"], attrSlideDuration: ["slideDuration", "attrSlideDuration"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onPageChanged: "onPageChanged" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxScrollViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxScrollView',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationDuration: [{
                type: Input,
                args: ['animationDuration']
            }], attrBounceEnabled: [{
                type: Input,
                args: ['bounceEnabled']
            }], attrButtonsOffset: [{
                type: Input,
                args: ['buttonsOffset']
            }], attrCurrentPage: [{
                type: Input,
                args: ['currentPage']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrMoveThreshold: [{
                type: Input,
                args: ['moveThreshold']
            }], attrShowButtons: [{
                type: Input,
                args: ['showButtons']
            }], attrSlideShow: [{
                type: Input,
                args: ['slideShow']
            }], attrSlideDuration: [{
                type: Input,
                args: ['slideDuration']
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
            }], onPageChanged: [{
                type: Output
            }] } });
