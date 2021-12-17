
export function headersToLinks(string) {
    const headerSplit = string.trim().split(/,/g)
    const links = []; //array
    headerSplit.forEach((line) => {
        links.push(line.slice(line.search(';') + 7, line.indexOf(' " ')))
    })
    return links;
}

export function headersToPages(string) {
    const headerSplit = string.trim().split(/,/g)
    const pages = []; //array
    headerSplit.forEach((line) => {
        pages.push(line.trim().slice(0, line.search(';')))
    })
    return pages;
}

const parseHeaders = [
    headersToLinks,
    headersToPages
]

//---- para os links
// console.log(string);
// const short = string.split(',')[1].split(';')[0].trim();
// console.log(short.substring(1, short.length - 1));
// return (short.substring(1, short.length - 1))

//---- para as pages
// console.log(string);
// const short = string.split(',')[1].split(';')[1].trim().substring(5);
// const final = short.search('"');
// // console.log(short.substring(0, final));
// return (short.substring(0, final))

export default parseHeaders;