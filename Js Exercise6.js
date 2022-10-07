function repainting(input) {
    let neededNylon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededThinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylon = (neededNylon + 2) * 1.50;
    let paint = (neededPaint + (neededPaint * 10 / 100 )) * 14.50;
    let thinner = neededThinner * 5.00;
    let pouch = 0.40;
    let sumForMan = 30 / 100;

    let allMats = nylon + paint + thinner + pouch;
    let sumForManFinal = (allMats * sumForMan) * hours;

    let finaPrice = sumForManFinal + allMats;

    console.log(finaPrice);
}

repainting(["10", "11", "4", "8"])