import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxMaskedInputComponent } from './angular_jqxmaskedinput';
import * as i0 from "@angular/core";
export class jqxMaskedInputModule {
}
jqxMaskedInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMaskedInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxMaskedInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMaskedInputModule, declarations: [jqxMaskedInputComponent], imports: [FormsModule], exports: [jqxMaskedInputComponent] });
jqxMaskedInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMaskedInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxMaskedInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxMaskedInputComponent],
                    exports: [jqxMaskedInputComponent]
                }]
        }] });
