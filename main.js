
// Получаем элементы
const $shuffle = document.getElementById("shuffleBtn");
const $block = document.querySelectorAll(".block");

//Обработчик события
$shuffle.addEventListener("click" , () => {
 //преобразование блоков в массив
    let arrBlocks = Array.from($block);
    console.log(arrBlocks);

    //Перемешиваем блоки
    for(let i = arrBlocks.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arrBlocks[i],arrBlocks[j]] = [arrBlocks[j],arrBlocks[i]]
    }

    //Вывод на странницу
    arrBlocks.forEach((block) => {
       document.querySelector(".container").appendChild(block)
    })

    
    
})