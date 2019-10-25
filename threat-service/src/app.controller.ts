import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/version')
  version() {
    return {
      name: 'ThreatService',
      version: 'v1',
    };
  }
}
