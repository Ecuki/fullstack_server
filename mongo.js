// const mongoose = require("mongoose");

// if (process.argv.length < 3) {
//   console.log("(3) give password as argument");
//   process.exit(1);
// }

// const password = process.argv[2];
// const name = process.argv[3];
// const number = process.argv[4];

// const url = `mongodb+srv://ecuki:${password}@cluster0-y1tva.mongodb.net/fullstack?retryWrites=true&w=majority`;

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// const personSchema = new mongoose.Schema({
//   name: { type: String, minlength: 2, required: true },
//   number: { type: String, minlength: 2, required: true },
// });

// const Person = mongoose.model("Person", personSchema);

// if (process.argv.length < 4) {
//   Person.find({}).then((result) => {
//     console.log("Phonebook:");
//     result.forEach((person) => {
//       console.log(person.name, person.number);
//     });
//     mongoose.connection.close();
//   });
// } else {
//   const person = new Person({
//     name: name,
//     number: number,
//   });

//   person.save().then((res) => {
//     console.log(`added ${res.name} number ${res.number} to phonebook`);
//     mongoose.connection.close();
//   });
// }

// Person.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
