import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxInputComponent } from './angular_jqxinput';
import * as i0 from "@angular/core";
export class jqxInputModule {
}
jqxInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, declarations: [jqxInputComponent], imports: [FormsModule], exports: [jqxInputComponent] });
jqxInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxInputComponent],
                    exports: [jqxInputComponent]
                }]
        }] });
