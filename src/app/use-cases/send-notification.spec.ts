import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { SendNotification } from '@app/use-cases/send-notification';

const inMemoryRepository = new InMemoryNotificationRepository();

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(inMemoryRepository);

    const { notification } = await sendNotification.execute({
      category: 'test',
      recipientId: '123',
      content: 'notification',
    });

    expect(inMemoryRepository.notifications).toHaveLength(1);
    expect(inMemoryRepository.notifications[0]).toEqual(notification);
  });
});
