import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
