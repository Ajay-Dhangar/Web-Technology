import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxSliderComponent } from './angular_jqxslider';
import * as i0 from "@angular/core";
export class jqxSliderModule {
}
jqxSliderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSliderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxSliderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSliderModule, declarations: [jqxSliderComponent], imports: [FormsModule], exports: [jqxSliderComponent] });
jqxSliderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSliderModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxSliderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxSliderComponent],
                    exports: [jqxSliderComponent]
                }]
        }] });
