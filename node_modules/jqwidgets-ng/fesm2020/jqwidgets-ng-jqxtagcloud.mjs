import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxtagcloud';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxTagCloudComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['alterTextCase', 'disabled', 'displayLimit', 'displayMember', 'displayValue', 'fontSizeUnit', 'height', 'maxColor', 'maxFontSize', 'maxValueToDisplay', 'minColor', 'minFontSize', 'minValueToDisplay', 'rtl', 'sortBy', 'sortOrder', 'source', 'tagRenderer', 'takeTopWeightedItems', 'textColor', 'urlBase', 'urlMember', 'valueMember', 'width'];
        // jqxTagCloudComponent events
        this.onBindingComplete = new EventEmitter();
        this.onItemClick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTagCloud(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTagCloud(this.properties[i])) {
                        this.host.jqxTagCloud(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTagCloud', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTagCloud('setOptions', options);
    }
    // jqxTagCloudComponent properties
    alterTextCase(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('alterTextCase', arg);
        }
        else {
            return this.host.jqxTagCloud('alterTextCase');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('disabled', arg);
        }
        else {
            return this.host.jqxTagCloud('disabled');
        }
    }
    displayLimit(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayLimit', arg);
        }
        else {
            return this.host.jqxTagCloud('displayLimit');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayMember', arg);
        }
        else {
            return this.host.jqxTagCloud('displayMember');
        }
    }
    displayValue(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('displayValue', arg);
        }
        else {
            return this.host.jqxTagCloud('displayValue');
        }
    }
    fontSizeUnit(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('fontSizeUnit', arg);
        }
        else {
            return this.host.jqxTagCloud('fontSizeUnit');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('height', arg);
        }
        else {
            return this.host.jqxTagCloud('height');
        }
    }
    maxColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxColor', arg);
        }
        else {
            return this.host.jqxTagCloud('maxColor');
        }
    }
    maxFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('maxFontSize');
        }
    }
    maxValueToDisplay(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('maxValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('maxValueToDisplay');
        }
    }
    minColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minColor', arg);
        }
        else {
            return this.host.jqxTagCloud('minColor');
        }
    }
    minFontSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minFontSize', arg);
        }
        else {
            return this.host.jqxTagCloud('minFontSize');
        }
    }
    minValueToDisplay(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('minValueToDisplay', arg);
        }
        else {
            return this.host.jqxTagCloud('minValueToDisplay');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('rtl', arg);
        }
        else {
            return this.host.jqxTagCloud('rtl');
        }
    }
    sortBy(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortBy', arg);
        }
        else {
            return this.host.jqxTagCloud('sortBy');
        }
    }
    sortOrder(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('sortOrder', arg);
        }
        else {
            return this.host.jqxTagCloud('sortOrder');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('source', arg);
        }
        else {
            return this.host.jqxTagCloud('source');
        }
    }
    tagRenderer(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('tagRenderer', arg);
        }
        else {
            return this.host.jqxTagCloud('tagRenderer');
        }
    }
    takeTopWeightedItems(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('takeTopWeightedItems', arg);
        }
        else {
            return this.host.jqxTagCloud('takeTopWeightedItems');
        }
    }
    textColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('textColor', arg);
        }
        else {
            return this.host.jqxTagCloud('textColor');
        }
    }
    urlBase(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlBase', arg);
        }
        else {
            return this.host.jqxTagCloud('urlBase');
        }
    }
    urlMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('urlMember', arg);
        }
        else {
            return this.host.jqxTagCloud('urlMember');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('valueMember', arg);
        }
        else {
            return this.host.jqxTagCloud('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTagCloud('width', arg);
        }
        else {
            return this.host.jqxTagCloud('width');
        }
    }
    // jqxTagCloudComponent functions
    destroy() {
        this.host.jqxTagCloud('destroy');
    }
    findTagIndex(tag) {
        return this.host.jqxTagCloud('findTagIndex', tag);
    }
    getHiddenTagsList() {
        return this.host.jqxTagCloud('getHiddenTagsList');
    }
    getRenderedTags() {
        return this.host.jqxTagCloud('getRenderedTags');
    }
    getTagsList() {
        return this.host.jqxTagCloud('getTagsList');
    }
    hideItem(index) {
        this.host.jqxTagCloud('hideItem', index);
    }
    insertAt(index, item) {
        this.host.jqxTagCloud('insertAt', index, item);
    }
    removeAt(index) {
        this.host.jqxTagCloud('removeAt', index);
    }
    updateAt(index, item) {
        this.host.jqxTagCloud('updateAt', index, item);
    }
    showItem(index) {
        this.host.jqxTagCloud('showItem', index);
    }
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
    }
} //jqxTagCloudComponent
jqxTagCloudComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTagCloudComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTagCloudComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTagCloudComponent, selector: "jqxTagCloud", inputs: { attrAlterTextCase: ["alterTextCase", "attrAlterTextCase"], attrDisabled: ["disabled", "attrDisabled"], attrDisplayLimit: ["displayLimit", "attrDisplayLimit"], attrDisplayMember: ["displayMember", "attrDisplayMember"], attrDisplayValue: ["displayValue", "attrDisplayValue"], attrFontSizeUnit: ["fontSizeUnit", "attrFontSizeUnit"], attrMaxColor: ["maxColor", "attrMaxColor"], attrMaxFontSize: ["maxFontSize", "attrMaxFontSize"], attrMaxValueToDisplay: ["maxValueToDisplay", "attrMaxValueToDisplay"], attrMinColor: ["minColor", "attrMinColor"], attrMinFontSize: ["minFontSize", "attrMinFontSize"], attrMinValueToDisplay: ["minValueToDisplay", "attrMinValueToDisplay"], attrRtl: ["rtl", "attrRtl"], attrSortBy: ["sortBy", "attrSortBy"], attrSortOrder: ["sortOrder", "attrSortOrder"], attrSource: ["source", "attrSource"], attrTagRenderer: ["tagRenderer", "attrTagRenderer"], attrTakeTopWeightedItems: ["takeTopWeightedItems", "attrTakeTopWeightedItems"], attrTextColor: ["textColor", "attrTextColor"], attrUrlBase: ["urlBase", "attrUrlBase"], attrUrlMember: ["urlMember", "attrUrlMember"], attrValueMember: ["valueMember", "attrValueMember"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBindingComplete: "onBindingComplete", onItemClick: "onItemClick" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTagCloudComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTagCloud',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAlterTextCase: [{
                type: Input,
                args: ['alterTextCase']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDisplayLimit: [{
                type: Input,
                args: ['displayLimit']
            }], attrDisplayMember: [{
                type: Input,
                args: ['displayMember']
            }], attrDisplayValue: [{
                type: Input,
                args: ['displayValue']
            }], attrFontSizeUnit: [{
                type: Input,
                args: ['fontSizeUnit']
            }], attrMaxColor: [{
                type: Input,
                args: ['maxColor']
            }], attrMaxFontSize: [{
                type: Input,
                args: ['maxFontSize']
            }], attrMaxValueToDisplay: [{
                type: Input,
                args: ['maxValueToDisplay']
            }], attrMinColor: [{
                type: Input,
                args: ['minColor']
            }], attrMinFontSize: [{
                type: Input,
                args: ['minFontSize']
            }], attrMinValueToDisplay: [{
                type: Input,
                args: ['minValueToDisplay']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSortBy: [{
                type: Input,
                args: ['sortBy']
            }], attrSortOrder: [{
                type: Input,
                args: ['sortOrder']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrTagRenderer: [{
                type: Input,
                args: ['tagRenderer']
            }], attrTakeTopWeightedItems: [{
                type: Input,
                args: ['takeTopWeightedItems']
            }], attrTextColor: [{
                type: Input,
                args: ['textColor']
            }], attrUrlBase: [{
                type: Input,
                args: ['urlBase']
            }], attrUrlMember: [{
                type: Input,
                args: ['urlMember']
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
            }], onBindingComplete: [{
                type: Output
            }], onItemClick: [{
                type: Output
            }] } });

class jqxTagCloudModule {
}
jqxTagCloudModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTagCloudModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxTagCloudModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTagCloudModule, declarations: [jqxTagCloudComponent], exports: [jqxTagCloudComponent] });
jqxTagCloudModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTagCloudModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTagCloudModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxTagCloudComponent],
                    exports: [jqxTagCloudComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxTagCloudComponent, jqxTagCloudModule };
