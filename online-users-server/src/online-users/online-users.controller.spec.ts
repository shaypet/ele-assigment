import { Test, TestingModule } from '@nestjs/testing';
import { OnlineUsersController } from './online-users.controller';
import { OnlineUsersService } from './online-users.service';

describe('OnlineUsersController', () => {
  let controller: OnlineUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlineUsersController],
      providers: [OnlineUsersService],
    }).compile();

    controller = module.get<OnlineUsersController>(OnlineUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
