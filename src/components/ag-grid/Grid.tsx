import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import CustomLoadingCellRenderer from '../utils/CustomLoadingCellRenderer';

function Grid(props: any) {
  const [columnDefs, setColumnDefs] = useState(props.columnDefs);
  const [rowData, setRowData] = useState(props.rowData);

  useMemo(() => {
    setColumnDefs(props.columnDefs);
  }, [props.columnDefs]);

  useMemo(() => {
    setRowData(props.rowData);
  }, [props.rowData]);

  const loadingCellRenderer = useMemo(() => {
    return CustomLoadingCellRenderer;
  }, []);
  const loadingCellRendererParams = useMemo(() => {
    return {
      loadingMessage: 'One moment please...',
    };
  }, []);

  return (
    <div className="ag-theme-alpine-dark" style={{height: "40vh", width: "100%"}}>
        <AgGridReact columnDefs={columnDefs} 
                    rowData={rowData}
                    loadingCellRenderer={loadingCellRenderer}
                    loadingCellRendererParams={loadingCellRendererParams}
                    animateRows={true}
                    onRowClicked={props.onRowClicked}
        />
    </div>  
  ); 
}

export default Grid;
