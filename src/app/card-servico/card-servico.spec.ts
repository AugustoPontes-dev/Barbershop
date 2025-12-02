import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServico } from './card-servico';

describe('CardServico', () => {
  let component: CardServico;
  let fixture: ComponentFixture<CardServico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardServico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
