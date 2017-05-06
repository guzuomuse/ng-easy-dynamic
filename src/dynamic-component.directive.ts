import {
    Directive,
    Input, OnInit,
    OnChanges,
    ViewContainerRef,
    ModuleWithProviders,
    Type,
} from '@angular/core';
import { DynamicService } from './dynamic-service';
@Directive({
    selector: 'dynamicComponent'
})
export class DynamicComponentDirective implements OnInit, OnChanges {
    // @Input() html: string;
    @Input() html: string;
    @Input() context: any;
    @Input() imports: Array<Type<any> | ModuleWithProviders | any[]>;
    constructor(
        private vcRef: ViewContainerRef,
        private service: DynamicService,
    ) {

    }
    update() {
        if (!this.html || this.html.trim() === '') {
            this.vcRef.clear();
            return;
        }
        this.service.compile({
            template: this.html,
            container: this.vcRef,
            context: this.context,
            imports: this.imports,
        });
    }
    ngOnInit() {
        this.update();
    }
    ngOnChanges() {
        this.update();
    }
}


