import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';
import { TestBed } from '@angular/core/testing';
import 'jest';

describe('CalculatorService', () => {
    beforeEach(() => {
        console.log('Calling beforeEach');

        TestBed.configureTestingModule({
            providers: [CalculatorService, LoggerService]
        });
    });
    // beforeEach(() => {

    //     loggerSpy = jest.spyOn(LoggerService, 'log');

    //     TestBed.configureTestingModule({
    //         providers: [
    //             CalculatorService,
    //             { provide: LoggerService, useValue: loggerSpy }
    //         ]
    //     });

    //     calculator = TestBed.get(CalculatorService);
    // });

    it('should add two numbers', () => {
        console.log('add test');
        const calculator = TestBed.inject<CalculatorService>(CalculatorService);
        const result = calculator.add(2, 2);
        expect(result).toBe(4);

        //     expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    // it('should subtract two numbers', () => {
    //     console.log('subtract test');

    //     const result = calculator.subtract(2, 2);

    //     expect(result).toBe(0, 'unexpected subtraction result');

    //     expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    // });
});
