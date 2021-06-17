import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '@services/user.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database';
import * as entities from './entities';


@Module({
  imports: [
  ConfigModule.forRoot(),
  DatabaseModule(),
  
  TypeOrmModule.forFeature(Object.values(entities)),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
