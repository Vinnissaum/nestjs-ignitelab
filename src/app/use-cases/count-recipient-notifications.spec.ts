import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotifications } from '@app/use-cases/count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
