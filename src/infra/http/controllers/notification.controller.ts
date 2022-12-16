import { SendNotification } from '@app/use-cases/send-notification';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '@infra/http/dtos/create-notification-body';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}
