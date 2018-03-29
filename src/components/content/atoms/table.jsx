import * as React from 'react';

export function Table(props) {

  const headings = props.headings;
  const rows = props.rows;
  const type = props.type;
  let tableHead = null;

  let rowsJSX = rows.map(function(row, index) {

    const cells = row.cells;
    const rowType = row.rowType;
    const rowClass = determineRowType(rowType)

    function determineRowType(type) {
      let rowClass = null;
      switch (type) {
        case 'active':
            rowClass = 'active';
          break;
        case 'success':
            rowClass = 'success';
          break;
        case 'info':
            rowClass = 'info';
          break;
        case 'warning':
            rowClass = 'warning';
          break;
        case 'danger':
            rowClass = 'danger';
          break;

        default:
            rowClass = null;
          break;
      }
      return rowClass;
    }

    let cellsJSX = cells.map(function(cellValue, index) {
      if ( index == 0 ) {
        return <th key={index}>{cellValue}</th>
      } else {
        return <td key={index}>{cellValue}</td>
      }
    });

    return <tr className={rowClass} key={index}>{cellsJSX}</tr>
  });

  function determineTableType(type) {
    let tableClasses = null;
    switch (type) {
      case 'striped':
          tableClasses = 'table table-striped';
        break;
      case 'bordered':
          tableClasses = 'table table-bordered';
        break;
      case 'condensed':
          tableClasses = 'table table-condensed';
        break;
      case 'hover':
          tableClasses = 'table table-hover';
        break;
      case 'title':
          tableClasses = 'table table-title';
          break;
      default:
          tableClasses = 'table';
        break;
    }
    return tableClasses;
  }

  const tableClasses = determineTableType(type);

  if (headings) {

    let headingsJSX = headings.map(function(textValue) {
      return <th key={textValue}>{textValue}</th>
    });

    tableHead = <thead><tr>{headingsJSX}</tr></thead>
  }

  const baseTable = (
    <table className={tableClasses}>
      {tableHead}
      <tbody>
        {rowsJSX}
      </tbody>
    </table>
  );

  return type !== 'responsive' ? baseTable : (
    <div className="table-responsive">
      {baseTable}
    </div>
  );
}
