import { Module } from '@nestjs/common';
import { KeysService } from './services/keys.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Key, KeySchema } from './entities/keys.entity';

@Module({
  providers: [KeysService],
  exports: [KeysService],
  imports: [MongooseModule.forFeature([{ name: Key.name, schema: KeySchema }])],
})
export class KeysModule {}
