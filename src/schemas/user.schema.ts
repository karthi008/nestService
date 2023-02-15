import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop({ required: true })
  make: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  regNo: string;
  unique: true;

  @Prop({ required: true })
  registrationDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
