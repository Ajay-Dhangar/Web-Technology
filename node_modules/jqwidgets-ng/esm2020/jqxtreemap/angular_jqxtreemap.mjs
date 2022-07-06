/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxTreeMapComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['baseColor', 'colorRanges', 'colorRange', 'colorMode', 'displayMember', 'height', 'hoverEnabled', 'headerHeight', 'legendLabel', 'legendPosition', 'legendScaleCallback', 'renderCallbacks', 'selectionEnabled', 'showLegend', 'source', 'theme', 'valueMember', 'width'];
        // jqxTreeMapComponent events
        this.onBindingComplete = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeMap(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTreeMap(this.properties[i])) {
                        this.host.jqxTreeMap(this.properties[i], this[attrName]);
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
        this.host[0].style.marginLeft = '1px';
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeMap', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTreeMap('setOptions', options);
    }
    // jqxTreeMapComponent properties
    baseColor(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('baseColor', arg);
        }
        else {
            return this.host.jqxTreeMap('baseColor');
        }
    }
    colorRanges(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRanges', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRanges');
        }
    }
    colorRange(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorRange', arg);
        }
        else {
            return this.host.jqxTreeMap('colorRange');
        }
    }
    colorMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('colorMode', arg);
        }
        else {
            return this.host.jqxTreeMap('colorMode');
        }
    }
    displayMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('displayMember', arg);
        }
        else {
            return this.host.jqxTreeMap('displayMember');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('height', arg);
        }
        else {
            return this.host.jqxTreeMap('height');
        }
    }
    hoverEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('hoverEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('hoverEnabled');
        }
    }
    headerHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('headerHeight', arg);
        }
        else {
            return this.host.jqxTreeMap('headerHeight');
        }
    }
    legendLabel(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendLabel', arg);
        }
        else {
            return this.host.jqxTreeMap('legendLabel');
        }
    }
    legendPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendPosition', arg);
        }
        else {
            return this.host.jqxTreeMap('legendPosition');
        }
    }
    legendScaleCallback(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('legendScaleCallback', arg);
        }
        else {
            return this.host.jqxTreeMap('legendScaleCallback');
        }
    }
    renderCallbacks(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('renderCallbacks', arg);
        }
        else {
            return this.host.jqxTreeMap('renderCallbacks');
        }
    }
    selectionEnabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('selectionEnabled', arg);
        }
        else {
            return this.host.jqxTreeMap('selectionEnabled');
        }
    }
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('showLegend', arg);
        }
        else {
            return this.host.jqxTreeMap('showLegend');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('source', arg);
        }
        else {
            return this.host.jqxTreeMap('source');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('theme', arg);
        }
        else {
            return this.host.jqxTreeMap('theme');
        }
    }
    valueMember(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('valueMember', arg);
        }
        else {
            return this.host.jqxTreeMap('valueMember');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTreeMap('width', arg);
        }
        else {
            return this.host.jqxTreeMap('width');
        }
    }
    // jqxTreeMapComponent functions
    destroy() {
        this.host.jqxTreeMap('destroy');
    }
    render() {
        this.host.jqxTreeMap('render');
    }
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
    }
} //jqxTreeMapComponent
jqxTreeMapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTreeMapComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTreeMapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTreeMapComponent, selector: "jqxTreeMap", inputs: { attrBaseColor: ["baseColor", "attrBaseColor"], attrColorRanges: ["colorRanges", "attrColorRanges"], attrColorRange: ["colorRange", "attrColorRange"], attrColorMode: ["colorMode", "attrColorMode"], attrDisplayMember: ["displayMember", "attrDisplayMember"], attrHoverEnabled: ["hoverEnabled", "attrHoverEnabled"], attrHeaderHeight: ["headerHeight", "attrHeaderHeight"], attrLegendLabel: ["legendLabel", "attrLegendLabel"], attrLegendPosition: ["legendPosition", "attrLegendPosition"], attrLegendScaleCallback: ["legendScaleCallback", "attrLegendScaleCallback"], attrRenderCallbacks: ["renderCallbacks", "attrRenderCallbacks"], attrSelectionEnabled: ["selectionEnabled", "attrSelectionEnabled"], attrShowLegend: ["showLegend", "attrShowLegend"], attrSource: ["source", "attrSource"], attrTheme: ["theme", "attrTheme"], attrValueMember: ["valueMember", "attrValueMember"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBindingComplete: "onBindingComplete" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTreeMapComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTreeMap',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrBaseColor: [{
                type: Input,
                args: ['baseColor']
            }], attrColorRanges: [{
                type: Input,
                args: ['colorRanges']
            }], attrColorRange: [{
                type: Input,
                args: ['colorRange']
            }], attrColorMode: [{
                type: Input,
                args: ['colorMode']
            }], attrDisplayMember: [{
                type: Input,
                args: ['displayMember']
            }], attrHoverEnabled: [{
                type: Input,
                args: ['hoverEnabled']
            }], attrHeaderHeight: [{
                type: Input,
                args: ['headerHeight']
            }], attrLegendLabel: [{
                type: Input,
                args: ['legendLabel']
            }], attrLegendPosition: [{
                type: Input,
                args: ['legendPosition']
            }], attrLegendScaleCallback: [{
                type: Input,
                args: ['legendScaleCallback']
            }], attrRenderCallbacks: [{
                type: Input,
                args: ['renderCallbacks']
            }], attrSelectionEnabled: [{
                type: Input,
                args: ['selectionEnabled']
            }], attrShowLegend: [{
                type: Input,
                args: ['showLegend']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
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
            }] } });
