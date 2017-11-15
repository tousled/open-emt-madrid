export class Bus {

    private _numberLine: string;
    private _nameLine: string;
    private _distance: number;
    private _distancePreviousStop: number;

    constructor(
        numberLine: string,
        nameLine: string,
        distance: number,
        distancePreviousStop: number
    ) {
        this._numberLine = numberLine;
        this._nameLine = nameLine;
        this._distance = distance;
        this._distancePreviousStop = distancePreviousStop;
    }

    public get numberLine(): string {
        return this._numberLine;
    }

    public set numberLine(numberLine: string) {
        this._numberLine = numberLine;
    }

    public get nameLine(): string {
        return this._nameLine;
    }

    public set nameLine(nameLine: string) {
        this._nameLine = nameLine;
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
