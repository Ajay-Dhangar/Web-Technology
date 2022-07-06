import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxloader';
import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxLoaderComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'height', 'html', 'isModal', 'imagePosition', 'rtl', 'text', 'textPosition', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxLoader(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxLoader(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxLoader(this.properties[i])) {
                        this.host.jqxLoader(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxLoader', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxLoader('setOptions', options);
    }
    // jqxLoaderComponent properties
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('autoOpen', arg);
        }
        else {
            return this.host.jqxLoader('autoOpen');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('height', arg);
        }
        else {
            return this.host.jqxLoader('height');
        }
    }
    html(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('html', arg);
        }
        else {
            return this.host.jqxLoader('html');
        }
    }
    isModal(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('isModal', arg);
        }
        else {
            return this.host.jqxLoader('isModal');
        }
    }
    imagePosition(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('imagePosition', arg);
        }
        else {
            return this.host.jqxLoader('imagePosition');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('rtl', arg);
        }
        else {
            return this.host.jqxLoader('rtl');
        }
    }
    text(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('text', arg);
        }
        else {
            return this.host.jqxLoader('text');
        }
    }
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('textPosition', arg);
        }
        else {
            return this.host.jqxLoader('textPosition');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('theme', arg);
        }
        else {
            return this.host.jqxLoader('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxLoader('width', arg);
        }
        else {
            return this.host.jqxLoader('width');
        }
    }
    // jqxLoaderComponent functions
    close() {
        this.host.jqxLoader('close');
    }
    open(left, top) {
        this.host.jqxLoader('open', left, top);
    }
    __wireEvents__() {
    }
} //jqxLoaderComponent
jqxLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLoaderComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxLoaderComponent, selector: "jqxLoader", inputs: { attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrHtml: ["html", "attrHtml"], attrIsModal: ["isModal", "attrIsModal"], attrImagePosition: ["imagePosition", "attrImagePosition"], attrRtl: ["rtl", "attrRtl"], attrText: ["text", "attrText"], attrTextPosition: ["textPosition", "attrTextPosition"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLoaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxLoader',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAutoOpen: [{
                type: Input,
                args: ['autoOpen']
            }], attrHtml: [{
                type: Input,
                args: ['html']
            }], attrIsModal: [{
                type: Input,
                args: ['isModal']
            }], attrImagePosition: [{
                type: Input,
                args: ['imagePosition']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrText: [{
                type: Input,
                args: ['text']
            }], attrTextPosition: [{
                type: Input,
                args: ['textPosition']
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
            }] } });

class jqxLoaderModule {
}
jqxLoaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLoaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxLoaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLoaderModule, declarations: [jqxLoaderComponent], exports: [jqxLoaderComponent] });
jqxLoaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLoaderModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxLoaderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxLoaderComponent],
                    exports: [jqxLoaderComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxLoaderComponent, jqxLoaderModule };
