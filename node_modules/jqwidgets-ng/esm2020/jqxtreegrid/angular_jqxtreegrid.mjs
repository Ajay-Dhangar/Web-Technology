/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxTreeGridComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'checkboxes', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'height', 'hierarchicalCheckboxes', 'icons', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pageSizeMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'rowDetailsRenderer', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showSubAggregates', 'showToolbar', 'showStatusbar', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'showHeader', 'theme', 'toolbarHeight', 'width', 'virtualModeCreateRecords', 'virtualModeRecordCreating'];
        // jqxTreeGridComponent events
        this.onBindingComplete = new EventEmitter();
        this.onCellBeginEdit = new EventEmitter();
        this.onCellEndEdit = new EventEmitter();
        this.onCellValueChanged = new EventEmitter();
        this.onColumnResized = new EventEmitter();
        this.onColumnReordered = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onPageChanged = new EventEmitter();
        this.onPageSizeChanged = new EventEmitter();
        this.onRowClick = new EventEmitter();
        this.onRowDoubleClick = new EventEmitter();
        this.onRowSelect = new EventEmitter();
        this.onRowUnselect = new EventEmitter();
        this.onRowBeginEdit = new EventEmitter();
        this.onRowEndEdit = new EventEmitter();
        this.onRowExpand = new EventEmitter();
        this.onRowCollapse = new EventEmitter();
        this.onRowCheck = new EventEmitter();
        this.onRowUncheck = new EventEmitter();
        this.onSort = new EventEmitter();
        this.elementRef = containerElement;
    }
    ngOnInit() {
    }
    ;
    ngAfterViewInit() {
        let children = JQXLite(this.elementRef.nativeElement.children).find('tr');
        let html = '';
        let options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            let result = JQXLite.jqx.parseSourceTag(this.container);
            if (this['attrColumns'] !== undefined) {
                ;
                options['source'] = result.source;
            }
            else {
                options['source'] = result.source;
                options['columns'] = result.columns;
            }
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
                let columns = this.host.jqxGrid('columns');
                if (columns.length === 0) {
                    this.host.jqxGrid({ source: result.source, columns: result.columns });
                }
                else {
                    this.host.jqxGrid({ source: result.source });
                }
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxTreeGrid(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxTreeGrid(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxTreeGrid(this.properties[i])) {
                        this.host.jqxTreeGrid(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxTreeGrid', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxTreeGrid('setOptions', options);
    }
    // jqxTreeGridComponent properties
    altRows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('altRows', arg);
        }
        else {
            return this.host.jqxTreeGrid('altRows');
        }
    }
    autoRowHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('autoRowHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('autoRowHeight');
        }
    }
    aggregatesHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('aggregatesHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('aggregatesHeight');
        }
    }
    autoShowLoadElement(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('autoShowLoadElement', arg);
        }
        else {
            return this.host.jqxTreeGrid('autoShowLoadElement');
        }
    }
    checkboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('checkboxes', arg);
        }
        else {
            return this.host.jqxTreeGrid('checkboxes');
        }
    }
    columnsHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsHeight');
        }
    }
    columns(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columns', arg);
        }
        else {
            return this.host.jqxTreeGrid('columns');
        }
    }
    columnGroups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnGroups', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnGroups');
        }
    }
    columnsResize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsResize', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsResize');
        }
    }
    columnsReorder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('columnsReorder', arg);
        }
        else {
            return this.host.jqxTreeGrid('columnsReorder');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('disabled', arg);
        }
        else {
            return this.host.jqxTreeGrid('disabled');
        }
    }
    editable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('editable', arg);
        }
        else {
            return this.host.jqxTreeGrid('editable');
        }
    }
    editSettings(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('editSettings', arg);
        }
        else {
            return this.host.jqxTreeGrid('editSettings');
        }
    }
    exportSettings(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('exportSettings', arg);
        }
        else {
            return this.host.jqxTreeGrid('exportSettings');
        }
    }
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('enableHover', arg);
        }
        else {
            return this.host.jqxTreeGrid('enableHover');
        }
    }
    enableBrowserSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('enableBrowserSelection', arg);
        }
        else {
            return this.host.jqxTreeGrid('enableBrowserSelection');
        }
    }
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterable', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterable');
        }
    }
    filterHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterHeight');
        }
    }
    filterMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('filterMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('filterMode');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('height', arg);
        }
        else {
            return this.host.jqxTreeGrid('height');
        }
    }
    hierarchicalCheckboxes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('hierarchicalCheckboxes', arg);
        }
        else {
            return this.host.jqxTreeGrid('hierarchicalCheckboxes');
        }
    }
    icons(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('icons', arg);
        }
        else {
            return this.host.jqxTreeGrid('icons');
        }
    }
    incrementalSearch(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('incrementalSearch', arg);
        }
        else {
            return this.host.jqxTreeGrid('incrementalSearch');
        }
    }
    localization(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('localization', arg);
        }
        else {
            return this.host.jqxTreeGrid('localization');
        }
    }
    pagerHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerHeight');
        }
    }
    pageSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSize', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSize');
        }
    }
    pageSizeOptions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSizeOptions', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSizeOptions');
        }
    }
    pageable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageable', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageable');
        }
    }
    pagerPosition(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerPosition', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerPosition');
        }
    }
    pagerMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerMode');
        }
    }
    pageSizeMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pageSizeMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('pageSizeMode');
        }
    }
    pagerButtonsCount(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerButtonsCount', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerButtonsCount');
        }
    }
    pagerRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('pagerRenderer', arg);
        }
        else {
            return this.host.jqxTreeGrid('pagerRenderer');
        }
    }
    ready(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('ready', arg);
        }
        else {
            return this.host.jqxTreeGrid('ready');
        }
    }
    rowDetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rowDetails', arg);
        }
        else {
            return this.host.jqxTreeGrid('rowDetails');
        }
    }
    rowDetailsRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rowDetailsRenderer', arg);
        }
        else {
            return this.host.jqxTreeGrid('rowDetailsRenderer');
        }
    }
    renderToolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('renderToolbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('renderToolbar');
        }
    }
    renderStatusBar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('renderStatusBar', arg);
        }
        else {
            return this.host.jqxTreeGrid('renderStatusBar');
        }
    }
    rendering(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rendering', arg);
        }
        else {
            return this.host.jqxTreeGrid('rendering');
        }
    }
    rendered(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rendered', arg);
        }
        else {
            return this.host.jqxTreeGrid('rendered');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('rtl', arg);
        }
        else {
            return this.host.jqxTreeGrid('rtl');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('source', arg);
        }
        else {
            return this.host.jqxTreeGrid('source');
        }
    }
    sortable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('sortable', arg);
        }
        else {
            return this.host.jqxTreeGrid('sortable');
        }
    }
    showAggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showAggregates', arg);
        }
        else {
            return this.host.jqxTreeGrid('showAggregates');
        }
    }
    showSubAggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showSubAggregates', arg);
        }
        else {
            return this.host.jqxTreeGrid('showSubAggregates');
        }
    }
    showToolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showToolbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('showToolbar');
        }
    }
    showStatusbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showStatusbar', arg);
        }
        else {
            return this.host.jqxTreeGrid('showStatusbar');
        }
    }
    statusBarHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('statusBarHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('statusBarHeight');
        }
    }
    scrollBarSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('scrollBarSize', arg);
        }
        else {
            return this.host.jqxTreeGrid('scrollBarSize');
        }
    }
    selectionMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('selectionMode', arg);
        }
        else {
            return this.host.jqxTreeGrid('selectionMode');
        }
    }
    showHeader(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('showHeader', arg);
        }
        else {
            return this.host.jqxTreeGrid('showHeader');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('theme', arg);
        }
        else {
            return this.host.jqxTreeGrid('theme');
        }
    }
    toolbarHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('toolbarHeight', arg);
        }
        else {
            return this.host.jqxTreeGrid('toolbarHeight');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('width', arg);
        }
        else {
            return this.host.jqxTreeGrid('width');
        }
    }
    virtualModeCreateRecords(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('virtualModeCreateRecords', arg);
        }
        else {
            return this.host.jqxTreeGrid('virtualModeCreateRecords');
        }
    }
    virtualModeRecordCreating(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxTreeGrid('virtualModeRecordCreating', arg);
        }
        else {
            return this.host.jqxTreeGrid('virtualModeRecordCreating');
        }
    }
    // jqxTreeGridComponent functions
    addRow(rowKey, rowData, rowPosition, parent) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addRow', rowKey, rowData, rowPosition, parent);
    }
    addFilter(dataField, filerGroup) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('addFilter', dataField, filerGroup);
    }
    applyFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('applyFilters');
    }
    beginUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginUpdate');
    }
    beginRowEdit(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginRowEdit', rowKey);
    }
    beginCellEdit(rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('beginCellEdit', rowKey, dataField);
    }
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearSelection');
    }
    clearFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clearFilters');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('clear');
    }
    checkRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('checkRow', rowKey);
    }
    collapseRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseRow', rowKey);
    }
    collapseAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('collapseAll');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('destroy');
    }
    deleteRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('deleteRow', rowKey);
    }
    expandRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandRow', rowKey);
    }
    expandAll() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('expandAll');
    }
    endUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endUpdate');
    }
    ensureRowVisible(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('ensureRowVisible', rowKey);
    }
    endRowEdit(rowKey, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endRowEdit', rowKey, cancelChanges);
    }
    endCellEdit(rowKey, dataField, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('endCellEdit', rowKey, dataField, cancelChanges);
    }
    exportData(exportDataType) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('exportData', exportDataType);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('focus');
    }
    getColumnProperty(dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getColumnProperty', dataField, propertyName);
    }
    goToPage(pageIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPage', pageIndex);
    }
    goToPrevPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToPrevPage');
    }
    goToNextPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('goToNextPage');
    }
    getSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getSelection');
    }
    getKey(row) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getKey', row);
    }
    getRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRow', rowKey);
    }
    getRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getRows');
    }
    getCheckedRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCheckedRows');
    }
    getView() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getView');
    }
    getCellValue(rowKey, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('getCellValue', rowKey, dataField);
    }
    hideColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('hideColumn', dataField);
    }
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('isBindingCompleted');
    }
    lockRow(rowKey) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('lockRow', rowKey);
    }
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('refresh');
    }
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('render');
    }
    removeFilter(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('removeFilter', dataField);
    }
    scrollOffset(top, left) {
        if (top !== undefined || left !== undefined) {
            this.host.jqxTreeGrid('scrollOffset', top, left);
        }
        else {
            return this.host.jqxTreeGrid('scrollOffset');
        }
    }
    ;
    setColumnProperty(dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setColumnProperty', dataField, propertyName, propertyValue);
    }
    showColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('showColumn', dataField);
    }
    selectRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('selectRow', rowId);
    }
    setCellValue(rowId, dataField, cellValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('setCellValue', rowId, dataField, cellValue);
    }
    sortBy(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('sortBy', dataField, sortOrder);
    }
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxTreeGrid('updating');
    }
    updateBoundData() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateBoundData');
    }
    unselectRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unselectRow', rowId);
    }
    uncheckRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('uncheckRow', rowId);
    }
    updateRow(rowId, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('updateRow', rowId, data);
    }
    unlockRow(rowId) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxTreeGrid('unlockRow', rowId);
    }
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('cellBeginEdit', (eventData) => { this.onCellBeginEdit.emit(eventData); });
        this.host.on('cellEndEdit', (eventData) => { this.onCellEndEdit.emit(eventData); });
        this.host.on('cellValueChanged', (eventData) => { this.onCellValueChanged.emit(eventData); });
        this.host.on('columnResized', (eventData) => { this.onColumnResized.emit(eventData); });
        this.host.on('columnReordered', (eventData) => { this.onColumnReordered.emit(eventData); });
        this.host.on('filter', (eventData) => { this.onFilter.emit(eventData); });
        this.host.on('pageChanged', (eventData) => { this.onPageChanged.emit(eventData); });
        this.host.on('pageSizeChanged', (eventData) => { this.onPageSizeChanged.emit(eventData); });
        this.host.on('rowClick', (eventData) => { this.onRowClick.emit(eventData); });
        this.host.on('rowDoubleClick', (eventData) => { this.onRowDoubleClick.emit(eventData); });
        this.host.on('rowSelect', (eventData) => { this.onRowSelect.emit(eventData); });
        this.host.on('rowUnselect', (eventData) => { this.onRowUnselect.emit(eventData); });
        this.host.on('rowBeginEdit', (eventData) => { this.onRowBeginEdit.emit(eventData); });
        this.host.on('rowEndEdit', (eventData) => { this.onRowEndEdit.emit(eventData); });
        this.host.on('rowExpand', (eventData) => { this.onRowExpand.emit(eventData); });
        this.host.on('rowCollapse', (eventData) => { this.onRowCollapse.emit(eventData); });
        this.host.on('rowCheck', (eventData) => { this.onRowCheck.emit(eventData); });
        this.host.on('rowUncheck', (eventData) => { this.onRowUncheck.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
    }
} //jqxTreeGridComponent
jqxTreeGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTreeGridComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxTreeGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxTreeGridComponent, selector: "jqxTreeGrid", inputs: { attrAltRows: ["altRows", "attrAltRows"], attrAutoRowHeight: ["autoRowHeight", "attrAutoRowHeight"], attrAggregatesHeight: ["aggregatesHeight", "attrAggregatesHeight"], attrAutoShowLoadElement: ["autoShowLoadElement", "attrAutoShowLoadElement"], attrCheckboxes: ["checkboxes", "attrCheckboxes"], attrColumnsHeight: ["columnsHeight", "attrColumnsHeight"], attrColumns: ["columns", "attrColumns"], attrColumnGroups: ["columnGroups", "attrColumnGroups"], attrColumnsResize: ["columnsResize", "attrColumnsResize"], attrColumnsReorder: ["columnsReorder", "attrColumnsReorder"], attrDisabled: ["disabled", "attrDisabled"], attrEditable: ["editable", "attrEditable"], attrEditSettings: ["editSettings", "attrEditSettings"], attrExportSettings: ["exportSettings", "attrExportSettings"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEnableBrowserSelection: ["enableBrowserSelection", "attrEnableBrowserSelection"], attrFilterable: ["filterable", "attrFilterable"], attrFilterHeight: ["filterHeight", "attrFilterHeight"], attrFilterMode: ["filterMode", "attrFilterMode"], attrHierarchicalCheckboxes: ["hierarchicalCheckboxes", "attrHierarchicalCheckboxes"], attrIcons: ["icons", "attrIcons"], attrIncrementalSearch: ["incrementalSearch", "attrIncrementalSearch"], attrLocalization: ["localization", "attrLocalization"], attrPagerHeight: ["pagerHeight", "attrPagerHeight"], attrPageSize: ["pageSize", "attrPageSize"], attrPageSizeOptions: ["pageSizeOptions", "attrPageSizeOptions"], attrPageable: ["pageable", "attrPageable"], attrPagerPosition: ["pagerPosition", "attrPagerPosition"], attrPagerMode: ["pagerMode", "attrPagerMode"], attrPageSizeMode: ["pageSizeMode", "attrPageSizeMode"], attrPagerButtonsCount: ["pagerButtonsCount", "attrPagerButtonsCount"], attrPagerRenderer: ["pagerRenderer", "attrPagerRenderer"], attrReady: ["ready", "attrReady"], attrRowDetails: ["rowDetails", "attrRowDetails"], attrRowDetailsRenderer: ["rowDetailsRenderer", "attrRowDetailsRenderer"], attrRenderToolbar: ["renderToolbar", "attrRenderToolbar"], attrRenderStatusBar: ["renderStatusBar", "attrRenderStatusBar"], attrRendering: ["rendering", "attrRendering"], attrRendered: ["rendered", "attrRendered"], attrRtl: ["rtl", "attrRtl"], attrSource: ["source", "attrSource"], attrSortable: ["sortable", "attrSortable"], attrShowAggregates: ["showAggregates", "attrShowAggregates"], attrShowSubAggregates: ["showSubAggregates", "attrShowSubAggregates"], attrShowToolbar: ["showToolbar", "attrShowToolbar"], attrShowStatusbar: ["showStatusbar", "attrShowStatusbar"], attrStatusBarHeight: ["statusBarHeight", "attrStatusBarHeight"], attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"], attrSelectionMode: ["selectionMode", "attrSelectionMode"], attrShowHeader: ["showHeader", "attrShowHeader"], attrTheme: ["theme", "attrTheme"], attrToolbarHeight: ["toolbarHeight", "attrToolbarHeight"], attrVirtualModeCreateRecords: ["virtualModeCreateRecords", "attrVirtualModeCreateRecords"], attrVirtualModeRecordCreating: ["virtualModeRecordCreating", "attrVirtualModeRecordCreating"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBindingComplete: "onBindingComplete", onCellBeginEdit: "onCellBeginEdit", onCellEndEdit: "onCellEndEdit", onCellValueChanged: "onCellValueChanged", onColumnResized: "onColumnResized", onColumnReordered: "onColumnReordered", onFilter: "onFilter", onPageChanged: "onPageChanged", onPageSizeChanged: "onPageSizeChanged", onRowClick: "onRowClick", onRowDoubleClick: "onRowDoubleClick", onRowSelect: "onRowSelect", onRowUnselect: "onRowUnselect", onRowBeginEdit: "onRowBeginEdit", onRowEndEdit: "onRowEndEdit", onRowExpand: "onRowExpand", onRowCollapse: "onRowCollapse", onRowCheck: "onRowCheck", onRowUncheck: "onRowUncheck", onSort: "onSort" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTreeGridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxTreeGrid',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAltRows: [{
                type: Input,
                args: ['altRows']
            }], attrAutoRowHeight: [{
                type: Input,
                args: ['autoRowHeight']
            }], attrAggregatesHeight: [{
                type: Input,
                args: ['aggregatesHeight']
            }], attrAutoShowLoadElement: [{
                type: Input,
                args: ['autoShowLoadElement']
            }], attrCheckboxes: [{
                type: Input,
                args: ['checkboxes']
            }], attrColumnsHeight: [{
                type: Input,
                args: ['columnsHeight']
            }], attrColumns: [{
                type: Input,
                args: ['columns']
            }], attrColumnGroups: [{
                type: Input,
                args: ['columnGroups']
            }], attrColumnsResize: [{
                type: Input,
                args: ['columnsResize']
            }], attrColumnsReorder: [{
                type: Input,
                args: ['columnsReorder']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEditable: [{
                type: Input,
                args: ['editable']
            }], attrEditSettings: [{
                type: Input,
                args: ['editSettings']
            }], attrExportSettings: [{
                type: Input,
                args: ['exportSettings']
            }], attrEnableHover: [{
                type: Input,
                args: ['enableHover']
            }], attrEnableBrowserSelection: [{
                type: Input,
                args: ['enableBrowserSelection']
            }], attrFilterable: [{
                type: Input,
                args: ['filterable']
            }], attrFilterHeight: [{
                type: Input,
                args: ['filterHeight']
            }], attrFilterMode: [{
                type: Input,
                args: ['filterMode']
            }], attrHierarchicalCheckboxes: [{
                type: Input,
                args: ['hierarchicalCheckboxes']
            }], attrIcons: [{
                type: Input,
                args: ['icons']
            }], attrIncrementalSearch: [{
                type: Input,
                args: ['incrementalSearch']
            }], attrLocalization: [{
                type: Input,
                args: ['localization']
            }], attrPagerHeight: [{
                type: Input,
                args: ['pagerHeight']
            }], attrPageSize: [{
                type: Input,
                args: ['pageSize']
            }], attrPageSizeOptions: [{
                type: Input,
                args: ['pageSizeOptions']
            }], attrPageable: [{
                type: Input,
                args: ['pageable']
            }], attrPagerPosition: [{
                type: Input,
                args: ['pagerPosition']
            }], attrPagerMode: [{
                type: Input,
                args: ['pagerMode']
            }], attrPageSizeMode: [{
                type: Input,
                args: ['pageSizeMode']
            }], attrPagerButtonsCount: [{
                type: Input,
                args: ['pagerButtonsCount']
            }], attrPagerRenderer: [{
                type: Input,
                args: ['pagerRenderer']
            }], attrReady: [{
                type: Input,
                args: ['ready']
            }], attrRowDetails: [{
                type: Input,
                args: ['rowDetails']
            }], attrRowDetailsRenderer: [{
                type: Input,
                args: ['rowDetailsRenderer']
            }], attrRenderToolbar: [{
                type: Input,
                args: ['renderToolbar']
            }], attrRenderStatusBar: [{
                type: Input,
                args: ['renderStatusBar']
            }], attrRendering: [{
                type: Input,
                args: ['rendering']
            }], attrRendered: [{
                type: Input,
                args: ['rendered']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrSortable: [{
                type: Input,
                args: ['sortable']
            }], attrShowAggregates: [{
                type: Input,
                args: ['showAggregates']
            }], attrShowSubAggregates: [{
                type: Input,
                args: ['showSubAggregates']
            }], attrShowToolbar: [{
                type: Input,
                args: ['showToolbar']
            }], attrShowStatusbar: [{
                type: Input,
                args: ['showStatusbar']
            }], attrStatusBarHeight: [{
                type: Input,
                args: ['statusBarHeight']
            }], attrScrollBarSize: [{
                type: Input,
                args: ['scrollBarSize']
            }], attrSelectionMode: [{
                type: Input,
                args: ['selectionMode']
            }], attrShowHeader: [{
                type: Input,
                args: ['showHeader']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrToolbarHeight: [{
                type: Input,
                args: ['toolbarHeight']
            }], attrVirtualModeCreateRecords: [{
                type: Input,
                args: ['virtualModeCreateRecords']
            }], attrVirtualModeRecordCreating: [{
                type: Input,
                args: ['virtualModeRecordCreating']
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
            }], onCellBeginEdit: [{
                type: Output
            }], onCellEndEdit: [{
                type: Output
            }], onCellValueChanged: [{
                type: Output
            }], onColumnResized: [{
                type: Output
            }], onColumnReordered: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onPageChanged: [{
                type: Output
            }], onPageSizeChanged: [{
                type: Output
            }], onRowClick: [{
                type: Output
            }], onRowDoubleClick: [{
                type: Output
            }], onRowSelect: [{
                type: Output
            }], onRowUnselect: [{
                type: Output
            }], onRowBeginEdit: [{
                type: Output
            }], onRowEndEdit: [{
                type: Output
            }], onRowExpand: [{
                type: Output
            }], onRowCollapse: [{
                type: Output
            }], onRowCheck: [{
                type: Output
            }], onRowUncheck: [{
                type: Output
            }], onSort: [{
                type: Output
            }] } });
