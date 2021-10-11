import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { KafkaConsumerModule } from './kafka-consumer/kafka-consumer.module';
import { KafkaProducerModule } from './kafka-producer/kafka-producer.module';

@Module({
  imports: [UsersModule, KafkaConsumerModule, KafkaProducerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
