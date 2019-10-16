var mysql = require('mysql');
var fs = require('fs')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
});

con.connect();

// con.connect(function (err) {
//   if (err) throw err;
console.log("Connected!");

con.query("DROP DATABASE IF EXISTS library", function (err, result) {
  if (err) throw err;
  console.log("Database dropped.");
});
con.query("CREATE DATABASE library", function (err, result) {
  if (err) throw err;
  console.log("Database created.");
});
// con.query("CREATE TABLE library.mytable (id INTEGER PRIMARY KEY, category varchar(255))", function (err, result) {
//   if (err) throw err;
//   console.log("Table created.");
// });
console.log("Adding tables...");
con.query('CREATE TABLE library.authors (login varchar(255) PRIMARY KEY, email varchar(255), first_name varchar(255),last_name varchar(255))', function (err, result) {
  if (err) throw err;
  console.log("Table created.");
});
con.query('CREATE TABLE library.books (id INTEGER PRIMARY KEY,login varchar(255),title varchar(255),language varchar(255),created DATE)', function (err, result) {
  if (err) throw err;
  console.log("Table created.");
});
con.query('CREATE TABLE library.categories (id INTEGER PRIMARY KEY,category varchar(255))', function (err, result) {
  if (err) throw err;
  console.log("Table created.");
});
con.query('CREATE TABLE library.book_categories (bid INTEGER,cid INTEGER,UNIQUE(bid, cid))', function (err, result) {
  if (err) throw err;
  console.log("Table created.");
});
con.query('CREATE TABLE library.pages (bid INTEGER,pid INTEGER,caption varchar(255),page_num INTEGER)', function (err, result) {
  if (err) throw err;
  console.log("Table created.");
});
con.query('CREATE TABLE library.pictures (id INTEGER PRIMARY KEY,url varchar(255),width INTEGER,height INTEGER)', function (err, result) {
  if (err) throw err;
  console.log("Table created.");
});
// con.query("INSERT INTO library.mytable values (?, ?)", ['24', 'test24'], function (err, result) {
//   if (err) throw err;
//   console.log("Row inserted.");
// });
var books = JSON.parse(fs.readFileSync('books.json', 'utf8'));
// console.log(books);
console.log("Inserting books...");

var login_list = [];
var category_list = [];
var url_list = [];
var b = 0;
var c = 0;
var p = 0;

books.forEach(function (book) {
  console.log("Inserting book \"" + book['title'] + "\"" + " by " + book['first_name'] + " " + book['last_name'] + " into database...");

  var page_info = book['pages'];

  con.query("INSERT INTO library.books values (?, ?, ?, ?, ?)", [b, book['login'], book['title'], book['language'], book['created']], function (err, result) { if (err) throw err; });

  book['categories'].forEach(function (category) {
    if (!category_list.includes(category)) {
      con.query("INSERT INTO library.book_categories values (?, ?)", [b, c], function (err, result) { if (err) throw err; });
      category_list.push(category);
      con.query("INSERT INTO library.categories (id, category) values (?, ?)", [c, category], function (err, result) { if (err) throw err; });
      c += 1;
    } else {
      con.query("INSERT INTO library.book_categories values (?, ?)", [b, category_list.indexOf(category)], function (err, result) { if (err) throw err; });
    }
  });

  if (!login_list.includes(book['login'])) {
    login_list.push(book['login']);
    con.query("INSERT INTO library.authors values (?, ?, ?, ?)", [book['login'], book['email'], book['first_name'], book['last_name']], function (err, result) { if (err) throw err; });
  }
  p_num = 1;
  book['pages'].forEach(function (page) {

    if (!url_list.includes(page['url'])) {
      url_list.push(page['url']);
      con.query("INSERT INTO library.pictures values (?, ?, ?, ?)", [p, page['url'], page['width'], page['height']], function (err, result) { if (err) throw err; });
      con.query("INSERT INTO library.pages values (?, ?, ?, ?)", [b, p, page['caption'], p_num], function (err, result) { if (err) throw err; });
      p += 1;
      p_num += 1;
    } else {
      con.query("INSERT INTO library.pages values (?, ?, ?, ?)", [
        b, url_list.indexOf(page['url']), page['caption'], p_num], function (err, result) { if (err) throw err; });
      p_num += 1;
    }
  })
  b += 1;
})
console.log("Inserted " + b + " books into the database.");

con.commit();
con.end();