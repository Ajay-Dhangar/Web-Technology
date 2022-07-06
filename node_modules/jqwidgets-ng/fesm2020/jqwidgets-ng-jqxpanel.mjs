import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxpanel';
import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxPanelComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoUpdate', 'disabled', 'height', 'rtl', 'sizeMode', 'scrollBarSize', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxPanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxPanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxPanel(this.properties[i])) {
                        this.host.jqxPanel(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxPanel', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxPanel('setOptions', options);
    }
    // jqxPanelComponent properties
    autoUpdate(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('autoUpdate', arg);
        }
        else {
            return this.host.jqxPanel('autoUpdate');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('disabled', arg);
        }
        else {
            return this.host.jqxPanel('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('height', arg);
        }
        else {
            return this.host.jqxPanel('height');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('rtl', arg);
        }
        else {
            return this.host.jqxPanel('rtl');
        }
    }
    sizeMode(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('sizeMode', arg);
        }
        else {
            return this.host.jqxPanel('sizeMode');
        }
    }
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('scrollBarSize', arg);
        }
        else {
            return this.host.jqxPanel('scrollBarSize');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('theme', arg);
        }
        else {
            return this.host.jqxPanel('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxPanel('width', arg);
        }
        else {
            return this.host.jqxPanel('width');
        }
    }
    // jqxPanelComponent functions
    append(HTMLElement) {
        this.host.jqxPanel('append', HTMLElement);
    }
    clearcontent() {
        this.host.jqxPanel('clearcontent');
    }
    destroy() {
        this.host.jqxPanel('destroy');
    }
    focus() {
        this.host.jqxPanel('focus');
    }
    getScrollHeight() {
        return this.host.jqxPanel('getScrollHeight');
    }
    getVScrollPosition() {
        return this.host.jqxPanel('getVScrollPosition');
    }
    getScrollWidth() {
        return this.host.jqxPanel('getScrollWidth');
    }
    getHScrollPosition() {
        return this.host.jqxPanel('getHScrollPosition');
    }
    prepend(HTMLElement) {
        this.host.jqxPanel('prepend', HTMLElement);
    }
    remove(HTMLElement) {
        this.host.jqxPanel('remove', HTMLElement);
    }
    scrollTo(left, top) {
        this.host.jqxPanel('scrollTo', left, top);
    }
    // jqxPanelComponent events
    __wireEvents__() {
    }
} //jqxPanelComponent
jqxPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPanelComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxPanelComponent, selector: "jqxPanel", inputs: { attrAutoUpdate: ["autoUpdate", "attrAutoUpdate"], attrDisabled: ["disabled", "attrDisabled"], attrRtl: ["rtl", "attrRtl"], attrSizeMode: ["sizeMode", "attrSizeMode"], attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxPanel',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAutoUpdate: [{
                type: Input,
                args: ['autoUpdate']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSizeMode: [{
                type: Input,
                args: ['sizeMode']
            }], attrScrollBarSize: [{
                type: Input,
                args: ['scrollBarSize']
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

class jqxPanelModule {
}
jqxPanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxPanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPanelModule, declarations: [jqxPanelComponent], exports: [jqxPanelComponent] });
jqxPanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPanelModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxPanelComponent],
                    exports: [jqxPanelComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxPanelComponent, jqxPanelModule };
