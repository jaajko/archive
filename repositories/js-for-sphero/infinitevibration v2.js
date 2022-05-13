// jaajko 13/05/2022
// Infinite vibration v2
// Tested in the Sphero Edu app with a Sphero Mini
// You might have to shake your robot a bit for it to vibrate properly
async function startProgram() {
while (true)
await rawMotor(255, 255, 120);
await delay(0);
}
