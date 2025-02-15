import { mkConfig, generateCsv, download } from 'export-to-csv'

import { Column } from "@tanstack/react-table";

export function getFilterValues<T>(data: T[], selector: keyof T) {
    const uniqueArray = [...new Set(data.map(item => item[selector]))]
    const noEmptyValues = uniqueArray.filter(element => element !== "").sort()
    const optionsArray = noEmptyValues.map(listItem => {
        return {
            value: listItem,
            label: listItem,
        };
    })
    return optionsArray
}



export const SearchByName = <T,>(value: string, column: Column<T, unknown> | undefined) => {
    column?.setFilterValue(value ? value : undefined);
};


const csvConfig = mkConfig({
    fieldSeparator: ',',
    filename: 'sample', // export file name (without .csv)
    decimalSeparator: '.',
    useKeysAsHeaders: true,
})

export const exportExcel = <T extends { original: any },>(rows: T[] | undefined) => {
    const rowData = rows?.map((row) => row?.original)
    const csv = rowData && generateCsv(csvConfig)(rowData)
    csv && download(csvConfig)(csv)
}