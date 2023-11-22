import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseModule } from '~database/database.module';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [() => ({ ...process.env })]
  }), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
