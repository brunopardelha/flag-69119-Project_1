export function headersToPages(string) {
    const headerSplit = string.trim().split(/,/g)
    const pages = []; //array
    headerSplit.forEach((line) => {
        pages.push(line.slice(line.search(';') + 7, line.indexOf(' " ')))
    })
    return pages;
}

export function headersToLinks(string) {
    const headerSplit = string.trim().split(/,/g)
    const links = []; //array
    headerSplit.forEach((line) => {
        links.push(line.trim().slice(0, line.search(';')))
    })
    return (links.map(element => element.slice(1,element.indexOf('>'))));
}

const parseHeaders = [
    headersToLinks,
    headersToPages
]

export default parseHeaders;