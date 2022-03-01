import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
    ],
})
export class MaterialModule {}
