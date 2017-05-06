# ng-easy-dynamic

## Installation

To install this library, run:

```bash
$ npm install ng-easy-dynamic --save
```

## Consuming your library

Once you have installed from npm , you can import this library in any Angular application for example:


in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { EasyDynamicModule } from 'ng-easy-dynamic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    EasyDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its  directives `dynamicComponent` with `html`,`context`,`imports` attributes in your Angular application:

```xml
<!-- You can now use this library  in app.component.html -->
<ng-container dynamicComponent [html]="your_custome_template" [context]="your_context" [imports]="your_extra_module_used_by_this_module"></ng-container>
```
## License

MIT © [guzuomuse](mailto:czh51success@163.com)
