import { Module } from '@nestjs/common';
import { KafkaConsumerController } from './kafka-consumer.controller';

@Module({
  controllers: [KafkaConsumerController]
})
export class KafkaConsumerModule {}
