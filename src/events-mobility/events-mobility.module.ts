import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventMobility, EventMobilitySchema } from './event-schema';
import { EventsMobilityController } from './events-mobility.controller';
import { EventsMobilityService } from './events-mobility.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EventMobility.name,
        schema: EventMobilitySchema,
        collection: EventMobility.name,
      },
    ]),
  ],
  controllers: [EventsMobilityController],
  providers: [EventsMobilityService],
})
export class EventsMobilityModule {}
