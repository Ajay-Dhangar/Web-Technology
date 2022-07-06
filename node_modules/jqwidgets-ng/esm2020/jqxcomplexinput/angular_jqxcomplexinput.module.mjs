import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxComplexInputComponent } from './angular_jqxcomplexinput';
import * as i0 from "@angular/core";
export class jqxComplexInputModule {
}
jqxComplexInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxComplexInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, declarations: [jqxComplexInputComponent], imports: [FormsModule], exports: [jqxComplexInputComponent] });
jqxComplexInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxComplexInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxComplexInputComponent],
                    exports: [jqxComplexInputComponent]
                }]
        }] });
