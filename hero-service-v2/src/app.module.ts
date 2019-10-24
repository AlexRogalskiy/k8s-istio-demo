import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './heroes/hero.controller';
import { HeroService } from './heroes/hero.service';
import { Hero } from './heroes/hero.model';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Hero]),
  ],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule { }
