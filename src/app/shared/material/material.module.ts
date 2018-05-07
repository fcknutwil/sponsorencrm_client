import {NgModule} from "@angular/core";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";
import {MatPaginatorIntlDeService} from "./mat-paginator-intl-de.service";

const modules = [
  CdkTableModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
];

@NgModule({
  imports: modules,
  providers: [{provide: MatPaginatorIntl, useClass: MatPaginatorIntlDeService}],
  exports: modules
})
export class MaterialModule {
}
