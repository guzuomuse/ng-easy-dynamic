import { NgModule, Compiler } from '@angular/core';
import { JitCompilerFactory } from '@angular/compiler';
import { DynamicService } from './dynamic-service';
import { DynamicComponentDirective } from './dynamic-component.directive';
export function createJitCompiler() {
  return new JitCompilerFactory([{ useDebug: false, useJit: true }]).createCompiler();
}
@NgModule({
  imports: [
  ],
  declarations: [DynamicComponentDirective],
  exports: [
    DynamicComponentDirective
  ],
  providers: [
    DynamicService,
    { provide: Compiler, useFactory: createJitCompiler }
  ],
  entryComponents: [
  ],
})
export class EasyDynamicModule { }
