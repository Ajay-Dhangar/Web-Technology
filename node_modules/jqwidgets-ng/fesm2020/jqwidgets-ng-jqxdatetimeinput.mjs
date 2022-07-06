import '../jqwidgets/jqxcore';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxcalendar';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxDateTimeInputComponent),
    multi: true
};
class jqxDateTimeInputComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'allowNullDate', 'allowKeyboardDelete', 'clearString', 'culture', 'closeDelay', 'closeCalendarAfterSelection', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'disabled', 'enableBrowserBoundsDetection', 'enableAbsoluteSelection', 'editMode', 'firstDayOfWeek', 'formatString', 'height', 'min', 'max', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'readonly', 'showFooter', 'selectionMode', 'showWeekNumbers', 'showTimeButton', 'showCalendarButton', 'showDeleteButton', 'theme', 'template', 'textAlign', 'todayString', 'value', 'width', 'yearCutoff'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxDateTimeInputComponent events
        this.onChange = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onOpen = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDateTimeInput(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDateTimeInput(this.properties[i])) {
                        this.host.jqxDateTimeInput(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDateTimeInput', options);
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
            this.host.jqxDateTimeInput('val', value);
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxDateTimeInput('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxDateTimeInput('setOptions', options);
    }
    // jqxDateTimeInputComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('animationType', arg);
        }
        else {
            return this.host.jqxDateTimeInput('animationType');
        }
    }
    allowNullDate(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowNullDate', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowNullDate');
        }
    }
    allowKeyboardDelete(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('allowKeyboardDelete', arg);
        }
        else {
            return this.host.jqxDateTimeInput('allowKeyboardDelete');
        }
    }
    clearString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('clearString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('clearString');
        }
    }
    culture(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('culture', arg);
        }
        else {
            return this.host.jqxDateTimeInput('culture');
        }
    }
    closeDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeDelay');
        }
    }
    closeCalendarAfterSelection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('closeCalendarAfterSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('closeCalendarAfterSelection');
        }
    }
    dropDownHorizontalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownHorizontalAlignment');
        }
    }
    dropDownVerticalAlignment(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDateTimeInput('dropDownVerticalAlignment');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('disabled', arg);
        }
        else {
            return this.host.jqxDateTimeInput('disabled');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableBrowserBoundsDetection');
        }
    }
    enableAbsoluteSelection(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('enableAbsoluteSelection', arg);
        }
        else {
            return this.host.jqxDateTimeInput('enableAbsoluteSelection');
        }
    }
    editMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('editMode', arg);
        }
        else {
            return this.host.jqxDateTimeInput('editMode');
        }
    }
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxDateTimeInput('firstDayOfWeek');
        }
    }
    formatString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('formatString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('formatString');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('height', arg);
        }
        else {
            return this.host.jqxDateTimeInput('height');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('min', arg);
        }
        else {
            return this.host.jqxDateTimeInput('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('max', arg);
        }
        else {
            return this.host.jqxDateTimeInput('max');
        }
    }
    openDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('openDelay', arg);
        }
        else {
            return this.host.jqxDateTimeInput('openDelay');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('placeHolder', arg);
        }
        else {
            return this.host.jqxDateTimeInput('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('popupZIndex', arg);
        }
        else {
            return this.host.jqxDateTimeInput('popupZIndex');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('rtl', arg);
        }
        else {
            return this.host.jqxDateTimeInput('rtl');
        }
    }
    readonly(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('readonly', arg);
        }
        else {
            return this.host.jqxDateTimeInput('readonly');
        }
    }
    showFooter(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showFooter', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showFooter');
        }
    }
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('selectionMode', arg);
        }
        else {
            return this.host.jqxDateTimeInput('selectionMode');
        }
    }
    showWeekNumbers(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showWeekNumbers');
        }
    }
    showTimeButton(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showTimeButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showTimeButton');
        }
    }
    showCalendarButton(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showCalendarButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showCalendarButton');
        }
    }
    showDeleteButton(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('showDeleteButton', arg);
        }
        else {
            return this.host.jqxDateTimeInput('showDeleteButton');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('theme', arg);
        }
        else {
            return this.host.jqxDateTimeInput('theme');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('template', arg);
        }
        else {
            return this.host.jqxDateTimeInput('template');
        }
    }
    textAlign(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('textAlign', arg);
        }
        else {
            return this.host.jqxDateTimeInput('textAlign');
        }
    }
    todayString(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('todayString', arg);
        }
        else {
            return this.host.jqxDateTimeInput('todayString');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('value', arg);
        }
        else {
            return this.host.jqxDateTimeInput('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('width', arg);
        }
        else {
            return this.host.jqxDateTimeInput('width');
        }
    }
    yearCutoff(arg) {
        if (arg !== undefined) {
            this.host.jqxDateTimeInput('yearCutoff', arg);
        }
        else {
            return this.host.jqxDateTimeInput('yearCutoff');
        }
    }
    // jqxDateTimeInputComponent functions
    close() {
        this.host.jqxDateTimeInput('close');
    }
    destroy() {
        this.host.jqxDateTimeInput('destroy');
    }
    focus() {
        this.host.jqxDateTimeInput('focus');
    }
    getRange() {
        return this.host.jqxDateTimeInput('getRange');
    }
    getText() {
        return this.host.jqxDateTimeInput('getText');
    }
    getDate() {
        return this.host.jqxDateTimeInput('getDate');
    }
    getMaxDate() {
        return this.host.jqxDateTimeInput('getMaxDate');
    }
    getMinDate() {
        return this.host.jqxDateTimeInput('getMinDate');
    }
    open() {
        this.host.jqxDateTimeInput('open');
    }
    setRange(date, date2) {
        this.host.jqxDateTimeInput('setRange', date, date2);
    }
    setMinDate(date) {
        this.host.jqxDateTimeInput('setMinDate', date);
    }
    setMaxDate(date) {
        this.host.jqxDateTimeInput('setMaxDate', date);
    }
    setDate(date) {
        this.host.jqxDateTimeInput('setDate', date);
    }
    val(value, value2) {
        if (value !== undefined) {
            return this.host.jqxDateTimeInput('val', value, value2);
        }
        else {
            return this.host.jqxDateTimeInput('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('textchanged', (eventData) => { this.onTextchanged.emit(eventData); });
        this.host.on('valueChanged', (eventData) => { this.onValueChanged.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
    }
} //jqxDateTimeInputComponent
jqxDateTimeInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxDateTimeInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxDateTimeInputComponent, selector: "jqxDateTimeInput", inputs: { attrAnimationType: ["animationType", "attrAnimationType"], attrAllowNullDate: ["allowNullDate", "attrAllowNullDate"], attrAllowKeyboardDelete: ["allowKeyboardDelete", "attrAllowKeyboardDelete"], attrClearString: ["clearString", "attrClearString"], attrCulture: ["culture", "attrCulture"], attrCloseDelay: ["closeDelay", "attrCloseDelay"], attrCloseCalendarAfterSelection: ["closeCalendarAfterSelection", "attrCloseCalendarAfterSelection"], attrDropDownHorizontalAlignment: ["dropDownHorizontalAlignment", "attrDropDownHorizontalAlignment"], attrDropDownVerticalAlignment: ["dropDownVerticalAlignment", "attrDropDownVerticalAlignment"], attrDisabled: ["disabled", "attrDisabled"], attrEnableBrowserBoundsDetection: ["enableBrowserBoundsDetection", "attrEnableBrowserBoundsDetection"], attrEnableAbsoluteSelection: ["enableAbsoluteSelection", "attrEnableAbsoluteSelection"], attrEditMode: ["editMode", "attrEditMode"], attrFirstDayOfWeek: ["firstDayOfWeek", "attrFirstDayOfWeek"], attrFormatString: ["formatString", "attrFormatString"], attrMin: ["min", "attrMin"], attrMax: ["max", "attrMax"], attrOpenDelay: ["openDelay", "attrOpenDelay"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrRtl: ["rtl", "attrRtl"], attrReadonly: ["readonly", "attrReadonly"], attrShowFooter: ["showFooter", "attrShowFooter"], attrSelectionMode: ["selectionMode", "attrSelectionMode"], attrShowWeekNumbers: ["showWeekNumbers", "attrShowWeekNumbers"], attrShowTimeButton: ["showTimeButton", "attrShowTimeButton"], attrShowCalendarButton: ["showCalendarButton", "attrShowCalendarButton"], attrShowDeleteButton: ["showDeleteButton", "attrShowDeleteButton"], attrTheme: ["theme", "attrTheme"], attrTemplate: ["template", "attrTemplate"], attrTextAlign: ["textAlign", "attrTextAlign"], attrTodayString: ["todayString", "attrTodayString"], attrValue: ["value", "attrValue"], attrYearCutoff: ["yearCutoff", "attrYearCutoff"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange", onClose: "onClose", onOpen: "onOpen", onTextchanged: "onTextchanged", onValueChanged: "onValueChanged" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<input [(ngModel)]="ngValue">', isInline: true, directives: [{ type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxDateTimeInput',
                    template: '<input [(ngModel)]="ngValue">',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrAllowNullDate: [{
                type: Input,
                args: ['allowNullDate']
            }], attrAllowKeyboardDelete: [{
                type: Input,
                args: ['allowKeyboardDelete']
            }], attrClearString: [{
                type: Input,
                args: ['clearString']
            }], attrCulture: [{
                type: Input,
                args: ['culture']
            }], attrCloseDelay: [{
                type: Input,
                args: ['closeDelay']
            }], attrCloseCalendarAfterSelection: [{
                type: Input,
                args: ['closeCalendarAfterSelection']
            }], attrDropDownHorizontalAlignment: [{
                type: Input,
                args: ['dropDownHorizontalAlignment']
            }], attrDropDownVerticalAlignment: [{
                type: Input,
                args: ['dropDownVerticalAlignment']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnableBrowserBoundsDetection: [{
                type: Input,
                args: ['enableBrowserBoundsDetection']
            }], attrEnableAbsoluteSelection: [{
                type: Input,
                args: ['enableAbsoluteSelection']
            }], attrEditMode: [{
                type: Input,
                args: ['editMode']
            }], attrFirstDayOfWeek: [{
                type: Input,
                args: ['firstDayOfWeek']
            }], attrFormatString: [{
                type: Input,
                args: ['formatString']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrOpenDelay: [{
                type: Input,
                args: ['openDelay']
            }], attrPlaceHolder: [{
                type: Input,
                args: ['placeHolder']
            }], attrPopupZIndex: [{
                type: Input,
                args: ['popupZIndex']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrReadonly: [{
                type: Input,
                args: ['readonly']
            }], attrShowFooter: [{
                type: Input,
                args: ['showFooter']
            }], attrSelectionMode: [{
                type: Input,
                args: ['selectionMode']
            }], attrShowWeekNumbers: [{
                type: Input,
                args: ['showWeekNumbers']
            }], attrShowTimeButton: [{
                type: Input,
                args: ['showTimeButton']
            }], attrShowCalendarButton: [{
                type: Input,
                args: ['showCalendarButton']
            }], attrShowDeleteButton: [{
                type: Input,
                args: ['showDeleteButton']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
            }], attrTextAlign: [{
                type: Input,
                args: ['textAlign']
            }], attrTodayString: [{
                type: Input,
                args: ['todayString']
            }], attrValue: [{
                type: Input,
                args: ['value']
            }], attrYearCutoff: [{
                type: Input,
                args: ['yearCutoff']
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
            }], onTextchanged: [{
                type: Output
            }], onValueChanged: [{
                type: Output
            }] } });

class jqxDateTimeInputModule {
}
jqxDateTimeInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxDateTimeInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, declarations: [jqxDateTimeInputComponent], imports: [FormsModule], exports: [jqxDateTimeInputComponent] });
jqxDateTimeInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxDateTimeInputComponent],
                    exports: [jqxDateTimeInputComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDateTimeInputComponent, jqxDateTimeInputModule };
