/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxSliderComponent),
    multi: true
};
export class jqxSliderComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['buttonsPosition', 'disabled', 'height', 'layout', 'mode', 'minorTicksFrequency', 'minorTickSize', 'max', 'min', 'orientation', 'rangeSlider', 'rtl', 'step', 'showTicks', 'showMinorTicks', 'showTickLabels', 'showButtons', 'showRange', 'template', 'theme', 'ticksPosition', 'ticksFrequency', 'tickSize', 'tickLabelFormatFunction', 'tooltip', 'tooltipHideDelay', 'tooltipPosition', 'tooltipFormatFunction', 'value', 'values', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxSliderComponent events
        this.onChange = new EventEmitter();
        this.onSlide = new EventEmitter();
        this.onSlideStart = new EventEmitter();
        this.onSlideEnd = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSlider(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSlider(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSlider(this.properties[i])) {
                        this.host.jqxSlider(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSlider', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    get ngValue() {
        if (this.widgetObject) {
            const value = this.host.val();
            return value;
        }
        return '';
    }
    set ngValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(value);
        }
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxSlider('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxSlider('setOptions', options);
    }
    // jqxSliderComponent properties
    buttonsPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('buttonsPosition', arg);
        }
        else {
            return this.host.jqxSlider('buttonsPosition');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('disabled', arg);
        }
        else {
            return this.host.jqxSlider('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('height', arg);
        }
        else {
            return this.host.jqxSlider('height');
        }
    }
    layout(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('layout', arg);
        }
        else {
            return this.host.jqxSlider('layout');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('mode', arg);
        }
        else {
            return this.host.jqxSlider('mode');
        }
    }
    minorTicksFrequency(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTicksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('minorTicksFrequency');
        }
    }
    minorTickSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('minorTickSize', arg);
        }
        else {
            return this.host.jqxSlider('minorTickSize');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('max', arg);
        }
        else {
            return this.host.jqxSlider('max');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('min', arg);
        }
        else {
            return this.host.jqxSlider('min');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('orientation', arg);
        }
        else {
            return this.host.jqxSlider('orientation');
        }
    }
    rangeSlider(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rangeSlider', arg);
        }
        else {
            return this.host.jqxSlider('rangeSlider');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('rtl', arg);
        }
        else {
            return this.host.jqxSlider('rtl');
        }
    }
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('step', arg);
        }
        else {
            return this.host.jqxSlider('step');
        }
    }
    showTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTicks', arg);
        }
        else {
            return this.host.jqxSlider('showTicks');
        }
    }
    showMinorTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showMinorTicks', arg);
        }
        else {
            return this.host.jqxSlider('showMinorTicks');
        }
    }
    showTickLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showTickLabels', arg);
        }
        else {
            return this.host.jqxSlider('showTickLabels');
        }
    }
    showButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showButtons', arg);
        }
        else {
            return this.host.jqxSlider('showButtons');
        }
    }
    showRange(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('showRange', arg);
        }
        else {
            return this.host.jqxSlider('showRange');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('template', arg);
        }
        else {
            return this.host.jqxSlider('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('theme', arg);
        }
        else {
            return this.host.jqxSlider('theme');
        }
    }
    ticksPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksPosition', arg);
        }
        else {
            return this.host.jqxSlider('ticksPosition');
        }
    }
    ticksFrequency(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('ticksFrequency', arg);
        }
        else {
            return this.host.jqxSlider('ticksFrequency');
        }
    }
    tickSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickSize', arg);
        }
        else {
            return this.host.jqxSlider('tickSize');
        }
    }
    tickLabelFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tickLabelFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tickLabelFormatFunction');
        }
    }
    tooltip(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltip', arg);
        }
        else {
            return this.host.jqxSlider('tooltip');
        }
    }
    tooltipHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipHideDelay', arg);
        }
        else {
            return this.host.jqxSlider('tooltipHideDelay');
        }
    }
    tooltipPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipPosition', arg);
        }
        else {
            return this.host.jqxSlider('tooltipPosition');
        }
    }
    tooltipFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('tooltipFormatFunction', arg);
        }
        else {
            return this.host.jqxSlider('tooltipFormatFunction');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('value', arg);
        }
        else {
            return this.host.jqxSlider('value');
        }
    }
    values(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('values', arg);
        }
        else {
            return this.host.jqxSlider('values');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxSlider('width', arg);
        }
        else {
            return this.host.jqxSlider('width');
        }
    }
    // jqxSliderComponent functions
    destroy() {
        this.host.jqxSlider('destroy');
    }
    decrementValue() {
        this.host.jqxSlider('decrementValue');
    }
    disable() {
        this.host.jqxSlider('disable');
    }
    enable() {
        this.host.jqxSlider('enable');
    }
    focus() {
        this.host.jqxSlider('focus');
    }
    getValue() {
        return this.host.jqxSlider('getValue');
    }
    incrementValue() {
        this.host.jqxSlider('incrementValue');
    }
    setValue(index) {
        this.host.jqxSlider('setValue', index);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxSlider('val', value);
        }
        else {
            return this.host.jqxSlider('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('slide', (eventData) => { this.onSlide.emit(eventData); });
        this.host.on('slideStart', (eventData) => { this.onSlideStart.emit(eventData); });
        this.host.on('slideEnd', (eventData) => { this.onSlideEnd.emit(eventData); });
    }
} //jqxSliderComponent
jqxSliderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSliderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxSliderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxSliderComponent, selector: "jqxSlider", inputs: { attrButtonsPosition: ["buttonsPosition", "attrButtonsPosition"], attrDisabled: ["disabled", "attrDisabled"], attrLayout: ["layout", "attrLayout"], attrMode: ["mode", "attrMode"], attrMinorTicksFrequency: ["minorTicksFrequency", "attrMinorTicksFrequency"], attrMinorTickSize: ["minorTickSize", "attrMinorTickSize"], attrMax: ["max", "attrMax"], attrMin: ["min", "attrMin"], attrOrientation: ["orientation", "attrOrientation"], attrRangeSlider: ["rangeSlider", "attrRangeSlider"], attrRtl: ["rtl", "attrRtl"], attrStep: ["step", "attrStep"], attrShowTicks: ["showTicks", "attrShowTicks"], attrShowMinorTicks: ["showMinorTicks", "attrShowMinorTicks"], attrShowTickLabels: ["showTickLabels", "attrShowTickLabels"], attrShowButtons: ["showButtons", "attrShowButtons"], attrShowRange: ["showRange", "attrShowRange"], attrTemplate: ["template", "attrTemplate"], attrTheme: ["theme", "attrTheme"], attrTicksPosition: ["ticksPosition", "attrTicksPosition"], attrTicksFrequency: ["ticksFrequency", "attrTicksFrequency"], attrTickSize: ["tickSize", "attrTickSize"], attrTickLabelFormatFunction: ["tickLabelFormatFunction", "attrTickLabelFormatFunction"], attrTooltip: ["tooltip", "attrTooltip"], attrTooltipHideDelay: ["tooltipHideDelay", "attrTooltipHideDelay"], attrTooltipPosition: ["tooltipPosition", "attrTooltipPosition"], attrTooltipFormatFunction: ["tooltipFormatFunction", "attrTooltipFormatFunction"], attrValue: ["value", "attrValue"], attrValues: ["values", "attrValues"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange", onSlide: "onSlide", onSlideStart: "onSlideStart", onSlideEnd: "onSlideEnd" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSliderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxSlider',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrButtonsPosition: [{
                type: Input,
                args: ['buttonsPosition']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrLayout: [{
                type: Input,
                args: ['layout']
            }], attrMode: [{
                type: Input,
                args: ['mode']
            }], attrMinorTicksFrequency: [{
                type: Input,
                args: ['minorTicksFrequency']
            }], attrMinorTickSize: [{
                type: Input,
                args: ['minorTickSize']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrOrientation: [{
                type: Input,
                args: ['orientation']
            }], attrRangeSlider: [{
                type: Input,
                args: ['rangeSlider']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrStep: [{
                type: Input,
                args: ['step']
            }], attrShowTicks: [{
                type: Input,
                args: ['showTicks']
            }], attrShowMinorTicks: [{
                type: Input,
                args: ['showMinorTicks']
            }], attrShowTickLabels: [{
                type: Input,
                args: ['showTickLabels']
            }], attrShowButtons: [{
                type: Input,
                args: ['showButtons']
            }], attrShowRange: [{
                type: Input,
                args: ['showRange']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTicksPosition: [{
                type: Input,
                args: ['ticksPosition']
            }], attrTicksFrequency: [{
                type: Input,
                args: ['ticksFrequency']
            }], attrTickSize: [{
                type: Input,
                args: ['tickSize']
            }], attrTickLabelFormatFunction: [{
                type: Input,
                args: ['tickLabelFormatFunction']
            }], attrTooltip: [{
                type: Input,
                args: ['tooltip']
            }], attrTooltipHideDelay: [{
                type: Input,
                args: ['tooltipHideDelay']
            }], attrTooltipPosition: [{
                type: Input,
                args: ['tooltipPosition']
            }], attrTooltipFormatFunction: [{
                type: Input,
                args: ['tooltipFormatFunction']
            }], attrValue: [{
                type: Input,
                args: ['value']
            }], attrValues: [{
                type: Input,
                args: ['values']
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
            }], onSlide: [{
                type: Output
            }], onSlideStart: [{
                type: Output
            }], onSlideEnd: [{
                type: Output
            }] } });
