// jaajko 13/05/2022
// Infinite vibration v1
// Tested in the Sphero Edu app with a Sphero Mini
async function startProgram() {
while (true)
await rawMotor(255, -255, 120);
await delay(0);
}
