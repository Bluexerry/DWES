const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" };

const { name, email } = user;
console.log(`${name} tiene ${email}`);

const str = `({ name, email, ...rest} = user ).toString()`