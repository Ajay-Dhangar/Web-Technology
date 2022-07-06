/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxExpanderComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expanded', 'expandAnimationDuration', 'height', 'headerPosition', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxExpanderComponent events
        this.onCollapsing = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onExpanding = new EventEmitter();
        this.onExpanded = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxExpander(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxExpander(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxExpander(this.properties[i])) {
                        this.host.jqxExpander(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxExpander', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxExpander('setOptions', options);
    }
    // jqxExpanderComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('animationType', arg);
        }
        else {
            return this.host.jqxExpander('animationType');
        }
    }
    arrowPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('arrowPosition', arg);
        }
        else {
            return this.host.jqxExpander('arrowPosition');
        }
    }
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('collapseAnimationDuration');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('disabled', arg);
        }
        else {
            return this.host.jqxExpander('disabled');
        }
    }
    expanded(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expanded', arg);
        }
        else {
            return this.host.jqxExpander('expanded');
        }
    }
    expandAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxExpander('expandAnimationDuration');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('height', arg);
        }
        else {
            return this.host.jqxExpander('height');
        }
    }
    headerPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('headerPosition', arg);
        }
        else {
            return this.host.jqxExpander('headerPosition');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('initContent', arg);
        }
        else {
            return this.host.jqxExpander('initContent');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('rtl', arg);
        }
        else {
            return this.host.jqxExpander('rtl');
        }
    }
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('showArrow', arg);
        }
        else {
            return this.host.jqxExpander('showArrow');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('theme', arg);
        }
        else {
            return this.host.jqxExpander('theme');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('toggleMode', arg);
        }
        else {
            return this.host.jqxExpander('toggleMode');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxExpander('width', arg);
        }
        else {
            return this.host.jqxExpander('width');
        }
    }
    // jqxExpanderComponent functions
    collapse() {
        this.host.jqxExpander('collapse');
    }
    disable() {
        this.host.jqxExpander('disable');
    }
    destroy() {
        this.host.jqxExpander('destroy');
    }
    enable() {
        this.host.jqxExpander('enable');
    }
    expand() {
        this.host.jqxExpander('expand');
    }
    focus() {
        this.host.jqxExpander('focus');
    }
    getContent() {
        return this.host.jqxExpander('getContent');
    }
    getHeaderContent() {
        return this.host.jqxExpander('getHeaderContent');
    }
    invalidate() {
        this.host.jqxExpander('invalidate');
    }
    refresh() {
        this.host.jqxExpander('refresh');
    }
    render() {
        this.host.jqxExpander('render');
    }
    setHeaderContent(headerContent) {
        this.host.jqxExpander('setHeaderContent', headerContent);
    }
    setContent(content) {
        this.host.jqxExpander('setContent', content);
    }
    __wireEvents__() {
        this.host.on('collapsing', (eventData) => { this.onCollapsing.emit(eventData); });
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('expanding', (eventData) => { this.onExpanding.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
    }
} //jqxExpanderComponent
jqxExpanderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxExpanderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxExpanderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxExpanderComponent, selector: "jqxExpander", inputs: { attrAnimationType: ["animationType", "attrAnimationType"], attrArrowPosition: ["arrowPosition", "attrArrowPosition"], attrCollapseAnimationDuration: ["collapseAnimationDuration", "attrCollapseAnimationDuration"], attrDisabled: ["disabled", "attrDisabled"], attrExpanded: ["expanded", "attrExpanded"], attrExpandAnimationDuration: ["expandAnimationDuration", "attrExpandAnimationDuration"], attrHeaderPosition: ["headerPosition", "attrHeaderPosition"], attrInitContent: ["initContent", "attrInitContent"], attrRtl: ["rtl", "attrRtl"], attrShowArrow: ["showArrow", "attrShowArrow"], attrTheme: ["theme", "attrTheme"], attrToggleMode: ["toggleMode", "attrToggleMode"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onCollapsing: "onCollapsing", onCollapsed: "onCollapsed", onExpanding: "onExpanding", onExpanded: "onExpanded" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxExpanderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxExpander',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrArrowPosition: [{
                type: Input,
                args: ['arrowPosition']
            }], attrCollapseAnimationDuration: [{
                type: Input,
                args: ['collapseAnimationDuration']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrExpanded: [{
                type: Input,
                args: ['expanded']
            }], attrExpandAnimationDuration: [{
                type: Input,
                args: ['expandAnimationDuration']
            }], attrHeaderPosition: [{
                type: Input,
                args: ['headerPosition']
            }], attrInitContent: [{
                type: Input,
                args: ['initContent']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrShowArrow: [{
                type: Input,
                args: ['showArrow']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrToggleMode: [{
                type: Input,
                args: ['toggleMode']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onCollapsing: [{
                type: Output
            }], onCollapsed: [{
                type: Output
            }], onExpanding: [{
                type: Output
            }], onExpanded: [{
                type: Output
            }] } });
