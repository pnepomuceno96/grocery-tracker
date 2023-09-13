// Import the readline module for handling user input in the console
const { stdin } = require('process');
const readline = require('readline');
const rl= readline.createInterface({
    input: process.stdin, // Read from standard input (keyboard)
    output: process.stdout // Write to standard output (console)
  });

/*
rl.on('line', (line) => {
    console.log(line);
});

rl.once('close', () => {
     // end of input
     console.log("Goodbye");
 });
*/

//Example grocery item
const apples = {
    name: "Apple",
    quantity: 3,
    price: 0.99,
    brought: false
};

const groceries = []

function displayList() {
    console.log(groceries)
}



function addItemPrompt() {
    const item = {brought: false};
    
    rl.question('Name the item: ', (n) => {
        item.name = n;
        rl.question('How many? ', (q) => {
            item.quantity = Number(q);
            rl.question('Price: ', (p) => {
                item.price = Number(p);
                groceries.push(item)
                home()
            })
        })
    
    })
}

function removeItemPrompt() {
    rl.question('Remove which item? ', (i) => {
        for (let j = 0;  j < groceries.length; j++) {
            if(i === groceries[j].name) {
                //remove item
                groceries.splice(j, 1)
                home()
            }
        }
    })
}

function setBroughtPrompt() {
    rl.question('Set which item as brought? ', (i) => {
        for (let j = 0;  j < groceries.length; j++) {
            if(i === groceries[j].name) {
                //remove item
                groceries[j].brought = true;
                home()
            }
        }
    })
}

function home() {
    displayList()
    console.log("1 - Add an item \n2 - Remove an item \n3 - Mark an item as brought");
    
    rl.on('line', (line) => {
        if (line == "1"){
            addItemPrompt()
        }
        if (line == "2"){
            removeItemPrompt()
        }
        if (line == "3"){
            setBroughtPrompt()
        }
    })
}

home()