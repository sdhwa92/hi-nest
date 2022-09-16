import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  index() {
    return 'Welcome to my Movie API';
  }
}
