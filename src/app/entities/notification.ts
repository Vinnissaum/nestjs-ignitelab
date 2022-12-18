import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/Replace';
import { Content } from '@app/entities/notification-content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

type DateCanBeNull = Date | null | undefined;

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  get recipientId(): string {
    return this.props.recipientId;
  }

  set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  get content(): Content {
    return this.props.content;
  }

  set content(content: Content) {
    this.props.content = content;
  }

  get category(): string {
    return this.props.category;
  }

  set category(category: string) {
    this.props.category = category;
  }

  get readAt(): DateCanBeNull {
    return this.props.readAt;
  }

  read(): void {
    this.props.readAt = new Date();
  }

  unread(): void {
    this.props.readAt = null;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  cancel(): void {
    this.props.canceledAt = new Date();
  }

  get canceledAt(): DateCanBeNull {
    return this.props.canceledAt;
  }
}
