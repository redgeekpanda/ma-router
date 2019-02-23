import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService implements Resolve<string> {

  private mockedData = 'Dynamic data from service';

  getDataFromSomewhere(): string {
    return this.mockedData;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> | Promise<string> | string {
    return this.getDataFromSomewhere();
  }
}
