import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxmenu';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxMenuComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'animationHideDelay', 'animationShowDelay', 'autoCloseInterval', 'autoSizeMainItems', 'autoCloseOnClick', 'autoOpenPopup', 'autoOpen', 'autoCloseOnMouseLeave', 'clickToOpen', 'disabled', 'enableHover', 'easing', 'height', 'keyboardNavigation', 'minimizeWidth', 'mode', 'popupZIndex', 'rtl', 'showTopLevelArrows', 'source', 'theme', 'width'];
        // jqxMenuComponent events
        this.onClosed = new EventEmitter();
        this.onItemclick = new EventEmitter();
        this.onShown = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxMenu(this.properties[i])) {
                        this.host.jqxMenu(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxMenu', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxMenu('setOptions', options);
    }
    // jqxMenuComponent properties
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDuration');
        }
    }
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDuration', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDuration');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationHideDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationHideDelay');
        }
    }
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('animationShowDelay', arg);
        }
        else {
            return this.host.jqxMenu('animationShowDelay');
        }
    }
    autoCloseInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseInterval', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseInterval');
        }
    }
    autoSizeMainItems(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoSizeMainItems', arg);
        }
        else {
            return this.host.jqxMenu('autoSizeMainItems');
        }
    }
    autoCloseOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnClick', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnClick');
        }
    }
    autoOpenPopup(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpenPopup', arg);
        }
        else {
            return this.host.jqxMenu('autoOpenPopup');
        }
    }
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoOpen', arg);
        }
        else {
            return this.host.jqxMenu('autoOpen');
        }
    }
    autoCloseOnMouseLeave(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('autoCloseOnMouseLeave', arg);
        }
        else {
            return this.host.jqxMenu('autoCloseOnMouseLeave');
        }
    }
    clickToOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('clickToOpen', arg);
        }
        else {
            return this.host.jqxMenu('clickToOpen');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('disabled', arg);
        }
        else {
            return this.host.jqxMenu('disabled');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('enableHover', arg);
        }
        else {
            return this.host.jqxMenu('enableHover');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('easing', arg);
        }
        else {
            return this.host.jqxMenu('easing');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('height', arg);
        }
        else {
            return this.host.jqxMenu('height');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxMenu('keyboardNavigation');
        }
    }
    minimizeWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('minimizeWidth', arg);
        }
        else {
            return this.host.jqxMenu('minimizeWidth');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('mode', arg);
        }
        else {
            return this.host.jqxMenu('mode');
        }
    }
    popupZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('popupZIndex', arg);
        }
        else {
            return this.host.jqxMenu('popupZIndex');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('rtl', arg);
        }
        else {
            return this.host.jqxMenu('rtl');
        }
    }
    showTopLevelArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('showTopLevelArrows', arg);
        }
        else {
            return this.host.jqxMenu('showTopLevelArrows');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('source', arg);
        }
        else {
            return this.host.jqxMenu('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('theme', arg);
        }
        else {
            return this.host.jqxMenu('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxMenu('width', arg);
        }
        else {
            return this.host.jqxMenu('width');
        }
    }
    // jqxMenuComponent functions
    closeItem(itemID) {
        this.host.jqxMenu('closeItem', itemID);
    }
    close() {
        this.host.jqxMenu('close');
    }
    disable(itemID, value) {
        this.host.jqxMenu('disable', itemID, value);
    }
    destroy() {
        this.host.jqxMenu('destroy');
    }
    focus() {
        this.host.jqxMenu('focus');
    }
    minimize() {
        this.host.jqxMenu('minimize');
    }
    open(left, top) {
        this.host.jqxMenu('open', left, top);
    }
    openItem(itemID) {
        this.host.jqxMenu('openItem', itemID);
    }
    restore() {
        this.host.jqxMenu('restore');
    }
    setItemOpenDirection(item, horizontaldirection, verticaldirection) {
        this.host.jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);
    }
    __wireEvents__() {
        this.host.on('closed', (eventData) => { this.onClosed.emit(eventData); });
        this.host.on('itemclick', (eventData) => { this.onItemclick.emit(eventData); });
        this.host.on('shown', (eventData) => { this.onShown.emit(eventData); });
    }
} //jqxMenuComponent
jqxMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMenuComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxMenuComponent, selector: "jqxMenu", inputs: { attrAnimationShowDuration: ["animationShowDuration", "attrAnimationShowDuration"], attrAnimationHideDuration: ["animationHideDuration", "attrAnimationHideDuration"], attrAnimationHideDelay: ["animationHideDelay", "attrAnimationHideDelay"], attrAnimationShowDelay: ["animationShowDelay", "attrAnimationShowDelay"], attrAutoCloseInterval: ["autoCloseInterval", "attrAutoCloseInterval"], attrAutoSizeMainItems: ["autoSizeMainItems", "attrAutoSizeMainItems"], attrAutoCloseOnClick: ["autoCloseOnClick", "attrAutoCloseOnClick"], attrAutoOpenPopup: ["autoOpenPopup", "attrAutoOpenPopup"], attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrAutoCloseOnMouseLeave: ["autoCloseOnMouseLeave", "attrAutoCloseOnMouseLeave"], attrClickToOpen: ["clickToOpen", "attrClickToOpen"], attrDisabled: ["disabled", "attrDisabled"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEasing: ["easing", "attrEasing"], attrKeyboardNavigation: ["keyboardNavigation", "attrKeyboardNavigation"], attrMinimizeWidth: ["minimizeWidth", "attrMinimizeWidth"], attrMode: ["mode", "attrMode"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrRtl: ["rtl", "attrRtl"], attrShowTopLevelArrows: ["showTopLevelArrows", "attrShowTopLevelArrows"], attrSource: ["source", "attrSource"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClosed: "onClosed", onItemclick: "onItemclick", onShown: "onShown" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxMenu',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationShowDuration: [{
                type: Input,
                args: ['animationShowDuration']
            }], attrAnimationHideDuration: [{
                type: Input,
                args: ['animationHideDuration']
            }], attrAnimationHideDelay: [{
                type: Input,
                args: ['animationHideDelay']
            }], attrAnimationShowDelay: [{
                type: Input,
                args: ['animationShowDelay']
            }], attrAutoCloseInterval: [{
                type: Input,
                args: ['autoCloseInterval']
            }], attrAutoSizeMainItems: [{
                type: Input,
                args: ['autoSizeMainItems']
            }], attrAutoCloseOnClick: [{
                type: Input,
                args: ['autoCloseOnClick']
            }], attrAutoOpenPopup: [{
                type: Input,
                args: ['autoOpenPopup']
            }], attrAutoOpen: [{
                type: Input,
                args: ['autoOpen']
            }], attrAutoCloseOnMouseLeave: [{
                type: Input,
                args: ['autoCloseOnMouseLeave']
            }], attrClickToOpen: [{
                type: Input,
                args: ['clickToOpen']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnableHover: [{
                type: Input,
                args: ['enableHover']
            }], attrEasing: [{
                type: Input,
                args: ['easing']
            }], attrKeyboardNavigation: [{
                type: Input,
                args: ['keyboardNavigation']
            }], attrMinimizeWidth: [{
                type: Input,
                args: ['minimizeWidth']
            }], attrMode: [{
                type: Input,
                args: ['mode']
            }], attrPopupZIndex: [{
                type: Input,
                args: ['popupZIndex']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrShowTopLevelArrows: [{
                type: Input,
                args: ['showTopLevelArrows']
            }], attrSource: [{
                type: Input,
                args: ['source']
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
            }], onClosed: [{
                type: Output
            }], onItemclick: [{
                type: Output
            }], onShown: [{
                type: Output
            }] } });

class jqxMenuModule {
}
jqxMenuModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxMenuModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMenuModule, declarations: [jqxMenuComponent], exports: [jqxMenuComponent] });
jqxMenuModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMenuModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxMenuComponent],
                    exports: [jqxMenuComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxMenuComponent, jqxMenuModule };
