import { TestBed } from '@angular/core/testing';

import { BotChoiceService } from './bot-choice.service';

describe('BotChoiceService', () => {
  let service: BotChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
