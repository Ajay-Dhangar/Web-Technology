/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSwitchButtonComponent),
    multi: true
};
export class jqxSwitchButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['checked', 'disabled', 'height', 'orientation', 'onLabel', 'offLabel', 'thumbSize', 'rtl', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSwitchButtonComponent events
        this.onChecked = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onUnchecked = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSwitchButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSwitchButton(this.properties[i])) {
                        this.host.jqxSwitchButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSwitchButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxSwitchButton('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxSwitchButton('setOptions', options);
    }
    // jqxSwitchButtonComponent properties
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('checked', arg);
        }
        else {
            return this.host.jqxSwitchButton('checked');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('disabled', arg);
        }
        else {
            return this.host.jqxSwitchButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('height', arg);
        }
        else {
            return this.host.jqxSwitchButton('height');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('orientation', arg);
        }
        else {
            return this.host.jqxSwitchButton('orientation');
        }
    }
    onLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('onLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('onLabel');
        }
    }
    offLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('offLabel', arg);
        }
        else {
            return this.host.jqxSwitchButton('offLabel');
        }
    }
    thumbSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('thumbSize', arg);
        }
        else {
            return this.host.jqxSwitchButton('thumbSize');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('rtl', arg);
        }
        else {
            return this.host.jqxSwitchButton('rtl');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSwitchButton('width', arg);
        }
        else {
            return this.host.jqxSwitchButton('width');
        }
    }
    // jqxSwitchButtonComponent functions
    check() {
        this.host.jqxSwitchButton('check');
    }
    disable() {
        this.host.jqxSwitchButton('disable');
    }
    enable() {
        this.host.jqxSwitchButton('enable');
    }
    toggle() {
        this.host.jqxSwitchButton('toggle');
    }
    uncheck() {
        this.host.jqxSwitchButton('uncheck');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxSwitchButton('val', value);
        }
        else {
            return this.host.jqxSwitchButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
} //jqxSwitchButtonComponent
jqxSwitchButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSwitchButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxSwitchButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxSwitchButtonComponent, selector: "jqxSwitchButton", inputs: { attrChecked: ["checked", "attrChecked"], attrDisabled: ["disabled", "attrDisabled"], attrOrientation: ["orientation", "attrOrientation"], attrOnLabel: ["onLabel", "attrOnLabel"], attrOffLabel: ["offLabel", "attrOffLabel"], attrThumbSize: ["thumbSize", "attrThumbSize"], attrRtl: ["rtl", "attrRtl"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChecked: "onChecked", onChange: "onChange", onUnchecked: "onUnchecked" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSwitchButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxSwitchButton',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrChecked: [{
                type: Input,
                args: ['checked']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrOrientation: [{
                type: Input,
                args: ['orientation']
            }], attrOnLabel: [{
                type: Input,
                args: ['onLabel']
            }], attrOffLabel: [{
                type: Input,
                args: ['offLabel']
            }], attrThumbSize: [{
                type: Input,
                args: ['thumbSize']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onChecked: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onUnchecked: [{
                type: Output
            }] } });
