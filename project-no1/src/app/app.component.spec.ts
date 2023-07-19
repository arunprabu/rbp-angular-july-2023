// Test Pattern: Given, When, Then
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component'; // sample taken for testing

// TEST SUITE == group of related test specs
describe('AppComponent', () => {
  // beforeEach, beforeAll are called as setup 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // afterEach, afterAll are called as tear down 

  // test case / test spec / test
  it('should create the app', () => {
    // When
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // app.comp.ts file is taken for testing
    // expect is must
    expect(app).toBeTruthy();
  });

  it(`should have as title 'project-no1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // app.comp.ts 
    expect(app.title).toEqual('project-no1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); 
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; // app.comp.html
    expect(compiled.querySelector('h1')?.textContent).toContain('Success!');
  });

  it('should have h2 with text Wow', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; // app.comp.html
    expect(compiled.querySelector('h2')?.textContent).toBe('Wow');
  })

});

// describe, it, expect are from JasmineJS 
// toBeTruthy, toEqual, toContain are matchers 
