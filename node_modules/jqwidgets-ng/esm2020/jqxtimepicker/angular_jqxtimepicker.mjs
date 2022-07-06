/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxTimePickerComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoSwitchToMinutes', 'disabled', 'footer', 'footerTemplate', 'format', 'height', 'minuteInterval', 'name', 'readonly', 'selection', 'theme', 'unfocusable', 'value', 'view', 'width'];
        // jqxTimePickerComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTimePicker(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTimePicker(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTimePicker(this.properties[i])) {
                        this.host.jqxTimePicker(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTimePicker', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTimePicker('setOptions', options);
    }
    // jqxTimePickerComponent properties
    autoSwitchToMinutes(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('autoSwitchToMinutes', arg);
        }
        else {
            return this.host.jqxTimePicker('autoSwitchToMinutes');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('disabled', arg);
        }
        else {
            return this.host.jqxTimePicker('disabled');
        }
    }
    footer(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('footer', arg);
        }
        else {
            return this.host.jqxTimePicker('footer');
        }
    }
    footerTemplate(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('footerTemplate', arg);
        }
        else {
            return this.host.jqxTimePicker('footerTemplate');
        }
    }
    format(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('format', arg);
        }
        else {
            return this.host.jqxTimePicker('format');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('height', arg);
        }
        else {
            return this.host.jqxTimePicker('height');
        }
    }
    minuteInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('minuteInterval', arg);
        }
        else {
            return this.host.jqxTimePicker('minuteInterval');
        }
    }
    name(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('name', arg);
        }
        else {
            return this.host.jqxTimePicker('name');
        }
    }
    readonly(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('readonly', arg);
        }
        else {
            return this.host.jqxTimePicker('readonly');
        }
    }
    selection(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('selection', arg);
        }
        else {
            return this.host.jqxTimePicker('selection');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('theme', arg);
        }
        else {
            return this.host.jqxTimePicker('theme');
        }
    }
    unfocusable(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('unfocusable', arg);
        }
        else {
            return this.host.jqxTimePicker('unfocusable');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('value', arg);
        }
        else {
            return this.host.jqxTimePicker('value');
        }
    }
    view(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('view', arg);
        }
        else {
            return this.host.jqxTimePicker('view');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTimePicker('width', arg);
        }
        else {
            return this.host.jqxTimePicker('width');
        }
    }
    // jqxTimePickerComponent functions
    setHours(hours) {
        this.host.jqxTimePicker('setHours', hours);
    }
    setMinutes(minutes) {
        this.host.jqxTimePicker('setMinutes', minutes);
    }
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
} //jqxTimePickerComponent
jqxTimePickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTimePickerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTimePickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTimePickerComponent, selector: "jqxTimePicker", inputs: { attrAutoSwitchToMinutes: ["autoSwitchToMinutes", "attrAutoSwitchToMinutes"], attrDisabled: ["disabled", "attrDisabled"], attrFooter: ["footer", "attrFooter"], attrFooterTemplate: ["footerTemplate", "attrFooterTemplate"], attrFormat: ["format", "attrFormat"], attrMinuteInterval: ["minuteInterval", "attrMinuteInterval"], attrName: ["name", "attrName"], attrReadonly: ["readonly", "attrReadonly"], attrSelection: ["selection", "attrSelection"], attrTheme: ["theme", "attrTheme"], attrUnfocusable: ["unfocusable", "attrUnfocusable"], attrValue: ["value", "attrValue"], attrView: ["view", "attrView"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTimePickerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTimePicker',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAutoSwitchToMinutes: [{
                type: Input,
                args: ['autoSwitchToMinutes']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrFooter: [{
                type: Input,
                args: ['footer']
            }], attrFooterTemplate: [{
                type: Input,
                args: ['footerTemplate']
            }], attrFormat: [{
                type: Input,
                args: ['format']
            }], attrMinuteInterval: [{
                type: Input,
                args: ['minuteInterval']
            }], attrName: [{
                type: Input,
                args: ['name']
            }], attrReadonly: [{
                type: Input,
                args: ['readonly']
            }], attrSelection: [{
                type: Input,
                args: ['selection']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrUnfocusable: [{
                type: Input,
                args: ['unfocusable']
            }], attrValue: [{
                type: Input,
                args: ['value']
            }], attrView: [{
                type: Input,
                args: ['view']
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
