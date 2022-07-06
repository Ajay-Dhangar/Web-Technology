/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxDataTableComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['altRows', 'autoRowHeight', 'aggregatesHeight', 'autoShowLoadElement', 'columnsHeight', 'columns', 'columnGroups', 'columnsResize', 'columnsReorder', 'disabled', 'editable', 'editSettings', 'exportSettings', 'enableHover', 'enableBrowserSelection', 'filterable', 'filterHeight', 'filterMode', 'groups', 'groupsRenderer', 'height', 'initRowDetails', 'incrementalSearch', 'localization', 'pagerHeight', 'pageSize', 'pageSizeOptions', 'pageable', 'pagerPosition', 'pagerMode', 'pagerButtonsCount', 'pagerRenderer', 'ready', 'rowDetails', 'renderToolbar', 'renderStatusBar', 'rendering', 'rendered', 'rtl', 'source', 'sortable', 'showAggregates', 'showToolbar', 'showStatusbar', 'enableSanitizeAll', 'statusBarHeight', 'scrollBarSize', 'selectionMode', 'serverProcessing', 'showHeader', 'theme', 'toolbarHeight', 'width'];
        // jqxDataTableComponent events
        this.onBindingComplete = new EventEmitter();
        this.onCellBeginEdit = new EventEmitter();
        this.onCellEndEdit = new EventEmitter();
        this.onCellValueChanged = new EventEmitter();
        this.onColumnResized = new EventEmitter();
        this.onColumnReordered = new EventEmitter();
        this.onSort = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDataTable(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDataTable(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDataTable(this.properties[i])) {
                        this.host.jqxDataTable(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDataTable', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxDataTable('setOptions', options);
    }
    // jqxDataTableComponent properties
    altRows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('altRows', arg);
        }
        else {
            return this.host.jqxDataTable('altRows');
        }
    }
    autoRowHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('autoRowHeight', arg);
        }
        else {
            return this.host.jqxDataTable('autoRowHeight');
        }
    }
    aggregatesHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('aggregatesHeight', arg);
        }
        else {
            return this.host.jqxDataTable('aggregatesHeight');
        }
    }
    autoShowLoadElement(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('autoShowLoadElement', arg);
        }
        else {
            return this.host.jqxDataTable('autoShowLoadElement');
        }
    }
    columnsHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('columnsHeight', arg);
        }
        else {
            return this.host.jqxDataTable('columnsHeight');
        }
    }
    columns(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('columns', arg);
        }
        else {
            return this.host.jqxDataTable('columns');
        }
    }
    columnGroups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('columnGroups', arg);
        }
        else {
            return this.host.jqxDataTable('columnGroups');
        }
    }
    columnsResize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('columnsResize', arg);
        }
        else {
            return this.host.jqxDataTable('columnsResize');
        }
    }
    columnsReorder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('columnsReorder', arg);
        }
        else {
            return this.host.jqxDataTable('columnsReorder');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('disabled', arg);
        }
        else {
            return this.host.jqxDataTable('disabled');
        }
    }
    editable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('editable', arg);
        }
        else {
            return this.host.jqxDataTable('editable');
        }
    }
    editSettings(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('editSettings', arg);
        }
        else {
            return this.host.jqxDataTable('editSettings');
        }
    }
    exportSettings(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('exportSettings', arg);
        }
        else {
            return this.host.jqxDataTable('exportSettings');
        }
    }
    enableHover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('enableHover', arg);
        }
        else {
            return this.host.jqxDataTable('enableHover');
        }
    }
    enableBrowserSelection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('enableBrowserSelection', arg);
        }
        else {
            return this.host.jqxDataTable('enableBrowserSelection');
        }
    }
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('filterable', arg);
        }
        else {
            return this.host.jqxDataTable('filterable');
        }
    }
    filterHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('filterHeight', arg);
        }
        else {
            return this.host.jqxDataTable('filterHeight');
        }
    }
    filterMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('filterMode', arg);
        }
        else {
            return this.host.jqxDataTable('filterMode');
        }
    }
    groups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('groups', arg);
        }
        else {
            return this.host.jqxDataTable('groups');
        }
    }
    groupsRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('groupsRenderer', arg);
        }
        else {
            return this.host.jqxDataTable('groupsRenderer');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('height', arg);
        }
        else {
            return this.host.jqxDataTable('height');
        }
    }
    initRowDetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('initRowDetails', arg);
        }
        else {
            return this.host.jqxDataTable('initRowDetails');
        }
    }
    incrementalSearch(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('incrementalSearch', arg);
        }
        else {
            return this.host.jqxDataTable('incrementalSearch');
        }
    }
    localization(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('localization', arg);
        }
        else {
            return this.host.jqxDataTable('localization');
        }
    }
    pagerHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pagerHeight', arg);
        }
        else {
            return this.host.jqxDataTable('pagerHeight');
        }
    }
    pageSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pageSize', arg);
        }
        else {
            return this.host.jqxDataTable('pageSize');
        }
    }
    pageSizeOptions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pageSizeOptions', arg);
        }
        else {
            return this.host.jqxDataTable('pageSizeOptions');
        }
    }
    pageable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pageable', arg);
        }
        else {
            return this.host.jqxDataTable('pageable');
        }
    }
    pagerPosition(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pagerPosition', arg);
        }
        else {
            return this.host.jqxDataTable('pagerPosition');
        }
    }
    pagerMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pagerMode', arg);
        }
        else {
            return this.host.jqxDataTable('pagerMode');
        }
    }
    pagerButtonsCount(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pagerButtonsCount', arg);
        }
        else {
            return this.host.jqxDataTable('pagerButtonsCount');
        }
    }
    pagerRenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('pagerRenderer', arg);
        }
        else {
            return this.host.jqxDataTable('pagerRenderer');
        }
    }
    ready(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('ready', arg);
        }
        else {
            return this.host.jqxDataTable('ready');
        }
    }
    rowDetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('rowDetails', arg);
        }
        else {
            return this.host.jqxDataTable('rowDetails');
        }
    }
    renderToolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('renderToolbar', arg);
        }
        else {
            return this.host.jqxDataTable('renderToolbar');
        }
    }
    renderStatusBar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('renderStatusBar', arg);
        }
        else {
            return this.host.jqxDataTable('renderStatusBar');
        }
    }
    rendering(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('rendering', arg);
        }
        else {
            return this.host.jqxDataTable('rendering');
        }
    }
    rendered(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('rendered', arg);
        }
        else {
            return this.host.jqxDataTable('rendered');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('rtl', arg);
        }
        else {
            return this.host.jqxDataTable('rtl');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('source', arg);
        }
        else {
            return this.host.jqxDataTable('source');
        }
    }
    sortable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('sortable', arg);
        }
        else {
            return this.host.jqxDataTable('sortable');
        }
    }
    showAggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('showAggregates', arg);
        }
        else {
            return this.host.jqxDataTable('showAggregates');
        }
    }
    showToolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('showToolbar', arg);
        }
        else {
            return this.host.jqxDataTable('showToolbar');
        }
    }
    showStatusbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('showStatusbar', arg);
        }
        else {
            return this.host.jqxDataTable('showStatusbar');
        }
    }
    enableSanitizeAll(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('enableSanitizeAll', arg);
        }
        else {
            return this.host.jqxDataTable('enableSanitizeAll');
        }
    }
    statusBarHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('statusBarHeight', arg);
        }
        else {
            return this.host.jqxDataTable('statusBarHeight');
        }
    }
    scrollBarSize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('scrollBarSize', arg);
        }
        else {
            return this.host.jqxDataTable('scrollBarSize');
        }
    }
    selectionMode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('selectionMode', arg);
        }
        else {
            return this.host.jqxDataTable('selectionMode');
        }
    }
    serverProcessing(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('serverProcessing', arg);
        }
        else {
            return this.host.jqxDataTable('serverProcessing');
        }
    }
    showHeader(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('showHeader', arg);
        }
        else {
            return this.host.jqxDataTable('showHeader');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('theme', arg);
        }
        else {
            return this.host.jqxDataTable('theme');
        }
    }
    toolbarHeight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('toolbarHeight', arg);
        }
        else {
            return this.host.jqxDataTable('toolbarHeight');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDataTable('width', arg);
        }
        else {
            return this.host.jqxDataTable('width');
        }
    }
    // jqxDataTableComponent functions
    addRow(rowIndex, rowData, rowPosition) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('addRow', rowIndex, rowData, rowPosition);
    }
    addFilter(dataField, filerGroup) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('addFilter', dataField, filerGroup);
    }
    applyFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('applyFilters');
    }
    beginUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('beginUpdate');
    }
    beginRowEdit(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('beginRowEdit', rowIndex);
    }
    beginCellEdit(rowIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('beginCellEdit', rowIndex, dataField);
    }
    clearSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('clearSelection');
    }
    clearFilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('clearFilters');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('clear');
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('destroy');
    }
    deleteRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('deleteRow', rowIndex);
    }
    endUpdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('endUpdate');
    }
    ensureRowVisible(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('ensureRowVisible', rowIndex);
    }
    endRowEdit(rowIndex, cancelChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('endRowEdit', rowIndex, cancelChanges);
    }
    endCellEdit(rowIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('endCellEdit', rowIndex, dataField);
    }
    exportData(exportDataType) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('exportData', exportDataType);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('focus');
    }
    getColumnProperty(dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getColumnProperty', dataField, propertyName);
    }
    goToPage(pageIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('goToPage', pageIndex);
    }
    goToPrevPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('goToPrevPage');
    }
    goToNextPage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('goToNextPage');
    }
    getSelection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getSelection');
    }
    getRows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getRows');
    }
    getView() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getView');
    }
    getCellValue(rowIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('getCellValue', rowIndex, dataField);
    }
    hideColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('hideColumn', dataField);
    }
    hideDetails(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('hideDetails', rowIndex);
    }
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('isBindingCompleted');
    }
    lockRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('lockRow', rowIndex);
    }
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('refresh');
    }
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('render');
    }
    removeFilter(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('removeFilter', dataField);
    }
    scrollOffset(top, left) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('scrollOffset', top, left);
    }
    setColumnProperty(dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('setColumnProperty', dataField, propertyName, propertyValue);
    }
    showColumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('showColumn', dataField);
    }
    selectRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('selectRow', rowIndex);
    }
    showDetails(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('showDetails', rowIndex);
    }
    setCellValue(rowIndex, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('setCellValue', rowIndex, dataField, value);
    }
    sortBy(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('sortBy', dataField, sortOrder);
    }
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDataTable('updating');
    }
    updateBoundData() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('updateBoundData');
    }
    unselectRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('unselectRow', rowIndex);
    }
    updateRow(rowIndex, rowData) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('updateRow', rowIndex, rowData);
    }
    unlockRow(rowIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDataTable('unlockRow', rowIndex);
    }
    __wireEvents__() {
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('cellBeginEdit', (eventData) => { this.onCellBeginEdit.emit(eventData); });
        this.host.on('cellEndEdit', (eventData) => { this.onCellEndEdit.emit(eventData); });
        this.host.on('cellValueChanged', (eventData) => { this.onCellValueChanged.emit(eventData); });
        this.host.on('columnResized', (eventData) => { this.onColumnResized.emit(eventData); });
        this.host.on('columnReordered', (eventData) => { this.onColumnReordered.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
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
    }
} //jqxDataTableComponent
jqxDataTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDataTableComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxDataTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxDataTableComponent, selector: "jqxDataTable", inputs: { attrAltRows: ["altRows", "attrAltRows"], attrAutoRowHeight: ["autoRowHeight", "attrAutoRowHeight"], attrAggregatesHeight: ["aggregatesHeight", "attrAggregatesHeight"], attrAutoShowLoadElement: ["autoShowLoadElement", "attrAutoShowLoadElement"], attrColumnsHeight: ["columnsHeight", "attrColumnsHeight"], attrColumns: ["columns", "attrColumns"], attrColumnGroups: ["columnGroups", "attrColumnGroups"], attrColumnsResize: ["columnsResize", "attrColumnsResize"], attrColumnsReorder: ["columnsReorder", "attrColumnsReorder"], attrDisabled: ["disabled", "attrDisabled"], attrEditable: ["editable", "attrEditable"], attrEditSettings: ["editSettings", "attrEditSettings"], attrExportSettings: ["exportSettings", "attrExportSettings"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEnableBrowserSelection: ["enableBrowserSelection", "attrEnableBrowserSelection"], attrFilterable: ["filterable", "attrFilterable"], attrFilterHeight: ["filterHeight", "attrFilterHeight"], attrFilterMode: ["filterMode", "attrFilterMode"], attrGroups: ["groups", "attrGroups"], attrGroupsRenderer: ["groupsRenderer", "attrGroupsRenderer"], attrInitRowDetails: ["initRowDetails", "attrInitRowDetails"], attrIncrementalSearch: ["incrementalSearch", "attrIncrementalSearch"], attrLocalization: ["localization", "attrLocalization"], attrPagerHeight: ["pagerHeight", "attrPagerHeight"], attrPageSize: ["pageSize", "attrPageSize"], attrPageSizeOptions: ["pageSizeOptions", "attrPageSizeOptions"], attrPageable: ["pageable", "attrPageable"], attrPagerPosition: ["pagerPosition", "attrPagerPosition"], attrPagerMode: ["pagerMode", "attrPagerMode"], attrPagerButtonsCount: ["pagerButtonsCount", "attrPagerButtonsCount"], attrPagerRenderer: ["pagerRenderer", "attrPagerRenderer"], attrReady: ["ready", "attrReady"], attrRowDetails: ["rowDetails", "attrRowDetails"], attrRenderToolbar: ["renderToolbar", "attrRenderToolbar"], attrRenderStatusBar: ["renderStatusBar", "attrRenderStatusBar"], attrRendering: ["rendering", "attrRendering"], attrRendered: ["rendered", "attrRendered"], attrRtl: ["rtl", "attrRtl"], attrSource: ["source", "attrSource"], attrSortable: ["sortable", "attrSortable"], attrShowAggregates: ["showAggregates", "attrShowAggregates"], attrShowToolbar: ["showToolbar", "attrShowToolbar"], attrShowStatusbar: ["showStatusbar", "attrShowStatusbar"], attrEnableSanitizeAll: ["enableSanitizeAll", "attrEnableSanitizeAll"], attrStatusBarHeight: ["statusBarHeight", "attrStatusBarHeight"], attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"], attrSelectionMode: ["selectionMode", "attrSelectionMode"], attrServerProcessing: ["serverProcessing", "attrServerProcessing"], attrShowHeader: ["showHeader", "attrShowHeader"], attrTheme: ["theme", "attrTheme"], attrToolbarHeight: ["toolbarHeight", "attrToolbarHeight"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBindingComplete: "onBindingComplete", onCellBeginEdit: "onCellBeginEdit", onCellEndEdit: "onCellEndEdit", onCellValueChanged: "onCellValueChanged", onColumnResized: "onColumnResized", onColumnReordered: "onColumnReordered", onSort: "onSort", onFilter: "onFilter", onPageChanged: "onPageChanged", onPageSizeChanged: "onPageSizeChanged", onRowClick: "onRowClick", onRowDoubleClick: "onRowDoubleClick", onRowSelect: "onRowSelect", onRowUnselect: "onRowUnselect", onRowBeginEdit: "onRowBeginEdit", onRowEndEdit: "onRowEndEdit", onRowExpand: "onRowExpand", onRowCollapse: "onRowCollapse" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDataTableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxDataTable',
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
            }], attrGroups: [{
                type: Input,
                args: ['groups']
            }], attrGroupsRenderer: [{
                type: Input,
                args: ['groupsRenderer']
            }], attrInitRowDetails: [{
                type: Input,
                args: ['initRowDetails']
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
            }], attrShowToolbar: [{
                type: Input,
                args: ['showToolbar']
            }], attrShowStatusbar: [{
                type: Input,
                args: ['showStatusbar']
            }], attrEnableSanitizeAll: [{
                type: Input,
                args: ['enableSanitizeAll']
            }], attrStatusBarHeight: [{
                type: Input,
                args: ['statusBarHeight']
            }], attrScrollBarSize: [{
                type: Input,
                args: ['scrollBarSize']
            }], attrSelectionMode: [{
                type: Input,
                args: ['selectionMode']
            }], attrServerProcessing: [{
                type: Input,
                args: ['serverProcessing']
            }], attrShowHeader: [{
                type: Input,
                args: ['showHeader']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrToolbarHeight: [{
                type: Input,
                args: ['toolbarHeight']
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
            }], onSort: [{
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
            }] } });
