/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxTreeComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['animationShowDuration', 'animationHideDuration', 'allowDrag', 'allowDrop', 'checkboxes', 'dragStart', 'dragEnd', 'disabled', 'easing', 'enableHover', 'height', 'hasThreeStates', 'incrementalSearch', 'keyboardNavigation', 'rtl', 'source', 'toggleIndicatorSize', 'toggleMode', 'theme', 'width'];
        // jqxTreeComponent events
        this.onAdded = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onCollapse = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
        this.onExpand = new EventEmitter();
        this.onItemClick = new EventEmitter();
        this.onRemoved = new EventEmitter();
        this.onSelect = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTree(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTree(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTree(this.properties[i])) {
                        this.host.jqxTree(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTree', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTree('setOptions', options);
    }
    // jqxTreeComponent properties
    animationShowDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationShowDuration', arg);
        }
        else {
            return this.host.jqxTree('animationShowDuration');
        }
    }
    animationHideDuration(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('animationHideDuration', arg);
        }
        else {
            return this.host.jqxTree('animationHideDuration');
        }
    }
    allowDrag(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrag', arg);
        }
        else {
            return this.host.jqxTree('allowDrag');
        }
    }
    allowDrop(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('allowDrop', arg);
        }
        else {
            return this.host.jqxTree('allowDrop');
        }
    }
    checkboxes(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('checkboxes', arg);
        }
        else {
            return this.host.jqxTree('checkboxes');
        }
    }
    dragStart(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragStart', arg);
        }
        else {
            return this.host.jqxTree('dragStart');
        }
    }
    dragEnd(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('dragEnd', arg);
        }
        else {
            return this.host.jqxTree('dragEnd');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('disabled', arg);
        }
        else {
            return this.host.jqxTree('disabled');
        }
    }
    easing(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('easing', arg);
        }
        else {
            return this.host.jqxTree('easing');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('enableHover', arg);
        }
        else {
            return this.host.jqxTree('enableHover');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('height', arg);
        }
        else {
            return this.host.jqxTree('height');
        }
    }
    hasThreeStates(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('hasThreeStates', arg);
        }
        else {
            return this.host.jqxTree('hasThreeStates');
        }
    }
    incrementalSearch(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTree('incrementalSearch');
        }
    }
    keyboardNavigation(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('keyboardNavigation', arg);
        }
        else {
            return this.host.jqxTree('keyboardNavigation');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('rtl', arg);
        }
        else {
            return this.host.jqxTree('rtl');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('source', arg);
        }
        else {
            return this.host.jqxTree('source');
        }
    }
    toggleIndicatorSize(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleIndicatorSize', arg);
        }
        else {
            return this.host.jqxTree('toggleIndicatorSize');
        }
    }
    toggleMode(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('toggleMode', arg);
        }
        else {
            return this.host.jqxTree('toggleMode');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('theme', arg);
        }
        else {
            return this.host.jqxTree('theme');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxTree('width', arg);
        }
        else {
            return this.host.jqxTree('width');
        }
    }
    // jqxTreeComponent functions
    addBefore(item, id) {
        this.host.jqxTree('addBefore', item, id);
    }
    addAfter(item, id) {
        this.host.jqxTree('addAfter', item, id);
    }
    addTo(item, id) {
        this.host.jqxTree('addTo', item, id);
    }
    clear() {
        this.host.jqxTree('clear');
    }
    checkAll() {
        this.host.jqxTree('checkAll');
    }
    checkItem(item, checked) {
        this.host.jqxTree('checkItem', item, checked);
    }
    collapseAll() {
        this.host.jqxTree('collapseAll');
    }
    collapseItem(item) {
        this.host.jqxTree('collapseItem', item);
    }
    destroy() {
        this.host.jqxTree('destroy');
    }
    disableItem(item) {
        this.host.jqxTree('disableItem', item);
    }
    ensureVisible(item) {
        this.host.jqxTree('ensureVisible', item);
    }
    enableItem(item) {
        this.host.jqxTree('enableItem', item);
    }
    enableAll() {
        this.host.jqxTree('enableAll');
    }
    expandAll() {
        this.host.jqxTree('expandAll');
    }
    expandItem(item) {
        this.host.jqxTree('expandItem', item);
    }
    focus() {
        this.host.jqxTree('focus');
    }
    getCheckedItems() {
        return this.host.jqxTree('getCheckedItems');
    }
    getUncheckedItems() {
        return this.host.jqxTree('getUncheckedItems');
    }
    getItems() {
        return this.host.jqxTree('getItems');
    }
    getItem(element) {
        return this.host.jqxTree('getItem', element);
    }
    getSelectedItem() {
        return this.host.jqxTree('getSelectedItem');
    }
    getPrevItem(item) {
        return this.host.jqxTree('getPrevItem', item);
    }
    getNextItem(item) {
        return this.host.jqxTree('getNextItem', item);
    }
    hitTest(left, top) {
        return this.host.jqxTree('hitTest', left, top);
    }
    removeItem(item) {
        this.host.jqxTree('removeItem', item);
    }
    render() {
        this.host.jqxTree('render');
    }
    refresh() {
        this.host.jqxTree('refresh');
    }
    selectItem(item) {
        this.host.jqxTree('selectItem', item);
    }
    uncheckAll() {
        this.host.jqxTree('uncheckAll');
    }
    uncheckItem(item) {
        this.host.jqxTree('uncheckItem', item);
    }
    updateItem(item, newItem) {
        this.host.jqxTree('updateItem', item, newItem);
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxTree('val', value);
        }
        else {
            return this.host.jqxTree('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('added', (eventData) => { this.onAdded.emit(eventData); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('collapse', (eventData) => { this.onCollapse.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('expand', (eventData) => { this.onExpand.emit(eventData); });
        this.host.on('itemClick', (eventData) => { this.onItemClick.emit(eventData); });
        this.host.on('removed', (eventData) => { this.onRemoved.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
    }
} //jqxTreeComponent
jqxTreeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTreeComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTreeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTreeComponent, selector: "jqxTree", inputs: { attrAnimationShowDuration: ["animationShowDuration", "attrAnimationShowDuration"], attrAnimationHideDuration: ["animationHideDuration", "attrAnimationHideDuration"], attrAllowDrag: ["allowDrag", "attrAllowDrag"], attrAllowDrop: ["allowDrop", "attrAllowDrop"], attrCheckboxes: ["checkboxes", "attrCheckboxes"], attrDragStart: ["dragStart", "attrDragStart"], attrDragEnd: ["dragEnd", "attrDragEnd"], attrDisabled: ["disabled", "attrDisabled"], attrEasing: ["easing", "attrEasing"], attrEnableHover: ["enableHover", "attrEnableHover"], attrHasThreeStates: ["hasThreeStates", "attrHasThreeStates"], attrIncrementalSearch: ["incrementalSearch", "attrIncrementalSearch"], attrKeyboardNavigation: ["keyboardNavigation", "attrKeyboardNavigation"], attrRtl: ["rtl", "attrRtl"], attrSource: ["source", "attrSource"], attrToggleIndicatorSize: ["toggleIndicatorSize", "attrToggleIndicatorSize"], attrToggleMode: ["toggleMode", "attrToggleMode"], attrTheme: ["theme", "attrTheme"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onAdded: "onAdded", onCheckChange: "onCheckChange", onCollapse: "onCollapse", onDragStart: "onDragStart", onDragEnd: "onDragEnd", onExpand: "onExpand", onItemClick: "onItemClick", onRemoved: "onRemoved", onSelect: "onSelect" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTreeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTree',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAnimationShowDuration: [{
                type: Input,
                args: ['animationShowDuration']
            }], attrAnimationHideDuration: [{
                type: Input,
                args: ['animationHideDuration']
            }], attrAllowDrag: [{
                type: Input,
                args: ['allowDrag']
            }], attrAllowDrop: [{
                type: Input,
                args: ['allowDrop']
            }], attrCheckboxes: [{
                type: Input,
                args: ['checkboxes']
            }], attrDragStart: [{
                type: Input,
                args: ['dragStart']
            }], attrDragEnd: [{
                type: Input,
                args: ['dragEnd']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEasing: [{
                type: Input,
                args: ['easing']
            }], attrEnableHover: [{
                type: Input,
                args: ['enableHover']
            }], attrHasThreeStates: [{
                type: Input,
                args: ['hasThreeStates']
            }], attrIncrementalSearch: [{
                type: Input,
                args: ['incrementalSearch']
            }], attrKeyboardNavigation: [{
                type: Input,
                args: ['keyboardNavigation']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrToggleIndicatorSize: [{
                type: Input,
                args: ['toggleIndicatorSize']
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
            }], onAdded: [{
                type: Output
            }], onCheckChange: [{
                type: Output
            }], onCollapse: [{
                type: Output
            }], onDragStart: [{
                type: Output
            }], onDragEnd: [{
                type: Output
            }], onExpand: [{
                type: Output
            }], onItemClick: [{
                type: Output
            }], onRemoved: [{
                type: Output
            }], onSelect: [{
                type: Output
            }] } });
