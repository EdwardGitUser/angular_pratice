import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GuardService } from './guard.service';

describe('GuardService', () => {
  let guardService: GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardService]
    });
    guardService = TestBed.inject(GuardService);
  });

  it('функція охоронця повинна повертати false', () => {
    const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    const state: RouterStateSnapshot = {} as RouterStateSnapshot;
    
    const canActivateResult = guardService.canActivate(route, state);

    expect(canActivateResult).toBe(false);
  });
});
