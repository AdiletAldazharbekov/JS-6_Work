// 3)	shift, pop . 
// Дан массив ['html', 'css', 'js']. 
// Напишите функцию которая отобразит на экране первый элемент. 

// Дан массив ['html', 'css', 'js']. 
// Напишите функцию которая отобразит на экране последний элемент.

alert('Задача 3 - Первый и последний элементы массива')

let arr =['html', 'css', 'js']


const getFirstItem = (arr=[])=>{
    return arr[0]
}
alert(`Первый элемент массива: ${getFirstItem(arr)}`) 


const getLastItem = (arr=[])=>{
return arr[arr.length-1]
}
alert(`Последний элемент массива: ${getLastItem(arr)}`) 
