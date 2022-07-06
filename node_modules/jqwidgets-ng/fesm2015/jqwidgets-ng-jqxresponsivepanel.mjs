import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxresponsivepanel';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxResponsivePanelComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationDirection', 'animationHideDelay', 'animationShowDelay', 'animationType', 'autoClose', 'collapseBreakpoint', 'collapseWidth', 'height', 'initContent', 'theme', 'toggleButton', 'toggleButtonSize', 'width'];
        // jqxResponsivePanelComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onOpen = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxResponsivePanel(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxResponsivePanel(this.properties[i])) {
                        this.host.jqxResponsivePanel(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxResponsivePanel', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxResponsivePanel('setOptions', options);
    }
    // jqxResponsivePanelComponent properties
    animationDirection(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationDirection', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationDirection');
        }
    }
    animationHideDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationHideDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationHideDelay');
        }
    }
    animationShowDelay(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationShowDelay', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationShowDelay');
        }
    }
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('animationType', arg);
        }
        else {
            return this.host.jqxResponsivePanel('animationType');
        }
    }
    autoClose(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('autoClose', arg);
        }
        else {
            return this.host.jqxResponsivePanel('autoClose');
        }
    }
    collapseBreakpoint(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseBreakpoint', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseBreakpoint');
        }
    }
    collapseWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('collapseWidth', arg);
        }
        else {
            return this.host.jqxResponsivePanel('collapseWidth');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('height', arg);
        }
        else {
            return this.host.jqxResponsivePanel('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('initContent', arg);
        }
        else {
            return this.host.jqxResponsivePanel('initContent');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('theme', arg);
        }
        else {
            return this.host.jqxResponsivePanel('theme');
        }
    }
    toggleButton(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButton', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButton');
        }
    }
    toggleButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('toggleButtonSize', arg);
        }
        else {
            return this.host.jqxResponsivePanel('toggleButtonSize');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxResponsivePanel('width', arg);
        }
        else {
            return this.host.jqxResponsivePanel('width');
        }
    }
    // jqxResponsivePanelComponent functions
    close() {
        this.host.jqxResponsivePanel('close');
    }
    destroy() {
        this.host.jqxResponsivePanel('destroy');
    }
    isCollapsed() {
        return this.host.jqxResponsivePanel('isCollapsed');
    }
    isOpened() {
        return this.host.jqxResponsivePanel('isOpened');
    }
    open() {
        this.host.jqxResponsivePanel('open');
    }
    refresh() {
        this.host.jqxResponsivePanel('refresh');
    }
    render() {
        this.host.jqxResponsivePanel('render');
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
    }
} //jqxResponsivePanelComponent
jqxResponsivePanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxResponsivePanelComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxResponsivePanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxResponsivePanelComponent, selector: "jqxResponsivePanel", inputs: { attrAnimationDirection: ["animationDirection", "attrAnimationDirection"], attrAnimationHideDelay: ["animationHideDelay", "attrAnimationHideDelay"], attrAnimationShowDelay: ["animationShowDelay", "attrAnimationShowDelay"], attrAnimationType: ["animationType", "attrAnimationType"], attrAutoClose: ["autoClose", "attrAutoClose"], attrCollapseBreakpoint: ["collapseBreakpoint", "attrCollapseBreakpoint"], attrCollapseWidth: ["collapseWidth", "attrCollapseWidth"], attrInitContent: ["initContent", "attrInitContent"], attrTheme: ["theme", "attrTheme"], attrToggleButton: ["toggleButton", "attrToggleButton"], attrToggleButtonSize: ["toggleButtonSize", "attrToggleButtonSize"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClose: "onClose", onCollapse: "onCollapse", onExpand: "onExpand", onOpen: "onOpen" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxResponsivePanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxResponsivePanel',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationDirection: [{
                type: Input,
                args: ['animationDirection']
            }], attrAnimationHideDelay: [{
                type: Input,
                args: ['animationHideDelay']
            }], attrAnimationShowDelay: [{
                type: Input,
                args: ['animationShowDelay']
            }], attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrAutoClose: [{
                type: Input,
                args: ['autoClose']
            }], attrCollapseBreakpoint: [{
                type: Input,
                args: ['collapseBreakpoint']
            }], attrCollapseWidth: [{
                type: Input,
                args: ['collapseWidth']
            }], attrInitContent: [{
                type: Input,
                args: ['initContent']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrToggleButton: [{
                type: Input,
                args: ['toggleButton']
            }], attrToggleButtonSize: [{
                type: Input,
                args: ['toggleButtonSize']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onClose: [{
                type: Output
            }], onCollapse: [{
                type: Output
            }], onExpand: [{
                type: Output
            }], onOpen: [{
                type: Output
            }] } });

class jqxResponsivePanelModule {
}
jqxResponsivePanelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxResponsivePanelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxResponsivePanelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxResponsivePanelModule, declarations: [jqxResponsivePanelComponent], exports: [jqxResponsivePanelComponent] });
jqxResponsivePanelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxResponsivePanelModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxResponsivePanelModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxResponsivePanelComponent],
                    exports: [jqxResponsivePanelComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxResponsivePanelComponent, jqxResponsivePanelModule };
