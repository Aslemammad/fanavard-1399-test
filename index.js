function calculate({ thingsCount, boxesCount, boxesSize, things }) {
	let largestCount = 1; // the default value is the least number of things we can put in the box
	let rightIndex = 0; // j
	things.forEach((_, index) => {
		const currentArray = things.slice(index, thingsCount);

		let currentBox = 0; // count from 0 like arrays
		let currentBoxSize = boxesSize;
		let isMarkedArray = [ ...currentArray ].fill(false); // if an index is true, so we won't touch it and we go next one
		let scopeLargestCount = 0; // for every index, we should count the largest amount of things we can put in the box, then if it's bigger than every index we counted, we return it at the end
		currentArray.forEach((thing, thingIndex) => {
			// check if we ran out of boxes or we put the current thing in the previous box
			if (isMarkedArray[thingIndex] || currentBox + 1 > boxesCount) return;
			isMarkedArray[thingIndex] = true;
			const nextThing = currentArray[thingIndex + 1] || 0; // keeping an eye on undefined and null values
			const isNextThingNumber = typeof currentArray[thingIndex + 1] === 'number'; // check if next item exists

			if (thing + nextThing > currentBoxSize) {
				++scopeLargestCount;
				++currentBox;
			} else if (thing + nextThing === boxesSize) {
				if (isNextThingNumber) {
					// if next item exists, we add two items to box, if it's the last one, so just one item we should add
					scopeLargestCount += 2;
				} else {
					++scopeLargestCount;
				}
				isMarkedArray[thingIndex + 1] = true;
				++currentBox;
			} else if (thing + nextThing < boxesSize) {
				if (isNextThingNumber) {
					scopeLargestCount += 2;
				} else {
					++scopeLargestCount;
				}

				isMarkedArray[thingIndex + 1] = true;
				// the reason we decrease the size here is that the size matters when thing + nextThing is smaller than the box size, so maybe we can add new thing to the rest amount of the box
				currentBoxSize -= thing;
			}
		});

		if (scopeLargestCount > largestCount) {
			largestCount = scopeLargestCount;
			rightIndex = index;
		}
	});

	return { largestCount, j: rightIndex };
}

console.log('LargestCount', calculate({ thingsCount: 5, boxesCount: 1, boxesSize: 4, things: [ 4, 2, 3, 4, 1 ] }));
console.log('LargestCount', calculate({ thingsCount: 5, boxesCount: 2, boxesSize: 6, things: [ 5, 2, 1, 4, 6 ] }));
