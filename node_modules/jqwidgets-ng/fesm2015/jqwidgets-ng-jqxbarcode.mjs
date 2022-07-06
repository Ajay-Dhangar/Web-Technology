import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbarcode';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxBarcodeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['backgroundColor', 'displayLabel', 'labelColor', 'labelFont', 'labelFontSize', 'labelMarginBottom', 'labelMarginTop', 'labelPosition', 'lineColor', 'lineHeight', 'lineWidth', 'renderAs', 'type', 'value'];
        // jqxBarcodeComponent events
        this.onInvalid = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxBarcode(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxBarcode(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxBarcode(this.properties[i])) {
                        this.host.jqxBarcode(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxBarcode', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxBarcode('setOptions', options);
    }
    // jqxBarcodeComponent properties
    backgroundColor(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('backgroundColor', arg);
        }
        else {
            return this.host.jqxBarcode('backgroundColor');
        }
    }
    displayLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('displayLabel', arg);
        }
        else {
            return this.host.jqxBarcode('displayLabel');
        }
    }
    labelColor(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('labelColor', arg);
        }
        else {
            return this.host.jqxBarcode('labelColor');
        }
    }
    labelFont(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('labelFont', arg);
        }
        else {
            return this.host.jqxBarcode('labelFont');
        }
    }
    labelFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('labelFontSize', arg);
        }
        else {
            return this.host.jqxBarcode('labelFontSize');
        }
    }
    labelMarginBottom(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('labelMarginBottom', arg);
        }
        else {
            return this.host.jqxBarcode('labelMarginBottom');
        }
    }
    labelMarginTop(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('labelMarginTop', arg);
        }
        else {
            return this.host.jqxBarcode('labelMarginTop');
        }
    }
    labelPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('labelPosition', arg);
        }
        else {
            return this.host.jqxBarcode('labelPosition');
        }
    }
    lineColor(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('lineColor', arg);
        }
        else {
            return this.host.jqxBarcode('lineColor');
        }
    }
    lineHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('lineHeight', arg);
        }
        else {
            return this.host.jqxBarcode('lineHeight');
        }
    }
    lineWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('lineWidth', arg);
        }
        else {
            return this.host.jqxBarcode('lineWidth');
        }
    }
    renderAs(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('renderAs', arg);
        }
        else {
            return this.host.jqxBarcode('renderAs');
        }
    }
    type(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('type', arg);
        }
        else {
            return this.host.jqxBarcode('type');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxBarcode('value', arg);
        }
        else {
            return this.host.jqxBarcode('value');
        }
    }
    // jqxBarcodeComponent functions
    export(format, fileName) {
        return this.host.jqxBarcode('export', format, fileName);
    }
    getDataURL(format) {
        return this.host.jqxBarcode('getDataURL', format);
    }
    getDataURLAsync(format) {
        return this.host.jqxBarcode('getDataURLAsync', format);
    }
    isValid() {
        return this.host.jqxBarcode('isValid');
    }
    __wireEvents__() {
        this.host.on('invalid', (eventData) => { this.onInvalid.emit(eventData); });
    }
} //jqxBarcodeComponent
jqxBarcodeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxBarcodeComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxBarcodeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxBarcodeComponent, selector: "jqxBarcode", inputs: { attrBackgroundColor: ["backgroundColor", "attrBackgroundColor"], attrDisplayLabel: ["displayLabel", "attrDisplayLabel"], attrLabelColor: ["labelColor", "attrLabelColor"], attrLabelFont: ["labelFont", "attrLabelFont"], attrLabelFontSize: ["labelFontSize", "attrLabelFontSize"], attrLabelMarginBottom: ["labelMarginBottom", "attrLabelMarginBottom"], attrLabelMarginTop: ["labelMarginTop", "attrLabelMarginTop"], attrLabelPosition: ["labelPosition", "attrLabelPosition"], attrLineColor: ["lineColor", "attrLineColor"], attrLineHeight: ["lineHeight", "attrLineHeight"], attrLineWidth: ["lineWidth", "attrLineWidth"], attrRenderAs: ["renderAs", "attrRenderAs"], attrType: ["type", "attrType"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onInvalid: "onInvalid" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxBarcodeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxBarcode',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrBackgroundColor: [{
                type: Input,
                args: ['backgroundColor']
            }], attrDisplayLabel: [{
                type: Input,
                args: ['displayLabel']
            }], attrLabelColor: [{
                type: Input,
                args: ['labelColor']
            }], attrLabelFont: [{
                type: Input,
                args: ['labelFont']
            }], attrLabelFontSize: [{
                type: Input,
                args: ['labelFontSize']
            }], attrLabelMarginBottom: [{
                type: Input,
                args: ['labelMarginBottom']
            }], attrLabelMarginTop: [{
                type: Input,
                args: ['labelMarginTop']
            }], attrLabelPosition: [{
                type: Input,
                args: ['labelPosition']
            }], attrLineColor: [{
                type: Input,
                args: ['lineColor']
            }], attrLineHeight: [{
                type: Input,
                args: ['lineHeight']
            }], attrLineWidth: [{
                type: Input,
                args: ['lineWidth']
            }], attrRenderAs: [{
                type: Input,
                args: ['renderAs']
            }], attrType: [{
                type: Input,
                args: ['type']
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
            }], onInvalid: [{
                type: Output
            }] } });

class jqxBarcodeModule {
}
jqxBarcodeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxBarcodeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxBarcodeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxBarcodeModule, declarations: [jqxBarcodeComponent], exports: [jqxBarcodeComponent] });
jqxBarcodeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxBarcodeModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxBarcodeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxBarcodeComponent],
                    exports: [jqxBarcodeComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxBarcodeComponent, jqxBarcodeModule };
