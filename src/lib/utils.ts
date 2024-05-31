// import { mkConfig, generateCsv, download } from 'export-to-csv'

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


// const csvConfig = mkConfig({
//     fieldSeparator: ',',
//     filename: 'sample', // export file name (without .csv)
//     decimalSeparator: '.',
//     useKeysAsHeaders: true,
//   })

// const exportExcel = (rows: Row<_>[]) => {
//     const rowData = rows.map((row) => row.original)
//     const csv = generateCsv(csvConfig)(rowData)
//     download(csvConfig)(csv)
//   }