import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    constructor(private _logger: LoggerService) {}

    add(n1: number, n2: number) {
        this._logger.log('Addition operation called');
        return n1 + n2;
    }

    subtract(n1: number, n2: number) {
        this._logger.log('Subtraction operation called');
        return n1 - n2;
    }
}
