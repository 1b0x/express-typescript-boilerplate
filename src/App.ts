class App {
    private message: string = "Hello World";

    constructor() {}

    sayHello(): void {
        console.log(this.message);
    }
}

const app = new App();
app.sayHello();
