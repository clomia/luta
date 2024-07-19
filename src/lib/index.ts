// place files you want to import through the `$lib` alias in this folder.
export class MyIterable<T> {
	private items: T[];

	constructor(...items: T[]) {
		this.items = items;
	}

	[Symbol.iterator](): Iterator<T> {
		let index = 0;
		const items = this.items;

		return {
			next(): IteratorResult<T> {
				if (index < items.length) {
					return { value: items[index++], done: false };
				} else {
					return { value: undefined, done: true };
				}
			}
		};
	}

	// for..of 루프를 위한 추가적인 방법을 제공
	public *values(): IterableIterator<T> {
		for (const item of this.items) {
			yield item;
		}
	}
}
