import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { KafkaProducerModule } from '../kafka-producer/kafka-producer.module';

@Module({
  imports: [KafkaProducerModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
