## Check-word
Check if the word exist in a language list.

First, configure your languages in ./dictionaries.

### How to use
---
en.json

    {
	    "CAR": "car"
    }

Use the checker:

    const checker = new Checker("en");
    checker.check("car"); // true
    checker.check("bus"); // false

