import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxcomplexinput';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxComplexInputComponent),
    multi: true
};
class jqxComplexInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['decimalNotation', 'disabled', 'height', 'placeHolder', 'roundedCorners', 'rtl', 'spinButtons', 'spinButtonsStep', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxComplexInputComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxComplexInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxComplexInput(this.properties[i])) {
                        this.host.jqxComplexInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxComplexInput', options);
        setTimeout(_ => {
            let valueWithWS = 'JQXLite{options.value}';
            this.host.jqxComplexInput({ value: valueWithWS });
        });
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
            this.host.jqxComplexInput('val', value);
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxComplexInput('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxComplexInput('setOptions', options);
    }
    // jqxComplexInputComponent properties
    decimalNotation(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('decimalNotation', arg);
        }
        else {
            return this.host.jqxComplexInput('decimalNotation');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('disabled', arg);
        }
        else {
            return this.host.jqxComplexInput('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('height', arg);
        }
        else {
            return this.host.jqxComplexInput('height');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('placeHolder', arg);
        }
        else {
            return this.host.jqxComplexInput('placeHolder');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('roundedCorners', arg);
        }
        else {
            return this.host.jqxComplexInput('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('rtl', arg);
        }
        else {
            return this.host.jqxComplexInput('rtl');
        }
    }
    spinButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtons', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtons');
        }
    }
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxComplexInput('spinButtonsStep');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('template', arg);
        }
        else {
            return this.host.jqxComplexInput('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('theme', arg);
        }
        else {
            return this.host.jqxComplexInput('theme');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('value', arg);
        }
        else {
            return this.host.jqxComplexInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxComplexInput('width', arg);
        }
        else {
            return this.host.jqxComplexInput('width');
        }
    }
    // jqxComplexInputComponent functions
    destroy() {
        this.host.jqxComplexInput('destroy');
    }
    getDecimalNotation(part, decimalNotation) {
        return this.host.jqxComplexInput('getDecimalNotation', part, decimalNotation);
    }
    getReal(complexnumber) {
        return this.host.jqxComplexInput('getReal', complexnumber);
    }
    getImaginary(complexnumber) {
        return this.host.jqxComplexInput('getImaginary', complexnumber);
    }
    render() {
        this.host.jqxComplexInput('render');
    }
    refresh() {
        this.host.jqxComplexInput('refresh');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxComplexInput('val', value);
        }
        else {
            return this.host.jqxComplexInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => {
            this.onChange.emit(eventData);
            if (eventData.args)
                this.onChangeCallback(eventData.args.value);
        });
    }
} //jqxComplexInputComponent
jqxComplexInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxComplexInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxComplexInputComponent, selector: "jqxComplexInput", inputs: { attrDecimalNotation: ["decimalNotation", "attrDecimalNotation"], attrDisabled: ["disabled", "attrDisabled"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrRoundedCorners: ["roundedCorners", "attrRoundedCorners"], attrRtl: ["rtl", "attrRtl"], attrSpinButtons: ["spinButtons", "attrSpinButtons"], attrSpinButtonsStep: ["spinButtonsStep", "attrSpinButtonsStep"], attrTemplate: ["template", "attrTemplate"], attrTheme: ["theme", "attrTheme"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div style="display: inline-flex;"><input [(ngModel)]="ngValue"><div></div></div>', isInline: true, directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxComplexInput',
                    template: '<div style="display: inline-flex;"><input [(ngModel)]="ngValue"><div></div></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDecimalNotation: [{
                type: Input,
                args: ['decimalNotation']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrPlaceHolder: [{
                type: Input,
                args: ['placeHolder']
            }], attrRoundedCorners: [{
                type: Input,
                args: ['roundedCorners']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSpinButtons: [{
                type: Input,
                args: ['spinButtons']
            }], attrSpinButtonsStep: [{
                type: Input,
                args: ['spinButtonsStep']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
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

class jqxComplexInputModule {
}
jqxComplexInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxComplexInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, declarations: [jqxComplexInputComponent], imports: [FormsModule], exports: [jqxComplexInputComponent] });
jqxComplexInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxComplexInputComponent],
                    exports: [jqxComplexInputComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxComplexInputComponent, jqxComplexInputModule };
