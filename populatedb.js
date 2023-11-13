#! /usr/bin/env node

console.log(
  'This script populates  your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Part = require("./models/part");
const Category = require("./models/category");
const PartInstance = require("./models/partinstance");

const parts = [];
const categories = [];
const partInstances = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createParts();
  await createPartInstances();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name, description) {
  const categorydetail = { name: name}
  if (description != false) categorydetail.description = description;

  const category = new Category(categorydetail);

  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

/*async function authorCreate(index, first_name, family_name, d_birth, d_death) {
  const authordetail = { first_name: first_name, family_name: family_name };
  if (d_birth != false) authordetail.date_of_birth = d_birth;
  if (d_death != false) authordetail.date_of_death = d_death;

  const author = new Author(authordetail);

  await author.save();
  authors[index] = author;
  console.log(`Added author: ${first_name} ${family_name}`);
}*/

async function partCreate(index, name, category, description, price, number_in_stock) {
  const partdetail = {
    name: name,
    category: category,
    description: description,
    number_in_stock: number_in_stock,
    price: price,
  };

  const part = new Part(partdetail);
  await part.save();
  parts[index] = part;
  console.log(`Added part: ${name}`);
}

async function partInstanceCreate(index, part, productID, status) {
  const partinstancedetail = {
    part: part,
    productID: productID,
  };
  if (status != false) partinstancedetail.status = status;

  const partinstance = new PartInstance(partinstancedetail);
  await partinstance.save();
  partInstances[index] = partinstance;
  console.log(`Added partinstance: ${productID}`);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "CPU", "Central Processor Unit"),
    categoryCreate(1, "GPU", "Graphics Processor Unit"),
    categoryCreate(2, "Acessories"),
  ]);
}


async function createParts() {
  console.log("Adding Parts");
  await Promise.all([
    partCreate(0,
      "AMD RYZEN X",
      categories[0],
      "Processor version X description",
      1000,
      1,
    ),
    partCreate(1,
      "INTEL 0000U",
      categories[0],
      "Processor version U description",
      1500,
      1,
    ),
    partCreate(2,
      "NVIDIA 4400XT",
      categories[1],
      "Graphics card description",
      2000,
      1,
    ),
    partCreate(3,
      "KEYBOARD HYPERX YADAYADA",
      categories[2],
      "Keyboard description",
      200,
      1,
    ),
    partCreate(4,
      "MOUSE RAZER DEATHADDER V2",
      categories[2],
      "Mouse description",
      150,
      1,
    ),
  ]);
}

async function createPartInstances() {
  console.log("Adding Part instances");
  await Promise.all([
    partInstanceCreate(0, parts[0], "0000001ID", "In Stock"),
    partInstanceCreate(1, parts[0], "1000002ID", "In Stock"),
    partInstanceCreate(2, parts[1], "1100001ID", "In Stock"),
    partInstanceCreate(3, parts[2], "2200001ID", "In Stock"),
    partInstanceCreate(4, parts[3], "3300001ID", "In Stock"),
  ]);
}
