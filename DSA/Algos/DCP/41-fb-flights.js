function itinerary(start, flights) {
    if(!flights.length) {
        return [start];
    }

    let destIndex;
    flights.forEach((flight, i) => {
        if(flight[0] === start) {
            if(destIndex !== undefined) {
                if(flight[destIndex][1] > flight[i][1]) {
                    destIndex = i;
                }
            } else {
                destIndex = i;
            }
        }
    });

    if(destIndex != undefined) {
        let iten = itinerary(flights[destIndex][1], [...flights.slice(0, destIndex), ...flights.slice(destIndex+1)]);
        if(iten) {
            return [start, ...iten];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

console.log(itinerary("YUL", [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']]));
console.log(itinerary("COM", [['SFO', 'COM'], ['COM', 'YYZ']]));
console.log(itinerary("A", [['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']]));