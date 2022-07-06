import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxDropDownListComponent } from './angular_jqxdropdownlist';
import * as i0 from "@angular/core";
export class jqxDropDownListModule {
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
