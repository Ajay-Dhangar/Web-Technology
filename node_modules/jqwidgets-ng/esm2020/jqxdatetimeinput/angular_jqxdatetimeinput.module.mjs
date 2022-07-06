import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxDateTimeInputComponent } from './angular_jqxdatetimeinput';
import * as i0 from "@angular/core";
export class jqxDateTimeInputModule {
}
jqxDateTimeInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxDateTimeInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, declarations: [jqxDateTimeInputComponent], imports: [FormsModule], exports: [jqxDateTimeInputComponent] });
jqxDateTimeInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxDateTimeInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxDateTimeInputComponent],
                    exports: [jqxDateTimeInputComponent]
                }]
        }] });
