/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxRatingComponent),
    multi: true
};
export class jqxRatingComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['count', 'disabled', 'height', 'itemHeight', 'itemWidth', 'precision', 'singleVote', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxRatingComponent events
        this.onChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRating(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRating(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRating(this.properties[i])) {
                        this.host.jqxRating(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRating', options);
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
            this.host.jqxRating('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxRating('setOptions', options);
    }
    // jqxRatingComponent properties
    count(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('count', arg);
        }
        else {
            return this.host.jqxRating('count');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('disabled', arg);
        }
        else {
            return this.host.jqxRating('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('height', arg);
        }
        else {
            return this.host.jqxRating('height');
        }
    }
    itemHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('itemHeight', arg);
        }
        else {
            return this.host.jqxRating('itemHeight');
        }
    }
    itemWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('itemWidth', arg);
        }
        else {
            return this.host.jqxRating('itemWidth');
        }
    }
    precision(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('precision', arg);
        }
        else {
            return this.host.jqxRating('precision');
        }
    }
    singleVote(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('singleVote', arg);
        }
        else {
            return this.host.jqxRating('singleVote');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('value', arg);
        }
        else {
            return this.host.jqxRating('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRating('width', arg);
        }
        else {
            return this.host.jqxRating('width');
        }
    }
    // jqxRatingComponent functions
    disable() {
        this.host.jqxRating('disable');
    }
    enable() {
        this.host.jqxRating('enable');
    }
    getValue() {
        return this.host.jqxRating('getValue');
    }
    setValue(value) {
        this.host.jqxRating('setValue', value);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRating('val', value);
        }
        else {
            return this.host.jqxRating('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
    }
} //jqxRatingComponent
jqxRatingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRatingComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxRatingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxRatingComponent, selector: "jqxRating", inputs: { attrCount: ["count", "attrCount"], attrDisabled: ["disabled", "attrDisabled"], attrItemHeight: ["itemHeight", "attrItemHeight"], attrItemWidth: ["itemWidth", "attrItemWidth"], attrPrecision: ["precision", "attrPrecision"], attrSingleVote: ["singleVote", "attrSingleVote"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRatingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxRating',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrCount: [{
                type: Input,
                args: ['count']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrItemHeight: [{
                type: Input,
                args: ['itemHeight']
            }], attrItemWidth: [{
                type: Input,
                args: ['itemWidth']
            }], attrPrecision: [{
                type: Input,
                args: ['precision']
            }], attrSingleVote: [{
                type: Input,
                args: ['singleVote']
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
            }], onChange: [{
                type: Output
            }] } });
