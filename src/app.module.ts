import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { SettingsDto } from '~constants/settings.dto';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: SettingsDto,
    validationOptions: {
      allowUnknown: false,
      abortEarly: true,
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
