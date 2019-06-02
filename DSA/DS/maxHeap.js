class maxHeap {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.heap = new Array(capacity);
    }

    parent(i) {
        return Math.floor((i-1)/2);
    }

    left(i) {
        return 2*i + 1;
    }

    right(i) {
        return 2*i + 2;
    }

    add(val) {
        if(this.size === this.capacity)
            throw "Capacity reached"
        
        this.heap[this.size] = val;
        this.size++;
        
        let k = this.size - 1;
        while(k >= 0 && this.heap[this.parent(k)] < this.heap[k]) {
            this.swap(k, this.parent(k));
            k = this.parent(k);
        }
    }

    extractMax() {
        if(!this.size) {
            return null;
        }

        if(this.size === 1) {
            this.size--;
            return this.heap[0];
        }

        this.size--;
        let max = this.heap[0];
        let last = this.heap[this.size];
        this.heap[0] = last;
        this.heapify(0);

        return max;
    }

    peekMax() {
        if(this.size)
            return this.heap[0];
        else
            return null;
    }

    heapify(parentIndex) {
        let leftIndex = this.left(parentIndex);
        let rightIndex = this.right(parentIndex);

        let maxValIndex = parentIndex;

        if(leftIndex < this.size && this.heap[maxValIndex] < this.heap[leftIndex]) {
            maxValIndex = leftIndex
        }

        if(rightIndex < this.size && this.heap[maxValIndex] < this.heap[rightIndex]) {
            maxValIndex = rightIndex
        }

        if(maxValIndex != parentIndex) {
            this.swap(i, maxValIndex);
            this.heapify(maxValIndex);
        }
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}