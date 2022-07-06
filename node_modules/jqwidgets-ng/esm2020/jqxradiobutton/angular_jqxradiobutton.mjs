/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxRadioButtonComponent),
    multi: true
};
export class jqxRadioButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'hasThreeStates', 'height', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRadioButtonComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRadioButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRadioButton(this.properties[i])) {
                        this.host.jqxRadioButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRadioButton', options);
        this.valueAttr = this.host[0].parentElement.getAttribute('value');
        if (options.checked === true)
            this.onChangeCallback(this.valueAttr);
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
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxRadioButton('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxRadioButton('setOptions', options);
    }
    // jqxRadioButtonComponent properties
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationShowDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationShowDelay');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('animationHideDelay', arg);
        }
        else {
            return this.host.jqxRadioButton('animationHideDelay');
        }
    }
    boxSize(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('boxSize', arg);
        }
        else {
            return this.host.jqxRadioButton('boxSize');
        }
    }
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('checked', arg);
        }
        else {
            return this.host.jqxRadioButton('checked');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('disabled', arg);
        }
        else {
            return this.host.jqxRadioButton('disabled');
        }
    }
    enableContainerClick(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('enableContainerClick', arg);
        }
        else {
            return this.host.jqxRadioButton('enableContainerClick');
        }
    }
    groupName(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('groupName', arg);
        }
        else {
            return this.host.jqxRadioButton('groupName');
        }
    }
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('hasThreeStates', arg);
        }
        else {
            return this.host.jqxRadioButton('hasThreeStates');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('height', arg);
        }
        else {
            return this.host.jqxRadioButton('height');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('rtl', arg);
        }
        else {
            return this.host.jqxRadioButton('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('theme', arg);
        }
        else {
            return this.host.jqxRadioButton('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRadioButton('width', arg);
        }
        else {
            return this.host.jqxRadioButton('width');
        }
    }
    // jqxRadioButtonComponent functions
    check() {
        this.host.jqxRadioButton('check');
    }
    disable() {
        this.host.jqxRadioButton('disable');
    }
    destroy() {
        this.host.jqxRadioButton('destroy');
    }
    enable() {
        this.host.jqxRadioButton('enable');
    }
    focus() {
        this.host.jqxRadioButton('focus');
    }
    render() {
        this.host.jqxRadioButton('render');
    }
    uncheck() {
        this.host.jqxRadioButton('uncheck');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRadioButton('val', value);
        }
        else {
            return this.host.jqxRadioButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); this.onChangeCallback(this.valueAttr); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
} //jqxRadioButtonComponent
jqxRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRadioButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxRadioButtonComponent, selector: "jqxRadioButton", inputs: { attrAnimationShowDelay: ["animationShowDelay", "attrAnimationShowDelay"], attrAnimationHideDelay: ["animationHideDelay", "attrAnimationHideDelay"], attrBoxSize: ["boxSize", "attrBoxSize"], attrChecked: ["checked", "attrChecked"], attrDisabled: ["disabled", "attrDisabled"], attrEnableContainerClick: ["enableContainerClick", "attrEnableContainerClick"], attrGroupName: ["groupName", "attrGroupName"], attrHasThreeStates: ["hasThreeStates", "attrHasThreeStates"], attrRtl: ["rtl", "attrRtl"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChecked: "onChecked", onChange: "onChange", onUnchecked: "onUnchecked" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRadioButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxRadioButton',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationShowDelay: [{
                type: Input,
                args: ['animationShowDelay']
            }], attrAnimationHideDelay: [{
                type: Input,
                args: ['animationHideDelay']
            }], attrBoxSize: [{
                type: Input,
                args: ['boxSize']
            }], attrChecked: [{
                type: Input,
                args: ['checked']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnableContainerClick: [{
                type: Input,
                args: ['enableContainerClick']
            }], attrGroupName: [{
                type: Input,
                args: ['groupName']
            }], attrHasThreeStates: [{
                type: Input,
                args: ['hasThreeStates']
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
            }], onChecked: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onUnchecked: [{
                type: Output
            }] } });
