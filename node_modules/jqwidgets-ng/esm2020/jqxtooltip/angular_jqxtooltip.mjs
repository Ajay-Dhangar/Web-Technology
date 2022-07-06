/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxTooltipComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['absolutePositionX', 'absolutePositionY', 'autoHide', 'autoHideDelay', 'animationShowDelay', 'animationHideDelay', 'content', 'closeOnClick', 'disabled', 'enableBrowserBoundsDetection', 'height', 'left', 'name', 'opacity', 'position', 'rtl', 'showDelay', 'showArrow', 'top', 'trigger', 'theme', 'width'];
        // jqxTooltipComponent events
        this.onClose = new EventEmitter();
        this.onClosing = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onOpening = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTooltip(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTooltip(this.properties[i])) {
                        this.host.jqxTooltip(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTooltip', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTooltip('setOptions', options);
    }
    // jqxTooltipComponent properties
    absolutePositionX(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionX', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionX');
        }
    }
    absolutePositionY(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('absolutePositionY', arg);
        }
        else {
            return this.host.jqxTooltip('absolutePositionY');
        }
    }
    autoHide(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHide', arg);
        }
        else {
            return this.host.jqxTooltip('autoHide');
        }
    }
    autoHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('autoHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('autoHideDelay');
        }
    }
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationShowDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationShowDelay');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('animationHideDelay', arg);
        }
        else {
            return this.host.jqxTooltip('animationHideDelay');
        }
    }
    content(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('content', arg);
        }
        else {
            return this.host.jqxTooltip('content');
        }
    }
    closeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('closeOnClick', arg);
        }
        else {
            return this.host.jqxTooltip('closeOnClick');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('disabled', arg);
        }
        else {
            return this.host.jqxTooltip('disabled');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxTooltip('enableBrowserBoundsDetection');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('height', arg);
        }
        else {
            return this.host.jqxTooltip('height');
        }
    }
    left(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('left', arg);
        }
        else {
            return this.host.jqxTooltip('left');
        }
    }
    name(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('name', arg);
        }
        else {
            return this.host.jqxTooltip('name');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('opacity', arg);
        }
        else {
            return this.host.jqxTooltip('opacity');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('position', arg);
        }
        else {
            return this.host.jqxTooltip('position');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('rtl', arg);
        }
        else {
            return this.host.jqxTooltip('rtl');
        }
    }
    showDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showDelay', arg);
        }
        else {
            return this.host.jqxTooltip('showDelay');
        }
    }
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('showArrow', arg);
        }
        else {
            return this.host.jqxTooltip('showArrow');
        }
    }
    top(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('top', arg);
        }
        else {
            return this.host.jqxTooltip('top');
        }
    }
    trigger(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('trigger', arg);
        }
        else {
            return this.host.jqxTooltip('trigger');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('theme', arg);
        }
        else {
            return this.host.jqxTooltip('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTooltip('width', arg);
        }
        else {
            return this.host.jqxTooltip('width');
        }
    }
    // jqxTooltipComponent functions
    close(index) {
        this.host.jqxTooltip('close', index);
    }
    destroy() {
        this.host.jqxTooltip('destroy');
    }
    open(left, top) {
        this.host.jqxTooltip('open', left, top);
    }
    refresh() {
        this.host.jqxTooltip('refresh');
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('closing', (eventData) => { this.onClosing.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('opening', (eventData) => { this.onOpening.emit(eventData); });
    }
} //jqxTooltipComponent
jqxTooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTooltipComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTooltipComponent, selector: "jqxTooltip", inputs: { attrAbsolutePositionX: ["absolutePositionX", "attrAbsolutePositionX"], attrAbsolutePositionY: ["absolutePositionY", "attrAbsolutePositionY"], attrAutoHide: ["autoHide", "attrAutoHide"], attrAutoHideDelay: ["autoHideDelay", "attrAutoHideDelay"], attrAnimationShowDelay: ["animationShowDelay", "attrAnimationShowDelay"], attrAnimationHideDelay: ["animationHideDelay", "attrAnimationHideDelay"], attrContent: ["content", "attrContent"], attrCloseOnClick: ["closeOnClick", "attrCloseOnClick"], attrDisabled: ["disabled", "attrDisabled"], attrEnableBrowserBoundsDetection: ["enableBrowserBoundsDetection", "attrEnableBrowserBoundsDetection"], attrLeft: ["left", "attrLeft"], attrName: ["name", "attrName"], attrOpacity: ["opacity", "attrOpacity"], attrPosition: ["position", "attrPosition"], attrRtl: ["rtl", "attrRtl"], attrShowDelay: ["showDelay", "attrShowDelay"], attrShowArrow: ["showArrow", "attrShowArrow"], attrTop: ["top", "attrTop"], attrTrigger: ["trigger", "attrTrigger"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClose: "onClose", onClosing: "onClosing", onOpen: "onOpen", onOpening: "onOpening" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTooltip',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAbsolutePositionX: [{
                type: Input,
                args: ['absolutePositionX']
            }], attrAbsolutePositionY: [{
                type: Input,
                args: ['absolutePositionY']
            }], attrAutoHide: [{
                type: Input,
                args: ['autoHide']
            }], attrAutoHideDelay: [{
                type: Input,
                args: ['autoHideDelay']
            }], attrAnimationShowDelay: [{
                type: Input,
                args: ['animationShowDelay']
            }], attrAnimationHideDelay: [{
                type: Input,
                args: ['animationHideDelay']
            }], attrContent: [{
                type: Input,
                args: ['content']
            }], attrCloseOnClick: [{
                type: Input,
                args: ['closeOnClick']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnableBrowserBoundsDetection: [{
                type: Input,
                args: ['enableBrowserBoundsDetection']
            }], attrLeft: [{
                type: Input,
                args: ['left']
            }], attrName: [{
                type: Input,
                args: ['name']
            }], attrOpacity: [{
                type: Input,
                args: ['opacity']
            }], attrPosition: [{
                type: Input,
                args: ['position']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrShowDelay: [{
                type: Input,
                args: ['showDelay']
            }], attrShowArrow: [{
                type: Input,
                args: ['showArrow']
            }], attrTop: [{
                type: Input,
                args: ['top']
            }], attrTrigger: [{
                type: Input,
                args: ['trigger']
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
            }], onClosing: [{
                type: Output
            }], onOpen: [{
                type: Output
            }], onOpening: [{
                type: Output
            }] } });
