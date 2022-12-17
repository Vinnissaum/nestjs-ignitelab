import { NotificationRepository } from '@app/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from '@app/use-cases/errors/notification-not-found';

interface UnReadNotificationRequest {
  notificationId: string;
}

type UnReadNotificationResponse = void;

@Injectable()
export class UnReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: UnReadNotificationRequest,
  ): Promise<UnReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unread();
    this.notificationRepository.save(notification);
  }
}
