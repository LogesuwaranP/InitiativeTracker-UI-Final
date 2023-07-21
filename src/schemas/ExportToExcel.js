import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Tooltip from '@mui/material/Tooltip';
export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data1: ws }, SheetNames: ["data1"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data1 = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data1, fileName + fileExtension);
  };

  return (
    // <div className='submit-idea-details' >
    <Tooltip title="Excel"> <i class="bi bi-file-earmark-spreadsheet" onClick={(e) => exportToCSV(apiData, fileName)} style={{fontSize:"24px",paddingRight:"10%"}}></i></Tooltip>
  );
};