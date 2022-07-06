import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxgauge';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxLinearGaugeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'background', 'colorScheme', 'disabled', 'easing', 'height', 'int64', 'labels', 'min', 'max', 'orientation', 'pointer', 'rangesOffset', 'rangeSize', 'ranges', 'showRanges', 'scaleStyle', 'scaleLength', 'ticksOffset', 'ticksPosition', 'ticksMinor', 'ticksMajor', 'value', 'width'];
        // jqxLinearGaugeComponent events
        this.onValueChanging = new EventEmitter();
        this.onValueChanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLinearGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLinearGauge(this.properties[i])) {
                        this.host.jqxLinearGauge(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLinearGauge', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxLinearGauge('setOptions', options);
    }
    // jqxLinearGaugeComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxLinearGauge('animationDuration');
        }
    }
    background(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('background', arg);
        }
        else {
            return this.host.jqxLinearGauge('background');
        }
    }
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxLinearGauge('colorScheme');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('disabled', arg);
        }
        else {
            return this.host.jqxLinearGauge('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('easing', arg);
        }
        else {
            return this.host.jqxLinearGauge('easing');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('height', arg);
        }
        else {
            return this.host.jqxLinearGauge('height');
        }
    }
    int64(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('int64', arg);
        }
        else {
            return this.host.jqxLinearGauge('int64');
        }
    }
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('labels', arg);
        }
        else {
            return this.host.jqxLinearGauge('labels');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('min', arg);
        }
        else {
            return this.host.jqxLinearGauge('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('max', arg);
        }
        else {
            return this.host.jqxLinearGauge('max');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('orientation', arg);
        }
        else {
            return this.host.jqxLinearGauge('orientation');
        }
    }
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('pointer', arg);
        }
        else {
            return this.host.jqxLinearGauge('pointer');
        }
    }
    rangesOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangesOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangesOffset');
        }
    }
    rangeSize(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('rangeSize', arg);
        }
        else {
            return this.host.jqxLinearGauge('rangeSize');
        }
    }
    ranges(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ranges', arg);
        }
        else {
            return this.host.jqxLinearGauge('ranges');
        }
    }
    showRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('showRanges', arg);
        }
        else {
            return this.host.jqxLinearGauge('showRanges');
        }
    }
    scaleStyle(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleStyle', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleStyle');
        }
    }
    scaleLength(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('scaleLength', arg);
        }
        else {
            return this.host.jqxLinearGauge('scaleLength');
        }
    }
    ticksOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksOffset', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksOffset');
        }
    }
    ticksPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksPosition', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksPosition');
        }
    }
    ticksMinor(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMinor');
        }
    }
    ticksMajor(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxLinearGauge('ticksMajor');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('value', arg);
        }
        else {
            return this.host.jqxLinearGauge('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxLinearGauge('width', arg);
        }
        else {
            return this.host.jqxLinearGauge('width');
        }
    }
    // jqxLinearGaugeComponent functions
    disable() {
        this.host.jqxLinearGauge('disable');
    }
    enable() {
        this.host.jqxLinearGauge('enable');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxLinearGauge('val', value);
        }
        else {
            return this.host.jqxLinearGauge('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('valueChanging', (eventData) => { this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
} //jqxLinearGaugeComponent
jqxLinearGaugeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinearGaugeComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxLinearGaugeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxLinearGaugeComponent, selector: "jqxLinearGauge", inputs: { attrAnimationDuration: ["animationDuration", "attrAnimationDuration"], attrBackground: ["background", "attrBackground"], attrColorScheme: ["colorScheme", "attrColorScheme"], attrDisabled: ["disabled", "attrDisabled"], attrEasing: ["easing", "attrEasing"], attrInt64: ["int64", "attrInt64"], attrLabels: ["labels", "attrLabels"], attrMin: ["min", "attrMin"], attrMax: ["max", "attrMax"], attrOrientation: ["orientation", "attrOrientation"], attrPointer: ["pointer", "attrPointer"], attrRangesOffset: ["rangesOffset", "attrRangesOffset"], attrRangeSize: ["rangeSize", "attrRangeSize"], attrRanges: ["ranges", "attrRanges"], attrShowRanges: ["showRanges", "attrShowRanges"], attrScaleStyle: ["scaleStyle", "attrScaleStyle"], attrScaleLength: ["scaleLength", "attrScaleLength"], attrTicksOffset: ["ticksOffset", "attrTicksOffset"], attrTicksPosition: ["ticksPosition", "attrTicksPosition"], attrTicksMinor: ["ticksMinor", "attrTicksMinor"], attrTicksMajor: ["ticksMajor", "attrTicksMajor"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onValueChanging: "onValueChanging", onValueChanged: "onValueChanged" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinearGaugeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxLinearGauge',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationDuration: [{
                type: Input,
                args: ['animationDuration']
            }], attrBackground: [{
                type: Input,
                args: ['background']
            }], attrColorScheme: [{
                type: Input,
                args: ['colorScheme']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEasing: [{
                type: Input,
                args: ['easing']
            }], attrInt64: [{
                type: Input,
                args: ['int64']
            }], attrLabels: [{
                type: Input,
                args: ['labels']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrOrientation: [{
                type: Input,
                args: ['orientation']
            }], attrPointer: [{
                type: Input,
                args: ['pointer']
            }], attrRangesOffset: [{
                type: Input,
                args: ['rangesOffset']
            }], attrRangeSize: [{
                type: Input,
                args: ['rangeSize']
            }], attrRanges: [{
                type: Input,
                args: ['ranges']
            }], attrShowRanges: [{
                type: Input,
                args: ['showRanges']
            }], attrScaleStyle: [{
                type: Input,
                args: ['scaleStyle']
            }], attrScaleLength: [{
                type: Input,
                args: ['scaleLength']
            }], attrTicksOffset: [{
                type: Input,
                args: ['ticksOffset']
            }], attrTicksPosition: [{
                type: Input,
                args: ['ticksPosition']
            }], attrTicksMinor: [{
                type: Input,
                args: ['ticksMinor']
            }], attrTicksMajor: [{
                type: Input,
                args: ['ticksMajor']
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
            }], onValueChanging: [{
                type: Output
            }], onValueChanged: [{
                type: Output
            }] } });

class jqxLinearGaugeModule {
}
jqxLinearGaugeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinearGaugeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxLinearGaugeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinearGaugeModule, declarations: [jqxLinearGaugeComponent], exports: [jqxLinearGaugeComponent] });
jqxLinearGaugeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinearGaugeModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLinearGaugeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxLinearGaugeComponent],
                    exports: [jqxLinearGaugeComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxLinearGaugeComponent, jqxLinearGaugeModule };
