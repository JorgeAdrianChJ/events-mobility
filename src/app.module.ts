import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { EventsMobilityModule } from './events-mobility/events-mobility.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    EventsMobilityModule,
  ],
})
export class AppModule {}
