import { Greeter } from 'greeter'

const defaultGreeter = new Greeter();
defaultGreeter.greet()
defaultGreeter.greet("Bob")

const specializedGreeter = new Greeter("Hiya", "peeps")
specializedGreeter.greet()
specializedGreeter.greet("y'all")
