import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdraw';
import '../jqwidgets/jqxknob';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxKnobComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'styles', 'step', 'snapToStep', 'value', 'width'];
        // jqxKnobComponent events
        this.onChange = new EventEmitter();
        this.elementRef = containerElement;
        JQXLite(window).resize(() => {
            this.__updateRect__();
        });
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxKnob(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxKnob(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxKnob(this.properties[i])) {
                        this.host.jqxKnob(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxKnob', options);
        this.__updateRect__();
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxKnob('setOptions', options);
    }
    // jqxKnobComponent properties
    allowValueChangeOnClick(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnClick', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnClick');
        }
    }
    allowValueChangeOnDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnDrag', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnDrag');
        }
    }
    allowValueChangeOnMouseWheel(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('allowValueChangeOnMouseWheel', arg);
        }
        else {
            return this.host.jqxKnob('allowValueChangeOnMouseWheel');
        }
    }
    changing(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('changing', arg);
        }
        else {
            return this.host.jqxKnob('changing');
        }
    }
    dragEndAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragEndAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragEndAngle');
        }
    }
    dragStartAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dragStartAngle', arg);
        }
        else {
            return this.host.jqxKnob('dragStartAngle');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('disabled', arg);
        }
        else {
            return this.host.jqxKnob('disabled');
        }
    }
    dial(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('dial', arg);
        }
        else {
            return this.host.jqxKnob('dial');
        }
    }
    endAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('endAngle', arg);
        }
        else {
            return this.host.jqxKnob('endAngle');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('height', arg);
        }
        else {
            return this.host.jqxKnob('height');
        }
    }
    labels(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('labels', arg);
        }
        else {
            return this.host.jqxKnob('labels');
        }
    }
    marks(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('marks', arg);
        }
        else {
            return this.host.jqxKnob('marks');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('min', arg);
        }
        else {
            return this.host.jqxKnob('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('max', arg);
        }
        else {
            return this.host.jqxKnob('max');
        }
    }
    progressBar(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('progressBar', arg);
        }
        else {
            return this.host.jqxKnob('progressBar');
        }
    }
    pointer(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointer', arg);
        }
        else {
            return this.host.jqxKnob('pointer');
        }
    }
    pointerGrabAction(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('pointerGrabAction', arg);
        }
        else {
            return this.host.jqxKnob('pointerGrabAction');
        }
    }
    rotation(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('rotation', arg);
        }
        else {
            return this.host.jqxKnob('rotation');
        }
    }
    startAngle(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('startAngle', arg);
        }
        else {
            return this.host.jqxKnob('startAngle');
        }
    }
    spinner(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('spinner', arg);
        }
        else {
            return this.host.jqxKnob('spinner');
        }
    }
    styles(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('styles', arg);
        }
        else {
            return this.host.jqxKnob('styles');
        }
    }
    step(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('step', arg);
        }
        else {
            return this.host.jqxKnob('step');
        }
    }
    snapToStep(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('snapToStep', arg);
        }
        else {
            return this.host.jqxKnob('snapToStep');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('value', arg);
        }
        else {
            return this.host.jqxKnob('value');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxKnob('width', arg);
        }
        else {
            return this.host.jqxKnob('width');
        }
    }
    // jqxKnobComponent functions
    destroy() {
        this.host.jqxKnob('destroy');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxKnob('val', value);
        }
        else {
            return this.host.jqxKnob('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); });
    }
} //jqxKnobComponent
jqxKnobComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKnobComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxKnobComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxKnobComponent, selector: "jqxKnob", inputs: { attrAllowValueChangeOnClick: ["allowValueChangeOnClick", "attrAllowValueChangeOnClick"], attrAllowValueChangeOnDrag: ["allowValueChangeOnDrag", "attrAllowValueChangeOnDrag"], attrAllowValueChangeOnMouseWheel: ["allowValueChangeOnMouseWheel", "attrAllowValueChangeOnMouseWheel"], attrChanging: ["changing", "attrChanging"], attrDragEndAngle: ["dragEndAngle", "attrDragEndAngle"], attrDragStartAngle: ["dragStartAngle", "attrDragStartAngle"], attrDisabled: ["disabled", "attrDisabled"], attrDial: ["dial", "attrDial"], attrEndAngle: ["endAngle", "attrEndAngle"], attrLabels: ["labels", "attrLabels"], attrMarks: ["marks", "attrMarks"], attrMin: ["min", "attrMin"], attrMax: ["max", "attrMax"], attrProgressBar: ["progressBar", "attrProgressBar"], attrPointer: ["pointer", "attrPointer"], attrPointerGrabAction: ["pointerGrabAction", "attrPointerGrabAction"], attrRotation: ["rotation", "attrRotation"], attrStartAngle: ["startAngle", "attrStartAngle"], attrSpinner: ["spinner", "attrSpinner"], attrStyles: ["styles", "attrStyles"], attrStep: ["step", "attrStep"], attrSnapToStep: ["snapToStep", "attrSnapToStep"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onChange: "onChange" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKnobComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxKnob',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAllowValueChangeOnClick: [{
                type: Input,
                args: ['allowValueChangeOnClick']
            }], attrAllowValueChangeOnDrag: [{
                type: Input,
                args: ['allowValueChangeOnDrag']
            }], attrAllowValueChangeOnMouseWheel: [{
                type: Input,
                args: ['allowValueChangeOnMouseWheel']
            }], attrChanging: [{
                type: Input,
                args: ['changing']
            }], attrDragEndAngle: [{
                type: Input,
                args: ['dragEndAngle']
            }], attrDragStartAngle: [{
                type: Input,
                args: ['dragStartAngle']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDial: [{
                type: Input,
                args: ['dial']
            }], attrEndAngle: [{
                type: Input,
                args: ['endAngle']
            }], attrLabels: [{
                type: Input,
                args: ['labels']
            }], attrMarks: [{
                type: Input,
                args: ['marks']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrProgressBar: [{
                type: Input,
                args: ['progressBar']
            }], attrPointer: [{
                type: Input,
                args: ['pointer']
            }], attrPointerGrabAction: [{
                type: Input,
                args: ['pointerGrabAction']
            }], attrRotation: [{
                type: Input,
                args: ['rotation']
            }], attrStartAngle: [{
                type: Input,
                args: ['startAngle']
            }], attrSpinner: [{
                type: Input,
                args: ['spinner']
            }], attrStyles: [{
                type: Input,
                args: ['styles']
            }], attrStep: [{
                type: Input,
                args: ['step']
            }], attrSnapToStep: [{
                type: Input,
                args: ['snapToStep']
            }], attrValue: [{
                type: Input,
                args: ['value']
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

class jqxKnobModule {
}
jqxKnobModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKnobModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxKnobModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKnobModule, declarations: [jqxKnobComponent], exports: [jqxKnobComponent] });
jqxKnobModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKnobModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxKnobModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxKnobComponent],
                    exports: [jqxKnobComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxKnobComponent, jqxKnobModule };
