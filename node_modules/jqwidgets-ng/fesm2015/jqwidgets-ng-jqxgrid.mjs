import '../jqwidgets/jqxcore';
import '../jqwidgets/jqxdata';
import '../jqwidgets/jqxdata.export';
import '../jqwidgets/jqxexport';
import '../jqwidgets/jqxbuttons';
import '../jqwidgets/jqxbuttongroup';
import '../jqwidgets/jqxscrollbar';
import '../jqwidgets/jqxmenu';
import '../jqwidgets/jqxlistbox';
import '../jqwidgets/jqxdropdownlist';
import '../jqwidgets/jqxcombobox';
import '../jqwidgets/jqxnumberinput';
import '../jqwidgets/jqxcheckbox';
import '../jqwidgets/globalization/globalize';
import '../jqwidgets/jqxcalendar';
import '../jqwidgets/jqxdatetimeinput';
import '../jqwidgets/jqxgrid';
import '../jqwidgets/jqxgrid.edit';
import '../jqwidgets/jqxgrid.pager';
import '../jqwidgets/jqxgrid.selection';
import '../jqwidgets/jqxgrid.filter';
import '../jqwidgets/jqxgrid.sort';
import '../jqwidgets/jqxgrid.storage';
import '../jqwidgets/jqxgrid.grouping';
import '../jqwidgets/jqxgrid.export';
import '../jqwidgets/jqxgrid.columnsresize';
import '../jqwidgets/jqxgrid.columnsreorder';
import '../jqwidgets/jqxgrid.aggregates';
import '../jqwidgets/jqxgrid.chart';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';

