import { TestBed } from '@angular/core/testing';

import { CocktailInterceptorInterceptor } from './cocktail-interceptor.interceptor';

describe('CocktailInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CocktailInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CocktailInterceptorInterceptor = TestBed.inject(CocktailInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
