import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThreatController } from './threats/threat.controller';
import { ThreatService } from './threats/threat.service';
import { Threat } from './threats/threat.model';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Threat]),
  ],
  controllers: [AppController, ThreatController],
  providers: [AppService, ThreatService],
})
export class AppModule { }
