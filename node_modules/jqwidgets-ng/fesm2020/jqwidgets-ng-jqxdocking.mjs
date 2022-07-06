import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import '../jqwidgets/jqxdocking';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxDockingComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['cookies', 'cookieOptions', 'disabled', 'floatingWindowOpacity', 'height', 'keyboardNavigation', 'mode', 'orientation', 'rtl', 'theme', 'width', 'windowsMode', 'windowsOffset'];
        // jqxDockingComponent events
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDocking(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDocking(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDocking(this.properties[i])) {
                        this.host.jqxDocking(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDocking', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDocking('setOptions', options);
    }
    // jqxDockingComponent properties
    cookies(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookies', arg);
        }
        else {
            return this.host.jqxDocking('cookies');
        }
    }
    cookieOptions(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('cookieOptions', arg);
        }
        else {
            return this.host.jqxDocking('cookieOptions');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('disabled', arg);
        }
        else {
            return this.host.jqxDocking('disabled');
        }
    }
    floatingWindowOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('floatingWindowOpacity', arg);
        }
        else {
            return this.host.jqxDocking('floatingWindowOpacity');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('height', arg);
        }
        else {
            return this.host.jqxDocking('height');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxDocking('keyboardNavigation');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('mode', arg);
        }
        else {
            return this.host.jqxDocking('mode');
        }
    }
    orientation(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('orientation', arg);
        }
        else {
            return this.host.jqxDocking('orientation');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('rtl', arg);
        }
        else {
            return this.host.jqxDocking('rtl');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('theme', arg);
        }
        else {
            return this.host.jqxDocking('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('width', arg);
        }
        else {
            return this.host.jqxDocking('width');
        }
    }
    windowsMode(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsMode', arg);
        }
        else {
            return this.host.jqxDocking('windowsMode');
        }
    }
    windowsOffset(arg) {
        if (arg !== undefined) {
            this.host.jqxDocking('windowsOffset', arg);
        }
        else {
            return this.host.jqxDocking('windowsOffset');
        }
    }
    // jqxDockingComponent functions
    addWindow(windowId, mode, panel, position) {
        this.host.jqxDocking('addWindow', windowId, mode, panel, position);
    }
    closeWindow(windowId) {
        this.host.jqxDocking('closeWindow', windowId);
    }
    collapseWindow(windowId) {
        this.host.jqxDocking('collapseWindow', windowId);
    }
    destroy() {
        this.host.jqxDocking('destroy');
    }
    disableWindowResize(windowId) {
        this.host.jqxDocking('disableWindowResize', windowId);
    }
    disable() {
        this.host.jqxDocking('disable');
    }
    exportLayout() {
        return this.host.jqxDocking('exportLayout');
    }
    enable() {
        this.host.jqxDocking('enable');
    }
    expandWindow(windowId) {
        this.host.jqxDocking('expandWindow', windowId);
    }
    enableWindowResize(windowId) {
        this.host.jqxDocking('enableWindowResize', windowId);
    }
    focus() {
        this.host.jqxDocking('focus');
    }
    hideAllCloseButtons() {
        this.host.jqxDocking('hideAllCloseButtons');
    }
    hideAllCollapseButtons() {
        this.host.jqxDocking('hideAllCollapseButtons');
    }
    hideCollapseButton(windowId) {
        this.host.jqxDocking('hideCollapseButton', windowId);
    }
    hideCloseButton(windowId) {
        this.host.jqxDocking('hideCloseButton', windowId);
    }
    importLayout(Json) {
        this.host.jqxDocking('importLayout', Json);
    }
    move(windowId, panel, position) {
        this.host.jqxDocking('move', windowId, panel, position);
    }
    pinWindow(windowId) {
        this.host.jqxDocking('pinWindow', windowId);
    }
    setWindowMode(windowId, mode) {
        this.host.jqxDocking('setWindowMode', windowId, mode);
    }
    showCloseButton(windowId) {
        this.host.jqxDocking('showCloseButton', windowId);
    }
    showCollapseButton(windowId) {
        this.host.jqxDocking('showCollapseButton', windowId);
    }
    setWindowPosition(windowId, top, left) {
        this.host.jqxDocking('setWindowPosition', windowId, top, left);
    }
    showAllCloseButtons() {
        this.host.jqxDocking('showAllCloseButtons');
    }
    showAllCollapseButtons() {
        this.host.jqxDocking('showAllCollapseButtons');
    }
    unpinWindow(windowId) {
        this.host.jqxDocking('unpinWindow', windowId);
    }
    __wireEvents__() {
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
    }
} //jqxDockingComponent
jqxDockingComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxDockingComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxDockingComponent, selector: "jqxDocking", inputs: { attrCookies: ["cookies", "attrCookies"], attrCookieOptions: ["cookieOptions", "attrCookieOptions"], attrDisabled: ["disabled", "attrDisabled"], attrFloatingWindowOpacity: ["floatingWindowOpacity", "attrFloatingWindowOpacity"], attrKeyboardNavigation: ["keyboardNavigation", "attrKeyboardNavigation"], attrMode: ["mode", "attrMode"], attrOrientation: ["orientation", "attrOrientation"], attrRtl: ["rtl", "attrRtl"], attrTheme: ["theme", "attrTheme"], attrWindowsMode: ["windowsMode", "attrWindowsMode"], attrWindowsOffset: ["windowsOffset", "attrWindowsOffset"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onDragStart: "onDragStart", onDragEnd: "onDragEnd" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxDocking',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrCookies: [{
                type: Input,
                args: ['cookies']
            }], attrCookieOptions: [{
                type: Input,
                args: ['cookieOptions']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrFloatingWindowOpacity: [{
                type: Input,
                args: ['floatingWindowOpacity']
            }], attrKeyboardNavigation: [{
                type: Input,
                args: ['keyboardNavigation']
            }], attrMode: [{
                type: Input,
                args: ['mode']
            }], attrOrientation: [{
                type: Input,
                args: ['orientation']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrWindowsMode: [{
                type: Input,
                args: ['windowsMode']
            }], attrWindowsOffset: [{
                type: Input,
                args: ['windowsOffset']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onDragStart: [{
                type: Output
            }], onDragEnd: [{
                type: Output
            }] } });

class jqxDockingModule {
}
jqxDockingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxDockingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingModule, declarations: [jqxDockingComponent], exports: [jqxDockingComponent] });
jqxDockingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDockingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxDockingComponent],
                    exports: [jqxDockingComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDockingComponent, jqxDockingModule };
