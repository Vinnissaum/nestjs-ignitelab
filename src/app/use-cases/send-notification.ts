import { Notification } from './../entities/notification';
import { Content } from '../entities/notification-content';
import { NotificationRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      category,
      recipientId,
      content: new Content(content),
    });

    await this.notificationRepository.create(notification);

    return { notification };
  }
}
