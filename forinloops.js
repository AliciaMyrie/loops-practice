const object = {
    name: "Alicia",
    age: 32,
    inClass: true,
};

for (const key in object) {
    console.log(key);
}

for (const key in object) {
    console.log(object[key]);
}