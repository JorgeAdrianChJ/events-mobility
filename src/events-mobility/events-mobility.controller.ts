import { Body, Controller, Post } from '@nestjs/common';
import { EventMobility } from './event-schema';
import { EventsMobilityService } from './events-mobility.service';

@Controller('events-mobility')
export class EventsMobilityController {
    constructor(private eventsMobilityService:EventsMobilityService){}
    @Post()
    create(@Body() event: EventMobility): Promise<EventMobility> {
      return this.eventsMobilityService.create(event);
    }
}
