import { Notification } from '@app/entities/notification';

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
}
