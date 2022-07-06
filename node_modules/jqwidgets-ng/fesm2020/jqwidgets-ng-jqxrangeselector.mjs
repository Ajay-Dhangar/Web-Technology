import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxtooltip';
import '../jqwidgets/jqxrangeselector';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxRangeSelectorComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['disabled', 'groupLabelsFormatFunction', 'height', 'labelsFormat', 'labelsFormatFunction', 'labelsOnTicks', 'markersFormat', 'markersFormatFunction', 'majorTicksInterval', 'minorTicksInterval', 'max', 'min', 'moveOnClick', 'padding', 'range', 'resizable', 'rtl', 'showGroupLabels', 'showMinorTicks', 'snapToTicks', 'showMajorLabels', 'showMarkers', 'theme', 'width'];
        // jqxRangeSelectorComponent events
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRangeSelector(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRangeSelector(this.properties[i])) {
                        this.host.jqxRangeSelector(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRangeSelector', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxRangeSelector('setOptions', options);
    }
    // jqxRangeSelectorComponent properties
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('disabled', arg);
        }
        else {
            return this.host.jqxRangeSelector('disabled');
        }
    }
    groupLabelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('groupLabelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('groupLabelsFormatFunction');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('height', arg);
        }
        else {
            return this.host.jqxRangeSelector('height');
        }
    }
    labelsFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormat');
        }
    }
    labelsFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsFormatFunction');
        }
    }
    labelsOnTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('labelsOnTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('labelsOnTicks');
        }
    }
    markersFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormat', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormat');
        }
    }
    markersFormatFunction(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('markersFormatFunction', arg);
        }
        else {
            return this.host.jqxRangeSelector('markersFormatFunction');
        }
    }
    majorTicksInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('majorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('majorTicksInterval');
        }
    }
    minorTicksInterval(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('minorTicksInterval', arg);
        }
        else {
            return this.host.jqxRangeSelector('minorTicksInterval');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('max', arg);
        }
        else {
            return this.host.jqxRangeSelector('max');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('min', arg);
        }
        else {
            return this.host.jqxRangeSelector('min');
        }
    }
    moveOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('moveOnClick', arg);
        }
        else {
            return this.host.jqxRangeSelector('moveOnClick');
        }
    }
    padding(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('padding', arg);
        }
        else {
            return this.host.jqxRangeSelector('padding');
        }
    }
    range(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('range', arg);
        }
        else {
            return this.host.jqxRangeSelector('range');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('resizable', arg);
        }
        else {
            return this.host.jqxRangeSelector('resizable');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('rtl', arg);
        }
        else {
            return this.host.jqxRangeSelector('rtl');
        }
    }
    showGroupLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showGroupLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showGroupLabels');
        }
    }
    showMinorTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMinorTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMinorTicks');
        }
    }
    snapToTicks(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('snapToTicks', arg);
        }
        else {
            return this.host.jqxRangeSelector('snapToTicks');
        }
    }
    showMajorLabels(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMajorLabels', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMajorLabels');
        }
    }
    showMarkers(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('showMarkers', arg);
        }
        else {
            return this.host.jqxRangeSelector('showMarkers');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('theme', arg);
        }
        else {
            return this.host.jqxRangeSelector('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRangeSelector('width', arg);
        }
        else {
            return this.host.jqxRangeSelector('width');
        }
    }
    // jqxRangeSelectorComponent functions
    destroy() {
        this.host.jqxRangeSelector('destroy');
    }
    getRange() {
        return this.host.jqxRangeSelector('getRange');
    }
    render() {
        this.host.jqxRangeSelector('render');
    }
    refresh() {
        this.host.jqxRangeSelector('refresh');
    }
    setRange(from, to) {
        this.host.jqxRangeSelector('setRange', from, to);
    }
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
} //jqxRangeSelectorComponent
jqxRangeSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRangeSelectorComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxRangeSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxRangeSelectorComponent, selector: "jqxRangeSelector", inputs: { attrDisabled: ["disabled", "attrDisabled"], attrGroupLabelsFormatFunction: ["groupLabelsFormatFunction", "attrGroupLabelsFormatFunction"], attrLabelsFormat: ["labelsFormat", "attrLabelsFormat"], attrLabelsFormatFunction: ["labelsFormatFunction", "attrLabelsFormatFunction"], attrLabelsOnTicks: ["labelsOnTicks", "attrLabelsOnTicks"], attrMarkersFormat: ["markersFormat", "attrMarkersFormat"], attrMarkersFormatFunction: ["markersFormatFunction", "attrMarkersFormatFunction"], attrMajorTicksInterval: ["majorTicksInterval", "attrMajorTicksInterval"], attrMinorTicksInterval: ["minorTicksInterval", "attrMinorTicksInterval"], attrMax: ["max", "attrMax"], attrMin: ["min", "attrMin"], attrMoveOnClick: ["moveOnClick", "attrMoveOnClick"], attrPadding: ["padding", "attrPadding"], attrRange: ["range", "attrRange"], attrResizable: ["resizable", "attrResizable"], attrRtl: ["rtl", "attrRtl"], attrShowGroupLabels: ["showGroupLabels", "attrShowGroupLabels"], attrShowMinorTicks: ["showMinorTicks", "attrShowMinorTicks"], attrSnapToTicks: ["snapToTicks", "attrSnapToTicks"], attrShowMajorLabels: ["showMajorLabels", "attrShowMajorLabels"], attrShowMarkers: ["showMarkers", "attrShowMarkers"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRangeSelectorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxRangeSelector',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrGroupLabelsFormatFunction: [{
                type: Input,
                args: ['groupLabelsFormatFunction']
            }], attrLabelsFormat: [{
                type: Input,
                args: ['labelsFormat']
            }], attrLabelsFormatFunction: [{
                type: Input,
                args: ['labelsFormatFunction']
            }], attrLabelsOnTicks: [{
                type: Input,
                args: ['labelsOnTicks']
            }], attrMarkersFormat: [{
                type: Input,
                args: ['markersFormat']
            }], attrMarkersFormatFunction: [{
                type: Input,
                args: ['markersFormatFunction']
            }], attrMajorTicksInterval: [{
                type: Input,
                args: ['majorTicksInterval']
            }], attrMinorTicksInterval: [{
                type: Input,
                args: ['minorTicksInterval']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrMoveOnClick: [{
                type: Input,
                args: ['moveOnClick']
            }], attrPadding: [{
                type: Input,
                args: ['padding']
            }], attrRange: [{
                type: Input,
                args: ['range']
            }], attrResizable: [{
                type: Input,
                args: ['resizable']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrShowGroupLabels: [{
                type: Input,
                args: ['showGroupLabels']
            }], attrShowMinorTicks: [{
                type: Input,
                args: ['showMinorTicks']
            }], attrSnapToTicks: [{
                type: Input,
                args: ['snapToTicks']
            }], attrShowMajorLabels: [{
                type: Input,
                args: ['showMajorLabels']
            }], attrShowMarkers: [{
                type: Input,
                args: ['showMarkers']
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
            }], onChange: [{
                type: Output
            }] } });

class jqxRangeSelectorModule {
}
jqxRangeSelectorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRangeSelectorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxRangeSelectorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRangeSelectorModule, declarations: [jqxRangeSelectorComponent], exports: [jqxRangeSelectorComponent] });
jqxRangeSelectorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRangeSelectorModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRangeSelectorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxRangeSelectorComponent],
                    exports: [jqxRangeSelectorComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRangeSelectorComponent, jqxRangeSelectorModule };
