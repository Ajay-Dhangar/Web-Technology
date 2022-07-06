import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxheatmap';
import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxHeatMapComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['xAxis', 'yAxis', 'paletteSettings', 'legendSettings', 'source', 'title', 'width', 'tooltipRender'];
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxHeatMap(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxHeatMap(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxHeatMap(this.properties[i])) {
                        this.host.jqxHeatMap(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxHeatMap', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxHeatMap('setOptions', options);
    }
    // jqxHeatMapComponent properties
    xAxis(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('xAxis', arg);
        }
        else {
            return this.host.jqxHeatMap('xAxis');
        }
    }
    yAxis(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('yAxis', arg);
        }
        else {
            return this.host.jqxHeatMap('yAxis');
        }
    }
    paletteSettings(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('paletteSettings', arg);
        }
        else {
            return this.host.jqxHeatMap('paletteSettings');
        }
    }
    legendSettings(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('legendSettings', arg);
        }
        else {
            return this.host.jqxHeatMap('legendSettings');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('source', arg);
        }
        else {
            return this.host.jqxHeatMap('source');
        }
    }
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('title', arg);
        }
        else {
            return this.host.jqxHeatMap('title');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('width', arg);
        }
        else {
            return this.host.jqxHeatMap('width');
        }
    }
    tooltipRender(arg) {
        if (arg !== undefined) {
            this.host.jqxHeatMap('tooltipRender', arg);
        }
        else {
            return this.host.jqxHeatMap('tooltipRender');
        }
    }
    // jqxHeatMapComponent functions
    destroy() {
        this.host.jqxHeatMap('destroy');
    }
    setLegendPosition(position) {
        this.host.jqxHeatMap('setLegendPosition', position);
    }
    setOpposedXAxisPosition(opposedPosition) {
        this.host.jqxHeatMap('setOpposedXAxisPosition', opposedPosition);
    }
    setOpposedYAxisPosition(opposedPosition) {
        this.host.jqxHeatMap('setOpposedYAxisPosition', opposedPosition);
    }
    reverseXAxisPosition(isInversed) {
        this.host.jqxHeatMap('reverseXAxisPosition', isInversed);
    }
    reverseYAxisPosition(isInversed) {
        this.host.jqxHeatMap('reverseYAxisPosition', isInversed);
    }
    setPaletteType(type) {
        this.host.jqxHeatMap('setPaletteType', type);
    }
    // jqxHeatMapComponent events
    __wireEvents__() {
    }
} //jqxHeatMapComponent
jqxHeatMapComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxHeatMapComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxHeatMapComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxHeatMapComponent, selector: "jqxHeatMap", inputs: { attrXAxis: ["xAxis", "attrXAxis"], attrYAxis: ["yAxis", "attrYAxis"], attrPaletteSettings: ["paletteSettings", "attrPaletteSettings"], attrLegendSettings: ["legendSettings", "attrLegendSettings"], attrSource: ["source", "attrSource"], attrTitle: ["title", "attrTitle"], attrTooltipRender: ["tooltipRender", "attrTooltipRender"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxHeatMapComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxHeatMap',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrXAxis: [{
                type: Input,
                args: ['xAxis']
            }], attrYAxis: [{
                type: Input,
                args: ['yAxis']
            }], attrPaletteSettings: [{
                type: Input,
                args: ['paletteSettings']
            }], attrLegendSettings: [{
                type: Input,
                args: ['legendSettings']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrTitle: [{
                type: Input,
                args: ['title']
            }], attrTooltipRender: [{
                type: Input,
                args: ['tooltipRender']
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

class jqxHeatMapModule {
}
jqxHeatMapModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxHeatMapModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxHeatMapModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxHeatMapModule, declarations: [jqxHeatMapComponent], exports: [jqxHeatMapComponent] });
jqxHeatMapModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxHeatMapModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxHeatMapModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxHeatMapComponent],
                    exports: [jqxHeatMapComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxHeatMapComponent, jqxHeatMapModule };
