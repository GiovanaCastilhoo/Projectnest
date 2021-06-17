import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controller -> Requisiçao 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return process.env.TYPEORM_USERNAME;
  }
}
