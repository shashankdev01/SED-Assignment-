Product Code Validator
simple Node.js module that processes a list of product codes by validating, normalizing them. The expected format for valid codes is:

Exactly 7 characters

First 3 characters: Letters (A-Z, case-insensitive)

Next 4 characters: Digits (0–9)

✅ Features
Identifies and separates valid and invalid product codes

Normalizes valid codes by converting letters to uppercase

Returns a structured summary report

No external libraries or regular expressions used

📥 Input Format
An array of strings representing product codes.

Example:

javascript
Copy
Edit
[
  "abc1234",
  "XYZ0001",
  "123ABCD",
  "A1B2C3D",
  "lmn9876",
  "DEF5678"
]
📤 Output Format
A summary object with:

json
Copy
Edit
{
  "totalCodes": 6,
  "validCodes": 3,
  "invalidCodes": 3,
  "normalizedValidCodes": ["ABC1234", "DEF5678", "XYZ0001"]
}
🚀 Usage
1. Clone or download the repository
bash
Copy
Edit
git clone <your-repo-url>
cd <your-project-directory>
2. Example Code Usage
javascript
Copy
Edit
const { processData } = require('./productCodeValidator');

const input = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"];
const result = processData(input);

console.log(result);
📂 Module Structure
bash
Copy
Edit
productCodeValidator.js   # Contains the processData function and validation logic
README.md                 # This file
🛠️ Technologies Used
JavaScript (ES6)

Node.js

📌 Constraints
No use of Regular Expressions

No external libraries

Must work in a Node.js environment

👨‍💻 Author
Shashank Singh
Feel free to connect with me on https://www.linkedin.com/in/shashanksingh-dev01/ or reach out for collaboration or feedback!
