import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxcheckbox';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxCheckBoxComponent),
    multi: true
};
class jqxCheckBoxComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDelay', 'animationHideDelay', 'boxSize', 'checked', 'disabled', 'enableContainerClick', 'groupName', 'height', 'hasThreeStates', 'locked', 'rtl', 'theme', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxCheckBoxComponent events
        this.onChecked = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onIndeterminate = new EventEmitter();
        this.onUnchecked = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxCheckBox(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxCheckBox(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxCheckBox(this.properties[i])) {
                        this.host.jqxCheckBox(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxCheckBox', options);
        options.checked !== undefined ? this.onChangeCallback(options.checked) : this.onChangeCallback(false);
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
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxCheckBox('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxCheckBox('setOptions', options);
    }
    // jqxCheckBoxComponent properties
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('animationShowDelay', arg);
        }
        else {
            return this.host.jqxCheckBox('animationShowDelay');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('animationHideDelay', arg);
        }
        else {
            return this.host.jqxCheckBox('animationHideDelay');
        }
    }
    boxSize(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('boxSize', arg);
        }
        else {
            return this.host.jqxCheckBox('boxSize');
        }
    }
    checked(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('checked', arg);
        }
        else {
            return this.host.jqxCheckBox('checked');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('disabled', arg);
        }
        else {
            return this.host.jqxCheckBox('disabled');
        }
    }
    enableContainerClick(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('enableContainerClick', arg);
        }
        else {
            return this.host.jqxCheckBox('enableContainerClick');
        }
    }
    groupName(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('groupName', arg);
        }
        else {
            return this.host.jqxCheckBox('groupName');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('height', arg);
        }
        else {
            return this.host.jqxCheckBox('height');
        }
    }
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('hasThreeStates', arg);
        }
        else {
            return this.host.jqxCheckBox('hasThreeStates');
        }
    }
    locked(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('locked', arg);
        }
        else {
            return this.host.jqxCheckBox('locked');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('rtl', arg);
        }
        else {
            return this.host.jqxCheckBox('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('theme', arg);
        }
        else {
            return this.host.jqxCheckBox('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxCheckBox('width', arg);
        }
        else {
            return this.host.jqxCheckBox('width');
        }
    }
    // jqxCheckBoxComponent functions
    check() {
        this.host.jqxCheckBox('check');
    }
    disable() {
        this.host.jqxCheckBox('disable');
    }
    destroy() {
        this.host.jqxCheckBox('destroy');
    }
    enable() {
        this.host.jqxCheckBox('enable');
    }
    focus() {
        this.host.jqxCheckBox('focus');
    }
    indeterminate() {
        this.host.jqxCheckBox('indeterminate');
    }
    render() {
        this.host.jqxCheckBox('render');
    }
    toggle() {
        this.host.jqxCheckBox('toggle');
    }
    uncheck() {
        this.host.jqxCheckBox('uncheck');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxCheckBox('val', value);
        }
        else {
            return this.host.jqxCheckBox('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('checked', (eventData) => { this.onChecked.emit(eventData); });
        this.host.on('change', (eventData) => {
            this.onChange.emit(eventData);
            if (eventData.args)
                this.onChangeCallback(eventData.args.checked);
        });
        this.host.on('indeterminate', (eventData) => { this.onIndeterminate.emit(eventData); });
        this.host.on('unchecked', (eventData) => { this.onUnchecked.emit(eventData); });
    }
} //jqxCheckBoxComponent
jqxCheckBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxCheckBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxCheckBoxComponent, selector: "jqxCheckBox", inputs: { attrAnimationShowDelay: ["animationShowDelay", "attrAnimationShowDelay"], attrAnimationHideDelay: ["animationHideDelay", "attrAnimationHideDelay"], attrBoxSize: ["boxSize", "attrBoxSize"], attrChecked: ["checked", "attrChecked"], attrDisabled: ["disabled", "attrDisabled"], attrEnableContainerClick: ["enableContainerClick", "attrEnableContainerClick"], attrGroupName: ["groupName", "attrGroupName"], attrHasThreeStates: ["hasThreeStates", "attrHasThreeStates"], attrLocked: ["locked", "attrLocked"], attrRtl: ["rtl", "attrRtl"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChecked: "onChecked", onChange: "onChange", onIndeterminate: "onIndeterminate", onUnchecked: "onUnchecked" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxCheckBox',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationShowDelay: [{
                type: Input,
                args: ['animationShowDelay']
            }], attrAnimationHideDelay: [{
                type: Input,
                args: ['animationHideDelay']
            }], attrBoxSize: [{
                type: Input,
                args: ['boxSize']
            }], attrChecked: [{
                type: Input,
                args: ['checked']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnableContainerClick: [{
                type: Input,
                args: ['enableContainerClick']
            }], attrGroupName: [{
                type: Input,
                args: ['groupName']
            }], attrHasThreeStates: [{
                type: Input,
                args: ['hasThreeStates']
            }], attrLocked: [{
                type: Input,
                args: ['locked']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
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
            }], onChecked: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onIndeterminate: [{
                type: Output
            }], onUnchecked: [{
                type: Output
            }] } });

class jqxCheckBoxModule {
}
jqxCheckBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxCheckBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, declarations: [jqxCheckBoxComponent], imports: [FormsModule], exports: [jqxCheckBoxComponent] });
jqxCheckBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxCheckBoxComponent],
                    exports: [jqxCheckBoxComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxCheckBoxComponent, jqxCheckBoxModule };
