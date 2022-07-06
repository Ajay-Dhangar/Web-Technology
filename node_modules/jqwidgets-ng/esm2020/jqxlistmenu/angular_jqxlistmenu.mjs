/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxListMenuComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['alwaysShowNavigationArrows', 'animationType', 'animationDuration', 'autoSeparators', 'backLabel', 'disabled', 'enableScrolling', 'filterCallback', 'height', 'headerAnimationDuration', 'placeHolder', 'readOnly', 'rtl', 'roundedCorners', 'showNavigationArrows', 'showFilter', 'showHeader', 'showBackButton', 'theme', 'width'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxListMenu(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxListMenu(this.properties[i])) {
                        this.host.jqxListMenu(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListMenu', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxListMenu('setOptions', options);
    }
    // jqxListMenuComponent properties
    alwaysShowNavigationArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('alwaysShowNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('alwaysShowNavigationArrows');
        }
    }
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationType', arg);
        }
        else {
            return this.host.jqxListMenu('animationType');
        }
    }
    animationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('animationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('animationDuration');
        }
    }
    autoSeparators(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('autoSeparators', arg);
        }
        else {
            return this.host.jqxListMenu('autoSeparators');
        }
    }
    backLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('backLabel', arg);
        }
        else {
            return this.host.jqxListMenu('backLabel');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('disabled', arg);
        }
        else {
            return this.host.jqxListMenu('disabled');
        }
    }
    enableScrolling(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('enableScrolling', arg);
        }
        else {
            return this.host.jqxListMenu('enableScrolling');
        }
    }
    filterCallback(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('filterCallback', arg);
        }
        else {
            return this.host.jqxListMenu('filterCallback');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('height', arg);
        }
        else {
            return this.host.jqxListMenu('height');
        }
    }
    headerAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('headerAnimationDuration', arg);
        }
        else {
            return this.host.jqxListMenu('headerAnimationDuration');
        }
    }
    placeHolder(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('placeHolder', arg);
        }
        else {
            return this.host.jqxListMenu('placeHolder');
        }
    }
    readOnly(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('readOnly', arg);
        }
        else {
            return this.host.jqxListMenu('readOnly');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('rtl', arg);
        }
        else {
            return this.host.jqxListMenu('rtl');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('roundedCorners', arg);
        }
        else {
            return this.host.jqxListMenu('roundedCorners');
        }
    }
    showNavigationArrows(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showNavigationArrows', arg);
        }
        else {
            return this.host.jqxListMenu('showNavigationArrows');
        }
    }
    showFilter(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showFilter', arg);
        }
        else {
            return this.host.jqxListMenu('showFilter');
        }
    }
    showHeader(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showHeader', arg);
        }
        else {
            return this.host.jqxListMenu('showHeader');
        }
    }
    showBackButton(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('showBackButton', arg);
        }
        else {
            return this.host.jqxListMenu('showBackButton');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('theme', arg);
        }
        else {
            return this.host.jqxListMenu('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxListMenu('width', arg);
        }
        else {
            return this.host.jqxListMenu('width');
        }
    }
    // jqxListMenuComponent functions
    back() {
        this.host.jqxListMenu('back');
    }
    changePage(Item) {
        this.host.jqxListMenu('changePage', Item);
    }
    destroy() {
        this.host.jqxListMenu('destroy');
    }
    __wireEvents__() {
    }
} //jqxListMenuComponent
jqxListMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListMenuComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxListMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxListMenuComponent, selector: "jqxListMenu", inputs: { attrAlwaysShowNavigationArrows: ["alwaysShowNavigationArrows", "attrAlwaysShowNavigationArrows"], attrAnimationType: ["animationType", "attrAnimationType"], attrAnimationDuration: ["animationDuration", "attrAnimationDuration"], attrAutoSeparators: ["autoSeparators", "attrAutoSeparators"], attrBackLabel: ["backLabel", "attrBackLabel"], attrDisabled: ["disabled", "attrDisabled"], attrEnableScrolling: ["enableScrolling", "attrEnableScrolling"], attrFilterCallback: ["filterCallback", "attrFilterCallback"], attrHeaderAnimationDuration: ["headerAnimationDuration", "attrHeaderAnimationDuration"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrReadOnly: ["readOnly", "attrReadOnly"], attrRtl: ["rtl", "attrRtl"], attrRoundedCorners: ["roundedCorners", "attrRoundedCorners"], attrShowNavigationArrows: ["showNavigationArrows", "attrShowNavigationArrows"], attrShowFilter: ["showFilter", "attrShowFilter"], attrShowHeader: ["showHeader", "attrShowHeader"], attrShowBackButton: ["showBackButton", "attrShowBackButton"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxListMenu',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAlwaysShowNavigationArrows: [{
                type: Input,
                args: ['alwaysShowNavigationArrows']
            }], attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrAnimationDuration: [{
                type: Input,
                args: ['animationDuration']
            }], attrAutoSeparators: [{
                type: Input,
                args: ['autoSeparators']
            }], attrBackLabel: [{
                type: Input,
                args: ['backLabel']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnableScrolling: [{
                type: Input,
                args: ['enableScrolling']
            }], attrFilterCallback: [{
                type: Input,
                args: ['filterCallback']
            }], attrHeaderAnimationDuration: [{
                type: Input,
                args: ['headerAnimationDuration']
            }], attrPlaceHolder: [{
                type: Input,
                args: ['placeHolder']
            }], attrReadOnly: [{
                type: Input,
                args: ['readOnly']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrRoundedCorners: [{
                type: Input,
                args: ['roundedCorners']
            }], attrShowNavigationArrows: [{
                type: Input,
                args: ['showNavigationArrows']
            }], attrShowFilter: [{
                type: Input,
                args: ['showFilter']
            }], attrShowHeader: [{
                type: Input,
                args: ['showHeader']
            }], attrShowBackButton: [{
                type: Input,
                args: ['showBackButton']
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
