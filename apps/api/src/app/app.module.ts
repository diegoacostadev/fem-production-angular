import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WidgetsModule } from 'apps/api/src/widgets/widgets.module';

@Module({
  imports: [
    WidgetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
