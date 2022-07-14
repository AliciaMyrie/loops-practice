
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log("This is iteration #", i);
// }

// // Restarts the most inner loop

for(let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log("Hello");
        continue;
    }
    console.log(i);
}

for(let i = 0; i < 20; i++) {
    if (i === 10) {
        continue;
    }
    console.log(i);
}