import { Traindeparture } from './traindeparture'

export class Train {
    trainNumber: number;
    departureDate: string;
    operatorUICCode: number;
    operatorShortCode: string;
    trainType: string;
    trainCategory: string;
    commuterLineID: string;
    runningCurrently: boolean;
    cancelled: boolean;
    version: number;
    timeTableRows: Traindeparture[];
}