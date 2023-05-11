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

//import internal from "stream"

   //------------------------------------------------------------------------------
   interface User {
    sendMessage(message: string): void 
    getMessage(message: string): void
   }
   interface Chat {
    sendMessage(message: string, user: User): void 
   }
   class Admin implements User {
    chat: Chat
    constructor(chat: Chat) {
        this.chat = chat
    }
    sendMessage(message: string): void {
        this.chat.sendMessage(message,this) 
    }
    getMessage(message: string): void {
         console.log(`Admin got message from chat:  ${message}`)
    }
   } 
   class User implements User {
     chat: Chat
    constructor(chat: Chat) {
        this.chat = chat
    }
    sendMessage(message: string): void {
        this.chat.sendMessage(message,this) 
    }
    getMessage(message: string): void {
         console.log(`User got message from chat:  ${message}`)
    }
   } 
   class TextChat implements Chat {
   private admin: any
   private users: Array<any> = []
    setAdmin(admin: User) {
     this.admin = admin
    }
    setUser(user: User) {
       this.users.push(user)
    }
    sendMessage(message: string, user: User): void {
        for(user of this.users) {
            user.getMessage(message)
        }this.admin.getMessage(message)
    }
   }
   const chat = new TextChat()
   const admin = new Admin(chat)
   const user1 = new User(chat)
   const user2 = new User(chat)

   chat.setAdmin(admin)
   chat.setUser(user1)
   chat.setUser(user2)
  //console.log(admin.sendMessage("Admin joined chat"))
  console.log(user1.sendMessage("Hello, Im user"))

    