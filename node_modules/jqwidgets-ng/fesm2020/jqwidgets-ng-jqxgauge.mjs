import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxgauge';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxGaugeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDuration', 'border', 'caption', 'cap', 'colorScheme', 'disabled', 'easing', 'endAngle', 'height', 'int64', 'labels', 'min', 'max', 'pointer', 'radius', 'ranges', 'startAngle', 'showRanges', 'styles', 'ticksMajor', 'ticksMinor', 'ticksDistance', 'value', 'width'];
        // jqxGaugeComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGauge(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGauge(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGauge(this.properties[i])) {
                        this.host.jqxGauge(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGauge', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxGauge('setOptions', options);
    }
    // jqxGaugeComponent properties
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('animationDuration', arg);
        }
        else {
            return this.host.jqxGauge('animationDuration');
        }
    }
    border(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('border', arg);
        }
        else {
            return this.host.jqxGauge('border');
        }
    }
    caption(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('caption', arg);
        }
        else {
            return this.host.jqxGauge('caption');
        }
    }
    cap(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('cap', arg);
        }
        else {
            return this.host.jqxGauge('cap');
        }
    }
    colorScheme(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('colorScheme', arg);
        }
        else {
            return this.host.jqxGauge('colorScheme');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('disabled', arg);
        }
        else {
            return this.host.jqxGauge('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('easing', arg);
        }
        else {
            return this.host.jqxGauge('easing');
        }
    }
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('endAngle', arg);
        }
        else {
            return this.host.jqxGauge('endAngle');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('height', arg);
        }
        else {
            return this.host.jqxGauge('height');
        }
    }
    int64(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('int64', arg);
        }
        else {
            return this.host.jqxGauge('int64');
        }
    }
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('labels', arg);
        }
        else {
            return this.host.jqxGauge('labels');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('min', arg);
        }
        else {
            return this.host.jqxGauge('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('max', arg);
        }
        else {
            return this.host.jqxGauge('max');
        }
    }
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('pointer', arg);
        }
        else {
            return this.host.jqxGauge('pointer');
        }
    }
    radius(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('radius', arg);
        }
        else {
            return this.host.jqxGauge('radius');
        }
    }
    ranges(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ranges', arg);
        }
        else {
            return this.host.jqxGauge('ranges');
        }
    }
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('startAngle', arg);
        }
        else {
            return this.host.jqxGauge('startAngle');
        }
    }
    showRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('showRanges', arg);
        }
        else {
            return this.host.jqxGauge('showRanges');
        }
    }
    styles(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('styles', arg);
        }
        else {
            return this.host.jqxGauge('styles');
        }
    }
    ticksMajor(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMajor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMajor');
        }
    }
    ticksMinor(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksMinor', arg);
        }
        else {
            return this.host.jqxGauge('ticksMinor');
        }
    }
    ticksDistance(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('ticksDistance', arg);
        }
        else {
            return this.host.jqxGauge('ticksDistance');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('value', arg);
        }
        else {
            return this.host.jqxGauge('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxGauge('width', arg);
        }
        else {
            return this.host.jqxGauge('width');
        }
    }
    // jqxGaugeComponent functions
    disable() {
        this.host.jqxGauge('disable');
    }
    enable() {
        this.host.jqxGauge('enable');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxGauge('val', value);
        }
        else {
            return this.host.jqxGauge('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('valueChanging', (eventData) => { this.onValueChanging.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); });
    }
} //jqxGaugeComponent
jqxGaugeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGaugeComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxGaugeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxGaugeComponent, selector: "jqxGauge", inputs: { attrAnimationDuration: ["animationDuration", "attrAnimationDuration"], attrBorder: ["border", "attrBorder"], attrCaption: ["caption", "attrCaption"], attrCap: ["cap", "attrCap"], attrColorScheme: ["colorScheme", "attrColorScheme"], attrDisabled: ["disabled", "attrDisabled"], attrEasing: ["easing", "attrEasing"], attrEndAngle: ["endAngle", "attrEndAngle"], attrInt64: ["int64", "attrInt64"], attrLabels: ["labels", "attrLabels"], attrMin: ["min", "attrMin"], attrMax: ["max", "attrMax"], attrPointer: ["pointer", "attrPointer"], attrRadius: ["radius", "attrRadius"], attrRanges: ["ranges", "attrRanges"], attrStartAngle: ["startAngle", "attrStartAngle"], attrShowRanges: ["showRanges", "attrShowRanges"], attrStyles: ["styles", "attrStyles"], attrTicksMajor: ["ticksMajor", "attrTicksMajor"], attrTicksMinor: ["ticksMinor", "attrTicksMinor"], attrTicksDistance: ["ticksDistance", "attrTicksDistance"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onValueChanging: "onValueChanging", onValueChanged: "onValueChanged" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGaugeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxGauge',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationDuration: [{
                type: Input,
                args: ['animationDuration']
            }], attrBorder: [{
                type: Input,
                args: ['border']
            }], attrCaption: [{
                type: Input,
                args: ['caption']
            }], attrCap: [{
                type: Input,
                args: ['cap']
            }], attrColorScheme: [{
                type: Input,
                args: ['colorScheme']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEasing: [{
                type: Input,
                args: ['easing']
            }], attrEndAngle: [{
                type: Input,
                args: ['endAngle']
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
            }], attrPointer: [{
                type: Input,
                args: ['pointer']
            }], attrRadius: [{
                type: Input,
                args: ['radius']
            }], attrRanges: [{
                type: Input,
                args: ['ranges']
            }], attrStartAngle: [{
                type: Input,
                args: ['startAngle']
            }], attrShowRanges: [{
                type: Input,
                args: ['showRanges']
            }], attrStyles: [{
                type: Input,
                args: ['styles']
            }], attrTicksMajor: [{
                type: Input,
                args: ['ticksMajor']
            }], attrTicksMinor: [{
                type: Input,
                args: ['ticksMinor']
            }], attrTicksDistance: [{
                type: Input,
                args: ['ticksDistance']
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

class jqxGaugeModule {
}
jqxGaugeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGaugeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxGaugeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGaugeModule, declarations: [jqxGaugeComponent], exports: [jqxGaugeComponent] });
jqxGaugeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGaugeModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGaugeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxGaugeComponent],
                    exports: [jqxGaugeComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxGaugeComponent, jqxGaugeModule };
