import { Injectable } from '@angular/core';

@Injectable()
export class CsvService {
  // eslint-disable-next-line class-methods-use-this
  private convertToCsv(file: string, rows: any[]): string | undefined {
    if (!rows || !rows.length) {
      return;
    }
    const space = ',';
    const keys = Object.keys(rows[0]);
    const csvData = `${keys.join(space)
    }\n${
      rows
        .map((row) => keys
          .map((key) => {
            let field = row[key] === null || row[key] === undefined ? '' : row[key];
            field = field instanceof Date
              ? field.toLocaleString()
              : field.toString().replace(/"/g, '""');
            if (field.search(/("|,|\n)/g) >= 0) {
              field = `${field}`;
            }
            return field;
          })
          .join(space))
        .join('\n')}`;

    // eslint-disable-next-line consistent-return
    return csvData;
  }

  public downloadCsv(file: string, rows: any[]) {
    const csv = this.convertToCsv(file, rows);
    if (!csv) return;
    const output = new Blob([csv], {
      type: 'text/csv;charset=utf-8;',
    });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(output);
      link.setAttribute('href', url);
      link.setAttribute('download', file);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
