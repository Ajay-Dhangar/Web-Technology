import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxwindow';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxWindowComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'animationType', 'collapsed', 'collapseAnimationDuration', 'content', 'closeAnimationDuration', 'closeButtonSize', 'closeButtonAction', 'cancelButton', 'dragArea', 'draggable', 'disabled', 'height', 'initContent', 'isModal', 'keyboardCloseKey', 'keyboardNavigation', 'minHeight', 'maxHeight', 'minWidth', 'maxWidth', 'modalOpacity', 'modalZIndex', 'modalBackgroundZIndex', 'okButton', 'position', 'rtl', 'resizable', 'showAnimationDuration', 'showCloseButton', 'showCollapseButton', 'theme', 'title', 'width', 'zIndex'];
        // jqxWindowComponent events
        this.onClose = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onMoving = new EventEmitter();
        this.onMoved = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onResizing = new EventEmitter();
        this.onResized = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxWindow(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxWindow(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxWindow(this.properties[i])) {
                        this.host.jqxWindow(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxWindow', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxWindow('setOptions', options);
    }
    // jqxWindowComponent properties
    autoOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('autoOpen', arg);
        }
        else {
            return this.host.jqxWindow('autoOpen');
        }
    }
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('animationType', arg);
        }
        else {
            return this.host.jqxWindow('animationType');
        }
    }
    collapsed(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapsed', arg);
        }
        else {
            return this.host.jqxWindow('collapsed');
        }
    }
    collapseAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('collapseAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('collapseAnimationDuration');
        }
    }
    content(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('content', arg);
        }
        else {
            return this.host.jqxWindow('content');
        }
    }
    closeAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('closeAnimationDuration');
        }
    }
    closeButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonSize', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonSize');
        }
    }
    closeButtonAction(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('closeButtonAction', arg);
        }
        else {
            return this.host.jqxWindow('closeButtonAction');
        }
    }
    cancelButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('cancelButton', arg);
        }
        else {
            return this.host.jqxWindow('cancelButton');
        }
    }
    dragArea(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('dragArea', arg);
        }
        else {
            return this.host.jqxWindow('dragArea');
        }
    }
    draggable(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('draggable', arg);
        }
        else {
            return this.host.jqxWindow('draggable');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('disabled', arg);
        }
        else {
            return this.host.jqxWindow('disabled');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('height', arg);
        }
        else {
            return this.host.jqxWindow('height');
        }
    }
    initContent(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('initContent', arg);
        }
        else {
            return this.host.jqxWindow('initContent');
        }
    }
    isModal(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('isModal', arg);
        }
        else {
            return this.host.jqxWindow('isModal');
        }
    }
    keyboardCloseKey(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardCloseKey', arg);
        }
        else {
            return this.host.jqxWindow('keyboardCloseKey');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxWindow('keyboardNavigation');
        }
    }
    minHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minHeight', arg);
        }
        else {
            return this.host.jqxWindow('minHeight');
        }
    }
    maxHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxHeight', arg);
        }
        else {
            return this.host.jqxWindow('maxHeight');
        }
    }
    minWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('minWidth', arg);
        }
        else {
            return this.host.jqxWindow('minWidth');
        }
    }
    maxWidth(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('maxWidth', arg);
        }
        else {
            return this.host.jqxWindow('maxWidth');
        }
    }
    modalOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalOpacity', arg);
        }
        else {
            return this.host.jqxWindow('modalOpacity');
        }
    }
    modalZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalZIndex');
        }
    }
    modalBackgroundZIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('modalBackgroundZIndex', arg);
        }
        else {
            return this.host.jqxWindow('modalBackgroundZIndex');
        }
    }
    okButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('okButton', arg);
        }
        else {
            return this.host.jqxWindow('okButton');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('position', arg);
        }
        else {
            return this.host.jqxWindow('position');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('rtl', arg);
        }
        else {
            return this.host.jqxWindow('rtl');
        }
    }
    resizable(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('resizable', arg);
        }
        else {
            return this.host.jqxWindow('resizable');
        }
    }
    showAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showAnimationDuration', arg);
        }
        else {
            return this.host.jqxWindow('showAnimationDuration');
        }
    }
    showCloseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCloseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCloseButton');
        }
    }
    showCollapseButton(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('showCollapseButton', arg);
        }
        else {
            return this.host.jqxWindow('showCollapseButton');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('theme', arg);
        }
        else {
            return this.host.jqxWindow('theme');
        }
    }
    title(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('title', arg);
        }
        else {
            return this.host.jqxWindow('title');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('width', arg);
        }
        else {
            return this.host.jqxWindow('width');
        }
    }
    zIndex(arg) {
        if (arg !== undefined) {
            this.host.jqxWindow('zIndex', arg);
        }
        else {
            return this.host.jqxWindow('zIndex');
        }
    }
    // jqxWindowComponent functions
    bringToFront() {
        this.host.jqxWindow('bringToFront');
    }
    close() {
        this.host.jqxWindow('close');
    }
    collapse() {
        this.host.jqxWindow('collapse');
    }
    closeAll() {
        this.host.jqxWindow('closeAll');
    }
    disable() {
        this.host.jqxWindow('disable');
    }
    destroy() {
        this.host.jqxWindow('destroy');
    }
    enable() {
        this.host.jqxWindow('enable');
    }
    expand() {
        this.host.jqxWindow('expand');
    }
    focus() {
        this.host.jqxWindow('focus');
    }
    isOpen() {
        return this.host.jqxWindow('isOpen');
    }
    move(top, left) {
        this.host.jqxWindow('move', top, left);
    }
    open() {
        this.host.jqxWindow('open');
    }
    hide() {
        this.host.jqxWindow('hide');
    }
    resize(top, left) {
        this.host.jqxWindow('resize', top, left);
    }
    setTitle(title) {
        this.host.jqxWindow('setTitle', title);
    }
    setContent(content) {
        this.host.jqxWindow('setContent', content);
    }
    __wireEvents__() {
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('moving', (eventData) => { this.onMoving.emit(eventData); });
        this.host.on('moved', (eventData) => { this.onMoved.emit(eventData); });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('resizing', (eventData) => { this.onResizing.emit(eventData); });
        this.host.on('resized', (eventData) => { this.onResized.emit(eventData); });
    }
} //jqxWindowComponent
jqxWindowComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxWindowComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxWindowComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxWindowComponent, selector: "jqxWindow", inputs: { attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrAnimationType: ["animationType", "attrAnimationType"], attrCollapsed: ["collapsed", "attrCollapsed"], attrCollapseAnimationDuration: ["collapseAnimationDuration", "attrCollapseAnimationDuration"], attrContent: ["content", "attrContent"], attrCloseAnimationDuration: ["closeAnimationDuration", "attrCloseAnimationDuration"], attrCloseButtonSize: ["closeButtonSize", "attrCloseButtonSize"], attrCloseButtonAction: ["closeButtonAction", "attrCloseButtonAction"], attrCancelButton: ["cancelButton", "attrCancelButton"], attrDragArea: ["dragArea", "attrDragArea"], attrDraggable: ["draggable", "attrDraggable"], attrDisabled: ["disabled", "attrDisabled"], attrInitContent: ["initContent", "attrInitContent"], attrIsModal: ["isModal", "attrIsModal"], attrKeyboardCloseKey: ["keyboardCloseKey", "attrKeyboardCloseKey"], attrKeyboardNavigation: ["keyboardNavigation", "attrKeyboardNavigation"], attrMinHeight: ["minHeight", "attrMinHeight"], attrMaxHeight: ["maxHeight", "attrMaxHeight"], attrMinWidth: ["minWidth", "attrMinWidth"], attrMaxWidth: ["maxWidth", "attrMaxWidth"], attrModalOpacity: ["modalOpacity", "attrModalOpacity"], attrModalZIndex: ["modalZIndex", "attrModalZIndex"], attrModalBackgroundZIndex: ["modalBackgroundZIndex", "attrModalBackgroundZIndex"], attrOkButton: ["okButton", "attrOkButton"], attrPosition: ["position", "attrPosition"], attrRtl: ["rtl", "attrRtl"], attrResizable: ["resizable", "attrResizable"], attrShowAnimationDuration: ["showAnimationDuration", "attrShowAnimationDuration"], attrShowCloseButton: ["showCloseButton", "attrShowCloseButton"], attrShowCollapseButton: ["showCollapseButton", "attrShowCollapseButton"], attrTheme: ["theme", "attrTheme"], attrTitle: ["title", "attrTitle"], attrZIndex: ["zIndex", "attrZIndex"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onClose: "onClose", onCollapse: "onCollapse", onExpand: "onExpand", onMoving: "onMoving", onMoved: "onMoved", onOpen: "onOpen", onResizing: "onResizing", onResized: "onResized" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxWindowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxWindow',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAutoOpen: [{
                type: Input,
                args: ['autoOpen']
            }], attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrCollapsed: [{
                type: Input,
                args: ['collapsed']
            }], attrCollapseAnimationDuration: [{
                type: Input,
                args: ['collapseAnimationDuration']
            }], attrContent: [{
                type: Input,
                args: ['content']
            }], attrCloseAnimationDuration: [{
                type: Input,
                args: ['closeAnimationDuration']
            }], attrCloseButtonSize: [{
                type: Input,
                args: ['closeButtonSize']
            }], attrCloseButtonAction: [{
                type: Input,
                args: ['closeButtonAction']
            }], attrCancelButton: [{
                type: Input,
                args: ['cancelButton']
            }], attrDragArea: [{
                type: Input,
                args: ['dragArea']
            }], attrDraggable: [{
                type: Input,
                args: ['draggable']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrInitContent: [{
                type: Input,
                args: ['initContent']
            }], attrIsModal: [{
                type: Input,
                args: ['isModal']
            }], attrKeyboardCloseKey: [{
                type: Input,
                args: ['keyboardCloseKey']
            }], attrKeyboardNavigation: [{
                type: Input,
                args: ['keyboardNavigation']
            }], attrMinHeight: [{
                type: Input,
                args: ['minHeight']
            }], attrMaxHeight: [{
                type: Input,
                args: ['maxHeight']
            }], attrMinWidth: [{
                type: Input,
                args: ['minWidth']
            }], attrMaxWidth: [{
                type: Input,
                args: ['maxWidth']
            }], attrModalOpacity: [{
                type: Input,
                args: ['modalOpacity']
            }], attrModalZIndex: [{
                type: Input,
                args: ['modalZIndex']
            }], attrModalBackgroundZIndex: [{
                type: Input,
                args: ['modalBackgroundZIndex']
            }], attrOkButton: [{
                type: Input,
                args: ['okButton']
            }], attrPosition: [{
                type: Input,
                args: ['position']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrResizable: [{
                type: Input,
                args: ['resizable']
            }], attrShowAnimationDuration: [{
                type: Input,
                args: ['showAnimationDuration']
            }], attrShowCloseButton: [{
                type: Input,
                args: ['showCloseButton']
            }], attrShowCollapseButton: [{
                type: Input,
                args: ['showCollapseButton']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTitle: [{
                type: Input,
                args: ['title']
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
            }], onClose: [{
                type: Output
            }], onCollapse: [{
                type: Output
            }], onExpand: [{
                type: Output
            }], onMoving: [{
                type: Output
            }], onMoved: [{
                type: Output
            }], onOpen: [{
                type: Output
            }], onResizing: [{
                type: Output
            }], onResized: [{
                type: Output
            }] } });

class jqxWindowModule {
}
jqxWindowModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxWindowModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxWindowModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxWindowModule, declarations: [jqxWindowComponent], exports: [jqxWindowComponent] });
jqxWindowModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxWindowModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxWindowModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxWindowComponent],
                    exports: [jqxWindowComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxWindowComponent, jqxWindowModule };
