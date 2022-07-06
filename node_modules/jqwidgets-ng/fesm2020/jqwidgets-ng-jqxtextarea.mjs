import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxtextarea';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxTextAreaComponent),
    multi: true
};
class jqxTextAreaComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'displayMember', 'dropDownWidth', 'height', 'items', 'maxLength', 'minLength', 'opened', 'placeHolder', 'popupZIndex', 'query', 'renderer', 'roundedCorners', 'rtl', 'scrollBarSize', 'searchMode', 'source', 'theme', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxTextAreaComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTextArea(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTextArea(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTextArea(this.properties[i])) {
                        this.host.jqxTextArea(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTextArea', options);
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
            if (value !== null && value !== undefined)
                this.host.jqxTextArea('val', value);
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxTextArea('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxTextArea('setOptions', options);
    }
    // jqxTextAreaComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('disabled', arg);
        }
        else {
            return this.host.jqxTextArea('disabled');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('displayMember', arg);
        }
        else {
            return this.host.jqxTextArea('displayMember');
        }
    }
    dropDownWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('dropDownWidth', arg);
        }
        else {
            return this.host.jqxTextArea('dropDownWidth');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('height', arg);
        }
        else {
            return this.host.jqxTextArea('height');
        }
    }
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('items', arg);
        }
        else {
            return this.host.jqxTextArea('items');
        }
    }
    maxLength(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('maxLength', arg);
        }
        else {
            return this.host.jqxTextArea('maxLength');
        }
    }
    minLength(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('minLength', arg);
        }
        else {
            return this.host.jqxTextArea('minLength');
        }
    }
    opened(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('opened', arg);
        }
        else {
            return this.host.jqxTextArea('opened');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('placeHolder', arg);
        }
        else {
            return this.host.jqxTextArea('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('popupZIndex', arg);
        }
        else {
            return this.host.jqxTextArea('popupZIndex');
        }
    }
    query(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('query', arg);
        }
        else {
            return this.host.jqxTextArea('query');
        }
    }
    renderer(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('renderer', arg);
        }
        else {
            return this.host.jqxTextArea('renderer');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('roundedCorners', arg);
        }
        else {
            return this.host.jqxTextArea('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('rtl', arg);
        }
        else {
            return this.host.jqxTextArea('rtl');
        }
    }
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('scrollBarSize', arg);
        }
        else {
            return this.host.jqxTextArea('scrollBarSize');
        }
    }
    searchMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('searchMode', arg);
        }
        else {
            return this.host.jqxTextArea('searchMode');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('source', arg);
        }
        else {
            return this.host.jqxTextArea('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('theme', arg);
        }
        else {
            return this.host.jqxTextArea('theme');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('valueMember', arg);
        }
        else {
            return this.host.jqxTextArea('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTextArea('width', arg);
        }
        else {
            return this.host.jqxTextArea('width');
        }
    }
    // jqxTextAreaComponent functions
    destroy() {
        this.host.jqxTextArea('destroy');
    }
    focus() {
        this.host.jqxTextArea('focus');
    }
    refresh() {
        this.host.jqxTextArea('refresh');
    }
    render() {
        this.host.jqxTextArea('render');
    }
    selectAll() {
        this.host.jqxTextArea('selectAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTextArea('val', value);
        }
        else {
            return this.host.jqxTextArea('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('keyup', () => { this.onChangeCallback(this.host.val()); });
    }
} //jqxTextAreaComponent
jqxTextAreaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTextAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTextAreaComponent, selector: "jqxTextArea", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrDisplayMember: ["displayMember", "attrDisplayMember"], attrDropDownWidth: ["dropDownWidth", "attrDropDownWidth"], attrItems: ["items", "attrItems"], attrMaxLength: ["maxLength", "attrMaxLength"], attrMinLength: ["minLength", "attrMinLength"], attrOpened: ["opened", "attrOpened"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrQuery: ["query", "attrQuery"], attrRenderer: ["renderer", "attrRenderer"], attrRoundedCorners: ["roundedCorners", "attrRoundedCorners"], attrRtl: ["rtl", "attrRtl"], attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"], attrSearchMode: ["searchMode", "attrSearchMode"], attrSource: ["source", "attrSource"], attrTheme: ["theme", "attrTheme"], attrValueMember: ["valueMember", "attrValueMember"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange", onClose: "onClose", onOpen: "onOpen", onSelect: "onSelect" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTextArea',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDisplayMember: [{
                type: Input,
                args: ['displayMember']
            }], attrDropDownWidth: [{
                type: Input,
                args: ['dropDownWidth']
            }], attrItems: [{
                type: Input,
                args: ['items']
            }], attrMaxLength: [{
                type: Input,
                args: ['maxLength']
            }], attrMinLength: [{
                type: Input,
                args: ['minLength']
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
            }], attrRoundedCorners: [{
                type: Input,
                args: ['roundedCorners']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrScrollBarSize: [{
                type: Input,
                args: ['scrollBarSize']
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

class jqxTextAreaModule {
}
jqxTextAreaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxTextAreaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, declarations: [jqxTextAreaComponent], imports: [FormsModule], exports: [jqxTextAreaComponent] });
jqxTextAreaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxTextAreaComponent],
                    exports: [jqxTextAreaComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTextAreaComponent, jqxTextAreaModule };
