import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/version')
  version(): string {
    return 'Hero service - v3';
  }
}
