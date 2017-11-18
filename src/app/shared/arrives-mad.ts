import { BusMad } from './bus-mad';

export class ArriveMad {
    private _arrives: Array<BusMad>;

    constructor(arrives: Array<BusMad>) {
        if (arrives) {
            this._arrives = arrives;
        } else {
            this._arrives = new Array<BusMad>();
        }
    }

    public get arrives(): Array<BusMad> {
        return this._arrives;
    }
}
