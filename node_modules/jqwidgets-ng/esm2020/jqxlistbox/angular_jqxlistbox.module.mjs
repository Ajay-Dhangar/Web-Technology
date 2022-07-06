import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxListBoxComponent } from './angular_jqxlistbox';
import * as i0 from "@angular/core";
export class jqxListBoxModule {
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
