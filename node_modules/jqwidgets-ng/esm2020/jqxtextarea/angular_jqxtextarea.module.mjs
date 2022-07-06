import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxTextAreaComponent } from './angular_jqxtextarea';
import * as i0 from "@angular/core";
export class jqxTextAreaModule {
}
jqxTextAreaModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxTextAreaModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, declarations: [jqxTextAreaComponent], imports: [FormsModule], exports: [jqxTextAreaComponent] });
jqxTextAreaModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxTextAreaModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxTextAreaComponent],
                    exports: [jqxTextAreaComponent]
                }]
        }] });
