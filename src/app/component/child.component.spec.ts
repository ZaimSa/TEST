import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { Observable } from 'rxjs';

import { ChildComponent } from './child.component';
import { TestService } from '../service/test.service';

class TestServiceMock{
    getTestValue = jasmine.createSpy('getTestValue').and.callFake(
        (value : string) => {
            return new Observable((observer: any) => {
            setTimeout(()=> {
                observer.next(value)
            }, 10);
            setTimeout(()=> {
                observer.complete();
            }, 20);
        });
        }
    );
}

describe('COMPONENT ChildComponent', () => {
    let comp    : ChildComponent;
    let fixture : ComponentFixture<ChildComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ],
            declarations : [ ChildComponent ],
            providers : [ {provide: TestService, useClass:TestServiceMock} ]
        });

        fixture = TestBed.createComponent(ChildComponent);
        comp = fixture.componentInstance;
    });

    it('TEST emitValue', () => {
        comp.value = 'Hello';
        fixture.detectChanges();
        comp.emitValue();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            spyOn(comp.sendValue, 'emit');
            expect(comp.sendValue.emit).toHaveBeenCalledWith('ERROR');
        });
    });
});