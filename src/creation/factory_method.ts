export interface Channel {

    send(user: string, message: string): Promise<void>;

}

export class EmailChannel implements Channel {

    public async send(user: string, message: string): Promise<void> {
        console.log(`Email Message: [${user}] -> ${message}`);
    }

}

export class ChatChannel implements Channel {

    public async send(user: string, message: string): Promise<void> {
        console.log(`Chat Message: [${user}] -> ${message}`);
    }

}

// ChannelFactory.createNotification('Chat')
// ChannelFactory.createNotification('Email')

export class ChannelFactory {

    public static createNotification(type: 'Chat' | 'Email'): Channel {
        switch (type) {
            case 'Chat':
                return new ChatChannel();
            case 'Email':
                return new EmailChannel();
        }
    }
}