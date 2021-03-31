import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { timeStampToString } from '../utilities';

function Table({title, columns, data}) {

    const [sortByColumn, setSortByColumn] = useState(null);

    const updateSortOrder = (index) => {
        const direction = (sortByColumn?.col === index && 'desc' === sortByColumn?.direction) ? 'asc' : 'desc';
        setSortByColumn({
            col: index,
            direction,
        })
    }

    const sorted = function() {
        
        if (!sortByColumn) return data;
        const sort = data.sort((a,b) => {
            let valueA = a[sortByColumn.col].text || a[sortByColumn.col];
            let valueB = b[sortByColumn.col].text || b[sortByColumn.col];
            if (!isNaN(valueA)) {
                valueA = valueA * 1000; //Fix sorting on floating numbers
            }
            if (!isNaN(valueB)) {
                valueB = valueB * 1000; //Fix sorting on floating numbers
            }

            // If items are both strings sort and account for numbers mixed with letters
            if ('string' === typeof valueA && 'string' === typeof valueB) {
                if ('desc' === sortByColumn.direction) {
                    return valueA.toLocaleLowerCase().localeCompare(valueB.toLocaleLowerCase(), undefined, {
                        numeric: true,
                        sensitivity: 'base'
                    });
                } 
                return valueB.toLocaleLowerCase().localeCompare(valueA.toLocaleLowerCase(), undefined, {
                    numeric: true,
                    sensitivity: 'base'
                });
            }
            
            //Sort epoch timestamps 
            if ('timestamp' === columns[sortByColumn.col].type) {
                if ('desc' === sortByColumn.direction) {
                    return valueA - valueB;
                }
                return valueB - valueA;
                
            }

            if ('desc' === sortByColumn.direction) {
                return a > b ? -1 : 1;
            }
            return a < b ? -1 : 1;
        })
        return sort;
    }

    const displayColumn = (column, index) => {
        let columnContent = column.text || column;
        // Check types
        if ('object' === typeof columns[index]) {
            switch (columns[index]?.type) {
                case 'timestamp':
                    columnContent = timeStampToString(column.text || column);
                    break;
            }
        }
        return {
            action: column?.action,
            text: columnContent,
        };
    }

    return(
        <div>
            {title && <h2 className="table__title">{title}</h2>}
            <div className="table">
                {columns.map((column, index) => {
                    return (
                        <div key={index} className="table__cell table__cell-header" onClick={() => updateSortOrder(index)}>
                            {'object' === typeof column ? column.name : column}
                        </div>
                    )
                })}
                {sorted().map(row => {
                    return row.map((column, index) => {
                        const content = displayColumn(column, index);
                        const html = content.action ? <a href="#" onClick={content.action}>{content.text}</a> : content.text;
                        return (
                            <div key={index} className="table__cell">
                                {html}
                            </div>
                        )
                    });
                })}
            </div>
        </div>
    )
}

Table.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
}

export default Table;