function sortByUsername(array) {
    array.sort((a,b) => a.username > b.username ? 1 : ((a.username < b.username) ? -1 : 0));
    return array;
}

function sortByPieces(array) {
    array.sort((a,b) => a.numberOfPieces > b.numberOfPieces ? 1 : ((a.numberOfPieces < b.numberOfPieces) ? -1 : 0));
    return array;
}

function sortByTitle(array) {
    array.sort((a,b) => a.title > b.title ? 1 : ((a.title < b.title) ? -1 : 0));
    return array;
}

module.exports = {
    sortByPieces,
    sortByTitle,
    sortByUsername
}