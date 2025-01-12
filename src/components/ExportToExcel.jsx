import React from 'react';
import * as XLSX from 'xlsx';

const ExportToExcel = ({ transactions }) => {
  const exportToExcel = () => {
    // Crear una hoja de cálculo con las transacciones
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transacciones');

    // Generar el archivo Excel
    XLSX.writeFile(workbook, 'transacciones.xlsx');
  };

  return (
    <button onClick={exportToExcel} className="export-button">
      Exportar a Excel
    </button>
  );
};

export default ExportToExcel;
