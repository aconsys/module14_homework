const jsonString = `{
                    "list": [
                     {
                      "name": "Petr",
                      "age": "20",
                      "prof": "mechanic"
                     },
                     {
                      "name": "Vova",
                      "age": "60",
                      "prof": "pilot"
                     }
                    ]
                  }`;

const data = JSON.parse(jsonString).list;//Парсим JSON и берм из него List

const result = {//Создаём пустой обект для записи результата
  list: []
};

data.forEach(item => {//Перебираем массив элементов и генерируем объект
  let obj = {
    name: item.name,
    age: +item.age,
    prof: item.prof,
  };

  result.list.push(obj);
});

console.log(result);