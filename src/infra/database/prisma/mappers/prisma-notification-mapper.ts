import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/notification-content';

export class PrismaNotificationMapper {
  static toPrisma({
    id,
    category,
    content,
    createdAt,
    readAt,
    recipientId,
  }: Notification) {
    return {
      id,
      category,
      content: content.value,
      recipientId,
      createdAt,
      readAt,
    };
  }

  static toEntity({
    id,
    category,
    content,
    createdAt,
    readAt,
    recipientId,
  }: RawNotification): Notification {
    return new Notification(
      {
        category,
        content: new Content(content),
        recipientId,
        createdAt,
        readAt,
      },
      id,
    );
  }
}
