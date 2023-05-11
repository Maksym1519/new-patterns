/*class User {
    name: string
    room: null
    constructor(name: string) {
        this.name = name
        this.room = null
    }
    send(message: string,to: Object) {
     this.room.send(message,this,to)
    }
    receive(message: string, from: any) {
    console.log(`${from.name} => ${this.name}: ${message}`)
    }
    }
    class ChatRoom {
        users: any
        constructor() {
            this.users = {}
            
        }
        register(user: any) {
        this.users[user.name] = user
        user.room = this
        }
        send(message: string, from: any, to: any) {
        if(to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if(this.users.key != from) {
                    this.users[key].receive(message, from)
                }
            })
        }
        }
    }
    const maksym = new User("Maksym")
    const marina = new User("Marina")
    const room = new ChatRoom()
    room.register(maksym)
    room.register(marina)
    console.log(maksym.send("hello",marina))
    */
class Admin {
    constructor(chat) {
        this.chat = chat;
    }
    sendMessage(message) {
        this.chat.sendMessage(message, this);
    }
    getMessage(message) {
        console.log(`Admin got message from chat:  ${message}`);
    }
}
class User {
    constructor(chat) {
        this.chat = chat;
    }
    sendMessage(message) {
        this.chat.sendMessage(message, this);
    }
    getMessage(message) {
        console.log(`User got message from chat:  ${message}`);
    }
}
class TextChat {
    constructor() {
        this.users = [];
    }
    setAdmin(admin) {
        this.admin = admin;
    }
    setUser(user) {
        this.users.push(user);
    }
    sendMessage(message, user) {
        for (user of this.users) {
            user.getMessage(message);
        }
        this.admin.getMessage(message);
    }
}
const chat = new TextChat();
const admin = new Admin(chat);
const user1 = new User(chat);
const user2 = new User(chat);
chat.setAdmin(admin);
chat.setUser(user1);
chat.setUser(user2);
//console.log(admin.sendMessage("Admin joined chat"))
console.log(user1.sendMessage("Hello, Im user"));
export {};
//# sourceMappingURL=mediator.js.map