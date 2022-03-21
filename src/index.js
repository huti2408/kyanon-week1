import express from "express";
import fs from "fs";
import puppeteer from "puppeteer";

const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send("Hello this is training period at Kyanon Digital NodeJS");
});

// function ReadFile(filePath) {
//   fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   });
// }

// fs.writeFile("./files/Message.txt", "This is message from Universe", (err) => {
//   if (err) throw err;
//   console.log("Universe's message had been sent");
// });
// ReadFile("./files/Hello.txt");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Node.js");
  await page.pdf({ path: "./files/Nodejs.pdf", format: "a4" });
  await browser.close();
})();

app.listen(PORT, () => console.log("Server is running at PORT: " + PORT));
