import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jqxEditorComponent } from './angular_jqxeditor';
import * as i0 from "@angular/core";
export class jqxEditorModule {
}
jqxEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
jqxEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, declarations: [jqxEditorComponent], imports: [FormsModule], exports: [jqxEditorComponent] });
jqxEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, imports: [[
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: jqxEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule
                    ],
                    declarations: [jqxEditorComponent],
                    exports: [jqxEditorComponent]
                }]
        }] });
