class Greeter {
  constructor(greeting = "Hello", subject = "world") {
    this.greeting = greeting
    this.subject = subject
  }

  greet(subject = null) {
    subject ??= this.subject

    console.log(`${this.greeting}, ${subject}.`)
  }
}

export { Greeter }
