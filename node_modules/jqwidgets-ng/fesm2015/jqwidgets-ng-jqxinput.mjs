import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxinput';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxInputComponent),
    multi: true
};
class jqxInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'dropDownWidth', 'displayMember', 'height', 'items', 'minLength', 'maxLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'rtl', 'searchMode', 'source', 'theme', 'valueMember', 'width', 'value'];
        this.initialLoad = true;
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onSelect = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxInput(this.properties[i])) {
                        this.host.jqxInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxInput', options);
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
            if (typeof value === 'object')
                return '';
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
        if (this.widgetObject && value) {
            if (this.initialLoad) {
                setTimeout(_ => this.host.jqxInput('val', value));
                this.initialLoad = false;
            }
            this.host.jqxInput('val', value);
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxInput('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxInput('setOptions', options);
    }
    // jqxInputComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('disabled', arg);
        }
        else {
            return this.host.jqxInput('disabled');
        }
    }
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('dropDownWidth', arg);
        }
        else {
            return this.host.jqxInput('dropDownWidth');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('displayMember', arg);
        }
        else {
            return this.host.jqxInput('displayMember');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('height', arg);
        }
        else {
            return this.host.jqxInput('height');
        }
    }
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('items', arg);
        }
        else {
            return this.host.jqxInput('items');
        }
    }
    minLength(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('minLength', arg);
        }
        else {
            return this.host.jqxInput('minLength');
        }
    }
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('maxLength', arg);
        }
        else {
            return this.host.jqxInput('maxLength');
        }
    }
    opened(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('opened', arg);
        }
        else {
            return this.host.jqxInput('opened');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('placeHolder', arg);
        }
        else {
            return this.host.jqxInput('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxInput('popupZIndex');
        }
    }
    query(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('query', arg);
        }
        else {
            return this.host.jqxInput('query');
        }
    }
    renderer(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('renderer', arg);
        }
        else {
            return this.host.jqxInput('renderer');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('rtl', arg);
        }
        else {
            return this.host.jqxInput('rtl');
        }
    }
    searchMode(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('searchMode', arg);
        }
        else {
            return this.host.jqxInput('searchMode');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('source', arg);
        }
        else {
            return this.host.jqxInput('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('theme', arg);
        }
        else {
            return this.host.jqxInput('theme');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('valueMember', arg);
        }
        else {
            return this.host.jqxInput('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('width', arg);
        }
        else {
            return this.host.jqxInput('width');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxInput('value', arg);
        }
        else {
            return this.host.jqxInput('value');
        }
    }
    // jqxInputComponent functions
    destroy() {
        this.host.jqxInput('destroy');
    }
    focus() {
        this.host.jqxInput('focus');
    }
    selectAll() {
        this.host.jqxInput('selectAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxInput('val', value);
        }
        else {
            return this.host.jqxInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => {
            this.onSelect.emit(eventData);
            if (eventData.args)
                this.onChangeCallback(eventData.args.value);
        });
    }
} //jqxInputComponent
jqxInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxInputComponent, selector: "jqxInput", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrDropDownWidth: ["dropDownWidth", "attrDropDownWidth"], attrDisplayMember: ["displayMember", "attrDisplayMember"], attrItems: ["items", "attrItems"], attrMinLength: ["minLength", "attrMinLength"], attrMaxLength: ["maxLength", "attrMaxLength"], attrOpened: ["opened", "attrOpened"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrQuery: ["query", "attrQuery"], attrRenderer: ["renderer", "attrRenderer"], attrRtl: ["rtl", "attrRtl"], attrSearchMode: ["searchMode", "attrSearchMode"], attrSource: ["source", "attrSource"], attrTheme: ["theme", "attrTheme"], attrValueMember: ["valueMember", "attrValueMember"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange", onClose: "onClose", onOpen: "onOpen", onSelect: "onSelect" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<input type="text" [(ngModel)]="ngValue">', isInline: true, directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxInput',
                    template: '<input type="text" [(ngModel)]="ngValue">',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDropDownWidth: [{
                type: Input,
                args: ['dropDownWidth']
            }], attrDisplayMember: [{
                type: Input,
                args: ['displayMember']
            }], attrItems: [{
                type: Input,
                args: ['items']
            }], attrMinLength: [{
                type: Input,
                args: ['minLength']
            }], attrMaxLength: [{
                type: Input,
                args: ['maxLength']
            }], attrOpened: [{
                type: Input,
                args: ['opened']
            }], attrPlaceHolder: [{
                type: Input,
                args: ['placeHolder']
            }], attrPopupZIndex: [{
                type: Input,
                args: ['popupZIndex']
            }], attrQuery: [{
                type: Input,
                args: ['query']
            }], attrRenderer: [{
                type: Input,
                args: ['renderer']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSearchMode: [{
                type: Input,
                args: ['searchMode']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrValueMember: [{
                type: Input,
                args: ['valueMember']
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
            }], onClose: [{
                type: Output
            }], onOpen: [{
                type: Output
            }], onSelect: [{
                type: Output
            }] } });

class jqxInputModule {
}
jqxInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, declarations: [jqxInputComponent], imports: [FormsModule], exports: [jqxInputComponent] });
jqxInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxInputComponent],
                    exports: [jqxInputComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxInputComponent, jqxInputModule };
