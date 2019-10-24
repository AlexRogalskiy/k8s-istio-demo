import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VillainController } from './villains/villain.controller';
import { VillainService } from './villains/villain.service';
import { Villain } from './villains/villain.model';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Villain]),
  ],
  controllers: [AppController, VillainController],
  providers: [AppService, VillainService],
})
export class AppModule { }
