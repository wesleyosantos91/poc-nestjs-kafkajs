import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class KafkaConsumerController {
  @MessagePattern('users')
  consumer(@Payload() user, @Ctx() context: KafkaContext) {
    console.log(`Consumer ==> ${JSON.stringify(user)}`);
    console.log(`Context ==> ${JSON.stringify(context)}`);
  }
}
