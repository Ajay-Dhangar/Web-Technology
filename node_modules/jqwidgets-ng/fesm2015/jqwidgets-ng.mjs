import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

class deleteComponent {
}
deleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: deleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
deleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: deleteComponent, selector: "app-delete", ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: deleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-delete',
                    template: '<ng-content></ng-content>'
                }]
        }] });

class deleteModule {
}
deleteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: deleteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
deleteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: deleteModule, declarations: [deleteComponent], exports: [deleteComponent] });
deleteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: deleteModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: deleteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [deleteComponent],
                    exports: [deleteComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { deleteComponent, deleteModule };
