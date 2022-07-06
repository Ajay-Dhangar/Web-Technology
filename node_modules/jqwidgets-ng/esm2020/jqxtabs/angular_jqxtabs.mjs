/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxTabsComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationType', 'autoHeight', 'closeButtonSize', 'collapsible', 'contentTransitionDuration', 'disabled', 'enabledHover', 'enableScrollAnimation', 'enableDropAnimation', 'height', 'initTabContent', 'keyboardNavigation', 'next', 'previous', 'position', 'reorder', 'rtl', 'scrollAnimationDuration', 'selectedItem', 'selectionTracker', 'scrollable', 'scrollPosition', 'scrollStep', 'showCloseButtons', 'toggleMode', 'theme', 'width'];
        // jqxTabsComponent events
        this.onAdd = new EventEmitter();
        this.onCollapsed = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpanded = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelecting = new EventEmitter();
        this.onSelected = new EventEmitter();
        this.onTabclick = new EventEmitter();
        this.onUnselecting = new EventEmitter();
        this.onUnselected = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTabs(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTabs(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTabs(this.properties[i])) {
                        this.host.jqxTabs(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTabs', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTabs('setOptions', options);
    }
    // jqxTabsComponent properties
    animationType(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('animationType', arg);
        }
        else {
            return this.host.jqxTabs('animationType');
        }
    }
    autoHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('autoHeight', arg);
        }
        else {
            return this.host.jqxTabs('autoHeight');
        }
    }
    closeButtonSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('closeButtonSize', arg);
        }
        else {
            return this.host.jqxTabs('closeButtonSize');
        }
    }
    collapsible(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('collapsible', arg);
        }
        else {
            return this.host.jqxTabs('collapsible');
        }
    }
    contentTransitionDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('contentTransitionDuration', arg);
        }
        else {
            return this.host.jqxTabs('contentTransitionDuration');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('disabled', arg);
        }
        else {
            return this.host.jqxTabs('disabled');
        }
    }
    enabledHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enabledHover', arg);
        }
        else {
            return this.host.jqxTabs('enabledHover');
        }
    }
    enableScrollAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableScrollAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableScrollAnimation');
        }
    }
    enableDropAnimation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('enableDropAnimation', arg);
        }
        else {
            return this.host.jqxTabs('enableDropAnimation');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('height', arg);
        }
        else {
            return this.host.jqxTabs('height');
        }
    }
    initTabContent(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('initTabContent', arg);
        }
        else {
            return this.host.jqxTabs('initTabContent');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTabs('keyboardNavigation');
        }
    }
    next(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('next', arg);
        }
        else {
            return this.host.jqxTabs('next');
        }
    }
    previous(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('previous', arg);
        }
        else {
            return this.host.jqxTabs('previous');
        }
    }
    position(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('position', arg);
        }
        else {
            return this.host.jqxTabs('position');
        }
    }
    reorder(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('reorder', arg);
        }
        else {
            return this.host.jqxTabs('reorder');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('rtl', arg);
        }
        else {
            return this.host.jqxTabs('rtl');
        }
    }
    scrollAnimationDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollAnimationDuration', arg);
        }
        else {
            return this.host.jqxTabs('scrollAnimationDuration');
        }
    }
    selectedItem(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectedItem', arg);
        }
        else {
            return this.host.jqxTabs('selectedItem');
        }
    }
    selectionTracker(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('selectionTracker', arg);
        }
        else {
            return this.host.jqxTabs('selectionTracker');
        }
    }
    scrollable(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollable', arg);
        }
        else {
            return this.host.jqxTabs('scrollable');
        }
    }
    scrollPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollPosition', arg);
        }
        else {
            return this.host.jqxTabs('scrollPosition');
        }
    }
    scrollStep(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('scrollStep', arg);
        }
        else {
            return this.host.jqxTabs('scrollStep');
        }
    }
    showCloseButtons(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('showCloseButtons', arg);
        }
        else {
            return this.host.jqxTabs('showCloseButtons');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('toggleMode', arg);
        }
        else {
            return this.host.jqxTabs('toggleMode');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('theme', arg);
        }
        else {
            return this.host.jqxTabs('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTabs('width', arg);
        }
        else {
            return this.host.jqxTabs('width');
        }
    }
    // jqxTabsComponent functions
    addAt(index, title, content) {
        this.host.jqxTabs('addAt', index, title, content);
    }
    addFirst(htmlElement1, htmlElement2) {
        this.host.jqxTabs('addFirst', htmlElement1, htmlElement2);
    }
    addLast(htmlElement1, htmlElement2) {
        this.host.jqxTabs('addLast', htmlElement1, htmlElement2);
    }
    collapse() {
        this.host.jqxTabs('collapse');
    }
    disable() {
        this.host.jqxTabs('disable');
    }
    disableAt(index) {
        this.host.jqxTabs('disableAt', index);
    }
    destroy() {
        this.host.jqxTabs('destroy');
    }
    ensureVisible(index) {
        this.host.jqxTabs('ensureVisible', index);
    }
    enableAt(index) {
        this.host.jqxTabs('enableAt', index);
    }
    expand() {
        this.host.jqxTabs('expand');
    }
    enable() {
        this.host.jqxTabs('enable');
    }
    focus() {
        this.host.jqxTabs('focus');
    }
    getTitleAt(index) {
        return this.host.jqxTabs('getTitleAt', index);
    }
    getContentAt(index) {
        return this.host.jqxTabs('getContentAt', index);
    }
    getDisabledTabsCount() {
        return this.host.jqxTabs('getDisabledTabsCount');
    }
    hideCloseButtonAt(index) {
        this.host.jqxTabs('hideCloseButtonAt', index);
    }
    hideAllCloseButtons() {
        this.host.jqxTabs('hideAllCloseButtons');
    }
    length() {
        return this.host.jqxTabs('length');
    }
    removeAt(index) {
        this.host.jqxTabs('removeAt', index);
    }
    removeFirst() {
        this.host.jqxTabs('removeFirst');
    }
    removeLast() {
        this.host.jqxTabs('removeLast');
    }
    select(index) {
        this.host.jqxTabs('select', index);
    }
    setContentAt(index, htmlElement) {
        this.host.jqxTabs('setContentAt', index, htmlElement);
    }
    setTitleAt(index, htmlElement) {
        this.host.jqxTabs('setTitleAt', index, htmlElement);
    }
    showCloseButtonAt(index) {
        this.host.jqxTabs('showCloseButtonAt', index);
    }
    showAllCloseButtons() {
        this.host.jqxTabs('showAllCloseButtons');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTabs('val', value);
        }
        else {
            return this.host.jqxTabs('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('add', (eventData) => { this.onAdd.emit(eventData); });
        this.host.on('collapsed', (eventData) => { this.onCollapsed.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('expanded', (eventData) => { this.onExpanded.emit(eventData); });
        this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
        this.host.on('selecting', (eventData) => { this.onSelecting.emit(eventData); });
        this.host.on('selected', (eventData) => { this.onSelected.emit(eventData); });
        this.host.on('tabclick', (eventData) => { this.onTabclick.emit(eventData); });
        this.host.on('unselecting', (eventData) => { this.onUnselecting.emit(eventData); });
        this.host.on('unselected', (eventData) => { this.onUnselected.emit(eventData); });
    }
} //jqxTabsComponent
jqxTabsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTabsComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTabsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTabsComponent, selector: "jqxTabs", inputs: { attrAnimationType: ["animationType", "attrAnimationType"], attrAutoHeight: ["autoHeight", "attrAutoHeight"], attrCloseButtonSize: ["closeButtonSize", "attrCloseButtonSize"], attrCollapsible: ["collapsible", "attrCollapsible"], attrContentTransitionDuration: ["contentTransitionDuration", "attrContentTransitionDuration"], attrDisabled: ["disabled", "attrDisabled"], attrEnabledHover: ["enabledHover", "attrEnabledHover"], attrEnableScrollAnimation: ["enableScrollAnimation", "attrEnableScrollAnimation"], attrEnableDropAnimation: ["enableDropAnimation", "attrEnableDropAnimation"], attrInitTabContent: ["initTabContent", "attrInitTabContent"], attrKeyboardNavigation: ["keyboardNavigation", "attrKeyboardNavigation"], attrNext: ["next", "attrNext"], attrPrevious: ["previous", "attrPrevious"], attrPosition: ["position", "attrPosition"], attrReorder: ["reorder", "attrReorder"], attrRtl: ["rtl", "attrRtl"], attrScrollAnimationDuration: ["scrollAnimationDuration", "attrScrollAnimationDuration"], attrSelectedItem: ["selectedItem", "attrSelectedItem"], attrSelectionTracker: ["selectionTracker", "attrSelectionTracker"], attrScrollable: ["scrollable", "attrScrollable"], attrScrollPosition: ["scrollPosition", "attrScrollPosition"], attrScrollStep: ["scrollStep", "attrScrollStep"], attrShowCloseButtons: ["showCloseButtons", "attrShowCloseButtons"], attrToggleMode: ["toggleMode", "attrToggleMode"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onAdd: "onAdd", onCollapsed: "onCollapsed", onDragStart: "onDragStart", onDragEnd: "onDragEnd", onExpanded: "onExpanded", onRemoved: "onRemoved", onSelecting: "onSelecting", onSelected: "onSelected", onTabclick: "onTabclick", onUnselecting: "onUnselecting", onUnselected: "onUnselected" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTabsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTabs',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrAutoHeight: [{
                type: Input,
                args: ['autoHeight']
            }], attrCloseButtonSize: [{
                type: Input,
                args: ['closeButtonSize']
            }], attrCollapsible: [{
                type: Input,
                args: ['collapsible']
            }], attrContentTransitionDuration: [{
                type: Input,
                args: ['contentTransitionDuration']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEnabledHover: [{
                type: Input,
                args: ['enabledHover']
            }], attrEnableScrollAnimation: [{
                type: Input,
                args: ['enableScrollAnimation']
            }], attrEnableDropAnimation: [{
                type: Input,
                args: ['enableDropAnimation']
            }], attrInitTabContent: [{
                type: Input,
                args: ['initTabContent']
            }], attrKeyboardNavigation: [{
                type: Input,
                args: ['keyboardNavigation']
            }], attrNext: [{
                type: Input,
                args: ['next']
            }], attrPrevious: [{
                type: Input,
                args: ['previous']
            }], attrPosition: [{
                type: Input,
                args: ['position']
            }], attrReorder: [{
                type: Input,
                args: ['reorder']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrScrollAnimationDuration: [{
                type: Input,
                args: ['scrollAnimationDuration']
            }], attrSelectedItem: [{
                type: Input,
                args: ['selectedItem']
            }], attrSelectionTracker: [{
                type: Input,
                args: ['selectionTracker']
            }], attrScrollable: [{
                type: Input,
                args: ['scrollable']
            }], attrScrollPosition: [{
                type: Input,
                args: ['scrollPosition']
            }], attrScrollStep: [{
                type: Input,
                args: ['scrollStep']
            }], attrShowCloseButtons: [{
                type: Input,
                args: ['showCloseButtons']
            }], attrToggleMode: [{
                type: Input,
                args: ['toggleMode']
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
            }], onAdd: [{
                type: Output
            }], onCollapsed: [{
                type: Output
            }], onDragStart: [{
                type: Output
            }], onDragEnd: [{
                type: Output
            }], onExpanded: [{
                type: Output
            }], onRemoved: [{
                type: Output
            }], onSelecting: [{
                type: Output
            }], onSelected: [{
                type: Output
            }], onTabclick: [{
                type: Output
            }], onUnselecting: [{
                type: Output
            }], onUnselected: [{
                type: Output
            }] } });
