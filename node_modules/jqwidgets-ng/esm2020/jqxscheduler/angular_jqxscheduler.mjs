/// <reference path="../../jqwidgets.d.ts" />
/// <reference path="../../jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class jqxSchedulerComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['appointmentOpacity', 'appointmentsMinHeight', 'appointmentDataFields', 'appointmentTooltips', 'columnsHeight', 'contextMenu', 'contextMenuOpen', 'contextMenuClose', 'contextMenuItemClick', 'contextMenuCreate', 'changedAppointments', 'disabled', 'date', 'dayNameFormat', 'enableHover', 'editDialog', 'editDialogDateTimeFormatString', 'editDialogDateFormatString', 'editDialogOpen', 'editDialogCreate', 'editDialogKeyDown', 'editDialogClose', 'exportSettings', 'height', 'legendPosition', 'legendHeight', 'localization', 'min', 'max', 'ready', 'renderAppointment', 'rendering', 'rendered', 'rtl', 'resources', 'rowsHeight', 'showToolbar', 'showLegend', 'scrollBarSize', 'source', 'statuses', 'touchRowsHeight', 'theme', 'touchAppointmentsMinHeight', 'touchScrollBarSize', 'timeZone', 'touchDayNameFormat', 'toolBarRangeFormat', 'toolBarRangeFormatAbbr', 'toolbarHeight', 'views', 'view', 'width'];
        // jqxSchedulerComponent events
        this.onAppointmentChange = new EventEmitter();
        this.onAppointmentClick = new EventEmitter();
        this.onAppointmentDoubleClick = new EventEmitter();
        this.onAppointmentDelete = new EventEmitter();
        this.onAppointmentAdd = new EventEmitter();
        this.onBindingComplete = new EventEmitter();
        this.onCellClick = new EventEmitter();
        this.onCellDoubleClick = new EventEmitter();
        this.onContextMenuOpen = new EventEmitter();
        this.onContextMenuClose = new EventEmitter();
        this.onContextMenuItemClick = new EventEmitter();
        this.onContextMenuCreate = new EventEmitter();
        this.onDateChange = new EventEmitter();
        this.onEditRecurrenceDialogOpen = new EventEmitter();
        this.onEditRecurrenceDialogClose = new EventEmitter();
        this.onEditDialogCreate = new EventEmitter();
        this.onEditDialogOpen = new EventEmitter();
        this.onEditDialogClose = new EventEmitter();
        this.onViewChange = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxScheduler(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxScheduler(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxScheduler(this.properties[i])) {
                        this.host.jqxScheduler(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxScheduler', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxScheduler('setOptions', options);
    }
    // jqxSchedulerComponent properties
    appointmentOpacity(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentOpacity', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentOpacity');
        }
    }
    appointmentsMinHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentsMinHeight');
        }
    }
    appointmentDataFields(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentDataFields', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentDataFields');
        }
    }
    appointmentTooltips(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('appointmentTooltips', arg);
        }
        else {
            return this.host.jqxScheduler('appointmentTooltips');
        }
    }
    columnsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('columnsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('columnsHeight');
        }
    }
    contextMenu(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenu', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenu');
        }
    }
    contextMenuOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuOpen', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuOpen');
        }
    }
    contextMenuClose(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuClose', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuClose');
        }
    }
    contextMenuItemClick(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuItemClick', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuItemClick');
        }
    }
    contextMenuCreate(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('contextMenuCreate', arg);
        }
        else {
            return this.host.jqxScheduler('contextMenuCreate');
        }
    }
    changedAppointments(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('changedAppointments', arg);
        }
        else {
            return this.host.jqxScheduler('changedAppointments');
        }
    }
    disabled(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('disabled', arg);
        }
        else {
            return this.host.jqxScheduler('disabled');
        }
    }
    date(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('date', arg);
        }
        else {
            return this.host.jqxScheduler('date');
        }
    }
    dayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('dayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('dayNameFormat');
        }
    }
    enableHover(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('enableHover', arg);
        }
        else {
            return this.host.jqxScheduler('enableHover');
        }
    }
    editDialog(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialog', arg);
        }
        else {
            return this.host.jqxScheduler('editDialog');
        }
    }
    editDialogDateTimeFormatString(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateTimeFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateTimeFormatString');
        }
    }
    editDialogDateFormatString(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogDateFormatString', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogDateFormatString');
        }
    }
    editDialogOpen(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogOpen', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogOpen');
        }
    }
    editDialogCreate(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogCreate', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogCreate');
        }
    }
    editDialogKeyDown(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogKeyDown', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogKeyDown');
        }
    }
    editDialogClose(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('editDialogClose', arg);
        }
        else {
            return this.host.jqxScheduler('editDialogClose');
        }
    }
    exportSettings(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('exportSettings', arg);
        }
        else {
            return this.host.jqxScheduler('exportSettings');
        }
    }
    height(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('height', arg);
        }
        else {
            return this.host.jqxScheduler('height');
        }
    }
    legendPosition(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendPosition', arg);
        }
        else {
            return this.host.jqxScheduler('legendPosition');
        }
    }
    legendHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('legendHeight', arg);
        }
        else {
            return this.host.jqxScheduler('legendHeight');
        }
    }
    localization(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('localization', arg);
        }
        else {
            return this.host.jqxScheduler('localization');
        }
    }
    min(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('min', arg);
        }
        else {
            return this.host.jqxScheduler('min');
        }
    }
    max(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('max', arg);
        }
        else {
            return this.host.jqxScheduler('max');
        }
    }
    ready(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('ready', arg);
        }
        else {
            return this.host.jqxScheduler('ready');
        }
    }
    renderAppointment(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('renderAppointment', arg);
        }
        else {
            return this.host.jqxScheduler('renderAppointment');
        }
    }
    rendering(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendering', arg);
        }
        else {
            return this.host.jqxScheduler('rendering');
        }
    }
    rendered(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rendered', arg);
        }
        else {
            return this.host.jqxScheduler('rendered');
        }
    }
    rtl(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rtl', arg);
        }
        else {
            return this.host.jqxScheduler('rtl');
        }
    }
    resources(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('resources', arg);
        }
        else {
            return this.host.jqxScheduler('resources');
        }
    }
    rowsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('rowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('rowsHeight');
        }
    }
    showToolbar(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showToolbar', arg);
        }
        else {
            return this.host.jqxScheduler('showToolbar');
        }
    }
    showLegend(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('showLegend', arg);
        }
        else {
            return this.host.jqxScheduler('showLegend');
        }
    }
    scrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('scrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('scrollBarSize');
        }
    }
    source(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('source', arg);
        }
        else {
            return this.host.jqxScheduler('source');
        }
    }
    statuses(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('statuses', arg);
        }
        else {
            return this.host.jqxScheduler('statuses');
        }
    }
    touchRowsHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchRowsHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchRowsHeight');
        }
    }
    theme(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('theme', arg);
        }
        else {
            return this.host.jqxScheduler('theme');
        }
    }
    touchAppointmentsMinHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchAppointmentsMinHeight', arg);
        }
        else {
            return this.host.jqxScheduler('touchAppointmentsMinHeight');
        }
    }
    touchScrollBarSize(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchScrollBarSize', arg);
        }
        else {
            return this.host.jqxScheduler('touchScrollBarSize');
        }
    }
    timeZone(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('timeZone', arg);
        }
        else {
            return this.host.jqxScheduler('timeZone');
        }
    }
    touchDayNameFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('touchDayNameFormat', arg);
        }
        else {
            return this.host.jqxScheduler('touchDayNameFormat');
        }
    }
    toolBarRangeFormat(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormat', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormat');
        }
    }
    toolBarRangeFormatAbbr(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolBarRangeFormatAbbr', arg);
        }
        else {
            return this.host.jqxScheduler('toolBarRangeFormatAbbr');
        }
    }
    toolbarHeight(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('toolbarHeight', arg);
        }
        else {
            return this.host.jqxScheduler('toolbarHeight');
        }
    }
    views(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('views', arg);
        }
        else {
            return this.host.jqxScheduler('views');
        }
    }
    view(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('view', arg);
        }
        else {
            return this.host.jqxScheduler('view');
        }
    }
    width(arg) {
        if (arg !== undefined) {
            this.host.jqxScheduler('width', arg);
        }
        else {
            return this.host.jqxScheduler('width');
        }
    }
    // jqxSchedulerComponent functions
    addAppointment(item) {
        this.host.jqxScheduler('addAppointment', item);
    }
    beginAppointmentsUpdate() {
        this.host.jqxScheduler('beginAppointmentsUpdate');
    }
    clearAppointmentsSelection() {
        this.host.jqxScheduler('clearAppointmentsSelection');
    }
    clearSelection() {
        this.host.jqxScheduler('clearSelection');
    }
    closeMenu() {
        this.host.jqxScheduler('closeMenu');
    }
    closeDialog() {
        this.host.jqxScheduler('closeDialog');
    }
    deleteAppointment(appointmenId) {
        this.host.jqxScheduler('deleteAppointment', appointmenId);
    }
    destroy() {
        this.host.jqxScheduler('destroy');
    }
    endAppointmentsUpdate() {
        this.host.jqxScheduler('endAppointmentsUpdate');
    }
    ensureAppointmentVisible(id) {
        this.host.jqxScheduler('ensureAppointmentVisible', id);
    }
    ensureVisible(item, resourceId) {
        this.host.jqxScheduler('ensureVisible', item, resourceId);
    }
    exportData(format) {
        return this.host.jqxScheduler('exportData', format);
    }
    focus() {
        this.host.jqxScheduler('focus');
    }
    getAppointmentProperty(appointmentId, name) {
        return this.host.jqxScheduler('getAppointmentProperty', appointmentId, name);
    }
    getSelection() {
        return this.host.jqxScheduler('getSelection');
    }
    getAppointments() {
        return this.host.jqxScheduler('getAppointments');
    }
    getDataAppointments() {
        return this.host.jqxScheduler('getDataAppointments');
    }
    hideAppointmentsByResource(resourcesId) {
        this.host.jqxScheduler('hideAppointmentsByResource', resourcesId);
    }
    openMenu(left, top) {
        this.host.jqxScheduler('openMenu', left, top);
    }
    openDialog(left, top) {
        this.host.jqxScheduler('openDialog', left, top);
    }
    selectAppointment(appointmentId) {
        this.host.jqxScheduler('selectAppointment', appointmentId);
    }
    setAppointmentProperty(appointmentId, name, value) {
        this.host.jqxScheduler('setAppointmentProperty', appointmentId, name, value);
    }
    selectCell(date, allday, resourceId) {
        this.host.jqxScheduler('selectCell', date, allday, resourceId);
    }
    showAppointmentsByResource(resourceId) {
        this.host.jqxScheduler('showAppointmentsByResource', resourceId);
    }
    scrollWidth() {
        return this.host.jqxScheduler('scrollWidth');
    }
    scrollHeight() {
        return this.host.jqxScheduler('scrollHeight');
    }
    scrollLeft(left) {
        this.host.jqxScheduler('scrollLeft', left);
    }
    scrollTop(top) {
        this.host.jqxScheduler('scrollTop', top);
    }
    __wireEvents__() {
        this.host.on('appointmentChange', (eventData) => { this.onAppointmentChange.emit(eventData); });
        this.host.on('appointmentClick', (eventData) => { this.onAppointmentClick.emit(eventData); });
        this.host.on('appointmentDoubleClick', (eventData) => { this.onAppointmentDoubleClick.emit(eventData); });
        this.host.on('appointmentDelete', (eventData) => { this.onAppointmentDelete.emit(eventData); });
        this.host.on('appointmentAdd', (eventData) => { this.onAppointmentAdd.emit(eventData); });
        this.host.on('bindingComplete', (eventData) => { this.onBindingComplete.emit(eventData); });
        this.host.on('cellClick', (eventData) => { this.onCellClick.emit(eventData); });
        this.host.on('cellDoubleClick', (eventData) => { this.onCellDoubleClick.emit(eventData); });
        this.host.on('contextMenuOpen', (eventData) => { this.onContextMenuOpen.emit(eventData); });
        this.host.on('contextMenuClose', (eventData) => { this.onContextMenuClose.emit(eventData); });
        this.host.on('contextMenuItemClick', (eventData) => { this.onContextMenuItemClick.emit(eventData); });
        this.host.on('contextMenuCreate', (eventData) => { this.onContextMenuCreate.emit(eventData); });
        this.host.on('dateChange', (eventData) => { this.onDateChange.emit(eventData); });
        this.host.on('editRecurrenceDialogOpen', (eventData) => { this.onEditRecurrenceDialogOpen.emit(eventData); });
        this.host.on('editRecurrenceDialogClose', (eventData) => { this.onEditRecurrenceDialogClose.emit(eventData); });
        this.host.on('editDialogCreate', (eventData) => { this.onEditDialogCreate.emit(eventData); });
        this.host.on('editDialogOpen', (eventData) => { this.onEditDialogOpen.emit(eventData); });
        this.host.on('editDialogClose', (eventData) => { this.onEditDialogClose.emit(eventData); });
        this.host.on('viewChange', (eventData) => { this.onViewChange.emit(eventData); });
    }
} //jqxSchedulerComponent
jqxSchedulerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSchedulerComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxSchedulerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxSchedulerComponent, selector: "jqxScheduler", inputs: { attrAppointmentOpacity: ["appointmentOpacity", "attrAppointmentOpacity"], attrAppointmentsMinHeight: ["appointmentsMinHeight", "attrAppointmentsMinHeight"], attrAppointmentDataFields: ["appointmentDataFields", "attrAppointmentDataFields"], attrAppointmentTooltips: ["appointmentTooltips", "attrAppointmentTooltips"], attrColumnsHeight: ["columnsHeight", "attrColumnsHeight"], attrContextMenu: ["contextMenu", "attrContextMenu"], attrContextMenuOpen: ["contextMenuOpen", "attrContextMenuOpen"], attrContextMenuClose: ["contextMenuClose", "attrContextMenuClose"], attrContextMenuItemClick: ["contextMenuItemClick", "attrContextMenuItemClick"], attrContextMenuCreate: ["contextMenuCreate", "attrContextMenuCreate"], attrChangedAppointments: ["changedAppointments", "attrChangedAppointments"], attrDisabled: ["disabled", "attrDisabled"], attrDate: ["date", "attrDate"], attrDayNameFormat: ["dayNameFormat", "attrDayNameFormat"], attrEnableHover: ["enableHover", "attrEnableHover"], attrEditDialog: ["editDialog", "attrEditDialog"], attrEditDialogDateTimeFormatString: ["editDialogDateTimeFormatString", "attrEditDialogDateTimeFormatString"], attrEditDialogDateFormatString: ["editDialogDateFormatString", "attrEditDialogDateFormatString"], attrEditDialogOpen: ["editDialogOpen", "attrEditDialogOpen"], attrEditDialogCreate: ["editDialogCreate", "attrEditDialogCreate"], attrEditDialogKeyDown: ["editDialogKeyDown", "attrEditDialogKeyDown"], attrEditDialogClose: ["editDialogClose", "attrEditDialogClose"], attrExportSettings: ["exportSettings", "attrExportSettings"], attrLegendPosition: ["legendPosition", "attrLegendPosition"], attrLegendHeight: ["legendHeight", "attrLegendHeight"], attrLocalization: ["localization", "attrLocalization"], attrMin: ["min", "attrMin"], attrMax: ["max", "attrMax"], attrReady: ["ready", "attrReady"], attrRenderAppointment: ["renderAppointment", "attrRenderAppointment"], attrRendering: ["rendering", "attrRendering"], attrRendered: ["rendered", "attrRendered"], attrRtl: ["rtl", "attrRtl"], attrResources: ["resources", "attrResources"], attrRowsHeight: ["rowsHeight", "attrRowsHeight"], attrShowToolbar: ["showToolbar", "attrShowToolbar"], attrShowLegend: ["showLegend", "attrShowLegend"], attrScrollBarSize: ["scrollBarSize", "attrScrollBarSize"], attrSource: ["source", "attrSource"], attrStatuses: ["statuses", "attrStatuses"], attrTouchRowsHeight: ["touchRowsHeight", "attrTouchRowsHeight"], attrTheme: ["theme", "attrTheme"], attrTouchAppointmentsMinHeight: ["touchAppointmentsMinHeight", "attrTouchAppointmentsMinHeight"], attrTouchScrollBarSize: ["touchScrollBarSize", "attrTouchScrollBarSize"], attrTimeZone: ["timeZone", "attrTimeZone"], attrTouchDayNameFormat: ["touchDayNameFormat", "attrTouchDayNameFormat"], attrToolBarRangeFormat: ["toolBarRangeFormat", "attrToolBarRangeFormat"], attrToolBarRangeFormatAbbr: ["toolBarRangeFormatAbbr", "attrToolBarRangeFormatAbbr"], attrToolbarHeight: ["toolbarHeight", "attrToolbarHeight"], attrViews: ["views", "attrViews"], attrView: ["view", "attrView"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onAppointmentChange: "onAppointmentChange", onAppointmentClick: "onAppointmentClick", onAppointmentDoubleClick: "onAppointmentDoubleClick", onAppointmentDelete: "onAppointmentDelete", onAppointmentAdd: "onAppointmentAdd", onBindingComplete: "onBindingComplete", onCellClick: "onCellClick", onCellDoubleClick: "onCellDoubleClick", onContextMenuOpen: "onContextMenuOpen", onContextMenuClose: "onContextMenuClose", onContextMenuItemClick: "onContextMenuItemClick", onContextMenuCreate: "onContextMenuCreate", onDateChange: "onDateChange", onEditRecurrenceDialogOpen: "onEditRecurrenceDialogOpen", onEditRecurrenceDialogClose: "onEditRecurrenceDialogClose", onEditDialogCreate: "onEditDialogCreate", onEditDialogOpen: "onEditDialogOpen", onEditDialogClose: "onEditDialogClose", onViewChange: "onViewChange" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSchedulerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxScheduler',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAppointmentOpacity: [{
                type: Input,
                args: ['appointmentOpacity']
            }], attrAppointmentsMinHeight: [{
                type: Input,
                args: ['appointmentsMinHeight']
            }], attrAppointmentDataFields: [{
                type: Input,
                args: ['appointmentDataFields']
            }], attrAppointmentTooltips: [{
                type: Input,
                args: ['appointmentTooltips']
            }], attrColumnsHeight: [{
                type: Input,
                args: ['columnsHeight']
            }], attrContextMenu: [{
                type: Input,
                args: ['contextMenu']
            }], attrContextMenuOpen: [{
                type: Input,
                args: ['contextMenuOpen']
            }], attrContextMenuClose: [{
                type: Input,
                args: ['contextMenuClose']
            }], attrContextMenuItemClick: [{
                type: Input,
                args: ['contextMenuItemClick']
            }], attrContextMenuCreate: [{
                type: Input,
                args: ['contextMenuCreate']
            }], attrChangedAppointments: [{
                type: Input,
                args: ['changedAppointments']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrDate: [{
                type: Input,
                args: ['date']
            }], attrDayNameFormat: [{
                type: Input,
                args: ['dayNameFormat']
            }], attrEnableHover: [{
                type: Input,
                args: ['enableHover']
            }], attrEditDialog: [{
                type: Input,
                args: ['editDialog']
            }], attrEditDialogDateTimeFormatString: [{
                type: Input,
                args: ['editDialogDateTimeFormatString']
            }], attrEditDialogDateFormatString: [{
                type: Input,
                args: ['editDialogDateFormatString']
            }], attrEditDialogOpen: [{
                type: Input,
                args: ['editDialogOpen']
            }], attrEditDialogCreate: [{
                type: Input,
                args: ['editDialogCreate']
            }], attrEditDialogKeyDown: [{
                type: Input,
                args: ['editDialogKeyDown']
            }], attrEditDialogClose: [{
                type: Input,
                args: ['editDialogClose']
            }], attrExportSettings: [{
                type: Input,
                args: ['exportSettings']
            }], attrLegendPosition: [{
                type: Input,
                args: ['legendPosition']
            }], attrLegendHeight: [{
                type: Input,
                args: ['legendHeight']
            }], attrLocalization: [{
                type: Input,
                args: ['localization']
            }], attrMin: [{
                type: Input,
                args: ['min']
            }], attrMax: [{
                type: Input,
                args: ['max']
            }], attrReady: [{
                type: Input,
                args: ['ready']
            }], attrRenderAppointment: [{
                type: Input,
                args: ['renderAppointment']
            }], attrRendering: [{
                type: Input,
                args: ['rendering']
            }], attrRendered: [{
                type: Input,
                args: ['rendered']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrResources: [{
                type: Input,
                args: ['resources']
            }], attrRowsHeight: [{
                type: Input,
                args: ['rowsHeight']
            }], attrShowToolbar: [{
                type: Input,
                args: ['showToolbar']
            }], attrShowLegend: [{
                type: Input,
                args: ['showLegend']
            }], attrScrollBarSize: [{
                type: Input,
                args: ['scrollBarSize']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrStatuses: [{
                type: Input,
                args: ['statuses']
            }], attrTouchRowsHeight: [{
                type: Input,
                args: ['touchRowsHeight']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrTouchAppointmentsMinHeight: [{
                type: Input,
                args: ['touchAppointmentsMinHeight']
            }], attrTouchScrollBarSize: [{
                type: Input,
                args: ['touchScrollBarSize']
            }], attrTimeZone: [{
                type: Input,
                args: ['timeZone']
            }], attrTouchDayNameFormat: [{
                type: Input,
                args: ['touchDayNameFormat']
            }], attrToolBarRangeFormat: [{
                type: Input,
                args: ['toolBarRangeFormat']
            }], attrToolBarRangeFormatAbbr: [{
                type: Input,
                args: ['toolBarRangeFormatAbbr']
            }], attrToolbarHeight: [{
                type: Input,
                args: ['toolbarHeight']
            }], attrViews: [{
                type: Input,
                args: ['views']
            }], attrView: [{
                type: Input,
                args: ['view']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onAppointmentChange: [{
                type: Output
            }], onAppointmentClick: [{
                type: Output
            }], onAppointmentDoubleClick: [{
                type: Output
            }], onAppointmentDelete: [{
                type: Output
            }], onAppointmentAdd: [{
                type: Output
            }], onBindingComplete: [{
                type: Output
            }], onCellClick: [{
                type: Output
            }], onCellDoubleClick: [{
                type: Output
            }], onContextMenuOpen: [{
                type: Output
            }], onContextMenuClose: [{
                type: Output
            }], onContextMenuItemClick: [{
                type: Output
            }], onContextMenuCreate: [{
                type: Output
            }], onDateChange: [{
                type: Output
            }], onEditRecurrenceDialogOpen: [{
                type: Output
            }], onEditRecurrenceDialogClose: [{
                type: Output
            }], onEditDialogCreate: [{
                type: Output
            }], onEditDialogOpen: [{
                type: Output
            }], onEditDialogClose: [{
                type: Output
            }], onViewChange: [{
                type: Output
            }] } });
