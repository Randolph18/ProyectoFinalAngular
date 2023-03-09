import { TestBed } from '@angular/core/testing';

import { Auth0Guard } from './auth0.guard';

describe('Auth0Guard', () => {
  let guard: Auth0Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Auth0Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
