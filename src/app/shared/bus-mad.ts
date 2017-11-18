export class BusMad {

    private _busId: string | number;
    private _busDistance: number;
    private _busTimeLeft: number;
    private _destination: string;
    private _latitude: string;
    private _longitude: string;
    private _lineId: string;

    constructor(
        busId: string | number,
        busDistance: number,
        busTimeLeft: number,
        destination: string,
        latitude: string,
        longitude: string,
        lineId: string
    ) {
        this._busId = busId;
        this._busDistance = busDistance;
        this._busTimeLeft = busTimeLeft;
        this._destination = destination;
        this._latitude = latitude;
        this._longitude = longitude;
        this._lineId = lineId;
    }

    public get busId(): string | number{
        return this._busId;
    }

    public get busDistance(): number {
        return this._busDistance;
    }

    public get busTimeLeft(): number {
        return this._busTimeLeft;
    }

    public get destination(): string {
        return this._destination;
    }

    public get latitude(): string {
        return this._latitude;
    }

    public get longitude(): string {
        return this._longitude;
    }

    public get lineId(): string {
        return this._lineId;
    }
}

