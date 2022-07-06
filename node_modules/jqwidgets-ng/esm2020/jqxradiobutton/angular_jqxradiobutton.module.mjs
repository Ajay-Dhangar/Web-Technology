import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxRadioButtonComponent } from './angular_jqxradiobutton';
import * as i0 from "@angular/core";
export class jqxRadioButtonModule {
}
jqxRadioButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRadioButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxRadioButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRadioButtonModule, declarations: [jqxRadioButtonComponent], imports: [FormsModule], exports: [jqxRadioButtonComponent] });
jqxRadioButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRadioButtonModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRadioButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxRadioButtonComponent],
                    exports: [jqxRadioButtonComponent]
                }]
        }] });
