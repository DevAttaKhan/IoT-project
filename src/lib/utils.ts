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