import { Injectable } from '@nestjs/common';
import { KafkaProducerService } from '../kafka-producer/kafka-producer.service';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private kafkaService: KafkaProducerService) {}

  async sendEvent(user: UserDto): Promise<any> {
    const result = await this.kafkaService.send(user);
    console.log(result);
    return result;
  }
}
