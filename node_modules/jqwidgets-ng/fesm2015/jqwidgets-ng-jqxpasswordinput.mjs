import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxpasswordinput';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxPasswordInputComponent),
    multi: true
};
class jqxPasswordInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'height', 'localization', 'maxLength', 'placeHolder', 'passwordStrength', 'rtl', 'strengthColors', 'showStrength', 'showStrengthPosition', 'strengthTypeRenderer', 'showPasswordIcon', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxPasswordInputComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPasswordInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPasswordInput(this.properties[i])) {
                        this.host.jqxPasswordInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPasswordInput', options);
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
            this.host.jqxPasswordInput('val', value);
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxPasswordInput('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxPasswordInput('setOptions', options);
    }
    // jqxPasswordInputComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('disabled', arg);
        }
        else {
            return this.host.jqxPasswordInput('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('height', arg);
        }
        else {
            return this.host.jqxPasswordInput('height');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('localization', arg);
        }
        else {
            return this.host.jqxPasswordInput('localization');
        }
    }
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('maxLength', arg);
        }
        else {
            return this.host.jqxPasswordInput('maxLength');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('placeHolder', arg);
        }
        else {
            return this.host.jqxPasswordInput('placeHolder');
        }
    }
    passwordStrength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('passwordStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('passwordStrength');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('rtl', arg);
        }
        else {
            return this.host.jqxPasswordInput('rtl');
        }
    }
    strengthColors(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthColors', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthColors');
        }
    }
    showStrength(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrength', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrength');
        }
    }
    showStrengthPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showStrengthPosition', arg);
        }
        else {
            return this.host.jqxPasswordInput('showStrengthPosition');
        }
    }
    strengthTypeRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('strengthTypeRenderer', arg);
        }
        else {
            return this.host.jqxPasswordInput('strengthTypeRenderer');
        }
    }
    showPasswordIcon(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('showPasswordIcon', arg);
        }
        else {
            return this.host.jqxPasswordInput('showPasswordIcon');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('theme', arg);
        }
        else {
            return this.host.jqxPasswordInput('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPasswordInput('width', arg);
        }
        else {
            return this.host.jqxPasswordInput('width');
        }
    }
    // jqxPasswordInputComponent functions
    render() {
        this.host.jqxPasswordInput('render');
    }
    refresh() {
        this.host.jqxPasswordInput('refresh');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxPasswordInput('val', value);
        }
        else {
            return this.host.jqxPasswordInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
} //jqxPasswordInputComponent
jqxPasswordInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxPasswordInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxPasswordInputComponent, selector: "jqxPasswordInput", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrLocalization: ["localization", "attrLocalization"], attrMaxLength: ["maxLength", "attrMaxLength"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrPasswordStrength: ["passwordStrength", "attrPasswordStrength"], attrRtl: ["rtl", "attrRtl"], attrStrengthColors: ["strengthColors", "attrStrengthColors"], attrShowStrength: ["showStrength", "attrShowStrength"], attrShowStrengthPosition: ["showStrengthPosition", "attrShowStrengthPosition"], attrStrengthTypeRenderer: ["strengthTypeRenderer", "attrStrengthTypeRenderer"], attrShowPasswordIcon: ["showPasswordIcon", "attrShowPasswordIcon"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<input type="password" [(ngModel)]="ngValue">', isInline: true, directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxPasswordInput',
                    template: '<input type="password" [(ngModel)]="ngValue">',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrLocalization: [{
                type: Input,
                args: ['localization']
            }], attrMaxLength: [{
                type: Input,
                args: ['maxLength']
            }], attrPlaceHolder: [{
                type: Input,
                args: ['placeHolder']
            }], attrPasswordStrength: [{
                type: Input,
                args: ['passwordStrength']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrStrengthColors: [{
                type: Input,
                args: ['strengthColors']
            }], attrShowStrength: [{
                type: Input,
                args: ['showStrength']
            }], attrShowStrengthPosition: [{
                type: Input,
                args: ['showStrengthPosition']
            }], attrStrengthTypeRenderer: [{
                type: Input,
                args: ['strengthTypeRenderer']
            }], attrShowPasswordIcon: [{
                type: Input,
                args: ['showPasswordIcon']
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
            }], onChange: [{
                type: Output
            }] } });

class jqxPasswordInputModule {
}
jqxPasswordInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxPasswordInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, declarations: [jqxPasswordInputComponent], imports: [FormsModule], exports: [jqxPasswordInputComponent] });
jqxPasswordInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxPasswordInputComponent],
                    exports: [jqxPasswordInputComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxPasswordInputComponent, jqxPasswordInputModule };
