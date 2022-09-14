const getRandom = () => {
  let randomVal = Math.ceil(Math.random() * 100);
 
  if (randomVal) return randomVal;
};
 
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = getRandom();
    if (number % 2 === 0) {
      resolve({
        message: 'Завершено успешно. Сгенерированное число - ',
        number: number
      })
    } else {
      reject({
        message: 'Завершено с ошибкой. Сгенерированное число - ',
        number: number
      })
    }
  } , 3000);
});
 
promise.then((result) => console.log(result.message + result.number));
promise.catch((result) => console.log(result.message + result.number));