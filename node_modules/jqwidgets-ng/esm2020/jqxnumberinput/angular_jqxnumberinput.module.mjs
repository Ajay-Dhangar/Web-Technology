import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxNumberInputComponent } from './angular_jqxnumberinput';
import * as i0 from "@angular/core";
export class jqxNumberInputModule {
}
jqxNumberInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxNumberInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, declarations: [jqxNumberInputComponent], imports: [FormsModule], exports: [jqxNumberInputComponent] });
jqxNumberInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxNumberInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxNumberInputComponent],
                    exports: [jqxNumberInputComponent]
                }]
        }] });
