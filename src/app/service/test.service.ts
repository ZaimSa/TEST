import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestService{
    getTestValue(value : string): Observable<string> {
        return new Observable((observer: any) => {
            setTimeout(()=> {
                observer.next(value)
            }, 10);
            setTimeout(()=> {
                observer.complete();
            }, 20);
        });
    }
}