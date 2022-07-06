import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdragdrop';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxDragDropComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appendTo', 'disabled', 'distance', 'data', 'dropAction', 'dropTarget', 'dragZIndex', 'feedback', 'initFeedback', 'opacity', 'onDragEnd', 'onDrag', 'onDragStart', 'onTargetDrop', 'onDropTargetEnter', 'onDropTargetLeave', 'restricter', 'revert', 'revertDuration', 'tolerance'];
        // jqxDragDropComponent functions
        // jqxDragDropComponent events
        this.ondragstart = new EventEmitter();
        this.ondragend = new EventEmitter();
        this.ondragging = new EventEmitter();
        this.ondroptargetenter = new EventEmitter();
        this.ondroptargetleave = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDragDrop(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDragDrop(this.properties[i])) {
                        this.host.jqxDragDrop(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDragDrop', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDragDrop('setOptions', options);
    }
    // jqxDragDropComponent properties
    appendTo(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('appendTo', arg);
        }
        else {
            return this.host.jqxDragDrop('appendTo');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('disabled', arg);
        }
        else {
            return this.host.jqxDragDrop('disabled');
        }
    }
    distance(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('distance', arg);
        }
        else {
            return this.host.jqxDragDrop('distance');
        }
    }
    data(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('data', arg);
        }
        else {
            return this.host.jqxDragDrop('data');
        }
    }
    dropAction(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropAction', arg);
        }
        else {
            return this.host.jqxDragDrop('dropAction');
        }
    }
    dropTarget(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dropTarget', arg);
        }
        else {
            return this.host.jqxDragDrop('dropTarget');
        }
    }
    dragZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('dragZIndex', arg);
        }
        else {
            return this.host.jqxDragDrop('dragZIndex');
        }
    }
    feedback(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('feedback', arg);
        }
        else {
            return this.host.jqxDragDrop('feedback');
        }
    }
    initFeedback(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('initFeedback', arg);
        }
        else {
            return this.host.jqxDragDrop('initFeedback');
        }
    }
    opacity(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('opacity', arg);
        }
        else {
            return this.host.jqxDragDrop('opacity');
        }
    }
    onDragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragEnd', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragEnd');
        }
    }
    onDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDrag', arg);
        }
        else {
            return this.host.jqxDragDrop('onDrag');
        }
    }
    onDragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDragStart', arg);
        }
        else {
            return this.host.jqxDragDrop('onDragStart');
        }
    }
    onTargetDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onTargetDrop', arg);
        }
        else {
            return this.host.jqxDragDrop('onTargetDrop');
        }
    }
    onDropTargetEnter(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetEnter', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetEnter');
        }
    }
    onDropTargetLeave(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('onDropTargetLeave', arg);
        }
        else {
            return this.host.jqxDragDrop('onDropTargetLeave');
        }
    }
    restricter(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('restricter', arg);
        }
        else {
            return this.host.jqxDragDrop('restricter');
        }
    }
    revert(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revert', arg);
        }
        else {
            return this.host.jqxDragDrop('revert');
        }
    }
    revertDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('revertDuration', arg);
        }
        else {
            return this.host.jqxDragDrop('revertDuration');
        }
    }
    tolerance(arg) {
        if (arg !== undefined) {
            this.host.jqxDragDrop('tolerance', arg);
        }
        else {
            return this.host.jqxDragDrop('tolerance');
        }
    }
    __wireEvents__() {
        this.host.on('dragStart', (eventData) => { this.ondragstart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.ondragend.emit(eventData); });
        this.host.on('dragging', (eventData) => { this.ondragging.emit(eventData); });
        this.host.on('dropTargetEnter', (eventData) => { this.ondroptargetenter.emit(eventData); });
        this.host.on('dropTargetLeave', (eventData) => { this.ondroptargetleave.emit(eventData); });
    }
} //jqxDragDropComponent
jqxDragDropComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDragDropComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxDragDropComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxDragDropComponent, selector: "jqxDragDrop", inputs: { attrAppendTo: ["appendTo", "attrAppendTo"], attrDisabled: ["disabled", "attrDisabled"], attrDistance: ["distance", "attrDistance"], attrData: ["data", "attrData"], attrDropAction: ["dropAction", "attrDropAction"], attrDropTarget: ["dropTarget", "attrDropTarget"], attrDragZIndex: ["dragZIndex", "attrDragZIndex"], attrFeedback: ["feedback", "attrFeedback"], attrInitFeedback: ["initFeedback", "attrInitFeedback"], attrOpacity: ["opacity", "attrOpacity"], attrOnDragEnd: ["onDragEnd", "attrOnDragEnd"], attrOnDrag: ["onDrag", "attrOnDrag"], attrOnDragStart: ["onDragStart", "attrOnDragStart"], attrOnTargetDrop: ["onTargetDrop", "attrOnTargetDrop"], attrOnDropTargetEnter: ["onDropTargetEnter", "attrOnDropTargetEnter"], attrOnDropTargetLeave: ["onDropTargetLeave", "attrOnDropTargetLeave"], attrRestricter: ["restricter", "attrRestricter"], attrRevert: ["revert", "attrRevert"], attrRevertDuration: ["revertDuration", "attrRevertDuration"], attrTolerance: ["tolerance", "attrTolerance"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { ondragstart: "ondragstart", ondragend: "ondragend", ondragging: "ondragging", ondroptargetenter: "ondroptargetenter", ondroptargetleave: "ondroptargetleave" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDragDropComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxDragDrop',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAppendTo: [{
                type: Input,
                args: ['appendTo']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDistance: [{
                type: Input,
                args: ['distance']
            }], attrData: [{
                type: Input,
                args: ['data']
            }], attrDropAction: [{
                type: Input,
                args: ['dropAction']
            }], attrDropTarget: [{
                type: Input,
                args: ['dropTarget']
            }], attrDragZIndex: [{
                type: Input,
                args: ['dragZIndex']
            }], attrFeedback: [{
                type: Input,
                args: ['feedback']
            }], attrInitFeedback: [{
                type: Input,
                args: ['initFeedback']
            }], attrOpacity: [{
                type: Input,
                args: ['opacity']
            }], attrOnDragEnd: [{
                type: Input,
                args: ['onDragEnd']
            }], attrOnDrag: [{
                type: Input,
                args: ['onDrag']
            }], attrOnDragStart: [{
                type: Input,
                args: ['onDragStart']
            }], attrOnTargetDrop: [{
                type: Input,
                args: ['onTargetDrop']
            }], attrOnDropTargetEnter: [{
                type: Input,
                args: ['onDropTargetEnter']
            }], attrOnDropTargetLeave: [{
                type: Input,
                args: ['onDropTargetLeave']
            }], attrRestricter: [{
                type: Input,
                args: ['restricter']
            }], attrRevert: [{
                type: Input,
                args: ['revert']
            }], attrRevertDuration: [{
                type: Input,
                args: ['revertDuration']
            }], attrTolerance: [{
                type: Input,
                args: ['tolerance']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], ondragstart: [{
                type: Output
            }], ondragend: [{
                type: Output
            }], ondragging: [{
                type: Output
            }], ondroptargetenter: [{
                type: Output
            }], ondroptargetleave: [{
                type: Output
            }] } });

class jqxDragDropModule {
}
jqxDragDropModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDragDropModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxDragDropModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDragDropModule, declarations: [jqxDragDropComponent], exports: [jqxDragDropComponent] });
jqxDragDropModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDragDropModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDragDropModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxDragDropComponent],
                    exports: [jqxDragDropComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDragDropComponent, jqxDragDropModule };
