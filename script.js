/**
 * Energy consumption:
 * walk — 35 kcal per 1000 steps;
 * run — 250 kcal per 1 kilometer;
 * fitness — 500 kcal per 1 hour of intense training.
 */

function calc(event) {
    event.preventDefault();
    // energy value of one serving of cake
    const energyValue = 481;
    // number of servings specified by the user
    const quantity = parseInt(document.getElementById('quantity').value);
    // exercise selected by the user
    const exercise = document.getElementById('exercise').value;

    console.log(quantity);
    console.log(exercise);

    // overall energy value;
    let energyTotal = 0;
    // result of calculation
    let result = '';

    // verify "select" value
    if (exercise === '') {
        // display window with the error text
        alert('Choose exercise');
        return false;
    }

    // calculate total energy value
    energyTotal = energyValue * quantity;
   
    // calculate result message
    if (exercise === 'walk') {
        // 35 kcal for walking 1000 steps
        const steps = Math.round(energyTotal / 35 * 1000);
        result = `Walk ${steps} steps`;
    } else if (exercise === 'run') {
        // 250 kcal for running 1 km for 7 minutes
        const  distance = (energyTotal / 250).toFixed(2);
        result = `Run ${distance} km`;
    } else if (exercise === 'fitness') {
        // 500 kcal for 1 hour of intense training
        const  minutes = Math.round(energyTotal / 500 * 60);
        result = `Intense fitness for ${minutes} minutes`;
    } 

    // display total energy value and result message
    document.getElementById('total_kcal').innerText = `${energyTotal} kcal`;
    document.getElementById('result').innerText = result;
}

