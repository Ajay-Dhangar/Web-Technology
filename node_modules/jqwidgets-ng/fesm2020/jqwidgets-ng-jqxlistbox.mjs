import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdragdrop';
import * as i0 from '@angular/core';
import { forwardRef, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

/// <reference path="../../jqwidgets.d.ts" />
const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => jqxListBoxComponent),
    multi: true
};
class jqxListBoxComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoHeight', 'allowDrag', 'allowDrop', 'checkboxes', 'disabled', 'displayMember', 'dropAction', 'dragStart', 'dragEnd', 'enableHover', 'enableSelection', 'equalItemsWidth', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'hasThreeStates', 'itemHeight', 'incrementalSearch', 'incrementalSearchDelay', 'multiple', 'multipleextended', 'renderer', 'rendered', 'rtl', 'selectedIndex', 'selectedIndexes', 'source', 'scrollBarSize', 'searchMode', 'theme', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxListBoxComponent events
        this.onBindingComplete = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onCheckChange = new EventEmitter();
        this.onDragStart = new EventEmitter();
        this.onDragEnd = new EventEmitter();
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
                this.host.jqxListBox({ source: result.items });
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxListBox(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxListBox(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxListBox(this.properties[i])) {
                        this.host.jqxListBox(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);
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
            this.host.jqxListBox('val', '');
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setOptions(options) {
        this.host.jqxListBox('setOptions', options);
    }
    // jqxListBoxComponent properties
    autoHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('autoHeight', arg);
        }
        else {
            return this.host.jqxListBox('autoHeight');
        }
    }
    allowDrag(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrag', arg);
        }
        else {
            return this.host.jqxListBox('allowDrag');
        }
    }
    allowDrop(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrop', arg);
        }
        else {
            return this.host.jqxListBox('allowDrop');
        }
    }
    checkboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('checkboxes', arg);
        }
        else {
            return this.host.jqxListBox('checkboxes');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('disabled', arg);
        }
        else {
            return this.host.jqxListBox('disabled');
        }
    }
    displayMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('displayMember', arg);
        }
        else {
            return this.host.jqxListBox('displayMember');
        }
    }
    dropAction(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dropAction', arg);
        }
        else {
            return this.host.jqxListBox('dropAction');
        }
    }
    dragStart(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragStart', arg);
        }
        else {
            return this.host.jqxListBox('dragStart');
        }
    }
    dragEnd(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragEnd', arg);
        }
        else {
            return this.host.jqxListBox('dragEnd');
        }
    }
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('enableHover', arg);
        }
        else {
            return this.host.jqxListBox('enableHover');
        }
    }
    enableSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('enableSelection', arg);
        }
        else {
            return this.host.jqxListBox('enableSelection');
        }
    }
    equalItemsWidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('equalItemsWidth', arg);
        }
        else {
            return this.host.jqxListBox('equalItemsWidth');
        }
    }
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterable', arg);
        }
        else {
            return this.host.jqxListBox('filterable');
        }
    }
    filterHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterHeight', arg);
        }
        else {
            return this.host.jqxListBox('filterHeight');
        }
    }
    filterDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterDelay', arg);
        }
        else {
            return this.host.jqxListBox('filterDelay');
        }
    }
    filterPlaceHolder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterPlaceHolder', arg);
        }
        else {
            return this.host.jqxListBox('filterPlaceHolder');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('height', arg);
        }
        else {
            return this.host.jqxListBox('height');
        }
    }
    hasThreeStates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('hasThreeStates', arg);
        }
        else {
            return this.host.jqxListBox('hasThreeStates');
        }
    }
    itemHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('itemHeight', arg);
        }
        else {
            return this.host.jqxListBox('itemHeight');
        }
    }
    incrementalSearch(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('incrementalSearch', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearch');
        }
    }
    incrementalSearchDelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('incrementalSearchDelay', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearchDelay');
        }
    }
    multiple(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multiple', arg);
        }
        else {
            return this.host.jqxListBox('multiple');
        }
    }
    multipleextended(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multipleextended', arg);
        }
        else {
            return this.host.jqxListBox('multipleextended');
        }
    }
    renderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('renderer', arg);
        }
        else {
            return this.host.jqxListBox('renderer');
        }
    }
    rendered(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('rendered', arg);
        }
        else {
            return this.host.jqxListBox('rendered');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('rtl', arg);
        }
        else {
            return this.host.jqxListBox('rtl');
        }
    }
    selectedIndex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('selectedIndex', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndex');
        }
    }
    selectedIndexes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('selectedIndexes', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndexes');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('source', arg);
        }
        else {
            return this.host.jqxListBox('source');
        }
    }
    scrollBarSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('scrollBarSize', arg);
        }
        else {
            return this.host.jqxListBox('scrollBarSize');
        }
    }
    searchMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('searchMode', arg);
        }
        else {
            return this.host.jqxListBox('searchMode');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('theme', arg);
        }
        else {
            return this.host.jqxListBox('theme');
        }
    }
    valueMember(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('valueMember', arg);
        }
        else {
            return this.host.jqxListBox('valueMember');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('width', arg);
        }
        else {
            return this.host.jqxListBox('width');
        }
    }
    // jqxListBoxComponent functions
    addItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('addItem', Item);
    }
    beginUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('beginUpdate');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clear');
    }
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearSelection');
    }
    checkIndex(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkIndex', Index);
    }
    checkItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkItem', Item);
    }
    checkAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkAll');
    }
    clearFilter() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearFilter');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('destroy');
    }
    disableItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableItem', Item);
    }
    disableAt(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableAt', Index);
    }
    enableItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableItem', Item);
    }
    enableAt(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableAt', Index);
    }
    ensureVisible(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('ensureVisible', item);
    }
    endUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('endUpdate');
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('focus');
    }
    getItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItems');
    }
    getSelectedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItems');
    }
    getCheckedItems() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getCheckedItems');
    }
    getItem(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItem', Index);
    }
    getItemByValue(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItemByValue', Item);
    }
    getSelectedItem() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItem');
    }
    getSelectedIndex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedIndex');
    }
    insertAt(Item, Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('insertAt', Item, Index);
    }
    invalidate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('invalidate');
    }
    indeterminateItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateItem', Item);
    }
    indeterminateIndex(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateIndex', Index);
    }
    loadFromSelect(selector) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('loadFromSelect', selector);
    }
    removeItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeItem', Item);
    }
    removeAt(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeAt', Index);
    }
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('render');
    }
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('refresh');
    }
    selectItem(Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectItem', Item);
    }
    selectIndex(Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectIndex', Index);
    }
    updateItem(Item, Value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('updateItem', Item, Value);
    }
    updateAt(item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('updateAt', item, index);
    }
    unselectIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectIndex', index);
    }
    unselectItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectItem', item);
    }
    uncheckIndex(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckIndex', index);
    }
    uncheckItem(item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckItem', item);
    }
    uncheckAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckAll');
    }
    val(value) {
        if (value !== undefined) {
            return this.host.jqxListBox('val', value);
        }
        else {
            return this.host.jqxListBox('val');
        }
    }
    ;
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('change', (eventData) => { this.onChange.emit(eventData); if (eventData.args)
            this.onChangeCallback(eventData.args.item.value); });
        this.host.on('checkChange', (eventData) => { this.onCheckChange.emit(eventData); });
        this.host.on('dragStart', (eventData) => { this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', (eventData) => { this.onDragEnd.emit(eventData); });
        this.host.on('select', (eventData) => { this.onSelect.emit(eventData); });
        this.host.on('unselect', (eventData) => { this.onUnselect.emit(eventData); });
    }
} //jqxListBoxComponent
jqxListBoxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListBoxComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxListBoxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxListBoxComponent, selector: "jqxListBox", inputs: { attrAutoHeight: ["autoHeight", "attrAutoHeight"], attrAllowDrag: ["allowDrag", "attrAllowDrag"], attrAllowDrop: ["allowDrop", "attrAllowDrop"], attrCheckboxes: ["checkboxes", "attrCheckboxes"], attrDisabled: ["disabled", "attrDisabled"], attrDisplayMember: ["displayMember", "attrDisplayMember"], attrDropAction: ["dropAction", "attrDropAction"], attrDragStart: ["dragStart", "attrDragStart"], attrDragEnd: ["dragEnd", "attrDragEnd"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEnableSelection: ["enableSelection", "attrEnableSelection"], attrEqualItemsWidth: ["equalItemsWidth", "attrEqualItemsWidth"], attrFilterable: ["filterable", "attrFilterable"], attrFilterHeight: ["filterHeight", "attrFilterHeight"], attrFilterDelay: ["filterDelay", "attrFilterDelay"], attrFilterPlaceHolder: ["filterPlaceHolder", "attrFilterPlaceHolder"], attrHasThreeStates: ["hasThreeStates", "attrHasThreeStates"], attrItemHeight: ["itemHeight", "attrItemHeight"], attrIncrementalSearch: ["incrementalSearch", "attrIncrementalSearch"], attrIncrementalSearchDelay: ["incrementalSearchDelay", "attrIncrementalSearchDelay"], attrMultiple: ["multiple", "attrMultiple"], attrMultipleextended: ["multipleextended", "attrMultipleextended"], attrRenderer: ["renderer", "attrRenderer"], attrRendered: ["rendered", "attrRendered"], attrRtl: ["rtl", "attrRtl"], attrSelectedIndex: ["selectedIndex", "attrSelectedIndex"], attrSelectedIndexes: ["selectedIndexes", "attrSelectedIndexes"], attrSource: ["source", "attrSource"], attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"], attrSearchMode: ["searchMode", "attrSearchMode"], attrTheme: ["theme", "attrTheme"], attrValueMember: ["valueMember", "attrValueMember"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBindingComplete: "onBindingComplete", onChange: "onChange", onCheckChange: "onCheckChange", onDragStart: "onDragStart", onDragEnd: "onDragEnd", onSelect: "onSelect", onUnselect: "onUnselect" }, providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR], usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListBoxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxListBox',
                    template: '<div><ng-content></ng-content></div>',
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAutoHeight: [{
                type: Input,
                args: ['autoHeight']
            }], attrAllowDrag: [{
                type: Input,
                args: ['allowDrag']
            }], attrAllowDrop: [{
                type: Input,
                args: ['allowDrop']
            }], attrCheckboxes: [{
                type: Input,
                args: ['checkboxes']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDisplayMember: [{
                type: Input,
                args: ['displayMember']
            }], attrDropAction: [{
                type: Input,
                args: ['dropAction']
            }], attrDragStart: [{
                type: Input,
                args: ['dragStart']
            }], attrDragEnd: [{
                type: Input,
                args: ['dragEnd']
            }], attrEnableHover: [{
                type: Input,
                args: ['enableHover']
            }], attrEnableSelection: [{
                type: Input,
                args: ['enableSelection']
            }], attrEqualItemsWidth: [{
                type: Input,
                args: ['equalItemsWidth']
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
            }], attrHasThreeStates: [{
                type: Input,
                args: ['hasThreeStates']
            }], attrItemHeight: [{
                type: Input,
                args: ['itemHeight']
            }], attrIncrementalSearch: [{
                type: Input,
                args: ['incrementalSearch']
            }], attrIncrementalSearchDelay: [{
                type: Input,
                args: ['incrementalSearchDelay']
            }], attrMultiple: [{
                type: Input,
                args: ['multiple']
            }], attrMultipleextended: [{
                type: Input,
                args: ['multipleextended']
            }], attrRenderer: [{
                type: Input,
                args: ['renderer']
            }], attrRendered: [{
                type: Input,
                args: ['rendered']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSelectedIndex: [{
                type: Input,
                args: ['selectedIndex']
            }], attrSelectedIndexes: [{
                type: Input,
                args: ['selectedIndexes']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrScrollBarSize: [{
                type: Input,
                args: ['scrollBarSize']
            }], attrSearchMode: [{
                type: Input,
                args: ['searchMode']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
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
            }], onChange: [{
                type: Output
            }], onCheckChange: [{
                type: Output
            }], onDragStart: [{
                type: Output
            }], onDragEnd: [{
                type: Output
            }], onSelect: [{
                type: Output
            }], onUnselect: [{
                type: Output
            }] } });

class jqxListBoxModule {
}
jqxListBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxListBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListBoxModule, declarations: [jqxListBoxComponent], imports: [FormsModule], exports: [jqxListBoxComponent] });
jqxListBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListBoxModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxListBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxListBoxComponent],
                    exports: [jqxListBoxComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxListBoxComponent, jqxListBoxModule };
