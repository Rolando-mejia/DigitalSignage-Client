import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExportExcel = ({ items }) => {
    
  if (items === undefined || items === null || items.length === 0) {
    return null; // O mostrar un mensaje de error o un componente alternativo
  }



  const headers = [];
  headers.push(...Object.keys(items[0]));
  for (const key in items[0]) {
    if (Array.isArray(items[0][key])) {
      const subHeaders = Object.keys(items[0][key][0]).map(
        (subKey) => `${key}.${subKey}`
      );
      headers.push(...subHeaders);
    }
  }

  const convertToXLSX = (data) => {
    const sheetName = "Propiedades ";
    const sheetData = items.map((item) => {
      const rowData = {};
      headers.forEach((header) => {
        if (header === "idAirline") {
          rowData[header] = item[header]?.nombreAirline || "";
        }else if (header.includes(".")) {
          const [parentKey, childKey] = header.split(".");
          rowData[header] = item[parentKey]?.[0][childKey] || "";
        } else {
          rowData[header] = item[header] || "";
        }
      });
      return rowData;
    });

    const sheet = XLSX.utils.json_to_sheet(sheetData, { header: headers });
    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, sheet, sheetName);
    const excelBuffer = XLSX.write(book, { bookType: "xlsx", type: "array" });
    return excelBuffer;
  };

  const exportToExcel = () => {
    const excelBuffer = convertToXLSX(items);
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "Propiedades.xlsx");
  };

  return (
    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow" onClick={exportToExcel} style={{ marginLeft: "4px" }}>
        Descargar Excel
    </button>
  );
};

export default ExportExcel;