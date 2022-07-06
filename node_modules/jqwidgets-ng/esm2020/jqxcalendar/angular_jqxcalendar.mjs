/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxCalendarComponent),
    multi: true
};
export class jqxCalendarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['backText', 'columnHeaderHeight', 'clearString', 'culture', 'dayNameFormat', 'disabled', 'enableWeekend', 'enableViews', 'enableOtherMonthDays', 'enableFastNavigation', 'enableHover', 'enableAutoNavigation', 'enableTooltips', 'forwardText', 'firstDayOfWeek', 'height', 'min', 'max', 'navigationDelay', 'rowHeaderWidth', 'readOnly', 'restrictedDates', 'rtl', 'stepMonths', 'showWeekNumbers', 'showDayNames', 'showOtherMonthDays', 'showFooter', 'selectionMode', 'specialDates', 'theme', 'titleHeight', 'titleFormat', 'todayString', 'value', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxCalendarComponent events
        this.onBackButtonClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onNextButtonClick = new EventEmitter();
        this.onViewChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxCalendar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxCalendar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxCalendar(this.properties[i])) {
                        this.host.jqxCalendar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCalendar', options);
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
            this.host.jqxCalendar('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxCalendar('setOptions', options);
    }
    // jqxCalendarComponent properties
    backText(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('backText', arg);
        }
        else {
            return this.host.jqxCalendar('backText');
        }
    }
    columnHeaderHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('columnHeaderHeight', arg);
        }
        else {
            return this.host.jqxCalendar('columnHeaderHeight');
        }
    }
    clearString(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('clearString', arg);
        }
        else {
            return this.host.jqxCalendar('clearString');
        }
    }
    culture(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('culture', arg);
        }
        else {
            return this.host.jqxCalendar('culture');
        }
    }
    dayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('dayNameFormat', arg);
        }
        else {
            return this.host.jqxCalendar('dayNameFormat');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('disabled', arg);
        }
        else {
            return this.host.jqxCalendar('disabled');
        }
    }
    enableWeekend(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableWeekend', arg);
        }
        else {
            return this.host.jqxCalendar('enableWeekend');
        }
    }
    enableViews(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableViews', arg);
        }
        else {
            return this.host.jqxCalendar('enableViews');
        }
    }
    enableOtherMonthDays(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('enableOtherMonthDays');
        }
    }
    enableFastNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableFastNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableFastNavigation');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableHover', arg);
        }
        else {
            return this.host.jqxCalendar('enableHover');
        }
    }
    enableAutoNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableAutoNavigation', arg);
        }
        else {
            return this.host.jqxCalendar('enableAutoNavigation');
        }
    }
    enableTooltips(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('enableTooltips', arg);
        }
        else {
            return this.host.jqxCalendar('enableTooltips');
        }
    }
    forwardText(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('forwardText', arg);
        }
        else {
            return this.host.jqxCalendar('forwardText');
        }
    }
    firstDayOfWeek(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('firstDayOfWeek', arg);
        }
        else {
            return this.host.jqxCalendar('firstDayOfWeek');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('height', arg);
        }
        else {
            return this.host.jqxCalendar('height');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('min', arg);
        }
        else {
            return this.host.jqxCalendar('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('max', arg);
        }
        else {
            return this.host.jqxCalendar('max');
        }
    }
    navigationDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('navigationDelay', arg);
        }
        else {
            return this.host.jqxCalendar('navigationDelay');
        }
    }
    rowHeaderWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rowHeaderWidth', arg);
        }
        else {
            return this.host.jqxCalendar('rowHeaderWidth');
        }
    }
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('readOnly', arg);
        }
        else {
            return this.host.jqxCalendar('readOnly');
        }
    }
    restrictedDates(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('restrictedDates', arg);
        }
        else {
            return this.host.jqxCalendar('restrictedDates');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('rtl', arg);
        }
        else {
            return this.host.jqxCalendar('rtl');
        }
    }
    stepMonths(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('stepMonths', arg);
        }
        else {
            return this.host.jqxCalendar('stepMonths');
        }
    }
    showWeekNumbers(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showWeekNumbers', arg);
        }
        else {
            return this.host.jqxCalendar('showWeekNumbers');
        }
    }
    showDayNames(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showDayNames', arg);
        }
        else {
            return this.host.jqxCalendar('showDayNames');
        }
    }
    showOtherMonthDays(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showOtherMonthDays', arg);
        }
        else {
            return this.host.jqxCalendar('showOtherMonthDays');
        }
    }
    showFooter(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('showFooter', arg);
        }
        else {
            return this.host.jqxCalendar('showFooter');
        }
    }
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('selectionMode', arg);
        }
        else {
            return this.host.jqxCalendar('selectionMode');
        }
    }
    specialDates(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('specialDates', arg);
        }
        else {
            return this.host.jqxCalendar('specialDates');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('theme', arg);
        }
        else {
            return this.host.jqxCalendar('theme');
        }
    }
    titleHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleHeight', arg);
        }
        else {
            return this.host.jqxCalendar('titleHeight');
        }
    }
    titleFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('titleFormat', arg);
        }
        else {
            return this.host.jqxCalendar('titleFormat');
        }
    }
    todayString(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('todayString', arg);
        }
        else {
            return this.host.jqxCalendar('todayString');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('value', arg);
        }
        else {
            return this.host.jqxCalendar('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxCalendar('width', arg);
        }
        else {
            return this.host.jqxCalendar('width');
        }
    }
    // jqxCalendarComponent functions
    clear() {
        this.host.jqxCalendar('clear');
    }
    destroy() {
        this.host.jqxCalendar('destroy');
    }
    focus() {
        this.host.jqxCalendar('focus');
    }
    addSpecialDate(date, specialDateClass, text) {
        this.host.jqxCalendar('addSpecialDate', date, specialDateClass, text);
    }
    getMinDate() {
        return this.host.jqxCalendar('getMinDate');
    }
    getMaxDate() {
        return this.host.jqxCalendar('getMaxDate');
    }
    getDate() {
        return this.host.jqxCalendar('getDate');
    }
    getRange() {
        return this.host.jqxCalendar('getRange');
    }
    navigateForward(months) {
        this.host.jqxCalendar('navigateForward', months);
    }
    navigateBackward(months) {
        this.host.jqxCalendar('navigateBackward', months);
    }
    render() {
        this.host.jqxCalendar('render');
    }
    refresh() {
        this.host.jqxCalendar('refresh');
    }
    setMinDate(date) {
        this.host.jqxCalendar('setMinDate', date);
    }
    setMaxDate(date) {
        this.host.jqxCalendar('setMaxDate', date);
    }
    setDate(date) {
        this.host.jqxCalendar('setDate', date);
    }
    setRange(date, date2) {
        this.host.jqxCalendar('setRange', date, date2);
    }
    today() {
        this.host.jqxCalendar('today');
    }
    val(value, value2) {
        if (value !== undefined) {
            return this.host.jqxCalendar('val', value, value2);
        }
        else {
            return this.host.jqxCalendar('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('backButtonClick', (eventData) => { this.onBackButtonClick.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('nextButtonClick', (eventData) => { this.onNextButtonClick.emit(eventData); });
        this.host.on('viewChange', (eventData) => { this.onViewChange.emit(eventData); });
    }
} //jqxCalendarComponent
jqxCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCalendarComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxCalendarComponent, selector: "jqxCalendar", inputs: { attrBackText: ["backText", "attrBackText"], attrColumnHeaderHeight: ["columnHeaderHeight", "attrColumnHeaderHeight"], attrClearString: ["clearString", "attrClearString"], attrCulture: ["culture", "attrCulture"], attrDayNameFormat: ["dayNameFormat", "attrDayNameFormat"], attrDisabled: ["disabled", "attrDisabled"], attrEnableWeekend: ["enableWeekend", "attrEnableWeekend"], attrEnableViews: ["enableViews", "attrEnableViews"], attrEnableOtherMonthDays: ["enableOtherMonthDays", "attrEnableOtherMonthDays"], attrEnableFastNavigation: ["enableFastNavigation", "attrEnableFastNavigation"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEnableAutoNavigation: ["enableAutoNavigation", "attrEnableAutoNavigation"], attrEnableTooltips: ["enableTooltips", "attrEnableTooltips"], attrForwardText: ["forwardText", "attrForwardText"], attrFirstDayOfWeek: ["firstDayOfWeek", "attrFirstDayOfWeek"], attrMin: ["min", "attrMin"], attrMax: ["max", "attrMax"], attrNavigationDelay: ["navigationDelay", "attrNavigationDelay"], attrRowHeaderWidth: ["rowHeaderWidth", "attrRowHeaderWidth"], attrReadOnly: ["readOnly", "attrReadOnly"], attrRestrictedDates: ["restrictedDates", "attrRestrictedDates"], attrRtl: ["rtl", "attrRtl"], attrStepMonths: ["stepMonths", "attrStepMonths"], attrShowWeekNumbers: ["showWeekNumbers", "attrShowWeekNumbers"], attrShowDayNames: ["showDayNames", "attrShowDayNames"], attrShowOtherMonthDays: ["showOtherMonthDays", "attrShowOtherMonthDays"], attrShowFooter: ["showFooter", "attrShowFooter"], attrSelectionMode: ["selectionMode", "attrSelectionMode"], attrSpecialDates: ["specialDates", "attrSpecialDates"], attrTheme: ["theme", "attrTheme"], attrTitleHeight: ["titleHeight", "attrTitleHeight"], attrTitleFormat: ["titleFormat", "attrTitleFormat"], attrTodayString: ["todayString", "attrTodayString"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBackButtonClick: "onBackButtonClick", onChange: "onChange", onNextButtonClick: "onNextButtonClick", onViewChange: "onViewChange" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCalendarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxCalendar',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrBackText: [{
                type: Input,
                args: ['backText']
            }], attrColumnHeaderHeight: [{
                type: Input,
                args: ['columnHeaderHeight']
            }], attrClearString: [{
                type: Input,
                args: ['clearString']
            }], attrCulture: [{
                type: Input,
                args: ['culture']
            }], attrDayNameFormat: [{
                type: Input,
                args: ['dayNameFormat']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnableWeekend: [{
                type: Input,
                args: ['enableWeekend']
            }], attrEnableViews: [{
                type: Input,
                args: ['enableViews']
            }], attrEnableOtherMonthDays: [{
                type: Input,
                args: ['enableOtherMonthDays']
            }], attrEnableFastNavigation: [{
                type: Input,
                args: ['enableFastNavigation']
            }], attrEnableHover: [{
                type: Input,
                args: ['enableHover']
            }], attrEnableAutoNavigation: [{
                type: Input,
                args: ['enableAutoNavigation']
            }], attrEnableTooltips: [{
                type: Input,
                args: ['enableTooltips']
            }], attrForwardText: [{
                type: Input,
                args: ['forwardText']
            }], attrFirstDayOfWeek: [{
                type: Input,
                args: ['firstDayOfWeek']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrNavigationDelay: [{
                type: Input,
                args: ['navigationDelay']
            }], attrRowHeaderWidth: [{
                type: Input,
                args: ['rowHeaderWidth']
            }], attrReadOnly: [{
                type: Input,
                args: ['readOnly']
            }], attrRestrictedDates: [{
                type: Input,
                args: ['restrictedDates']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrStepMonths: [{
                type: Input,
                args: ['stepMonths']
            }], attrShowWeekNumbers: [{
                type: Input,
                args: ['showWeekNumbers']
            }], attrShowDayNames: [{
                type: Input,
                args: ['showDayNames']
            }], attrShowOtherMonthDays: [{
                type: Input,
                args: ['showOtherMonthDays']
            }], attrShowFooter: [{
                type: Input,
                args: ['showFooter']
            }], attrSelectionMode: [{
                type: Input,
                args: ['selectionMode']
            }], attrSpecialDates: [{
                type: Input,
                args: ['specialDates']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTitleHeight: [{
                type: Input,
                args: ['titleHeight']
            }], attrTitleFormat: [{
                type: Input,
                args: ['titleFormat']
            }], attrTodayString: [{
                type: Input,
                args: ['todayString']
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
            }], onBackButtonClick: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onNextButtonClick: [{
                type: Output
            }], onViewChange: [{
                type: Output
            }] } });
