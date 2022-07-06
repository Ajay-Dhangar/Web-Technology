import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxPasswordInputComponent } from './angular_jqxpasswordinput';
import * as i0 from "@angular/core";
export class jqxPasswordInputModule {
}
jqxPasswordInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxPasswordInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, declarations: [jqxPasswordInputComponent], imports: [FormsModule], exports: [jqxPasswordInputComponent] });
jqxPasswordInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxPasswordInputModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxPasswordInputComponent],
                    exports: [jqxPasswordInputComponent]
                }]
        }] });
