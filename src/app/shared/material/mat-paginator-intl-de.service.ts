import {MatPaginatorIntl} from '@angular/material';

export class MatPaginatorIntlDeService extends MatPaginatorIntl {
  itemsPerPageLabel = 'Einträge pro Seite';
  firstPageLabel = 'erste Seite';
  previousPageLabel = 'vorherige Seite';
  nextPageLabel = 'nächste Seite';
  lastPageLabel = 'letzte Seite';

  getRangeLabel = function (page, pageSize, length) {
    if (length === 0) {
      return '';
    }
    return `${page * pageSize + 1} bis ${Math.min((page + 1) * pageSize, length)}` + (length > pageSize ? ` von ${length}` : '');
  };
}
