import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxRepeatButtonComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['delay', 'disabled', 'height', 'imgSrc', 'imgWidth', 'imgHeight', 'imgPosition', 'roundedCorners', 'rtl', 'textPosition', 'textImageRelation', 'theme', 'template', 'toggled', 'width', 'value'];
        // jqxRepeatButtonComponent events
        this.onClick = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxRepeatButton(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxRepeatButton(this.properties[i])) {
                        this.host.jqxRepeatButton(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxRepeatButton', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxRepeatButton('setOptions', options);
    }
    // jqxRepeatButtonComponent properties
    delay(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('delay', arg);
        }
        else {
            return this.host.jqxRepeatButton('delay');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('disabled', arg);
        }
        else {
            return this.host.jqxRepeatButton('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('height', arg);
        }
        else {
            return this.host.jqxRepeatButton('height');
        }
    }
    imgSrc(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgSrc', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgSrc');
        }
    }
    imgWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgWidth', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgWidth');
        }
    }
    imgHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgHeight', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgHeight');
        }
    }
    imgPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('imgPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('imgPosition');
        }
    }
    roundedCorners(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('roundedCorners', arg);
        }
        else {
            return this.host.jqxRepeatButton('roundedCorners');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('rtl', arg);
        }
        else {
            return this.host.jqxRepeatButton('rtl');
        }
    }
    textPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textPosition', arg);
        }
        else {
            return this.host.jqxRepeatButton('textPosition');
        }
    }
    textImageRelation(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('textImageRelation', arg);
        }
        else {
            return this.host.jqxRepeatButton('textImageRelation');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('theme', arg);
        }
        else {
            return this.host.jqxRepeatButton('theme');
        }
    }
    template(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('template', arg);
        }
        else {
            return this.host.jqxRepeatButton('template');
        }
    }
    toggled(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('toggled', arg);
        }
        else {
            return this.host.jqxRepeatButton('toggled');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('width', arg);
        }
        else {
            return this.host.jqxRepeatButton('width');
        }
    }
    value(arg) {
        if (arg !== undefined) {
            this.host.jqxRepeatButton('value', arg);
        }
        else {
            return this.host.jqxRepeatButton('value');
        }
    }
    // jqxRepeatButtonComponent functions
    destroy() {
        this.host.jqxRepeatButton('destroy');
    }
    focus() {
        this.host.jqxRepeatButton('focus');
    }
    render() {
        this.host.jqxRepeatButton('render');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxRepeatButton('val', value);
        }
        else {
            return this.host.jqxRepeatButton('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('click', (eventData) => { this.onClick.emit(eventData); });
    }
} //jqxRepeatButtonComponent
jqxRepeatButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRepeatButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxRepeatButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxRepeatButtonComponent, selector: "jqxRepeatButton", inputs: { attrDelay: ["delay", "attrDelay"], attrDisabled: ["disabled", "attrDisabled"], attrImgSrc: ["imgSrc", "attrImgSrc"], attrImgWidth: ["imgWidth", "attrImgWidth"], attrImgHeight: ["imgHeight", "attrImgHeight"], attrImgPosition: ["imgPosition", "attrImgPosition"], attrRoundedCorners: ["roundedCorners", "attrRoundedCorners"], attrRtl: ["rtl", "attrRtl"], attrTextPosition: ["textPosition", "attrTextPosition"], attrTextImageRelation: ["textImageRelation", "attrTextImageRelation"], attrTheme: ["theme", "attrTheme"], attrTemplate: ["template", "attrTemplate"], attrToggled: ["toggled", "attrToggled"], attrValue: ["value", "attrValue"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClick: "onClick" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRepeatButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxRepeatButton',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrDelay: [{
                type: Input,
                args: ['delay']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrImgSrc: [{
                type: Input,
                args: ['imgSrc']
            }], attrImgWidth: [{
                type: Input,
                args: ['imgWidth']
            }], attrImgHeight: [{
                type: Input,
                args: ['imgHeight']
            }], attrImgPosition: [{
                type: Input,
                args: ['imgPosition']
            }], attrRoundedCorners: [{
                type: Input,
                args: ['roundedCorners']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrTextPosition: [{
                type: Input,
                args: ['textPosition']
            }], attrTextImageRelation: [{
                type: Input,
                args: ['textImageRelation']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
            }], attrToggled: [{
                type: Input,
                args: ['toggled']
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
            }], onClick: [{
                type: Output
            }] } });

class jqxRepeatButtonModule {
}
jqxRepeatButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRepeatButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxRepeatButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRepeatButtonModule, declarations: [jqxRepeatButtonComponent], exports: [jqxRepeatButtonComponent] });
jqxRepeatButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRepeatButtonModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRepeatButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxRepeatButtonComponent],
                    exports: [jqxRepeatButtonComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxRepeatButtonComponent, jqxRepeatButtonModule };
