export class Bus {

    private _id: number;
    private _numberLine: string;
    private _nameLine: string;
    private _distance: number;
    private _timeToStop: string;
    private _latitude: string;
    private _longitude: string;
    private _distancePreviousStop: number;

    constructor(
        id: number,
        numberLine: string,
        nameLine: string,
        distance: number,
        timeToStop: string,
        latitude: string,
        longitude: string,
        distancePreviousStop: number = -1
    ) {
        this._id = id;
        this._numberLine = numberLine;
        this._nameLine = nameLine;
        this._distance = distance;
        this._timeToStop = timeToStop;
        this._latitude = latitude;
        this._longitude = longitude;
        this._distancePreviousStop = distancePreviousStop;
    }

    public get id(): number {
        return this._id;
    }

    public get numberLine(): string {
        return this._numberLine;
    }

    public get nameLine(): string {
        return this._nameLine;
    }

    public get distance(): number {
        return this._distance;
    }

    public get distancePreviousStop(): number {
        return this._distancePreviousStop;
    }

    public get timeToStop(): string {
        return this._timeToStop;
    }

    public get latitude(): string {
        return this._latitude;
    }

    public get longitude(): string {
        return this._longitude;
    }
}
