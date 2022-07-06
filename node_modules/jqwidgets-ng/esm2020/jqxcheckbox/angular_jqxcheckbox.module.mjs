import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxCheckBoxComponent } from './angular_jqxcheckbox';
import * as i0 from "@angular/core";
export class jqxCheckBoxModule {
}
jqxCheckBoxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxCheckBoxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, declarations: [jqxCheckBoxComponent], imports: [FormsModule], exports: [jqxCheckBoxComponent] });
jqxCheckBoxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxCheckBoxModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxCheckBoxComponent],
                    exports: [jqxCheckBoxComponent]
                }]
        }] });