/// <reference path="../../jqwidgets.d.ts" />
class jqxGridComponent {
    constructor(containerElement) {
        this.autoCreate = true;
        this.properties = ['altrows', 'altstart', 'altstep', 'autoshowloadelement', 'autoshowfiltericon', 'autoshowcolumnsmenubutton', 'showcolumnlines', 'showrowlines', 'showcolumnheaderlines', 'adaptive', 'adaptivewidth', 'commandcolumn', 'commandcolumnrenderer', 'clipboard', 'closeablegroups', 'columnsmenuwidth', 'columnmenuopening', 'columnmenuclosing', 'cellhover', 'enablekeyboarddelete', 'enableellipsis', 'enablemousewheel', 'enableanimations', 'enabletooltips', 'enablehover', 'enablebrowserselection', 'everpresentrowposition', 'everpresentrowheight', 'everpresentrowactions', 'everpresentrowactionsmode', 'filterrowheight', 'filtermode', 'groupsrenderer', 'groupcolumnrenderer', 'groupsexpandedbydefault', 'handlekeyboardnavigation', 'pagerrenderer', 'rtl', 'showdefaultloadelement', 'showfiltercolumnbackground', 'showfiltermenuitems', 'showpinnedcolumnbackground', 'showsortcolumnbackground', 'showsortmenuitems', 'showgroupmenuitems', 'showrowdetailscolumn', 'showheader', 'showgroupsheader', 'showaggregates', 'showgroupaggregates', 'showeverpresentrow', 'showfilterrow', 'showemptyrow', 'showstatusbar', 'statusbarheight', 'showtoolbar', 'showfilterbar', 'filterbarmode', 'selectionmode', 'updatefilterconditions', 'updatefilterpanel', 'theme', 'toolbarheight', 'autoheight', 'autorowheight', 'columnsheight', 'deferreddatafields', 'groupsheaderheight', 'groupindentwidth', 'height', 'pagerheight', 'rowsheight', 'scrollbarsize', 'scrollmode', 'scrollfeedback', 'width', 'autosavestate', 'autoloadstate', 'columns', 'enableSanitize', 'cardview', 'cardviewcolumns', 'cardheight', 'cardsize', 'columngroups', 'columnsmenu', 'columnsresize', 'columnsautoresize', 'columnsreorder', 'charting', 'disabled', 'editable', 'batcheditable', 'editmode', 'filter', 'filterable', 'groupable', 'groups', 'horizontalscrollbarstep', 'horizontalscrollbarlargestep', 'initrowdetails', 'keyboardnavigation', 'localization', 'pagesize', 'pagesizeoptions', 'pagermode', 'pagerbuttonscount', 'pageable', 'autofill', 'rowdetails', 'rowdetailstemplate', 'ready', 'rendered', 'renderstatusbar', 'rendertoolbar', 'rendergridrows', 'sortable', 'sortmode', 'selectedrowindex', 'selectedrowindexes', 'source', 'sorttogglestates', 'updatedelay', 'virtualmode', 'verticalscrollbarstep', 'verticalscrollbarlargestep'];
        // jqxGridComponent events
        this.onBindingcomplete = new EventEmitter();
        this.onColumnresized = new EventEmitter();
        this.onColumnreordered = new EventEmitter();
        this.onColumnclick = new EventEmitter();
        this.onCellclick = new EventEmitter();
        this.onCelldoubleclick = new EventEmitter();
        this.onCellselect = new EventEmitter();
        this.onCellunselect = new EventEmitter();
        this.onCellvaluechanged = new EventEmitter();
        this.onCellbeginedit = new EventEmitter();
        this.onCellendedit = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onGroupschanged = new EventEmitter();
        this.onGroupexpand = new EventEmitter();
        this.onGroupcollapse = new EventEmitter();
        this.onPagechanged = new EventEmitter();
        this.onPagesizechanged = new EventEmitter();
        this.onRowclick = new EventEmitter();
        this.onRowdoubleclick = new EventEmitter();
        this.onRowselect = new EventEmitter();
        this.onRowunselect = new EventEmitter();
        this.onRowexpand = new EventEmitter();
        this.onRowcollapse = new EventEmitter();
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
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxGrid(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxGrid(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxGrid(this.properties[i])) {
                        this.host.jqxGrid(this.properties[i], this[attrName]);
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
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxGrid', options);
    }
    createWidget(options) {
        this.createComponent(options);
    }
    __updateRect__() {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    }
    setOptions(options) {
        this.host.jqxGrid('setOptions', options);
    }
    // jqxGridComponent properties
    altrows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altrows', arg);
        }
        else {
            return this.host.jqxGrid('altrows');
        }
    }
    altstart(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altstart', arg);
        }
        else {
            return this.host.jqxGrid('altstart');
        }
    }
    altstep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('altstep', arg);
        }
        else {
            return this.host.jqxGrid('altstep');
        }
    }
    autoshowloadelement(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowloadelement', arg);
        }
        else {
            return this.host.jqxGrid('autoshowloadelement');
        }
    }
    autoshowfiltericon(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowfiltericon', arg);
        }
        else {
            return this.host.jqxGrid('autoshowfiltericon');
        }
    }
    autoshowcolumnsmenubutton(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoshowcolumnsmenubutton', arg);
        }
        else {
            return this.host.jqxGrid('autoshowcolumnsmenubutton');
        }
    }
    showcolumnlines(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showcolumnlines', arg);
        }
        else {
            return this.host.jqxGrid('showcolumnlines');
        }
    }
    showrowlines(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showrowlines', arg);
        }
        else {
            return this.host.jqxGrid('showrowlines');
        }
    }
    showcolumnheaderlines(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showcolumnheaderlines', arg);
        }
        else {
            return this.host.jqxGrid('showcolumnheaderlines');
        }
    }
    adaptive(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('adaptive', arg);
        }
        else {
            return this.host.jqxGrid('adaptive');
        }
    }
    adaptivewidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('adaptivewidth', arg);
        }
        else {
            return this.host.jqxGrid('adaptivewidth');
        }
    }
    commandcolumn(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('commandcolumn', arg);
        }
        else {
            return this.host.jqxGrid('commandcolumn');
        }
    }
    commandcolumnrenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('commandcolumnrenderer', arg);
        }
        else {
            return this.host.jqxGrid('commandcolumnrenderer');
        }
    }
    clipboard(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('clipboard', arg);
        }
        else {
            return this.host.jqxGrid('clipboard');
        }
    }
    closeablegroups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('closeablegroups', arg);
        }
        else {
            return this.host.jqxGrid('closeablegroups');
        }
    }
    columnsmenuwidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenuwidth', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenuwidth');
        }
    }
    columnmenuopening(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuopening', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuopening');
        }
    }
    columnmenuclosing(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnmenuclosing', arg);
        }
        else {
            return this.host.jqxGrid('columnmenuclosing');
        }
    }
    cellhover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('cellhover', arg);
        }
        else {
            return this.host.jqxGrid('cellhover');
        }
    }
    enablekeyboarddelete(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablekeyboarddelete', arg);
        }
        else {
            return this.host.jqxGrid('enablekeyboarddelete');
        }
    }
    enableellipsis(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enableellipsis', arg);
        }
        else {
            return this.host.jqxGrid('enableellipsis');
        }
    }
    enablemousewheel(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablemousewheel', arg);
        }
        else {
            return this.host.jqxGrid('enablemousewheel');
        }
    }
    enableanimations(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enableanimations', arg);
        }
        else {
            return this.host.jqxGrid('enableanimations');
        }
    }
    enabletooltips(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enabletooltips', arg);
        }
        else {
            return this.host.jqxGrid('enabletooltips');
        }
    }
    enablehover(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablehover', arg);
        }
        else {
            return this.host.jqxGrid('enablehover');
        }
    }
    enablebrowserselection(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enablebrowserselection', arg);
        }
        else {
            return this.host.jqxGrid('enablebrowserselection');
        }
    }
    everpresentrowposition(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowposition', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowposition');
        }
    }
    everpresentrowheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowheight', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowheight');
        }
    }
    everpresentrowactions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactions', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactions');
        }
    }
    everpresentrowactionsmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('everpresentrowactionsmode', arg);
        }
        else {
            return this.host.jqxGrid('everpresentrowactionsmode');
        }
    }
    filterrowheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filterrowheight', arg);
        }
        else {
            return this.host.jqxGrid('filterrowheight');
        }
    }
    filtermode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filtermode', arg);
        }
        else {
            return this.host.jqxGrid('filtermode');
        }
    }
    groupsrenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupsrenderer');
        }
    }
    groupcolumnrenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupcolumnrenderer', arg);
        }
        else {
            return this.host.jqxGrid('groupcolumnrenderer');
        }
    }
    groupsexpandedbydefault(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsexpandedbydefault', arg);
        }
        else {
            return this.host.jqxGrid('groupsexpandedbydefault');
        }
    }
    handlekeyboardnavigation(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('handlekeyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('handlekeyboardnavigation');
        }
    }
    pagerrenderer(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerrenderer', arg);
        }
        else {
            return this.host.jqxGrid('pagerrenderer');
        }
    }
    rtl(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rtl', arg);
        }
        else {
            return this.host.jqxGrid('rtl');
        }
    }
    showdefaultloadelement(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showdefaultloadelement', arg);
        }
        else {
            return this.host.jqxGrid('showdefaultloadelement');
        }
    }
    showfiltercolumnbackground(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltercolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showfiltercolumnbackground');
        }
    }
    showfiltermenuitems(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfiltermenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showfiltermenuitems');
        }
    }
    showpinnedcolumnbackground(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showpinnedcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showpinnedcolumnbackground');
        }
    }
    showsortcolumnbackground(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showsortcolumnbackground', arg);
        }
        else {
            return this.host.jqxGrid('showsortcolumnbackground');
        }
    }
    showsortmenuitems(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showsortmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showsortmenuitems');
        }
    }
    showgroupmenuitems(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupmenuitems', arg);
        }
        else {
            return this.host.jqxGrid('showgroupmenuitems');
        }
    }
    showrowdetailscolumn(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showrowdetailscolumn', arg);
        }
        else {
            return this.host.jqxGrid('showrowdetailscolumn');
        }
    }
    showheader(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showheader', arg);
        }
        else {
            return this.host.jqxGrid('showheader');
        }
    }
    showgroupsheader(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupsheader', arg);
        }
        else {
            return this.host.jqxGrid('showgroupsheader');
        }
    }
    showaggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showaggregates');
        }
    }
    showgroupaggregates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showgroupaggregates', arg);
        }
        else {
            return this.host.jqxGrid('showgroupaggregates');
        }
    }
    showeverpresentrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showeverpresentrow', arg);
        }
        else {
            return this.host.jqxGrid('showeverpresentrow');
        }
    }
    showfilterrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfilterrow', arg);
        }
        else {
            return this.host.jqxGrid('showfilterrow');
        }
    }
    showemptyrow(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showemptyrow', arg);
        }
        else {
            return this.host.jqxGrid('showemptyrow');
        }
    }
    showstatusbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('showstatusbar');
        }
    }
    statusbarheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('statusbarheight', arg);
        }
        else {
            return this.host.jqxGrid('statusbarheight');
        }
    }
    showtoolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showtoolbar', arg);
        }
        else {
            return this.host.jqxGrid('showtoolbar');
        }
    }
    showfilterbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('showfilterbar', arg);
        }
        else {
            return this.host.jqxGrid('showfilterbar');
        }
    }
    filterbarmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filterbarmode', arg);
        }
        else {
            return this.host.jqxGrid('filterbarmode');
        }
    }
    selectionmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectionmode', arg);
        }
        else {
            return this.host.jqxGrid('selectionmode');
        }
    }
    updatefilterconditions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatefilterconditions', arg);
        }
        else {
            return this.host.jqxGrid('updatefilterconditions');
        }
    }
    updatefilterpanel(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatefilterpanel', arg);
        }
        else {
            return this.host.jqxGrid('updatefilterpanel');
        }
    }
    theme(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('theme', arg);
        }
        else {
            return this.host.jqxGrid('theme');
        }
    }
    toolbarheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('toolbarheight', arg);
        }
        else {
            return this.host.jqxGrid('toolbarheight');
        }
    }
    autoheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoheight', arg);
        }
        else {
            return this.host.jqxGrid('autoheight');
        }
    }
    autorowheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autorowheight', arg);
        }
        else {
            return this.host.jqxGrid('autorowheight');
        }
    }
    columnsheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsheight', arg);
        }
        else {
            return this.host.jqxGrid('columnsheight');
        }
    }
    deferreddatafields(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('deferreddatafields', arg);
        }
        else {
            return this.host.jqxGrid('deferreddatafields');
        }
    }
    groupsheaderheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupsheaderheight', arg);
        }
        else {
            return this.host.jqxGrid('groupsheaderheight');
        }
    }
    groupindentwidth(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupindentwidth', arg);
        }
        else {
            return this.host.jqxGrid('groupindentwidth');
        }
    }
    height(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('height', arg);
        }
        else {
            return this.host.jqxGrid('height');
        }
    }
    pagerheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerheight', arg);
        }
        else {
            return this.host.jqxGrid('pagerheight');
        }
    }
    rowsheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowsheight', arg);
        }
        else {
            return this.host.jqxGrid('rowsheight');
        }
    }
    scrollbarsize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollbarsize', arg);
        }
        else {
            return this.host.jqxGrid('scrollbarsize');
        }
    }
    scrollmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollmode', arg);
        }
        else {
            return this.host.jqxGrid('scrollmode');
        }
    }
    scrollfeedback(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('scrollfeedback', arg);
        }
        else {
            return this.host.jqxGrid('scrollfeedback');
        }
    }
    width(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('width', arg);
        }
        else {
            return this.host.jqxGrid('width');
        }
    }
    autosavestate(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autosavestate', arg);
        }
        else {
            return this.host.jqxGrid('autosavestate');
        }
    }
    autoloadstate(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autoloadstate', arg);
        }
        else {
            return this.host.jqxGrid('autoloadstate');
        }
    }
    columns(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columns', arg);
        }
        else {
            return this.host.jqxGrid('columns');
        }
    }
    enableSanitize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('enableSanitize', arg);
        }
        else {
            return this.host.jqxGrid('enableSanitize');
        }
    }
    cardview(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('cardview', arg);
        }
        else {
            return this.host.jqxGrid('cardview');
        }
    }
    cardviewcolumns(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('cardviewcolumns', arg);
        }
        else {
            return this.host.jqxGrid('cardviewcolumns');
        }
    }
    cardheight(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('cardheight', arg);
        }
        else {
            return this.host.jqxGrid('cardheight');
        }
    }
    cardsize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('cardsize', arg);
        }
        else {
            return this.host.jqxGrid('cardsize');
        }
    }
    columngroups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columngroups', arg);
        }
        else {
            return this.host.jqxGrid('columngroups');
        }
    }
    columnsmenu(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsmenu', arg);
        }
        else {
            return this.host.jqxGrid('columnsmenu');
        }
    }
    columnsresize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsresize');
        }
    }
    columnsautoresize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsautoresize', arg);
        }
        else {
            return this.host.jqxGrid('columnsautoresize');
        }
    }
    columnsreorder(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('columnsreorder', arg);
        }
        else {
            return this.host.jqxGrid('columnsreorder');
        }
    }
    charting(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('charting', arg);
        }
        else {
            return this.host.jqxGrid('charting');
        }
    }
    disabled(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('disabled', arg);
        }
        else {
            return this.host.jqxGrid('disabled');
        }
    }
    editable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('editable', arg);
        }
        else {
            return this.host.jqxGrid('editable');
        }
    }
    batcheditable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('batcheditable', arg);
        }
        else {
            return this.host.jqxGrid('batcheditable');
        }
    }
    editmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('editmode', arg);
        }
        else {
            return this.host.jqxGrid('editmode');
        }
    }
    filter(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filter', arg);
        }
        else {
            return this.host.jqxGrid('filter');
        }
    }
    filterable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('filterable', arg);
        }
        else {
            return this.host.jqxGrid('filterable');
        }
    }
    groupable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groupable', arg);
        }
        else {
            return this.host.jqxGrid('groupable');
        }
    }
    groups(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('groups', arg);
        }
        else {
            return this.host.jqxGrid('groups');
        }
    }
    horizontalscrollbarstep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarstep');
        }
    }
    horizontalscrollbarlargestep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('horizontalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('horizontalscrollbarlargestep');
        }
    }
    initrowdetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('initrowdetails', arg);
        }
        else {
            return this.host.jqxGrid('initrowdetails');
        }
    }
    keyboardnavigation(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('keyboardnavigation', arg);
        }
        else {
            return this.host.jqxGrid('keyboardnavigation');
        }
    }
    localization(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('localization', arg);
        }
        else {
            return this.host.jqxGrid('localization');
        }
    }
    pagesize(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagesize', arg);
        }
        else {
            return this.host.jqxGrid('pagesize');
        }
    }
    pagesizeoptions(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagesizeoptions', arg);
        }
        else {
            return this.host.jqxGrid('pagesizeoptions');
        }
    }
    pagermode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagermode', arg);
        }
        else {
            return this.host.jqxGrid('pagermode');
        }
    }
    pagerbuttonscount(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pagerbuttonscount', arg);
        }
        else {
            return this.host.jqxGrid('pagerbuttonscount');
        }
    }
    pageable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('pageable', arg);
        }
        else {
            return this.host.jqxGrid('pageable');
        }
    }
    autofill(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('autofill', arg);
        }
        else {
            return this.host.jqxGrid('autofill');
        }
    }
    rowdetails(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetails', arg);
        }
        else {
            return this.host.jqxGrid('rowdetails');
        }
    }
    rowdetailstemplate(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rowdetailstemplate', arg);
        }
        else {
            return this.host.jqxGrid('rowdetailstemplate');
        }
    }
    ready(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('ready', arg);
        }
        else {
            return this.host.jqxGrid('ready');
        }
    }
    rendered(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendered', arg);
        }
        else {
            return this.host.jqxGrid('rendered');
        }
    }
    renderstatusbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('renderstatusbar', arg);
        }
        else {
            return this.host.jqxGrid('renderstatusbar');
        }
    }
    rendertoolbar(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendertoolbar', arg);
        }
        else {
            return this.host.jqxGrid('rendertoolbar');
        }
    }
    rendergridrows(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('rendergridrows', arg);
        }
        else {
            return this.host.jqxGrid('rendergridrows');
        }
    }
    sortable(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sortable', arg);
        }
        else {
            return this.host.jqxGrid('sortable');
        }
    }
    sortmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sortmode', arg);
        }
        else {
            return this.host.jqxGrid('sortmode');
        }
    }
    selectedrowindex(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindex', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindex');
        }
    }
    selectedrowindexes(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('selectedrowindexes', arg);
        }
        else {
            return this.host.jqxGrid('selectedrowindexes');
        }
    }
    source(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('source', arg);
        }
        else {
            return this.host.jqxGrid('source');
        }
    }
    sorttogglestates(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('sorttogglestates', arg);
        }
        else {
            return this.host.jqxGrid('sorttogglestates');
        }
    }
    updatedelay(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('updatedelay', arg);
        }
        else {
            return this.host.jqxGrid('updatedelay');
        }
    }
    virtualmode(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('virtualmode', arg);
        }
        else {
            return this.host.jqxGrid('virtualmode');
        }
    }
    verticalscrollbarstep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarstep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarstep');
        }
    }
    verticalscrollbarlargestep(arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxGrid('verticalscrollbarlargestep', arg);
        }
        else {
            return this.host.jqxGrid('verticalscrollbarlargestep');
        }
    }
    // jqxGridComponent functions
    autoresizecolumns(type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumns', type);
    }
    autoresizecolumn(dataField, type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('autoresizecolumn', dataField, type);
    }
    beginupdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginupdate');
    }
    clear() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clear');
    }
    createChart(type, dataSource) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('createChart', type, dataSource);
    }
    destroy() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('destroy');
    }
    endupdate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endupdate');
    }
    ensurerowvisible(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('ensurerowvisible', rowBoundIndex);
    }
    focus() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('focus');
    }
    getcolumnindex(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnindex', dataField);
    }
    getcolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumn', dataField);
    }
    getcolumnproperty(dataField, propertyName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnproperty', dataField, propertyName);
    }
    getrowid(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowid', rowBoundIndex);
    }
    getrowdata(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdata', rowBoundIndex);
    }
    getrowdatabyid(rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowdatabyid', rowID);
    }
    getrowboundindexbyid(rowID) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindexbyid', rowID);
    }
    getrowboundindex(rowDisplayIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrowboundindex', rowDisplayIndex);
    }
    getrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrows');
    }
    getboundrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getboundrows');
    }
    getdisplayrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdisplayrows');
    }
    getdatainformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getdatainformation');
    }
    getsortinformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortinformation');
    }
    getpaginginformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getpaginginformation');
    }
    hidecolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hidecolumn', dataField);
    }
    hideloadelement() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hideloadelement');
    }
    hiderowdetails(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('hiderowdetails', rowBoundIndex);
    }
    iscolumnvisible(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnvisible', dataField);
    }
    iscolumnpinned(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumnpinned', dataField);
    }
    localizestrings(localizationobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('localizestrings', localizationobject);
    }
    pincolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('pincolumn', dataField);
    }
    refreshdata() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshdata');
    }
    refresh() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refresh');
    }
    render() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('render');
    }
    scrolloffset(top, left) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('scrolloffset', top, left);
    }
    scrollposition() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('scrollposition');
    }
    showloadelement() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showloadelement');
    }
    showrowdetails(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showrowdetails', rowBoundIndex);
    }
    setcolumnindex(dataField, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnindex', dataField, index);
    }
    setcolumnproperty(dataField, propertyName, propertyValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);
    }
    showcolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showcolumn', dataField);
    }
    unpincolumn(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unpincolumn', dataField);
    }
    updatebounddata(type) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updatebounddata', type);
    }
    updating() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('updating');
    }
    getsortcolumn() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getsortcolumn');
    }
    removesort() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removesort');
    }
    sortby(dataField, sortOrder) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('sortby', dataField, sortOrder);
    }
    addgroup(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addgroup', dataField);
    }
    cleargroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('cleargroups');
    }
    collapsegroup(group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapsegroup', group);
    }
    collapseallgroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('collapseallgroups');
    }
    expandallgroups() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandallgroups');
    }
    expandgroup(group) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('expandgroup', group);
    }
    getrootgroupscount() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getrootgroupscount');
    }
    getgroup(groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getgroup', groupIndex);
    }
    insertgroup(groupIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('insertgroup', groupIndex, dataField);
    }
    iscolumngroupable() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('iscolumngroupable');
    }
    removegroupat(groupIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroupat', groupIndex);
    }
    removegroup(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removegroup', dataField);
    }
    addfilter(dataField, filterGroup, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addfilter', dataField, filterGroup, refreshGrid);
    }
    applyfilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('applyfilters');
    }
    clearfilters() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearfilters');
    }
    getfilterinformation() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getfilterinformation');
    }
    getcolumnat(index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnat', index);
    }
    removefilter(dataField, refreshGrid) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('removefilter', dataField, refreshGrid);
    }
    refreshfilterrow() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshfilterrow');
    }
    gotopage(pagenumber) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotopage', pagenumber);
    }
    gotoprevpage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotoprevpage');
    }
    gotonextpage() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('gotonextpage');
    }
    addrow(rowIds, data, rowPosition) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('addrow', rowIds, data, rowPosition);
    }
    begincelledit(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('begincelledit', rowBoundIndex, dataField);
    }
    beginrowedit(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('beginrowedit', rowBoundIndex);
    }
    closemenu() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('closemenu');
    }
    deleterow(rowIds) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('deleterow', rowIds);
    }
    endcelledit(rowBoundIndex, dataField, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);
    }
    endrowedit(rowBoundIndex, confirmChanges) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('endrowedit', rowBoundIndex, confirmChanges);
    }
    getcell(rowBoundIndex, datafield) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcell', rowBoundIndex, datafield);
    }
    getcellatposition(left, top) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellatposition', left, top);
    }
    getcelltext(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltext', rowBoundIndex, dataField);
    }
    getcelltextbyid(rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcelltextbyid', rowID, dataField);
    }
    getcellvaluebyid(rowID, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvaluebyid', rowID, dataField);
    }
    getcellvalue(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcellvalue', rowBoundIndex, dataField);
    }
    isBindingCompleted() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('isBindingCompleted');
    }
    openmenu(dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('openmenu', dataField);
    }
    setcellvalue(rowBoundIndex, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvalue', rowBoundIndex, dataField, value);
    }
    setcellvaluebyid(rowID, dataField, value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('setcellvaluebyid', rowID, dataField, value);
    }
    showvalidationpopup(rowBoundIndex, dataField, validationMessage) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);
    }
    updaterow(rowIds, data) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('updaterow', rowIds, data);
    }
    clearselection() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('clearselection');
    }
    getselectedrowindex() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindex');
    }
    getselectedrowindexes() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedrowindexes');
    }
    getselectedcell() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcell');
    }
    getselectedcells() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getselectedcells');
    }
    selectcell(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectcell', rowBoundIndex, dataField);
    }
    selectallrows() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectallrows');
    }
    selectrow(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('selectrow', rowBoundIndex);
    }
    unselectrow(rowBoundIndex) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectrow', rowBoundIndex);
    }
    unselectcell(rowBoundIndex, dataField) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('unselectcell', rowBoundIndex, dataField);
    }
    getcolumnaggregateddata(dataField, aggregates) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getcolumnaggregateddata', dataField, aggregates);
    }
    refreshaggregates() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('refreshaggregates');
    }
    renderaggregates() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('renderaggregates');
    }
    exportdata(dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);
    }
    exportview(dataType, fileName) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('exportview', dataType, fileName);
    }
    openColumnChooser(columns, header) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('openColumnChooser', columns, header);
    }
    getstate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('getstate');
    }
    loadstate(stateobject) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxGrid('loadstate', stateobject);
    }
    savestate() {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxGrid('savestate');
    }
    __wireEvents__() {
        this.host.on('bindingcomplete', (eventData) => { this.onBindingcomplete.emit(eventData); });
        this.host.on('columnresized', (eventData) => { this.onColumnresized.emit(eventData); });
        this.host.on('columnreordered', (eventData) => { this.onColumnreordered.emit(eventData); });
        this.host.on('columnclick', (eventData) => { this.onColumnclick.emit(eventData); });
        this.host.on('cellclick', (eventData) => { this.onCellclick.emit(eventData); });
        this.host.on('celldoubleclick', (eventData) => { this.onCelldoubleclick.emit(eventData); });
        this.host.on('cellselect', (eventData) => { this.onCellselect.emit(eventData); });
        this.host.on('cellunselect', (eventData) => { this.onCellunselect.emit(eventData); });
        this.host.on('cellvaluechanged', (eventData) => { this.onCellvaluechanged.emit(eventData); });
        this.host.on('cellbeginedit', (eventData) => { this.onCellbeginedit.emit(eventData); });
        this.host.on('cellendedit', (eventData) => { this.onCellendedit.emit(eventData); });
        this.host.on('filter', (eventData) => { this.onFilter.emit(eventData); });
        this.host.on('groupschanged', (eventData) => { this.onGroupschanged.emit(eventData); });
        this.host.on('groupexpand', (eventData) => { this.onGroupexpand.emit(eventData); });
        this.host.on('groupcollapse', (eventData) => { this.onGroupcollapse.emit(eventData); });
        this.host.on('pagechanged', (eventData) => { this.onPagechanged.emit(eventData); });
        this.host.on('pagesizechanged', (eventData) => { this.onPagesizechanged.emit(eventData); });
        this.host.on('rowclick', (eventData) => { this.onRowclick.emit(eventData); });
        this.host.on('rowdoubleclick', (eventData) => { this.onRowdoubleclick.emit(eventData); });
        this.host.on('rowselect', (eventData) => { this.onRowselect.emit(eventData); });
        this.host.on('rowunselect', (eventData) => { this.onRowunselect.emit(eventData); });
        this.host.on('rowexpand', (eventData) => { this.onRowexpand.emit(eventData); });
        this.host.on('rowcollapse', (eventData) => { this.onRowcollapse.emit(eventData); });
        this.host.on('sort', (eventData) => { this.onSort.emit(eventData); });
    }
} //jqxGridComponent
jqxGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGridComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
jqxGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: jqxGridComponent, selector: "jqxGrid", inputs: { attrAltrows: ["altrows", "attrAltrows"], attrAltstart: ["altstart", "attrAltstart"], attrAltstep: ["altstep", "attrAltstep"], attrAutoshowloadelement: ["autoshowloadelement", "attrAutoshowloadelement"], attrAutoshowfiltericon: ["autoshowfiltericon", "attrAutoshowfiltericon"], attrAutoshowcolumnsmenubutton: ["autoshowcolumnsmenubutton", "attrAutoshowcolumnsmenubutton"], attrShowcolumnlines: ["showcolumnlines", "attrShowcolumnlines"], attrShowrowlines: ["showrowlines", "attrShowrowlines"], attrShowcolumnheaderlines: ["showcolumnheaderlines", "attrShowcolumnheaderlines"], attrAdaptive: ["adaptive", "attrAdaptive"], attrAdaptivewidth: ["adaptivewidth", "attrAdaptivewidth"], attrCommandcolumn: ["commandcolumn", "attrCommandcolumn"], attrCommandcolumnrenderer: ["commandcolumnrenderer", "attrCommandcolumnrenderer"], attrClipboard: ["clipboard", "attrClipboard"], attrCloseablegroups: ["closeablegroups", "attrCloseablegroups"], attrColumnsmenuwidth: ["columnsmenuwidth", "attrColumnsmenuwidth"], attrColumnmenuopening: ["columnmenuopening", "attrColumnmenuopening"], attrColumnmenuclosing: ["columnmenuclosing", "attrColumnmenuclosing"], attrCellhover: ["cellhover", "attrCellhover"], attrEnablekeyboarddelete: ["enablekeyboarddelete", "attrEnablekeyboarddelete"], attrEnableellipsis: ["enableellipsis", "attrEnableellipsis"], attrEnablemousewheel: ["enablemousewheel", "attrEnablemousewheel"], attrEnableanimations: ["enableanimations", "attrEnableanimations"], attrEnabletooltips: ["enabletooltips", "attrEnabletooltips"], attrEnablehover: ["enablehover", "attrEnablehover"], attrEnablebrowserselection: ["enablebrowserselection", "attrEnablebrowserselection"], attrEverpresentrowposition: ["everpresentrowposition", "attrEverpresentrowposition"], attrEverpresentrowheight: ["everpresentrowheight", "attrEverpresentrowheight"], attrEverpresentrowactions: ["everpresentrowactions", "attrEverpresentrowactions"], attrEverpresentrowactionsmode: ["everpresentrowactionsmode", "attrEverpresentrowactionsmode"], attrFilterrowheight: ["filterrowheight", "attrFilterrowheight"], attrFiltermode: ["filtermode", "attrFiltermode"], attrGroupsrenderer: ["groupsrenderer", "attrGroupsrenderer"], attrGroupcolumnrenderer: ["groupcolumnrenderer", "attrGroupcolumnrenderer"], attrGroupsexpandedbydefault: ["groupsexpandedbydefault", "attrGroupsexpandedbydefault"], attrHandlekeyboardnavigation: ["handlekeyboardnavigation", "attrHandlekeyboardnavigation"], attrPagerrenderer: ["pagerrenderer", "attrPagerrenderer"], attrRtl: ["rtl", "attrRtl"], attrShowdefaultloadelement: ["showdefaultloadelement", "attrShowdefaultloadelement"], attrShowfiltercolumnbackground: ["showfiltercolumnbackground", "attrShowfiltercolumnbackground"], attrShowfiltermenuitems: ["showfiltermenuitems", "attrShowfiltermenuitems"], attrShowpinnedcolumnbackground: ["showpinnedcolumnbackground", "attrShowpinnedcolumnbackground"], attrShowsortcolumnbackground: ["showsortcolumnbackground", "attrShowsortcolumnbackground"], attrShowsortmenuitems: ["showsortmenuitems", "attrShowsortmenuitems"], attrShowgroupmenuitems: ["showgroupmenuitems", "attrShowgroupmenuitems"], attrShowrowdetailscolumn: ["showrowdetailscolumn", "attrShowrowdetailscolumn"], attrShowheader: ["showheader", "attrShowheader"], attrShowgroupsheader: ["showgroupsheader", "attrShowgroupsheader"], attrShowaggregates: ["showaggregates", "attrShowaggregates"], attrShowgroupaggregates: ["showgroupaggregates", "attrShowgroupaggregates"], attrShoweverpresentrow: ["showeverpresentrow", "attrShoweverpresentrow"], attrShowfilterrow: ["showfilterrow", "attrShowfilterrow"], attrShowemptyrow: ["showemptyrow", "attrShowemptyrow"], attrShowstatusbar: ["showstatusbar", "attrShowstatusbar"], attrStatusbarheight: ["statusbarheight", "attrStatusbarheight"], attrShowtoolbar: ["showtoolbar", "attrShowtoolbar"], attrShowfilterbar: ["showfilterbar", "attrShowfilterbar"], attrFilterbarmode: ["filterbarmode", "attrFilterbarmode"], attrSelectionmode: ["selectionmode", "attrSelectionmode"], attrUpdatefilterconditions: ["updatefilterconditions", "attrUpdatefilterconditions"], attrUpdatefilterpanel: ["updatefilterpanel", "attrUpdatefilterpanel"], attrTheme: ["theme", "attrTheme"], attrToolbarheight: ["toolbarheight", "attrToolbarheight"], attrAutoheight: ["autoheight", "attrAutoheight"], attrAutorowheight: ["autorowheight", "attrAutorowheight"], attrColumnsheight: ["columnsheight", "attrColumnsheight"], attrDeferreddatafields: ["deferreddatafields", "attrDeferreddatafields"], attrGroupsheaderheight: ["groupsheaderheight", "attrGroupsheaderheight"], attrGroupindentwidth: ["groupindentwidth", "attrGroupindentwidth"], attrPagerheight: ["pagerheight", "attrPagerheight"], attrRowsheight: ["rowsheight", "attrRowsheight"], attrScrollbarsize: ["scrollbarsize", "attrScrollbarsize"], attrScrollmode: ["scrollmode", "attrScrollmode"], attrScrollfeedback: ["scrollfeedback", "attrScrollfeedback"], attrAutosavestate: ["autosavestate", "attrAutosavestate"], attrAutoloadstate: ["autoloadstate", "attrAutoloadstate"], attrColumns: ["columns", "attrColumns"], attrEnableSanitize: ["enableSanitize", "attrEnableSanitize"], attrCardview: ["cardview", "attrCardview"], attrCardviewcolumns: ["cardviewcolumns", "attrCardviewcolumns"], attrCardheight: ["cardheight", "attrCardheight"], attrCardsize: ["cardsize", "attrCardsize"], attrColumngroups: ["columngroups", "attrColumngroups"], attrColumnsmenu: ["columnsmenu", "attrColumnsmenu"], attrColumnsresize: ["columnsresize", "attrColumnsresize"], attrColumnsautoresize: ["columnsautoresize", "attrColumnsautoresize"], attrColumnsreorder: ["columnsreorder", "attrColumnsreorder"], attrCharting: ["charting", "attrCharting"], attrDisabled: ["disabled", "attrDisabled"], attrEditable: ["editable", "attrEditable"], attrBatcheditable: ["batcheditable", "attrBatcheditable"], attrEditmode: ["editmode", "attrEditmode"], attrFilter: ["filter", "attrFilter"], attrFilterable: ["filterable", "attrFilterable"], attrGroupable: ["groupable", "attrGroupable"], attrGroups: ["groups", "attrGroups"], attrHorizontalscrollbarstep: ["horizontalscrollbarstep", "attrHorizontalscrollbarstep"], attrHorizontalscrollbarlargestep: ["horizontalscrollbarlargestep", "attrHorizontalscrollbarlargestep"], attrInitrowdetails: ["initrowdetails", "attrInitrowdetails"], attrKeyboardnavigation: ["keyboardnavigation", "attrKeyboardnavigation"], attrLocalization: ["localization", "attrLocalization"], attrPagesize: ["pagesize", "attrPagesize"], attrPagesizeoptions: ["pagesizeoptions", "attrPagesizeoptions"], attrPagermode: ["pagermode", "attrPagermode"], attrPagerbuttonscount: ["pagerbuttonscount", "attrPagerbuttonscount"], attrPageable: ["pageable", "attrPageable"], attrAutofill: ["autofill", "attrAutofill"], attrRowdetails: ["rowdetails", "attrRowdetails"], attrRowdetailstemplate: ["rowdetailstemplate", "attrRowdetailstemplate"], attrReady: ["ready", "attrReady"], attrRendered: ["rendered", "attrRendered"], attrRenderstatusbar: ["renderstatusbar", "attrRenderstatusbar"], attrRendertoolbar: ["rendertoolbar", "attrRendertoolbar"], attrRendergridrows: ["rendergridrows", "attrRendergridrows"], attrSortable: ["sortable", "attrSortable"], attrSortmode: ["sortmode", "attrSortmode"], attrSelectedrowindex: ["selectedrowindex", "attrSelectedrowindex"], attrSelectedrowindexes: ["selectedrowindexes", "attrSelectedrowindexes"], attrSource: ["source", "attrSource"], attrSorttogglestates: ["sorttogglestates", "attrSorttogglestates"], attrUpdatedelay: ["updatedelay", "attrUpdatedelay"], attrVirtualmode: ["virtualmode", "attrVirtualmode"], attrVerticalscrollbarstep: ["verticalscrollbarstep", "attrVerticalscrollbarstep"], attrVerticalscrollbarlargestep: ["verticalscrollbarlargestep", "attrVerticalscrollbarlargestep"], attrWidth: ["width", "attrWidth"], attrHeight: ["height", "attrHeight"], autoCreate: ["auto-create", "autoCreate"] }, outputs: { onBindingcomplete: "onBindingcomplete", onColumnresized: "onColumnresized", onColumnreordered: "onColumnreordered", onColumnclick: "onColumnclick", onCellclick: "onCellclick", onCelldoubleclick: "onCelldoubleclick", onCellselect: "onCellselect", onCellunselect: "onCellunselect", onCellvaluechanged: "onCellvaluechanged", onCellbeginedit: "onCellbeginedit", onCellendedit: "onCellendedit", onFilter: "onFilter", onGroupschanged: "onGroupschanged", onGroupexpand: "onGroupexpand", onGroupcollapse: "onGroupcollapse", onPagechanged: "onPagechanged", onPagesizechanged: "onPagesizechanged", onRowclick: "onRowclick", onRowdoubleclick: "onRowdoubleclick", onRowselect: "onRowselect", onRowunselect: "onRowunselect", onRowexpand: "onRowexpand", onRowcollapse: "onRowcollapse", onSort: "onSort" }, usesOnChanges: true, ngImport: i0, template: '<div><ng-content></ng-content></div>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'jqxGrid',
                    template: '<div><ng-content></ng-content></div>'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { attrAltrows: [{
                type: Input,
                args: ['altrows']
            }], attrAltstart: [{
                type: Input,
                args: ['altstart']
            }], attrAltstep: [{
                type: Input,
                args: ['altstep']
            }], attrAutoshowloadelement: [{
                type: Input,
                args: ['autoshowloadelement']
            }], attrAutoshowfiltericon: [{
                type: Input,
                args: ['autoshowfiltericon']
            }], attrAutoshowcolumnsmenubutton: [{
                type: Input,
                args: ['autoshowcolumnsmenubutton']
            }], attrShowcolumnlines: [{
                type: Input,
                args: ['showcolumnlines']
            }], attrShowrowlines: [{
                type: Input,
                args: ['showrowlines']
            }], attrShowcolumnheaderlines: [{
                type: Input,
                args: ['showcolumnheaderlines']
            }], attrAdaptive: [{
                type: Input,
                args: ['adaptive']
            }], attrAdaptivewidth: [{
                type: Input,
                args: ['adaptivewidth']
            }], attrCommandcolumn: [{
                type: Input,
                args: ['commandcolumn']
            }], attrCommandcolumnrenderer: [{
                type: Input,
                args: ['commandcolumnrenderer']
            }], attrClipboard: [{
                type: Input,
                args: ['clipboard']
            }], attrCloseablegroups: [{
                type: Input,
                args: ['closeablegroups']
            }], attrColumnsmenuwidth: [{
                type: Input,
                args: ['columnsmenuwidth']
            }], attrColumnmenuopening: [{
                type: Input,
                args: ['columnmenuopening']
            }], attrColumnmenuclosing: [{
                type: Input,
                args: ['columnmenuclosing']
            }], attrCellhover: [{
                type: Input,
                args: ['cellhover']
            }], attrEnablekeyboarddelete: [{
                type: Input,
                args: ['enablekeyboarddelete']
            }], attrEnableellipsis: [{
                type: Input,
                args: ['enableellipsis']
            }], attrEnablemousewheel: [{
                type: Input,
                args: ['enablemousewheel']
            }], attrEnableanimations: [{
                type: Input,
                args: ['enableanimations']
            }], attrEnabletooltips: [{
                type: Input,
                args: ['enabletooltips']
            }], attrEnablehover: [{
                type: Input,
                args: ['enablehover']
            }], attrEnablebrowserselection: [{
                type: Input,
                args: ['enablebrowserselection']
            }], attrEverpresentrowposition: [{
                type: Input,
                args: ['everpresentrowposition']
            }], attrEverpresentrowheight: [{
                type: Input,
                args: ['everpresentrowheight']
            }], attrEverpresentrowactions: [{
                type: Input,
                args: ['everpresentrowactions']
            }], attrEverpresentrowactionsmode: [{
                type: Input,
                args: ['everpresentrowactionsmode']
            }], attrFilterrowheight: [{
                type: Input,
                args: ['filterrowheight']
            }], attrFiltermode: [{
                type: Input,
                args: ['filtermode']
            }], attrGroupsrenderer: [{
                type: Input,
                args: ['groupsrenderer']
            }], attrGroupcolumnrenderer: [{
                type: Input,
                args: ['groupcolumnrenderer']
            }], attrGroupsexpandedbydefault: [{
                type: Input,
                args: ['groupsexpandedbydefault']
            }], attrHandlekeyboardnavigation: [{
                type: Input,
                args: ['handlekeyboardnavigation']
            }], attrPagerrenderer: [{
                type: Input,
                args: ['pagerrenderer']
            }], attrRtl: [{
                type: Input,
                args: ['rtl']
            }], attrShowdefaultloadelement: [{
                type: Input,
                args: ['showdefaultloadelement']
            }], attrShowfiltercolumnbackground: [{
                type: Input,
                args: ['showfiltercolumnbackground']
            }], attrShowfiltermenuitems: [{
                type: Input,
                args: ['showfiltermenuitems']
            }], attrShowpinnedcolumnbackground: [{
                type: Input,
                args: ['showpinnedcolumnbackground']
            }], attrShowsortcolumnbackground: [{
                type: Input,
                args: ['showsortcolumnbackground']
            }], attrShowsortmenuitems: [{
                type: Input,
                args: ['showsortmenuitems']
            }], attrShowgroupmenuitems: [{
                type: Input,
                args: ['showgroupmenuitems']
            }], attrShowrowdetailscolumn: [{
                type: Input,
                args: ['showrowdetailscolumn']
            }], attrShowheader: [{
                type: Input,
                args: ['showheader']
            }], attrShowgroupsheader: [{
                type: Input,
                args: ['showgroupsheader']
            }], attrShowaggregates: [{
                type: Input,
                args: ['showaggregates']
            }], attrShowgroupaggregates: [{
                type: Input,
                args: ['showgroupaggregates']
            }], attrShoweverpresentrow: [{
                type: Input,
                args: ['showeverpresentrow']
            }], attrShowfilterrow: [{
                type: Input,
                args: ['showfilterrow']
            }], attrShowemptyrow: [{
                type: Input,
                args: ['showemptyrow']
            }], attrShowstatusbar: [{
                type: Input,
                args: ['showstatusbar']
            }], attrStatusbarheight: [{
                type: Input,
                args: ['statusbarheight']
            }], attrShowtoolbar: [{
                type: Input,
                args: ['showtoolbar']
            }], attrShowfilterbar: [{
                type: Input,
                args: ['showfilterbar']
            }], attrFilterbarmode: [{
                type: Input,
                args: ['filterbarmode']
            }], attrSelectionmode: [{
                type: Input,
                args: ['selectionmode']
            }], attrUpdatefilterconditions: [{
                type: Input,
                args: ['updatefilterconditions']
            }], attrUpdatefilterpanel: [{
                type: Input,
                args: ['updatefilterpanel']
            }], attrTheme: [{
                type: Input,
                args: ['theme']
            }], attrToolbarheight: [{
                type: Input,
                args: ['toolbarheight']
            }], attrAutoheight: [{
                type: Input,
                args: ['autoheight']
            }], attrAutorowheight: [{
                type: Input,
                args: ['autorowheight']
            }], attrColumnsheight: [{
                type: Input,
                args: ['columnsheight']
            }], attrDeferreddatafields: [{
                type: Input,
                args: ['deferreddatafields']
            }], attrGroupsheaderheight: [{
                type: Input,
                args: ['groupsheaderheight']
            }], attrGroupindentwidth: [{
                type: Input,
                args: ['groupindentwidth']
            }], attrPagerheight: [{
                type: Input,
                args: ['pagerheight']
            }], attrRowsheight: [{
                type: Input,
                args: ['rowsheight']
            }], attrScrollbarsize: [{
                type: Input,
                args: ['scrollbarsize']
            }], attrScrollmode: [{
                type: Input,
                args: ['scrollmode']
            }], attrScrollfeedback: [{
                type: Input,
                args: ['scrollfeedback']
            }], attrAutosavestate: [{
                type: Input,
                args: ['autosavestate']
            }], attrAutoloadstate: [{
                type: Input,
                args: ['autoloadstate']
            }], attrColumns: [{
                type: Input,
                args: ['columns']
            }], attrEnableSanitize: [{
                type: Input,
                args: ['enableSanitize']
            }], attrCardview: [{
                type: Input,
                args: ['cardview']
            }], attrCardviewcolumns: [{
                type: Input,
                args: ['cardviewcolumns']
            }], attrCardheight: [{
                type: Input,
                args: ['cardheight']
            }], attrCardsize: [{
                type: Input,
                args: ['cardsize']
            }], attrColumngroups: [{
                type: Input,
                args: ['columngroups']
            }], attrColumnsmenu: [{
                type: Input,
                args: ['columnsmenu']
            }], attrColumnsresize: [{
                type: Input,
                args: ['columnsresize']
            }], attrColumnsautoresize: [{
                type: Input,
                args: ['columnsautoresize']
            }], attrColumnsreorder: [{
                type: Input,
                args: ['columnsreorder']
            }], attrCharting: [{
                type: Input,
                args: ['charting']
            }], attrDisabled: [{
                type: Input,
                args: ['disabled']
            }], attrEditable: [{
                type: Input,
                args: ['editable']
            }], attrBatcheditable: [{
                type: Input,
                args: ['batcheditable']
            }], attrEditmode: [{
                type: Input,
                args: ['editmode']
            }], attrFilter: [{
                type: Input,
                args: ['filter']
            }], attrFilterable: [{
                type: Input,
                args: ['filterable']
            }], attrGroupable: [{
                type: Input,
                args: ['groupable']
            }], attrGroups: [{
                type: Input,
                args: ['groups']
            }], attrHorizontalscrollbarstep: [{
                type: Input,
                args: ['horizontalscrollbarstep']
            }], attrHorizontalscrollbarlargestep: [{
                type: Input,
                args: ['horizontalscrollbarlargestep']
            }], attrInitrowdetails: [{
                type: Input,
                args: ['initrowdetails']
            }], attrKeyboardnavigation: [{
                type: Input,
                args: ['keyboardnavigation']
            }], attrLocalization: [{
                type: Input,
                args: ['localization']
            }], attrPagesize: [{
                type: Input,
                args: ['pagesize']
            }], attrPagesizeoptions: [{
                type: Input,
                args: ['pagesizeoptions']
            }], attrPagermode: [{
                type: Input,
                args: ['pagermode']
            }], attrPagerbuttonscount: [{
                type: Input,
                args: ['pagerbuttonscount']
            }], attrPageable: [{
                type: Input,
                args: ['pageable']
            }], attrAutofill: [{
                type: Input,
                args: ['autofill']
            }], attrRowdetails: [{
                type: Input,
                args: ['rowdetails']
            }], attrRowdetailstemplate: [{
                type: Input,
                args: ['rowdetailstemplate']
            }], attrReady: [{
                type: Input,
                args: ['ready']
            }], attrRendered: [{
                type: Input,
                args: ['rendered']
            }], attrRenderstatusbar: [{
                type: Input,
                args: ['renderstatusbar']
            }], attrRendertoolbar: [{
                type: Input,
                args: ['rendertoolbar']
            }], attrRendergridrows: [{
                type: Input,
                args: ['rendergridrows']
            }], attrSortable: [{
                type: Input,
                args: ['sortable']
            }], attrSortmode: [{
                type: Input,
                args: ['sortmode']
            }], attrSelectedrowindex: [{
                type: Input,
                args: ['selectedrowindex']
            }], attrSelectedrowindexes: [{
                type: Input,
                args: ['selectedrowindexes']
            }], attrSource: [{
                type: Input,
                args: ['source']
            }], attrSorttogglestates: [{
                type: Input,
                args: ['sorttogglestates']
            }], attrUpdatedelay: [{
                type: Input,
                args: ['updatedelay']
            }], attrVirtualmode: [{
                type: Input,
                args: ['virtualmode']
            }], attrVerticalscrollbarstep: [{
                type: Input,
                args: ['verticalscrollbarstep']
            }], attrVerticalscrollbarlargestep: [{
                type: Input,
                args: ['verticalscrollbarlargestep']
            }], attrWidth: [{
                type: Input,
                args: ['width']
            }], attrHeight: [{
                type: Input,
                args: ['height']
            }], autoCreate: [{
                type: Input,
                args: ['auto-create']
            }], onBindingcomplete: [{
                type: Output
            }], onColumnresized: [{
                type: Output
            }], onColumnreordered: [{
                type: Output
            }], onColumnclick: [{
                type: Output
            }], onCellclick: [{
                type: Output
            }], onCelldoubleclick: [{
                type: Output
            }], onCellselect: [{
                type: Output
            }], onCellunselect: [{
                type: Output
            }], onCellvaluechanged: [{
                type: Output
            }], onCellbeginedit: [{
                type: Output
            }], onCellendedit: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onGroupschanged: [{
                type: Output
            }], onGroupexpand: [{
                type: Output
            }], onGroupcollapse: [{
                type: Output
            }], onPagechanged: [{
                type: Output
            }], onPagesizechanged: [{
                type: Output
            }], onRowclick: [{
                type: Output
            }], onRowdoubleclick: [{
                type: Output
            }], onRowselect: [{
                type: Output
            }], onRowunselect: [{
                type: Output
            }], onRowexpand: [{
                type: Output
            }], onRowcollapse: [{
                type: Output
            }], onSort: [{
                type: Output
            }] } });

class jqxGridModule {
}
jqxGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGridModule, declarations: [jqxGridComponent], exports: [jqxGridComponent] });
jqxGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGridModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxGridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [],
                    declarations: [jqxGridComponent],
                    exports: [jqxGridComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { jqxGridComponent, jqxGridModule };
