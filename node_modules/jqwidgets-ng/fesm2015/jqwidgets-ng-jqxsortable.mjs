import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxsortable';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxSortableComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'axis', 'cancel', 'connectWith', 'containment', 'cursor', 'cursorAt', 'delay', 'disabled', 'distance', 'dropOnEmpty', 'forceHelperSize', 'forcePlaceholderSize', 'grid', 'handle', 'helper', 'items', 'opacity', 'placeholderShow', 'revert', 'scroll', 'scrollSensitivity', 'scrollSpeed', 'tolerance', 'zIndex'];
        // jqxSortableComponent events
        this.onActivate = new EventEmitter();
        this.onBeforeStop = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onDeactivate = new EventEmitter();
        this.onOut = new EventEmitter();
        this.onOver = new EventEmitter();
        this.onReceive = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.onSort = new EventEmitter();
        this.onStart = new EventEmitter();
        this.onStop = new EventEmitter();
        this.onUpdate = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxSortable(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxSortable(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxSortable(this.properties[i])) {
                        this.host.jqxSortable(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxSortable('setOptions', options);
    }
    // jqxSortableComponent properties
    appendTo(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('appendTo', arg);
        }
        else {
            return this.host.jqxSortable('appendTo');
        }
    }
    axis(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('axis', arg);
        }
        else {
            return this.host.jqxSortable('axis');
        }
    }
    cancel(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cancel', arg);
        }
        else {
            return this.host.jqxSortable('cancel');
        }
    }
    connectWith(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('connectWith', arg);
        }
        else {
            return this.host.jqxSortable('connectWith');
        }
    }
    containment(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('containment', arg);
        }
        else {
            return this.host.jqxSortable('containment');
        }
    }
    cursor(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursor', arg);
        }
        else {
            return this.host.jqxSortable('cursor');
        }
    }
    cursorAt(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('cursorAt', arg);
        }
        else {
            return this.host.jqxSortable('cursorAt');
        }
    }
    delay(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('delay', arg);
        }
        else {
            return this.host.jqxSortable('delay');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('disabled', arg);
        }
        else {
            return this.host.jqxSortable('disabled');
        }
    }
    distance(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('distance', arg);
        }
        else {
            return this.host.jqxSortable('distance');
        }
    }
    dropOnEmpty(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('dropOnEmpty', arg);
        }
        else {
            return this.host.jqxSortable('dropOnEmpty');
        }
    }
    forceHelperSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forceHelperSize', arg);
        }
        else {
            return this.host.jqxSortable('forceHelperSize');
        }
    }
    forcePlaceholderSize(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('forcePlaceholderSize', arg);
        }
        else {
            return this.host.jqxSortable('forcePlaceholderSize');
        }
    }
    grid(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('grid', arg);
        }
        else {
            return this.host.jqxSortable('grid');
        }
    }
    handle(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('handle', arg);
        }
        else {
            return this.host.jqxSortable('handle');
        }
    }
    helper(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('helper', arg);
        }
        else {
            return this.host.jqxSortable('helper');
        }
    }
    items(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('items', arg);
        }
        else {
            return this.host.jqxSortable('items');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('opacity', arg);
        }
        else {
            return this.host.jqxSortable('opacity');
        }
    }
    placeholderShow(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('placeholderShow', arg);
        }
        else {
            return this.host.jqxSortable('placeholderShow');
        }
    }
    revert(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('revert', arg);
        }
        else {
            return this.host.jqxSortable('revert');
        }
    }
    scroll(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scroll', arg);
        }
        else {
            return this.host.jqxSortable('scroll');
        }
    }
    scrollSensitivity(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSensitivity', arg);
        }
        else {
            return this.host.jqxSortable('scrollSensitivity');
        }
    }
    scrollSpeed(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('scrollSpeed', arg);
        }
        else {
            return this.host.jqxSortable('scrollSpeed');
        }
    }
    tolerance(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('tolerance', arg);
        }
        else {
            return this.host.jqxSortable('tolerance');
        }
    }
    zIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxSortable('zIndex', arg);
        }
        else {
            return this.host.jqxSortable('zIndex');
        }
    }
    // jqxSortableComponent functions
    cancelMethod() {
        this.host.jqxSortable('cancelMethod');
    }
    destroy() {
        this.host.jqxSortable('destroy');
    }
    disable() {
        this.host.jqxSortable('disable');
    }
    enable() {
        this.host.jqxSortable('enable');
    }
    refresh() {
        this.host.jqxSortable('refresh');
    }
    refreshPositions() {
        this.host.jqxSortable('refreshPositions');
    }
    serialize(object) {
        return this.host.jqxSortable('serialize', object);
    }
    toArray() {
        return this.host.jqxSortable('toArray');
    }
    __wireEvents__() {
        this.host.on('activate', (eventData) => { this.onActivate.emit(eventData); });
        this.host.on('beforeStop', (eventData) => { this.onBeforeStop.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
        this.host.on('deactivate', (eventData) => { this.onDeactivate.emit(eventData); });
        this.host.on('out', (eventData) => { this.onOut.emit(eventData); });
        this.host.on('over', (eventData) => { this.onOver.emit(eventData); });
        this.host.on('receive', (eventData) => { this.onReceive.emit(eventData); });
        this.host.on('remove', (eventData) => { this.onRemove.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
        this.host.on('start', (eventData) => { this.onStart.emit(eventData); });
        this.host.on('stop', (eventData) => { this.onStop.emit(eventData); });
        this.host.on('update', (eventData) => { this.onUpdate.emit(eventData); });
    }
} //jqxSortableComponent
jqxSortableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSortableComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxSortableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxSortableComponent, selector: "jqxSortable", inputs: { attrAppendTo: ["appendTo", "attrAppendTo"], attrAxis: ["axis", "attrAxis"], attrCancel: ["cancel", "attrCancel"], attrConnectWith: ["connectWith", "attrConnectWith"], attrContainment: ["containment", "attrContainment"], attrCursor: ["cursor", "attrCursor"], attrCursorAt: ["cursorAt", "attrCursorAt"], attrDelay: ["delay", "attrDelay"], attrDisabled: ["disabled", "attrDisabled"], attrDistance: ["distance", "attrDistance"], attrDropOnEmpty: ["dropOnEmpty", "attrDropOnEmpty"], attrForceHelperSize: ["forceHelperSize", "attrForceHelperSize"], attrForcePlaceholderSize: ["forcePlaceholderSize", "attrForcePlaceholderSize"], attrGrid: ["grid", "attrGrid"], attrHandle: ["handle", "attrHandle"], attrHelper: ["helper", "attrHelper"], attrItems: ["items", "attrItems"], attrOpacity: ["opacity", "attrOpacity"], attrPlaceholderShow: ["placeholderShow", "attrPlaceholderShow"], attrRevert: ["revert", "attrRevert"], attrScroll: ["scroll", "attrScroll"], attrScrollSensitivity: ["scrollSensitivity", "attrScrollSensitivity"], attrScrollSpeed: ["scrollSpeed", "attrScrollSpeed"], attrTolerance: ["tolerance", "attrTolerance"], attrZIndex: ["zIndex", "attrZIndex"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onActivate: "onActivate", onBeforeStop: "onBeforeStop", onChange: "onChange", onDeactivate: "onDeactivate", onOut: "onOut", onOver: "onOver", onReceive: "onReceive", onRemove: "onRemove", onSort: "onSort", onStart: "onStart", onStop: "onStop", onUpdate: "onUpdate" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSortableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxSortable',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAppendTo: [{
                type: Input,
                args: ['appendTo']
            }], attrAxis: [{
                type: Input,
                args: ['axis']
            }], attrCancel: [{
                type: Input,
                args: ['cancel']
            }], attrConnectWith: [{
                type: Input,
                args: ['connectWith']
            }], attrContainment: [{
                type: Input,
                args: ['containment']
            }], attrCursor: [{
                type: Input,
                args: ['cursor']
            }], attrCursorAt: [{
                type: Input,
                args: ['cursorAt']
            }], attrDelay: [{
                type: Input,
                args: ['delay']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDistance: [{
                type: Input,
                args: ['distance']
            }], attrDropOnEmpty: [{
                type: Input,
                args: ['dropOnEmpty']
            }], attrForceHelperSize: [{
                type: Input,
                args: ['forceHelperSize']
            }], attrForcePlaceholderSize: [{
                type: Input,
                args: ['forcePlaceholderSize']
            }], attrGrid: [{
                type: Input,
                args: ['grid']
            }], attrHandle: [{
                type: Input,
                args: ['handle']
            }], attrHelper: [{
                type: Input,
                args: ['helper']
            }], attrItems: [{
                type: Input,
                args: ['items']
            }], attrOpacity: [{
                type: Input,
                args: ['opacity']
            }], attrPlaceholderShow: [{
                type: Input,
                args: ['placeholderShow']
            }], attrRevert: [{
                type: Input,
                args: ['revert']
            }], attrScroll: [{
                type: Input,
                args: ['scroll']
            }], attrScrollSensitivity: [{
                type: Input,
                args: ['scrollSensitivity']
            }], attrScrollSpeed: [{
                type: Input,
                args: ['scrollSpeed']
            }], attrTolerance: [{
                type: Input,
                args: ['tolerance']
            }], attrZIndex: [{
                type: Input,
                args: ['zIndex']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onActivate: [{
                type: Output
            }], onBeforeStop: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onDeactivate: [{
                type: Output
            }], onOut: [{
                type: Output
            }], onOver: [{
                type: Output
            }], onReceive: [{
                type: Output
            }], onRemove: [{
                type: Output
            }], onSort: [{
                type: Output
            }], onStart: [{
                type: Output
            }], onStop: [{
                type: Output
            }], onUpdate: [{
                type: Output
            }] } });

class jqxSortableModule {
}
jqxSortableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSortableModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxSortableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSortableModule, declarations: [jqxSortableComponent], exports: [jqxSortableComponent] });
jqxSortableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSortableModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSortableModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxSortableComponent],
                    exports: [jqxSortableComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxSortableComponent, jqxSortableModule };
