import {
    Injectable,
    ModuleWithProviders,
    Type,
    Compiler,
    ViewContainerRef,
    Component,
    NgModule,
    ModuleWithComponentFactories,
} from '@angular/core';
export interface CompileOptions {
    template: string;
    container: ViewContainerRef;
    imports?: Array<Type<any> | ModuleWithProviders | any[]>;
    context?: any;
}
const cache: any = {};
@Injectable()
export class DynamicService {
    constructor(private compiler: Compiler) {
    }
    compile(options: CompileOptions) {
        this.createFactory(options).then(factory => {
            options.container.clear();
            const cmp: any = options.container.createComponent(factory);
            cmp.instance.context = options.context;
        });
    }
    createFactory(options) {
        const cache_key = options.template;
        if (Object.keys(cache).indexOf(cache_key) > -1) {
            return cache[cache_key];
        }
        return new Promise(resolve => {
            @Component({
                template: options.template
            })
            class TemplateComponent {
                context: any;
            }
            @NgModule({
                imports: options.imports,
                declarations: [TemplateComponent],
            })
            class TemplateModule {
            }
            this.compiler.compileModuleAndAllComponentsAsync(TemplateModule)
                .then((ModuleWithComponentFactories: ModuleWithComponentFactories<any>) => {
                    return ModuleWithComponentFactories.componentFactories.find(x => x.componentType === TemplateComponent);
                }).then(factory => {
                    cache[cache_key] = factory;
                    resolve(factory);
                });
        });
    }
}
