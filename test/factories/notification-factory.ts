import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient',
    ...override,
  });
}
