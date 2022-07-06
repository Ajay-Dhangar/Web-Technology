import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxRatingComponent } from './angular_jqxrating';
import * as i0 from "@angular/core";
export class jqxRatingModule {
}
jqxRatingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRatingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxRatingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRatingModule, declarations: [jqxRatingComponent], imports: [FormsModule], exports: [jqxRatingComponent] });
jqxRatingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRatingModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxRatingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxRatingComponent],
                    exports: [jqxRatingComponent]
                }]
        }] });
