// 2)	С помощью функции найдите сумму чисел от 1 до 100. 
const sumNum = (a, b)=>{
    let sum = 0
    for(let i=a; i<=b;i++){
        sum=sum+i
    }
    return sum
}

alert('Задача 2 - функция суммы чисел в интервале')
let c = +prompt('введите 1-е число', '')
let d = +prompt('введите 2-е число', '')
let result2 = sumNum(c, d)
alert(`Результат: ${result2}`)