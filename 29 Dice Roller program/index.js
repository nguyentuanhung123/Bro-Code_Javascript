// DICE ROLLER PROGRAM

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // tạo một số nguyên từ 1 đến 6
        values.push(value);
        images.push(`<img src="dice_images/Dice-${value}.png" alt="Dice ${value}">`);
    }

    console.log(values); // [1, 2, 4]
    console.log(images); // ['<img src="dice_images/Dice-1.png">', '<img src="dice_images/Dice-2.png">', '<img src="dice_images/Dice-4.png">']
    // join: Chuyển 1 mảng về dạng string và bổ sung vào ở giữa ký tự tùy vào code
    diceResult.textContent = `dice: ${values.join(', ')}`; //dice: 1, 2, 4
    diceImages.innerHTML = images.join(''); // <img src="dice_images/Dice-3.png"><img src="dice_images/Dice-1.png"><img src="dice_images/Dice-3.png">
}