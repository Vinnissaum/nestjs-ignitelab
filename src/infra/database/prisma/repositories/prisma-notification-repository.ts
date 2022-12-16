import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    id,
    category,
    content,
    createdAt,
    readAt,
    recipientId,
  }: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id,
        category,
        content: content.value,
        recipientId,
        createdAt,
        readAt,
      },
    });
  }
}
