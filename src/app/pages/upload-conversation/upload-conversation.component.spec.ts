import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadConversationComponent } from './upload-conversation.component';

describe('UploadConversationComponent', () => {
  let component: UploadConversationComponent;
  let fixture: ComponentFixture<UploadConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadConversationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
