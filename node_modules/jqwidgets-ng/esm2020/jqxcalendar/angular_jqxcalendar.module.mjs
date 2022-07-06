import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxCalendarComponent } from './angular_jqxcalendar';
import * as i0 from "@angular/core";
export class jqxCalendarModule {
}
jqxCalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxCalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCalendarModule, declarations: [jqxCalendarComponent], imports: [FormsModule], exports: [jqxCalendarComponent] });
jqxCalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCalendarModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxCalendarComponent],
                    exports: [jqxCalendarComponent]
                }]
        }] });
