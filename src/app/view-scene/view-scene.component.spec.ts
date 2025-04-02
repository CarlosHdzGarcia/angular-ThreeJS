import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSceneComponent } from './view-scene.component';

describe('ViewSceneComponent', () => {
  let component: ViewSceneComponent;
  let fixture: ComponentFixture<ViewSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
