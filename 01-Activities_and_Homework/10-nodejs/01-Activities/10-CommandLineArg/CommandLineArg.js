function compare(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(compare(process.argv[2], process.argv[3]));
