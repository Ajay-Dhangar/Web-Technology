import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxDropDownListComponent),
    multi: true
};
class jqxDropDownListComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'autoDropDownHeight', 'animationType', 'checkboxes', 'closeDelay', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableSelection', 'enableBrowserBoundsDetection', 'enableHover', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'incrementalSearch', 'incrementalSearchDelay', 'itemHeight', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'renderer', 'selectionRenderer', 'searchMode', 'source', 'selectedIndex', 'theme', 'template', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxDropDownListComponent events
        this.onBindingComplete = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onUnselect = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
    }
    ;
    ngAfterViewInit() {
        let children = JQXLite(this.elementRef.nativeElement.children).find('li');
        let html = '';
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            let result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    }
    ;
    ngAfterViewChecked() {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                let result = JQXLite.jqx.parseSourceTag(this.container);
                this.host.jqxDropDownList({ source: result.items });
            }
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownList(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDropDownList(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDropDownList(this.properties[i])) {
                        this.host.jqxDropDownList(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    writeValue(value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
            this.widgetObject.clearSelection();
            if (value) {
                this.widgetObject.selectItem(this.widgetObject.getItemByValue(value));
            }
        }
        if (this.host && (value === null || value === undefined)) {
            this.host.jqxDropDownList('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxDropDownList('setOptions', options);
    }
    // jqxDropDownListComponent properties
    autoOpen(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('autoOpen', arg);
        }
        else {
            return this.host.jqxDropDownList('autoOpen');
        }
    }
    autoDropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('autoDropDownHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('autoDropDownHeight');
        }
    }
    animationType(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('animationType', arg);
        }
        else {
            return this.host.jqxDropDownList('animationType');
        }
    }
    checkboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('checkboxes', arg);
        }
        else {
            return this.host.jqxDropDownList('checkboxes');
        }
    }
    closeDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('closeDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('closeDelay');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('disabled', arg);
        }
        else {
            return this.host.jqxDropDownList('disabled');
        }
    }
    displayMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('displayMember', arg);
        }
        else {
            return this.host.jqxDropDownList('displayMember');
        }
    }
    dropDownHorizontalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownHorizontalAlignment');
        }
    }
    dropDownVerticalAlignment(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownVerticalAlignment');
        }
    }
    dropDownHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownHeight');
        }
    }
    dropDownWidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownWidth', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownWidth');
        }
    }
    enableSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableSelection', arg);
        }
        else {
            return this.host.jqxDropDownList('enableSelection');
        }
    }
    enableBrowserBoundsDetection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDropDownList('enableBrowserBoundsDetection');
        }
    }
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableHover', arg);
        }
        else {
            return this.host.jqxDropDownList('enableHover');
        }
    }
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterable', arg);
        }
        else {
            return this.host.jqxDropDownList('filterable');
        }
    }
    filterHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('filterHeight');
        }
    }
    filterDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('filterDelay');
        }
    }
    filterPlaceHolder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterPlaceHolder', arg);
        }
        else {
            return this.host.jqxDropDownList('filterPlaceHolder');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('height', arg);
        }
        else {
            return this.host.jqxDropDownList('height');
        }
    }
    incrementalSearch(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearch', arg);
        }
        else {
            return this.host.jqxDropDownList('incrementalSearch');
        }
    }
    incrementalSearchDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearchDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('incrementalSearchDelay');
        }
    }
    itemHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('itemHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('itemHeight');
        }
    }
    openDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('openDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('openDelay');
        }
    }
    placeHolder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('placeHolder', arg);
        }
        else {
            return this.host.jqxDropDownList('placeHolder');
        }
    }
    popupZIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('popupZIndex', arg);
        }
        else {
            return this.host.jqxDropDownList('popupZIndex');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('rtl', arg);
        }
        else {
            return this.host.jqxDropDownList('rtl');
        }
    }
    renderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('renderer', arg);
        }
        else {
            return this.host.jqxDropDownList('renderer');
        }
    }
    selectionRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('selectionRenderer', arg);
        }
        else {
            return this.host.jqxDropDownList('selectionRenderer');
        }
    }
    searchMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('searchMode', arg);
        }
        else {
            return this.host.jqxDropDownList('searchMode');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('source', arg);
        }
        else {
            return this.host.jqxDropDownList('source');
        }
    }
    selectedIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('selectedIndex', arg);
        }
        else {
            return this.host.jqxDropDownList('selectedIndex');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('theme', arg);
        }
        else {
            return this.host.jqxDropDownList('theme');
        }
    }
    template(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('template', arg);
        }
        else {
            return this.host.jqxDropDownList('template');
        }
    }
    valueMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('valueMember', arg);
        }
        else {
            return this.host.jqxDropDownList('valueMember');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('width', arg);
        }
        else {
            return this.host.jqxDropDownList('width');
        }
    }
    // jqxDropDownListComponent functions
    addItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('addItem', item);
    }
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clearSelection');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clear');
    }
    close() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('close');
    }
    checkIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkIndex', index);
    }
    checkItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkItem', item);
    }
    checkAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkAll');
    }
    clearFilter() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clearFilter');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('destroy');
    }
    disableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('disableItem', item);
    }
    disableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('disableAt', index);
    }
    enableItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('enableItem', item);
    }
    enableAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('enableAt', index);
    }
    ensureVisible(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('ensureVisible', index);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('focus');
    }
    getItem(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItem', index);
    }
    getItemByValue(itemValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItemByValue', itemValue);
    }
    getItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItems');
    }
    getCheckedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getCheckedItems');
    }
    getSelectedItem() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getSelectedItem');
    }
    getSelectedIndex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getSelectedIndex');
    }
    insertAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('insertAt', item, index);
    }
    isOpened() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('isOpened');
    }
    indeterminateIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('indeterminateIndex', index);
    }
    indeterminateItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('indeterminateItem', item);
    }
    loadFromSelect(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('loadFromSelect', arg);
    }
    open() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('open');
    }
    removeItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('removeItem', item);
    }
    removeAt(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('removeAt', index);
    }
    selectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('selectIndex', index);
    }
    selectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('selectItem', item);
    }
    setContent(content) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('setContent', content);
    }
    updateItem(newItem, item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('updateItem', newItem, item);
    }
    updateAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('updateAt', item, index);
    }
    unselectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('unselectIndex', index);
    }
    unselectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('unselectItem', item);
    }
    uncheckIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckIndex', index);
    }
    uncheckItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckItem', item);
    }
    uncheckAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxDropDownList('val', value);
        }
        else {
            return this.host.jqxDropDownList('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('close', (eventData) => { this.onClose.emit(eventData); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('change', (eventData) => {
            this.onChange.emit(eventData);
            if (eventData.args)
                this.onChangeCallback(eventData.args.item.value);
        });
        this.host.on('open', (eventData) => { this.onOpen.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
    }
} //jqxDropDownListComponent
jqxDropDownListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownListComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxDropDownListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxDropDownListComponent, selector: "jqxDropDownList", inputs: { attrAutoOpen: ["autoOpen", "attrAutoOpen"], attrAutoDropDownHeight: ["autoDropDownHeight", "attrAutoDropDownHeight"], attrAnimationType: ["animationType", "attrAnimationType"], attrCheckboxes: ["checkboxes", "attrCheckboxes"], attrCloseDelay: ["closeDelay", "attrCloseDelay"], attrDisabled: ["disabled", "attrDisabled"], attrDisplayMember: ["displayMember", "attrDisplayMember"], attrDropDownHorizontalAlignment: ["dropDownHorizontalAlignment", "attrDropDownHorizontalAlignment"], attrDropDownVerticalAlignment: ["dropDownVerticalAlignment", "attrDropDownVerticalAlignment"], attrDropDownHeight: ["dropDownHeight", "attrDropDownHeight"], attrDropDownWidth: ["dropDownWidth", "attrDropDownWidth"], attrEnableSelection: ["enableSelection", "attrEnableSelection"], attrEnableBrowserBoundsDetection: ["enableBrowserBoundsDetection", "attrEnableBrowserBoundsDetection"], attrEnableHover: ["enableHover", "attrEnableHover"], attrFilterable: ["filterable", "attrFilterable"], attrFilterHeight: ["filterHeight", "attrFilterHeight"], attrFilterDelay: ["filterDelay", "attrFilterDelay"], attrFilterPlaceHolder: ["filterPlaceHolder", "attrFilterPlaceHolder"], attrIncrementalSearch: ["incrementalSearch", "attrIncrementalSearch"], attrIncrementalSearchDelay: ["incrementalSearchDelay", "attrIncrementalSearchDelay"], attrItemHeight: ["itemHeight", "attrItemHeight"], attrOpenDelay: ["openDelay", "attrOpenDelay"], attrPlaceHolder: ["placeHolder", "attrPlaceHolder"], attrPopupZIndex: ["popupZIndex", "attrPopupZIndex"], attrRtl: ["rtl", "attrRtl"], attrRenderer: ["renderer", "attrRenderer"], attrSelectionRenderer: ["selectionRenderer", "attrSelectionRenderer"], attrSearchMode: ["searchMode", "attrSearchMode"], attrSource: ["source", "attrSource"], attrSelectedIndex: ["selectedIndex", "attrSelectedIndex"], attrTheme: ["theme", "attrTheme"], attrTemplate: ["template", "attrTemplate"], attrValueMember: ["valueMember", "attrValueMember"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBindingComplete: "onBindingComplete", onClose: "onClose", onCheckChange: "onCheckChange", onChange: "onChange", onOpen: "onOpen", onSelect: "onSelect", onUnselect: "onUnselect" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxDropDownList',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAutoOpen: [{
                type: Input,
                args: ['autoOpen']
            }], attrAutoDropDownHeight: [{
                type: Input,
                args: ['autoDropDownHeight']
            }], attrAnimationType: [{
                type: Input,
                args: ['animationType']
            }], attrCheckboxes: [{
                type: Input,
                args: ['checkboxes']
            }], attrCloseDelay: [{
                type: Input,
                args: ['closeDelay']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDisplayMember: [{
                type: Input,
                args: ['displayMember']
            }], attrDropDownHorizontalAlignment: [{
                type: Input,
                args: ['dropDownHorizontalAlignment']
            }], attrDropDownVerticalAlignment: [{
                type: Input,
                args: ['dropDownVerticalAlignment']
            }], attrDropDownHeight: [{
                type: Input,
                args: ['dropDownHeight']
            }], attrDropDownWidth: [{
                type: Input,
                args: ['dropDownWidth']
            }], attrEnableSelection: [{
                type: Input,
                args: ['enableSelection']
            }], attrEnableBrowserBoundsDetection: [{
                type: Input,
                args: ['enableBrowserBoundsDetection']
            }], attrEnableHover: [{
                type: Input,
                args: ['enableHover']
            }], attrFilterable: [{
                type: Input,
                args: ['filterable']
            }], attrFilterHeight: [{
                type: Input,
                args: ['filterHeight']
            }], attrFilterDelay: [{
                type: Input,
                args: ['filterDelay']
            }], attrFilterPlaceHolder: [{
                type: Input,
                args: ['filterPlaceHolder']
            }], attrIncrementalSearch: [{
                type: Input,
                args: ['incrementalSearch']
            }], attrIncrementalSearchDelay: [{
                type: Input,
                args: ['incrementalSearchDelay']
            }], attrItemHeight: [{
                type: Input,
                args: ['itemHeight']
            }], attrOpenDelay: [{
                type: Input,
                args: ['openDelay']
            }], attrPlaceHolder: [{
                type: Input,
                args: ['placeHolder']
            }], attrPopupZIndex: [{
                type: Input,
                args: ['popupZIndex']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrRenderer: [{
                type: Input,
                args: ['renderer']
            }], attrSelectionRenderer: [{
                type: Input,
                args: ['selectionRenderer']
            }], attrSearchMode: [{
                type: Input,
                args: ['searchMode']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrSelectedIndex: [{
                type: Input,
                args: ['selectedIndex']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTemplate: [{
                type: Input,
                args: ['template']
            }], attrValueMember: [{
                type: Input,
                args: ['valueMember']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onBindingComplete: [{
                type: Output
            }], onClose: [{
                type: Output
            }], onCheckChange: [{
                type: Output
            }], onChange: [{
                type: Output
            }], onOpen: [{
                type: Output
            }], onSelect: [{
                type: Output
            }], onUnselect: [{
                type: Output
            }] } });

class jqxDropDownListModule {
}
jqxDropDownListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxDropDownListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownListModule, declarations: [jqxDropDownListComponent], imports: [FormsModule], exports: [jqxDropDownListComponent] });
jqxDropDownListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownListModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDropDownListModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxDropDownListComponent],
                    exports: [jqxDropDownListComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxDropDownListComponent, jqxDropDownListModule };
