const xmlString = `<list>
                    <student>
                      <name lang="en">
                        <first>Ivan</first>
                        <second>Ivanov</second>
                      </name>
                      <age>35</age>
                      <prof>teacher</prof>
                    </student>
                    <student>
                      <name lang="ru">
                        <first>Петр</first>
                        <second>Петров</second>
                      </name>
                      <age>58</age>
                      <prof>driver</prof>
                    </student>
                  </list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
const listNode = xmlDOM.querySelector('list');
const studentsNodes = listNode.querySelectorAll('student');

const result = {//Требуемый обект JS
  list: makeListOfStudents(),
};

function makeListOfStudents() {//Создание массива обектов с данными студентов
  let array = [];

  studentsNodes.forEach(item => {
    let obj = {
      name: `${item.querySelector('name').firstElementChild.textContent} ${item.querySelector('name').lastElementChild.textContent}`,
      age: item.querySelector('age').textContent,
      prof: item.querySelector('prof').textContent,
      lang: item.querySelector('name').getAttribute('lang'),
    };

    array.push(obj);
  });

  return array;
}

console.log(result);