import { Routes } from "@angular/router";
import { ComponentDocumentationComponent } from "./components/component-documentation/component-documentation.component";
import { DirectiveDocumentationComponent } from "./directives/directive-documentation/directive-documentation.component";
import { PipeDocumentationComponent } from "./pipes/pipe-documentation/pipe-documentation.component";
import { ServiceDocumentationComponent } from "./services/service-documentation/service-documentation.component";

export const APP_ROUTES: Routes = [
    {path: '', loadChildren: () => import('./components/components.module').then((m)=>m.ComponentsModule)},
    {path: 'services', loadChildren: () => import('./services/services.module').then((m)=>m.ServicesModule)},
    {path: 'directives', loadChildren: () => import('./directives/directives.module').then((m)=>m.DirectivesModule)},
    {path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((m)=>m.PipesModule)},
]