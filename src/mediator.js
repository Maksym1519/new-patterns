"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Admin = /** @class */ (function () {
    function Admin(chat) {
        this.chat = chat;
    }
    Admin.prototype.sendMessage = function (message) {
        this.chat.sendMessage(message, this);
    };
    Admin.prototype.getMessage = function (message) {
        console.log("Admin got message from chat:  ".concat(message));
    };
    return Admin;
}());
var User = /** @class */ (function () {
    function User(chat) {
        this.chat = chat;
    }
    User.prototype.sendMessage = function (message) {
        this.chat.sendMessage(message, this);
    };
    User.prototype.getMessage = function (message) {
        console.log("User got message from chat:  ".concat(message));
    };
    return User;
}());
var TextChat = /** @class */ (function () {
    function TextChat() {
        this.users = [];
    }
    TextChat.prototype.setAdmin = function (admin) {
        this.admin = admin;
    };
    TextChat.prototype.setUser = function (user) {
        this.users.push(user);
    };
    TextChat.prototype.sendMessage = function (message, user) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            user = _a[_i];
            user.getMessage(message);
        }
        this.admin.getMessage(message);
    };
    return TextChat;
}());
var chat = new TextChat();
var admin = new Admin(chat);
var user1 = new User(chat);
var user2 = new User(chat);
chat.setAdmin(admin);
chat.setUser(user1);
chat.setUser(user2);
//console.log(admin.sendMessage("Admin joined chat"))
console.log(user1.sendMessage("Hello, Im user"));
