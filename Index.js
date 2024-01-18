

const btnsubmit = document.querySelector(".submit-data");
btnsubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for(let i = 0; i<numOfDice; i++)
    {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        const imagestag = `<img src="dice_images/${value}.png" alt="Dice ${value}">`;
        images.push(imagestag);
    }
    diceResult.textContent = `dice: ${values.join(`,`)}`;
    diceImages.innerHTML = images.join(` `);
});