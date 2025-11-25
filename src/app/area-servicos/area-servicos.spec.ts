import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaServicos } from './area-servicos';

describe('AreaServicos', () => {
  let component: AreaServicos;
  let fixture: ComponentFixture<AreaServicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaServicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaServicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
