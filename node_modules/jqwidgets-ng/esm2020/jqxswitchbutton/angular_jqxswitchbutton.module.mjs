import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxSwitchButtonComponent } from './angular_jqxswitchbutton';
import * as i0 from "@angular/core";
export class jqxSwitchButtonModule {
}
jqxSwitchButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSwitchButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxSwitchButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSwitchButtonModule, declarations: [jqxSwitchButtonComponent], imports: [FormsModule], exports: [jqxSwitchButtonComponent] });
jqxSwitchButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSwitchButtonModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSwitchButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxSwitchButtonComponent],
                    exports: [jqxSwitchButtonComponent]
                }]
        }] });
