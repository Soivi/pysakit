export class Traindeparture{
    stationShortCode: string;
    stationUICCode: number;
    countryCode: string;
    type: string;
    trainStopping: boolean;
    commercialStop: boolean;
    commercialTrack: string;
    cancelled: boolean;
    scheduledTime: Date;
    actualTime: Date;
    differenceInMinutes: number;
    causes: string [];    
}