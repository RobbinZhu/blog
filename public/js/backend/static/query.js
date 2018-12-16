const queryParam = {}
location.search.slice(1).split('&').map(item => item.split('=')).forEach((pair) => {
    if (pair.length == 2) {
        queryParam[pair[0]] = pair[1] || null
    }
})
export default queryParam