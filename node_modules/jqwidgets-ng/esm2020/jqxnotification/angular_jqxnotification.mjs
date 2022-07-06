/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxNotificationComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendContainer', 'autoOpen', 'animationOpenDelay', 'animationCloseDelay', 'autoClose', 'autoCloseDelay', 'blink', 'browserBoundsOffset', 'closeOnClick', 'disabled', 'height', 'hoverOpacity', 'icon', 'notificationOffset', 'opacity', 'position', 'rtl', 'showCloseButton', 'template', 'theme', 'width'];
        // jqxNotificationComponent events
        this.onClose = new EventEmitter();
        this.onClick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNotification(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNotification(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNotification(this.properties[i])) {
                        this.host.jqxNotification(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNotification', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxNotification('setOptions', options);
    }
    // jqxNotificationComponent properties
    appendContainer(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('appendContainer', arg);
        }
        else {
            return this.host.jqxNotification('appendContainer');
        }
    }
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoOpen', arg);
        }
        else {
            return this.host.jqxNotification('autoOpen');
        }
    }
    animationOpenDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationOpenDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationOpenDelay');
        }
    }
    animationCloseDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('animationCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('animationCloseDelay');
        }
    }
    autoClose(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoClose', arg);
        }
        else {
            return this.host.jqxNotification('autoClose');
        }
    }
    autoCloseDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('autoCloseDelay', arg);
        }
        else {
            return this.host.jqxNotification('autoCloseDelay');
        }
    }
    blink(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('blink', arg);
        }
        else {
            return this.host.jqxNotification('blink');
        }
    }
    browserBoundsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('browserBoundsOffset', arg);
        }
        else {
            return this.host.jqxNotification('browserBoundsOffset');
        }
    }
    closeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('closeOnClick', arg);
        }
        else {
            return this.host.jqxNotification('closeOnClick');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('disabled', arg);
        }
        else {
            return this.host.jqxNotification('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('height', arg);
        }
        else {
            return this.host.jqxNotification('height');
        }
    }
    hoverOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('hoverOpacity', arg);
        }
        else {
            return this.host.jqxNotification('hoverOpacity');
        }
    }
    icon(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('icon', arg);
        }
        else {
            return this.host.jqxNotification('icon');
        }
    }
    notificationOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('notificationOffset', arg);
        }
        else {
            return this.host.jqxNotification('notificationOffset');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('opacity', arg);
        }
        else {
            return this.host.jqxNotification('opacity');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('position', arg);
        }
        else {
            return this.host.jqxNotification('position');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('rtl', arg);
        }
        else {
            return this.host.jqxNotification('rtl');
        }
    }
    showCloseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('showCloseButton', arg);
        }
        else {
            return this.host.jqxNotification('showCloseButton');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('template', arg);
        }
        else {
            return this.host.jqxNotification('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('theme', arg);
        }
        else {
            return this.host.jqxNotification('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNotification('width', arg);
        }
        else {
            return this.host.jqxNotification('width');
        }
    }
    // jqxNotificationComponent functions
    closeAll() {
        this.host.jqxNotification('closeAll');
    }
    closeLast() {
        this.host.jqxNotification('closeLast');
    }
    destroy() {
        this.host.jqxNotification('destroy');
    }
    open() {
        this.host.jqxNotification('open');
    }
    refresh() {
        this.host.jqxNotification('refresh');
    }
    render() {
        this.host.jqxNotification('render');
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
} //jqxNotificationComponent
jqxNotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNotificationComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxNotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxNotificationComponent, selector: "jqxNotification", inputs: { attrAppendContainer: ["appendContainer", "attrAppendContainer"], attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrAnimationOpenDelay: ["animationOpenDelay", "attrAnimationOpenDelay"], attrAnimationCloseDelay: ["animationCloseDelay", "attrAnimationCloseDelay"], attrAutoClose: ["autoClose", "attrAutoClose"], attrAutoCloseDelay: ["autoCloseDelay", "attrAutoCloseDelay"], attrBlink: ["blink", "attrBlink"], attrBrowserBoundsOffset: ["browserBoundsOffset", "attrBrowserBoundsOffset"], attrCloseOnClick: ["closeOnClick", "attrCloseOnClick"], attrDisabled: ["disabled", "attrDisabled"], attrHoverOpacity: ["hoverOpacity", "attrHoverOpacity"], attrIcon: ["icon", "attrIcon"], attrNotificationOffset: ["notificationOffset", "attrNotificationOffset"], attrOpacity: ["opacity", "attrOpacity"], attrPosition: ["position", "attrPosition"], attrRtl: ["rtl", "attrRtl"], attrShowCloseButton: ["showCloseButton", "attrShowCloseButton"], attrTemplate: ["template", "attrTemplate"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClose: "onClose", onClick: "onClick", onOpen: "onOpen" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNotificationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxNotification',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAppendContainer: [{
                type: Input,
                args: ['appendContainer']
            }], attrAutoOpen: [{
                type: Input,
                args: ['autoOpen']
            }], attrAnimationOpenDelay: [{
                type: Input,
                args: ['animationOpenDelay']
            }], attrAnimationCloseDelay: [{
                type: Input,
                args: ['animationCloseDelay']
            }], attrAutoClose: [{
                type: Input,
                args: ['autoClose']
            }], attrAutoCloseDelay: [{
                type: Input,
                args: ['autoCloseDelay']
            }], attrBlink: [{
                type: Input,
                args: ['blink']
            }], attrBrowserBoundsOffset: [{
                type: Input,
                args: ['browserBoundsOffset']
            }], attrCloseOnClick: [{
                type: Input,
                args: ['closeOnClick']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrHoverOpacity: [{
                type: Input,
                args: ['hoverOpacity']
            }], attrIcon: [{
                type: Input,
                args: ['icon']
            }], attrNotificationOffset: [{
                type: Input,
                args: ['notificationOffset']
            }], attrOpacity: [{
                type: Input,
                args: ['opacity']
            }], attrPosition: [{
                type: Input,
                args: ['position']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrShowCloseButton: [{
                type: Input,
                args: ['showCloseButton']
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
            }], onClick: [{
                type: Output
            }], onOpen: [{
                type: Output
            }] } });
