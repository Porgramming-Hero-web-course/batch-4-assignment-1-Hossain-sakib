
# The Significance of Union and Intersection Types in TypeScript

TypeScript provides powerful type features that increase code flexibility and safety. Union Types and Intersection Types are essential tools for managing multiple types and combining various properties.

## Union Types (`|`)

Union types used to hold multiple types. It's defined using the pipe (`|`) symbol.

**Example:**

let id: string | number;
id = "abc123";  // valid
id = 101;       // valid



## Intersection Types (`&`)

Intersection Type merge multiple types into one. It's defined using the ampersand (&) symbol.

**Example:**
type Person = { name: string };
type Contact = { email: string };
type PersonContact = Person & Contact;

const person: PersonContact = { name: "sakib", email: "hossain.sakib.x@.com" };
