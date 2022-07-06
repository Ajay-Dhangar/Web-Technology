import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxribbon';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxRibbonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'animationDelay', 'disabled', 'height', 'initContent', 'mode', 'popupCloseMode', 'position', 'reorder', 'rtl', 'selectedIndex', 'selectionMode', 'scrollPosition', 'scrollStep', 'scrollDelay', 'theme', 'width'];
        // jqxRibbonComponent events
        this.onChange = new EventEmitter();
        this.onReorder = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRibbon(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRibbon(this.properties[i])) {
                        this.host.jqxRibbon(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRibbon', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxRibbon('setOptions', options);
    }
    // jqxRibbonComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationType', arg);
        }
        else {
            return this.host.jqxRibbon('animationType');
        }
    }
    animationDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('animationDelay', arg);
        }
        else {
            return this.host.jqxRibbon('animationDelay');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('disabled', arg);
        }
        else {
            return this.host.jqxRibbon('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('height', arg);
        }
        else {
            return this.host.jqxRibbon('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('initContent', arg);
        }
        else {
            return this.host.jqxRibbon('initContent');
        }
    }
    mode(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('mode', arg);
        }
        else {
            return this.host.jqxRibbon('mode');
        }
    }
    popupCloseMode(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('popupCloseMode', arg);
        }
        else {
            return this.host.jqxRibbon('popupCloseMode');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('position', arg);
        }
        else {
            return this.host.jqxRibbon('position');
        }
    }
    reorder(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('reorder', arg);
        }
        else {
            return this.host.jqxRibbon('reorder');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('rtl', arg);
        }
        else {
            return this.host.jqxRibbon('rtl');
        }
    }
    selectedIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectedIndex', arg);
        }
        else {
            return this.host.jqxRibbon('selectedIndex');
        }
    }
    selectionMode(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('selectionMode', arg);
        }
        else {
            return this.host.jqxRibbon('selectionMode');
        }
    }
    scrollPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollPosition', arg);
        }
        else {
            return this.host.jqxRibbon('scrollPosition');
        }
    }
    scrollStep(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollStep', arg);
        }
        else {
            return this.host.jqxRibbon('scrollStep');
        }
    }
    scrollDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('scrollDelay', arg);
        }
        else {
            return this.host.jqxRibbon('scrollDelay');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('theme', arg);
        }
        else {
            return this.host.jqxRibbon('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRibbon('width', arg);
        }
        else {
            return this.host.jqxRibbon('width');
        }
    }
    // jqxRibbonComponent functions
    addAt(index, item) {
        this.host.jqxRibbon('addAt', index, item);
    }
    clearSelection() {
        this.host.jqxRibbon('clearSelection');
    }
    disableAt(index) {
        this.host.jqxRibbon('disableAt', index);
    }
    destroy() {
        this.host.jqxRibbon('destroy');
    }
    enableAt(index) {
        this.host.jqxRibbon('enableAt', index);
    }
    hideAt(index) {
        this.host.jqxRibbon('hideAt', index);
    }
    removeAt(index) {
        this.host.jqxRibbon('removeAt', index);
    }
    render() {
        this.host.jqxRibbon('render');
    }
    refresh() {
        this.host.jqxRibbon('refresh');
    }
    selectAt(index) {
        this.host.jqxRibbon('selectAt', index);
    }
    showAt(index) {
        this.host.jqxRibbon('showAt', index);
    }
    setPopupLayout(index, layout, width, height) {
        this.host.jqxRibbon('setPopupLayout', index, layout, width, height);
    }
    updateAt(index, item) {
        this.host.jqxRibbon('updateAt', index, item);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRibbon('val', value);
        }
        else {
            return this.host.jqxRibbon('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('reorder', (eventData) => { this.onReorder.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
    }
} //jqxRibbonComponent
jqxRibbonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRibbonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxRibbonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxRibbonComponent, selector: "jqxRibbon", inputs: { attrAnimationType: ["animationType", "attrAnimationType"], attrAnimationDelay: ["animationDelay", "attrAnimationDelay"], attrDisabled: ["disabled", "attrDisabled"], attrInitContent: ["initContent", "attrInitContent"], attrMode: ["mode", "attrMode"], attrPopupCloseMode: ["popupCloseMode", "attrPopupCloseMode"], attrPosition: ["position", "attrPosition"], attrReorder: ["reorder", "attrReorder"], attrRtl: ["rtl", "attrRtl"], attrSelectedIndex: ["selectedIndex", "attrSelectedIndex"], attrSelectionMode: ["selectionMode", "attrSelectionMode"], attrScrollPosition: ["scrollPosition", "attrScrollPosition"], attrScrollStep: ["scrollStep", "attrScrollStep"], attrScrollDelay: ["scrollDelay", "attrScrollDelay"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange", onReorder: "onReorder", onSelect: "onSelect", onUnselect: "onUnselect" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRibbonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxRibbon',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrAnimationDelay: [{
                type: Input,
                args: ['animationDelay']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrInitContent: [{
                type: Input,
                args: ['initContent']
            }], attrMode: [{
                type: Input,
                args: ['mode']
            }], attrPopupCloseMode: [{
                type: Input,
                args: ['popupCloseMode']
            }], attrPosition: [{
                type: Input,
                args: ['position']
            }], attrReorder: [{
                type: Input,
                args: ['reorder']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSelectedIndex: [{
                type: Input,
                args: ['selectedIndex']
            }], attrSelectionMode: [{
                type: Input,
                args: ['selectionMode']
            }], attrScrollPosition: [{
                type: Input,
                args: ['scrollPosition']
            }], attrScrollStep: [{
                type: Input,
                args: ['scrollStep']
            }], attrScrollDelay: [{
                type: Input,
                args: ['scrollDelay']
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
            }], onReorder: [{
                type: Output
            }], onSelect: [{
                type: Output
            }], onUnselect: [{
                type: Output
            }] } });

class jqxRibbonModule {
}
jqxRibbonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRibbonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxRibbonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRibbonModule, declarations: [jqxRibbonComponent], exports: [jqxRibbonComponent] });
jqxRibbonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRibbonModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRibbonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxRibbonComponent],
                    exports: [jqxRibbonComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRibbonComponent, jqxRibbonModule };
