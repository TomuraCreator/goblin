export class Field {
    constructor(fieldContainer) {
        this.fieldContainer = fieldContainer;
    }

    get element() {
        return this.fieldContainer;
    }

    appendElementByIndex(index, element) {
        const cells = this.fieldContainer.children;
        cells[index].append(element);
    }
}