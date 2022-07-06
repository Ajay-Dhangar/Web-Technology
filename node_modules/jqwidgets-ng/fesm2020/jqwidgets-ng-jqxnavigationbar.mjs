import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxnavigationbar';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxNavigationBarComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'arrowPosition', 'collapseAnimationDuration', 'disabled', 'expandAnimationDuration', 'expandMode', 'expandedIndexes', 'height', 'initContent', 'rtl', 'showArrow', 'theme', 'toggleMode', 'width'];
        // jqxNavigationBarComponent events
        this.onCollapsingItem = new EventEmitter();
        this.onCollapsedItem = new EventEmitter();
        this.onExpandingItem = new EventEmitter();
        this.onExpandedItem = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxNavigationBar(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxNavigationBar(this.properties[i])) {
                        this.host.jqxNavigationBar(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxNavigationBar', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxNavigationBar('setOptions', options);
    }
    // jqxNavigationBarComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('animationType', arg);
        }
        else {
            return this.host.jqxNavigationBar('animationType');
        }
    }
    arrowPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('arrowPosition', arg);
        }
        else {
            return this.host.jqxNavigationBar('arrowPosition');
        }
    }
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('collapseAnimationDuration');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('disabled', arg);
        }
        else {
            return this.host.jqxNavigationBar('disabled');
        }
    }
    expandAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandAnimationDuration', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandAnimationDuration');
        }
    }
    expandMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandMode');
        }
    }
    expandedIndexes(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('expandedIndexes', arg);
        }
        else {
            return this.host.jqxNavigationBar('expandedIndexes');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('height', arg);
        }
        else {
            return this.host.jqxNavigationBar('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('initContent', arg);
        }
        else {
            return this.host.jqxNavigationBar('initContent');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('rtl', arg);
        }
        else {
            return this.host.jqxNavigationBar('rtl');
        }
    }
    showArrow(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('showArrow', arg);
        }
        else {
            return this.host.jqxNavigationBar('showArrow');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('theme', arg);
        }
        else {
            return this.host.jqxNavigationBar('theme');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('toggleMode', arg);
        }
        else {
            return this.host.jqxNavigationBar('toggleMode');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxNavigationBar('width', arg);
        }
        else {
            return this.host.jqxNavigationBar('width');
        }
    }
    // jqxNavigationBarComponent functions
    add(header, content) {
        this.host.jqxNavigationBar('add', header, content);
    }
    collapseAt(index) {
        this.host.jqxNavigationBar('collapseAt', index);
    }
    disableAt(index) {
        this.host.jqxNavigationBar('disableAt', index);
    }
    disable() {
        this.host.jqxNavigationBar('disable');
    }
    destroy() {
        this.host.jqxNavigationBar('destroy');
    }
    expandAt(index) {
        this.host.jqxNavigationBar('expandAt', index);
    }
    enableAt(index) {
        this.host.jqxNavigationBar('enableAt', index);
    }
    enable() {
        this.host.jqxNavigationBar('enable');
    }
    focus() {
        this.host.jqxNavigationBar('focus');
    }
    getHeaderContentAt(index) {
        return this.host.jqxNavigationBar('getHeaderContentAt', index);
    }
    getContentAt(index) {
        return this.host.jqxNavigationBar('getContentAt', index);
    }
    hideArrowAt(index) {
        this.host.jqxNavigationBar('hideArrowAt', index);
    }
    invalidate() {
        this.host.jqxNavigationBar('invalidate');
    }
    insert(Index, header, content) {
        this.host.jqxNavigationBar('insert', Index, header, content);
    }
    refresh() {
        this.host.jqxNavigationBar('refresh');
    }
    render() {
        this.host.jqxNavigationBar('render');
    }
    remove(index) {
        this.host.jqxNavigationBar('remove', index);
    }
    setContentAt(index, item) {
        this.host.jqxNavigationBar('setContentAt', index, item);
    }
    setHeaderContentAt(index, item) {
        this.host.jqxNavigationBar('setHeaderContentAt', index, item);
    }
    showArrowAt(index) {
        this.host.jqxNavigationBar('showArrowAt', index);
    }
    update(index, header, content) {
        this.host.jqxNavigationBar('update', index, header, content);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxNavigationBar('val', value);
        }
        else {
            return this.host.jqxNavigationBar('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('collapsingItem', (eventData) => { this.onCollapsingItem.emit(eventData); });
        this.host.on('collapsedItem', (eventData) => { this.onCollapsedItem.emit(eventData); });
        this.host.on('expandingItem', (eventData) => { this.onExpandingItem.emit(eventData); });
        this.host.on('expandedItem', (eventData) => { this.onExpandedItem.emit(eventData); });
    }
} //jqxNavigationBarComponent
jqxNavigationBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavigationBarComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxNavigationBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxNavigationBarComponent, selector: "jqxNavigationBar", inputs: { attrAnimationType: ["animationType", "attrAnimationType"], attrArrowPosition: ["arrowPosition", "attrArrowPosition"], attrCollapseAnimationDuration: ["collapseAnimationDuration", "attrCollapseAnimationDuration"], attrDisabled: ["disabled", "attrDisabled"], attrExpandAnimationDuration: ["expandAnimationDuration", "attrExpandAnimationDuration"], attrExpandMode: ["expandMode", "attrExpandMode"], attrExpandedIndexes: ["expandedIndexes", "attrExpandedIndexes"], attrInitContent: ["initContent", "attrInitContent"], attrRtl: ["rtl", "attrRtl"], attrShowArrow: ["showArrow", "attrShowArrow"], attrTheme: ["theme", "attrTheme"], attrToggleMode: ["toggleMode", "attrToggleMode"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onCollapsingItem: "onCollapsingItem", onCollapsedItem: "onCollapsedItem", onExpandingItem: "onExpandingItem", onExpandedItem: "onExpandedItem" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavigationBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxNavigationBar',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrArrowPosition: [{
                type: Input,
                args: ['arrowPosition']
            }], attrCollapseAnimationDuration: [{
                type: Input,
                args: ['collapseAnimationDuration']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrExpandAnimationDuration: [{
                type: Input,
                args: ['expandAnimationDuration']
            }], attrExpandMode: [{
                type: Input,
                args: ['expandMode']
            }], attrExpandedIndexes: [{
                type: Input,
                args: ['expandedIndexes']
            }], attrInitContent: [{
                type: Input,
                args: ['initContent']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrShowArrow: [{
                type: Input,
                args: ['showArrow']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrToggleMode: [{
                type: Input,
                args: ['toggleMode']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onCollapsingItem: [{
                type: Output
            }], onCollapsedItem: [{
                type: Output
            }], onExpandingItem: [{
                type: Output
            }], onExpandedItem: [{
                type: Output
            }] } });

class jqxNavigationBarModule {
}
jqxNavigationBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavigationBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxNavigationBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavigationBarModule, declarations: [jqxNavigationBarComponent], exports: [jqxNavigationBarComponent] });
jqxNavigationBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavigationBarModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNavigationBarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxNavigationBarComponent],
                    exports: [jqxNavigationBarComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxNavigationBarComponent, jqxNavigationBarModule };
