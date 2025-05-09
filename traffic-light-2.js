const trafficLight = {
  possibleStates: ["🟢", "🟠", "🔴"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on:", currentState);

  if (trafficLight.possibleStates[trafficLight.stateIndex] === "🟢") {
    trafficLight.possibleStates[trafficLight.stateIndex] = "🟠";
  } else if (trafficLight.possibleStates[trafficLight.stateIndex] === "🟠") {
    trafficLight.possibleStates[trafficLight.stateIndex] = "🔴";
  } else {
    trafficLight.possibleStates[trafficLight.stateIndex] = "🟢";
    cycle++;
  }
}
