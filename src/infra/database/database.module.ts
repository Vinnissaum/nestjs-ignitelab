import { Module } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { PrismaNotificationRepository } from '@infra/database/prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
