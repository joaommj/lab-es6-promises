// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

          // Manually add final step
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");

        }, (error) => console.log(error));

      }, (error) => console.log(error));

    }, (error) => console.log(error));

  }, (error) => console.log(error));

}, (error) => console.log(error));


// Iteration 2 - using promises
obtainInstruction('steak', 0)
.then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  return obtainInstruction('steak', 1);
})
.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
  return obtainInstruction('steak', 2);
})
.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
  return obtainInstruction('steak', 3);
})
.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction('steak', 4);
})
.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    // Add the final message
  document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
  document.querySelector("#steakImg").removeAttribute("hidden");
})
.catch((error) => console.log(error));
// Iteration 3 using async/await
async function makeBroccoli(){
  try {
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 0)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 1)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 2)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 3)}</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${await obtainInstruction('broccoli', 4)}</li>`;
    // Add the final message
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all
const brusselsSproutsSteps = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7)
];

Promise.all(brusselsSproutsSteps)
  .then((steps) => {
    steps.forEach((step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });
    // Add the final message
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })