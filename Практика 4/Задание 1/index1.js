function range(start, end, step) {
    var result = [];
    if (step === undefined) {
        step = 1;
    }

    if (step === 0) {
        return result;
    }

    if (start <= end) {
        for (var i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (var i = start; i >= end; i -= step) {
            result.push(i);
        }
    }

    return result;
}
console.log(range(1, 10));
console.log(range(10, 30, 5));