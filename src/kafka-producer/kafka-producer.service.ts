import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Producer } from 'kafkajs';
import { ClientKafka } from '@nestjs/microservices';
import { UserDto } from '../users/dtos/user.dto';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  private kafkaProducer: Producer;

  constructor(
    @Inject('KAFKA_USERS_SERVICE')
    private clientKafka: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaProducer = await this.clientKafka.connect();
  }

  async send(user: UserDto) {
    return await this.kafkaProducer.send({
      topic: 'users',
      messages: [
        {
          key: Math.random() + '',
          value: JSON.stringify(user),
        },
      ],
    });
  }
}
