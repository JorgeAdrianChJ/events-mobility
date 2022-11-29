import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type EventMobilityDocument = HydratedDocument<EventMobility>;

@Schema({ timestamps: true })
export class EventMobility {
  @Prop({ type: SchemaTypes.String })
  refId: string;
  @Prop({ type: SchemaTypes.String })
  id: string;
  @Prop({ type: SchemaTypes.String })
  operator: string;
  @Prop({ type: SchemaTypes.String })
  sentTimestamp: string;
  @Prop({ type: SchemaTypes.String })
  timestamp: string;
  @Prop({ type: SchemaTypes.Number })
  resultCode: number;
  @Prop({ type: SchemaTypes.String })
  operatorResultCode: string;
  @Prop({ type: SchemaTypes.Number })
  segments: number;
  @Prop({ type: SchemaTypes.Mixed })
  gateCustomParameters: any;
  @Prop({ type: SchemaTypes.Mixed })
  customParameters: any;
}
export const EventMobilitySchema = SchemaFactory.createForClass(EventMobility);
