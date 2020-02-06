const messages = [
    "Juan",
    "Ana",
    "Lucas",
    "Paula",
    "Rosa",
    "Carlos",
    "Javier"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() *
        messages.length)];
        console.log(message);
};

module.exports = { randomMsg };