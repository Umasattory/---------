const forms = document.getElementsByName('form');

const discriptFields = Array.from(forms[0]);
const ingrid_optionFields = Array.from(forms[1]);
const rangeLayersFields = Array.from(forms[2]);
const disignFields = Array.from(forms[3]);
const data = {};
function getFieldsFunc(formVarName) {
    for (let fields of formVarName) {
        const { name, value } = fields;
        data[name] = value;
    }
    return data;
}
document.querySelector('.send').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(getFieldsFunc(discriptFields));
});

/* var dataBase = [
    { name: 'galass1', url: 'https://disk.yandex.ru/i/GJthffUJlZPZZg', direct: 'Фотография Умеда' },
    { name: 'galass2', url: 'https://disk.yandex.ru/i/b3rTGEnciGy8tg', direct: 'Фотография документы1' },
    { name: 'galass2', url: 'https://disk.yandex.ru/i/UrzNt876AKwZOg', direct: 'Фотография документы2' }
] */

