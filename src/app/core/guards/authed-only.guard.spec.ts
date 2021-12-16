import { TestBed } from '@angular/core/testing';

import { AuthedOnlyGuard } from './authed-only.guard';

describe('AuthedOnlyGuardGuard', () => {
  let guard: AuthedOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthedOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
