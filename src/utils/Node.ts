export class Node {
    public value: number;
    public isVerified: boolean = false;
    public neighbors: Array<Node> = new Array<Node>();

    constructor(value: number) {
        this.value = value;
    }

    addNeighborhood(neighborhood: Node): void {
        if (!this.neighbors.find((el) => el == neighborhood)) {
            this.neighbors.push(neighborhood);
        }
    }

    public toString = (): string => {
        return `Value: ${this.value}\n` + `IsVerified: ${this.isVerified}\n`;
    };
}