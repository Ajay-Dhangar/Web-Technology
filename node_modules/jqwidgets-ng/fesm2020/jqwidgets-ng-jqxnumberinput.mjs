import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxnumberinput';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxNumberInputComponent),
    multi: true
};
class jqxNumberInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['allowNull', 'decimal', 'disabled', 'decimalDigits', 'decimalSeparator', 'digits', 'groupSeparator', 'groupSize', 'height', 'inputMode', 'min', 'max', 'negativeSymbol', 'placeHolder', 'promptChar', 'rtl', 'readOnly', 'spinMode', 'spinButtons', 'spinButtonsWidth', 'spinButtonsStep', 'symbol', 'symbolPosition', 'textAlign', 'template', 'theme', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxNumberInputComponent events
        this.onChange = new EventEmitter();
        this.onTextchanged = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNumberInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNumberInput(this.properties[i])) {
                        this.host.jqxNumberInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNumberInput', options);
        this.host = this.widgetObject['host'];
        this.__wireEvents__();
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
            this.host.jqxNumberInput('val', value);
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxNumberInput('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxNumberInput('setOptions', options);
    }
    // jqxNumberInputComponent properties
    allowNull(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('allowNull', arg);
        }
        else {
            return this.host.jqxNumberInput('allowNull');
        }
    }
    decimal(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimal', arg);
        }
        else {
            return this.host.jqxNumberInput('decimal');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('disabled', arg);
        }
        else {
            return this.host.jqxNumberInput('disabled');
        }
    }
    decimalDigits(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalDigits', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalDigits');
        }
    }
    decimalSeparator(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('decimalSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('decimalSeparator');
        }
    }
    digits(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('digits', arg);
        }
        else {
            return this.host.jqxNumberInput('digits');
        }
    }
    groupSeparator(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSeparator', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSeparator');
        }
    }
    groupSize(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('groupSize', arg);
        }
        else {
            return this.host.jqxNumberInput('groupSize');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('height', arg);
        }
        else {
            return this.host.jqxNumberInput('height');
        }
    }
    inputMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('inputMode', arg);
        }
        else {
            return this.host.jqxNumberInput('inputMode');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('min', arg);
        }
        else {
            return this.host.jqxNumberInput('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('max', arg);
        }
        else {
            return this.host.jqxNumberInput('max');
        }
    }
    negativeSymbol(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('negativeSymbol', arg);
        }
        else {
            return this.host.jqxNumberInput('negativeSymbol');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('placeHolder', arg);
        }
        else {
            return this.host.jqxNumberInput('placeHolder');
        }
    }
    promptChar(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('promptChar', arg);
        }
        else {
            return this.host.jqxNumberInput('promptChar');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('rtl', arg);
        }
        else {
            return this.host.jqxNumberInput('rtl');
        }
    }
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('readOnly', arg);
        }
        else {
            return this.host.jqxNumberInput('readOnly');
        }
    }
    spinMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinMode', arg);
        }
        else {
            return this.host.jqxNumberInput('spinMode');
        }
    }
    spinButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtons', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtons');
        }
    }
    spinButtonsWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsWidth', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsWidth');
        }
    }
    spinButtonsStep(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('spinButtonsStep', arg);
        }
        else {
            return this.host.jqxNumberInput('spinButtonsStep');
        }
    }
    symbol(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbol', arg);
        }
        else {
            return this.host.jqxNumberInput('symbol');
        }
    }
    symbolPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('symbolPosition', arg);
        }
        else {
            return this.host.jqxNumberInput('symbolPosition');
        }
    }
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('textAlign', arg);
        }
        else {
            return this.host.jqxNumberInput('textAlign');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('template', arg);
        }
        else {
            return this.host.jqxNumberInput('template');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('theme', arg);
        }
        else {
            return this.host.jqxNumberInput('theme');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('value', arg);
        }
        else {
            return this.host.jqxNumberInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNumberInput('width', arg);
        }
        else {
            return this.host.jqxNumberInput('width');
        }
    }
    // jqxNumberInputComponent functions
    clear() {
        this.host.jqxNumberInput('clear');
    }
    destroy() {
        this.host.jqxNumberInput('destroy');
    }
    focus() {
        this.host.jqxNumberInput('focus');
    }
    getDecimal() {
        return this.host.jqxNumberInput('getDecimal');
    }
    setDecimal(index) {
        this.host.jqxNumberInput('setDecimal', index);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxNumberInput('val', value);
        }
        else {
            return this.host.jqxNumberInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
        this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.value); });
    }
} //jqxNumberInputComponent
jqxNumberInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxNumberInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxNumberInputComponent, selector: "jqxNumberInput", inputs: { attrAllowNull: ["allowNull", "attrAllowNull"], attrDecimal: ["decimal", "attrDecimal"], attrDisabled: ["disabled", "attrDisabled"], attrDecimalDigits: ["decimalDigits", "attrDecimalDigits"], attrDecimalSeparator: ["decimalSeparator", "attrDecimalSeparator"], attrDigits: ["digits", "attrDigits"], attrGroupSeparator: ["groupSeparator", "attrGroupSeparator"], attrGroupSize: ["groupSize", "attrGroupSize"], attrInputMode: ["inputMode", "attrInputMode"], attrMin: ["min", "attrMin"], attrMax: ["max", "attrMax"], attrNegativeSymbol: ["negativeSymbol", "attrNegativeSymbol"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrPromptChar: ["promptChar", "attrPromptChar"], attrRtl: ["rtl", "attrRtl"], attrReadOnly: ["readOnly", "attrReadOnly"], attrSpinMode: ["spinMode", "attrSpinMode"], attrSpinButtons: ["spinButtons", "attrSpinButtons"], attrSpinButtonsWidth: ["spinButtonsWidth", "attrSpinButtonsWidth"], attrSpinButtonsStep: ["spinButtonsStep", "attrSpinButtonsStep"], attrSymbol: ["symbol", "attrSymbol"], attrSymbolPosition: ["symbolPosition", "attrSymbolPosition"], attrTextAlign: ["textAlign", "attrTextAlign"], attrTemplate: ["template", "attrTemplate"], attrTheme: ["theme", "attrTheme"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange", onTextchanged: "onTextchanged", onValueChanged: "onValueChanged" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<input>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxNumberInput',
                    template: '<input>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAllowNull: [{
                type: Input,
                args: ['allowNull']
            }], attrDecimal: [{
                type: Input,
                args: ['decimal']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDecimalDigits: [{
                type: Input,
                args: ['decimalDigits']
            }], attrDecimalSeparator: [{
                type: Input,
                args: ['decimalSeparator']
            }], attrDigits: [{
                type: Input,
                args: ['digits']
            }], attrGroupSeparator: [{
                type: Input,
                args: ['groupSeparator']
            }], attrGroupSize: [{
                type: Input,
                args: ['groupSize']
            }], attrInputMode: [{
                type: Input,
                args: ['inputMode']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrNegativeSymbol: [{
                type: Input,
                args: ['negativeSymbol']
            }], attrPlaceHolder: [{
                type: Input,
                args: ['placeHolder']
            }], attrPromptChar: [{
                type: Input,
                args: ['promptChar']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrReadOnly: [{
                type: Input,
                args: ['readOnly']
            }], attrSpinMode: [{
                type: Input,
                args: ['spinMode']
            }], attrSpinButtons: [{
                type: Input,
                args: ['spinButtons']
            }], attrSpinButtonsWidth: [{
                type: Input,
                args: ['spinButtonsWidth']
            }], attrSpinButtonsStep: [{
                type: Input,
                args: ['spinButtonsStep']
            }], attrSymbol: [{
                type: Input,
                args: ['symbol']
            }], attrSymbolPosition: [{
                type: Input,
                args: ['symbolPosition']
            }], attrTextAlign: [{
                type: Input,
                args: ['textAlign']
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
            }], onTextchanged: [{
                type: Output
            }], onValueChanged: [{
                type: Output
            }] } });

class jqxNumberInputModule {
}
jqxNumberInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxNumberInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, declarations: [jqxNumberInputComponent], imports: [FormsModule], exports: [jqxNumberInputComponent] });
jqxNumberInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxNumberInputComponent],
                    exports: [jqxNumberInputComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxNumberInputComponent, jqxNumberInputModule };
