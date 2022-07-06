import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxdropdownbutton';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxeditor';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxcolorpicker';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxEditorComponent),
    multi: true
};
class jqxEditorComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['createCommand', 'disabled', 'editable', 'height', 'lineBreak', 'localization', 'pasteMode', 'rtl', 'stylesheets', 'theme', 'toolbarPosition', 'tools', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxEditorComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxEditor(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxEditor(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxEditor(this.properties[i])) {
                        this.host.jqxEditor(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxEditor', options);
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
            this.onChangeCallback(this.host.val());
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxEditor('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxEditor('setOptions', options);
    }
    // jqxEditorComponent properties
    createCommand(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('createCommand', arg);
        }
        else {
            return this.host.jqxEditor('createCommand');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('disabled', arg);
        }
        else {
            return this.host.jqxEditor('disabled');
        }
    }
    editable(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('editable', arg);
        }
        else {
            return this.host.jqxEditor('editable');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('height', arg);
        }
        else {
            return this.host.jqxEditor('height');
        }
    }
    lineBreak(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('lineBreak', arg);
        }
        else {
            return this.host.jqxEditor('lineBreak');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('localization', arg);
        }
        else {
            return this.host.jqxEditor('localization');
        }
    }
    pasteMode(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('pasteMode', arg);
        }
        else {
            return this.host.jqxEditor('pasteMode');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('rtl', arg);
        }
        else {
            return this.host.jqxEditor('rtl');
        }
    }
    stylesheets(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('stylesheets', arg);
        }
        else {
            return this.host.jqxEditor('stylesheets');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('theme', arg);
        }
        else {
            return this.host.jqxEditor('theme');
        }
    }
    toolbarPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('toolbarPosition', arg);
        }
        else {
            return this.host.jqxEditor('toolbarPosition');
        }
    }
    tools(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('tools', arg);
        }
        else {
            return this.host.jqxEditor('tools');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxEditor('width', arg);
        }
        else {
            return this.host.jqxEditor('width');
        }
    }
    // jqxEditorComponent functions
    destroy() {
        this.host.jqxEditor('destroy');
    }
    focus() {
        this.host.jqxEditor('focus');
    }
    print() {
        this.host.jqxEditor('print');
    }
    setMode(mode) {
        this.host.jqxEditor('setMode', mode);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxEditor('val', value);
        }
        else {
            return this.host.jqxEditor('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); this.onChangeCallback(this.host.val()); });
    }
} //jqxEditorComponent
jqxEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxEditorComponent, selector: "jqxEditor", inputs: { attrCreateCommand: ["createCommand", "attrCreateCommand"], attrDisabled: ["disabled", "attrDisabled"], attrEditable: ["editable", "attrEditable"], attrLineBreak: ["lineBreak", "attrLineBreak"], attrLocalization: ["localization", "attrLocalization"], attrPasteMode: ["pasteMode", "attrPasteMode"], attrRtl: ["rtl", "attrRtl"], attrStylesheets: ["stylesheets", "attrStylesheets"], attrTheme: ["theme", "attrTheme"], attrToolbarPosition: ["toolbarPosition", "attrToolbarPosition"], attrTools: ["tools", "attrTools"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxEditor',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrCreateCommand: [{
                type: Input,
                args: ['createCommand']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEditable: [{
                type: Input,
                args: ['editable']
            }], attrLineBreak: [{
                type: Input,
                args: ['lineBreak']
            }], attrLocalization: [{
                type: Input,
                args: ['localization']
            }], attrPasteMode: [{
                type: Input,
                args: ['pasteMode']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrStylesheets: [{
                type: Input,
                args: ['stylesheets']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrToolbarPosition: [{
                type: Input,
                args: ['toolbarPosition']
            }], attrTools: [{
                type: Input,
                args: ['tools']
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

class jqxEditorModule {
}
jqxEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, declarations: [jqxEditorComponent], imports: [FormsModule], exports: [jqxEditorComponent] });
jqxEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxEditorComponent],
                    exports: [jqxEditorComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxEditorComponent, jqxEditorModule };
