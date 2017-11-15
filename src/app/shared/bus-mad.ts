export class BusMad {

    private _line: string;
    private _name: string;
    private _distance: number;
    private _distancePreviousStop: number;

    constructor(
        line: string,
        name: string,
        distance: number,
        distancePreviousStop: number
    ) {
        this._line = line;
        this._name = name;
        this._distance = distance;
        this._distancePreviousStop = distancePreviousStop;
    }

    public get line(): string {
        return this._line;
    }

    public set line(line: string) {
        this._line = line;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get distance(): number {
        return this._distance;
    }

    public set distance(distance: number) {
        this._distance = distance;
    }

    public get distancePreviousStop(): number {
        return this._distancePreviousStop;
    }

    public set distancePreviousStop(distancePreviousStop: number) {
        this._distancePreviousStop = distancePreviousStop;
    }
}

