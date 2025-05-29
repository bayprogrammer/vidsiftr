import { Greeter } from 'greeter'
import page from 'page'

const defaultGreeter = new Greeter();
defaultGreeter.greet()
defaultGreeter.greet("Bob")

const specializedGreeter = new Greeter("Hiya", "peeps")
specializedGreeter.greet()
specializedGreeter.greet("y'all")
