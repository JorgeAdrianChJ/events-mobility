import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventMobility, EventMobilityDocument } from './event-schema';

@Injectable()
export class EventsMobilityService {
    constructor(@InjectModel(EventMobility.name) private catModel: Model<EventMobilityDocument>) {}

    async create(event: EventMobility): Promise<EventMobility> {
      const createdEvent = new this.catModel(event);
      return createdEvent.save();
    }
}
