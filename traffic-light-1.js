const trafficLight = {
  state: "🟢",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  if (trafficLight.state === "🟢") {
    trafficLight.state = "🟠";
  } else if (trafficLight.state === "🟠") {
    trafficLight.state = "🔴";
  } else {
    trafficLight.state = "🟢";
    rotations++;
  }
}