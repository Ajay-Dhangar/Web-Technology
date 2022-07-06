import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxComboBoxComponent } from './angular_jqxcombobox';
import * as i0 from "@angular/core";
export class jqxComboBoxModule {
}
jqxComboBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComboBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxComboBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComboBoxModule, declarations: [jqxComboBoxComponent], imports: [FormsModule], exports: [jqxComboBoxComponent] });
jqxComboBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComboBoxModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComboBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxComboBoxComponent],
                    exports: [jqxComboBoxComponent]
                }]
        }] });
