import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from '../contact/components/contact/contact.component';

// tslint:disable-next-line: one-variable-per-declaration
const routes: Routes = [
    {
        path: '',
        component: ContactComponent,
    },
    ];

@NgModule({
        imports: [
            RouterModule.forChild(routes),
        ],
        exports: [
            RouterModule,
        ]
    })
    export class ContactRoutingModule {}
