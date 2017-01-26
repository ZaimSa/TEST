import { Component, Output, EventEmitter } from '@angular/core';

import { TestService } from '../service/test.service'

@Component({
    selector: 'child',
    template: `
        <form>
            <input type="text" [(ngModel)]="value" [ngModelOptions]="{standalone: true}">
        </form>
        <button (click)="emitValue()">OK</button>
    `
})
export class ChildComponent{
    public value : string;
    @Output() sendValue = new EventEmitter<string>();
    constructor(private testService: TestService) {}

    emitValue(): void {
        this.testService.getTestValue(this.value).subscribe(
            (res: string) => this.sendValue.emit(res)
        );
    }
}