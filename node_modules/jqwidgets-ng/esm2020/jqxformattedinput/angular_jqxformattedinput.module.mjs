import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxFormattedInputComponent } from './angular_jqxformattedinput';
import * as i0 from "@angular/core";
export class jqxFormattedInputModule {
}
jqxFormattedInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxFormattedInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxFormattedInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxFormattedInputModule, declarations: [jqxFormattedInputComponent], imports: [FormsModule], exports: [jqxFormattedInputComponent] });
jqxFormattedInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxFormattedInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxFormattedInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxFormattedInputComponent],
                    exports: [jqxFormattedInputComponent]
                }]
        }] });
