import { Content } from '@app/entities/notification-content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('xzx')).toThrowError();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('x'.repeat(241))).toThrowError();
  });
});
