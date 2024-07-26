const navigate = Array.from(document.querySelectorAll(".samelyeSteps>header>nav>div"));
const activeContent = Array.from(document.querySelectorAll('.samelyeSteps>main'));
let indexCount;
navigate.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < navigate.length; i++) {
            let element = navigate[i];
            element.style.backgroundColor = "#f6dcf7";
        }
        item.style.backgroundColor = "#f4b4f6";
        indexCount = navigate.indexOf(item);
        for (let i = 0; i < activeContent.length; i++) {
            const element = activeContent[i];
            if (element.classList.contains("active")) {
                element.classList.remove("active")
                element.classList.add("disactive")
            }
            activeContent[`${indexCount}`].classList.remove('disactive')
            activeContent[`${indexCount}`].classList.add('active')
        };
    });
});
const aTagsType = Array.from(document.querySelectorAll(".samelyeSteps>.optionsCont .settings>div:last-child>div:first-child>input"))
const bTagsType = Array.from(document.querySelectorAll(".samelyeSteps>.optionsCont .settings>div:last-child>div:nth-child(2)>input"))
const cTagsType = Array.from(document.querySelectorAll(".samelyeSteps>.optionsCont .settings>div:last-child>div:last-child>input"))
function tagsTypeChenge(tagsType) {
    tagsType.forEach((item) => {
        item.addEventListener("change", (e) => {
            e.preventDefault()
            for (let i = 0; i < tagsType.length; i++) {
                const element = tagsType[i];
                element.checked = false;
            }
            item.checked = true;
        })
    })
}
tagsTypeChenge(aTagsType);
tagsTypeChenge(bTagsType);
tagsTypeChenge(cTagsType);
const stepButton = Array.from(document.querySelectorAll(".samelyeSteps>footer>div"));
stepButton.forEach(item => {
    item.addEventListener('click', (e) => {
        let index;
        e.preventDefault();
        for (let i = 0; i < activeContent.length; i++) {
            const element = activeContent[i];
            if (element.classList.contains('active')) {
                index = activeContent.indexOf(element);
            };
        };
        if (item.classList.contains('next')) {
            activeContent[index].classList.remove('active');
            activeContent[index].classList.add('disactive');
            navigate[index].style.backgroundColor = "#f6dcf7";
            index += 1;
            if (index == activeContent.length) {
                index = 3;
            }
            activeContent[index].classList.remove('disactive');
            activeContent[index].classList.add('active');
            navigate[index].style.backgroundColor = "#f4b4f6";
        } else {
            activeContent[index].classList.remove('active');
            activeContent[index].classList.add('disactive');
            navigate[index].style.backgroundColor = '#f6dcf7';
            index -= 1;
            if (index <= 0) {
                index = 0;
            }
            activeContent[index].classList.remove('disactive');
            activeContent[index].classList.add('active');
            navigate[index].style.backgroundColor = "#f4b4f6";
        };
    })
});
const glasses = Array.from(document.querySelectorAll(".samelyeSteps>.glassesCont section>.table>table>tbody>tr>td"));
const glassWin = document.querySelector(".samelyeSteps>.glassesCont section>.table>table>tbody>tr>th");
glasses.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        glassWin.innerHTML = ""
        glassWin.innerHTML = item.innerHTML;
    })
})
const coctailForms = Array.from(document.querySelectorAll('.formContainers'));
const controls = Array.from(document.querySelectorAll(".control"));
let controlIndex = 0;
controls.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < coctailForms.length; i++) {
            const element = coctailForms[i];
            if (element.classList.contains('active')) {
                controlIndex = coctailForms.indexOf(element)
            }
            element.classList.remove('active');
            element.classList.add('disactive');
        }
        if (item.classList.contains('next')) {
            if (controlIndex < 3) {
                controlIndex += 1;
                coctailForms[controlIndex].classList.remove('disactive');
                coctailForms[controlIndex].classList.add('active');
            } else {
                controlIndex = 3;
                coctailForms[controlIndex].classList.remove('disactive');
                coctailForms[controlIndex].classList.add('active');
            }
        } else {
            if (controlIndex > 0) {
                controlIndex -= 1;
                coctailForms[controlIndex].classList.remove('disactive');
                coctailForms[controlIndex].classList.add('active');
            } else {
                controlIndex = 0;
                coctailForms[controlIndex].classList.remove('disactive');
                coctailForms[controlIndex].classList.add('active');
            }
        }
    })
});

const rangeBase = document.querySelector('#rangeBase');
const rangeType = document.querySelector('#rangeType');
const disignTagsRange = document.querySelector('#disignTagsRange');
const disignGlassRange = document.querySelector('#disignGlassRange');
const disignDisignRange = document.querySelector('#disignDisignRange');

const inputsBase = Array.from(document.querySelectorAll("input[name='baseFl']"));
const inputsType = Array.from(document.querySelectorAll("input[name='types']"));
const inputsTags = Array.from(document.querySelectorAll("input[name='disignTags']"));
const inputsGlass = Array.from(document.querySelectorAll("input[name='disignGlass']"));
const inputsDecor = Array.from(document.querySelectorAll("input[name='disignDecor']"));

const listBase = Array.from(document.querySelectorAll('.range_baseFlex>div>ul>li>ul>li'));
const listType = Array.from(document.querySelectorAll('.range_typeFlex>div>ul>li>ul>li'));
const listTags = Array.from(document.querySelectorAll('.disignTagsList>span>ul>li'));
const listGlass = Array.from(document.querySelectorAll('.disignGlassList>span>ul>li'));
const listDecor = Array.from(document.querySelectorAll('.disignDecorList>span>ul>li'));

function inp_range_listRecorder(inputs, ranges, lists) {
    lists.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const ind = lists.indexOf(item);
            inputs[ind].checked = true;
            ranges.value = ind;
        })
    })    
    inputs.forEach((item) => {
        item.addEventListener('change', (e) => {
            e.preventDefault();
            const ind = inputs.indexOf(item);
            ranges.value = ind;
        })
    });
    ranges.addEventListener('change', (e) => {
        e.preventDefault();
        const ind = ranges.value;
        inputs[ind].checked = true;
    });
};

inp_range_listRecorder(inputsBase, rangeBase, listBase);
inp_range_listRecorder(inputsType, rangeType, listType);
inp_range_listRecorder(inputsTags, disignTagsRange, listTags);
inp_range_listRecorder(inputsGlass, disignGlassRange, listGlass);
inp_range_listRecorder(inputsDecor, disignDisignRange, listDecor);

const dataBtn = document.querySelector('.coctailFormPageBlock>.controlBtn>.send');
dataBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

/* const inpFile = document.querySelector("#addFile");
const imgField = document.querySelector(".imageViewer");
const reader = new FileReader();
inpFile.addEventListener('change', (e) => {
    const files = e.target.files;
    const file = files[0];
    reader.readAsDataURL(file);
    reader.addEventListener("load", (e) => {
        const images = document.createElement('img');
        imgField.appendChild(images);
        images.src = e.target.result;
        images.alt = file.name;
    })
}) */

let rondomFunc = function () {
    min = 1; max = 3;
    let rand = min + Math.random() * (max + 1 - min);
    rondInt = Math.floor(rand);
    return rondInt;
}

let capchaText = ['6138B', 'DWXM5', '83tsU'];
const inputValue = document.querySelector('.ragistrationForm>.reg_form>label>.capchaField>input');
const controlSpan = document.querySelector('.ragistrationForm>.reg_form>label>.capchaField>span')

document.querySelector('.ragistrationForm>.reg_form>label>.capchaBlock').addEventListener('click', (e) => {
    e.preventDefault();
    controlSpan.textContent = '';
    inputValue.value = '';
    document.querySelector('.ragistrationForm>.reg_form>label>.capchaBlock>img').src = "";
    document.querySelector('.ragistrationForm>.reg_form>label>.capchaBlock>img').src = `../pictures/capches/capche(${rondomFunc()}).jpg`;
});

document.querySelector('.capchaField>#reg_capchaNum').addEventListener('input', (e) => {
    e.preventDefault()
    const capchaTextInd = capchaText.indexOf(inputValue.value) + 1;
    if (inputValue.value.length === 5) {
        if (capchaTextInd === this.rondInt) {
            controlSpan.textContent = 'Ввод корректен, дотступ открыт!'
            controlSpan.style.color = 'green';
        } else {
            controlSpan.textContent = 'Проверьте корректность, допущена ошибка!'
            controlSpan.style.color = 'red';
        }
    } else {
        controlSpan.textContent = 'Вводится текст, продолжайте...'
        controlSpan.style.color = 'gray';
    }
})

document.querySelector('.ragistrationForm>.reg_BtnBlock>.regBtn').addEventListener("click", (e) => {
    e.preventDefault()

})

const imgHorse = document.createElement("img");
imgHorse.src = "../pictures/chessHorse.png";
imgHorse.alt = "cheese Horse";
imgHorse.className = "horse";

const chessFields = Array.from(document.querySelectorAll('.chessHorseMove .chessField'));
chessFields.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        item.hasChildNodes() ? item.removeChild(imgHorse) : item.appendChild(imgHorse);
    })
});

const stepMenu = Array.from(document.querySelectorAll('.stepsHeaderMenu>ul>li'))
stepMenu.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        stepMenu.forEach((item) => { item.classList.remove('greenLites') });
        item.className = 'greenLites';
    })
});


let rondomEkv = function () {
    min = 1; max = 10;
    let rand = min + Math.random() * (max + 1 - min);
    rondInt = Math.floor(rand)*10;
    return rondInt;
}

const ekvBtn = document.querySelector('.ekvalaizerTuner>.ekvalaizerBtn');
const tuneItem = Array.from(document.querySelectorAll('.ekvalaizerTuner>.ekv'));
let tunerStart;
ekvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    ekvBtn.classList.toggle('ekvalaizerStart');
    ekvBtn.textContent = "Stop";
    if (ekvBtn.classList.contains('ekvalaizerStart')) {
            tunerStart = setInterval(() => {
            tuneItem[0].style.height = `${rondomEkv()}` + '%';
            tuneItem[1].style.height = `${rondomEkv()}` + '%';
            tuneItem[2].style.height = `${rondomEkv()}` + '%';
            tuneItem[3].style.height = `${rondomEkv()}` + '%';
            tuneItem[4].style.height = `${rondomEkv()}` + '%';
            tuneItem[5].style.height = `${rondomEkv()}` + '%';
        }, 200);
    } else {
        clearInterval(tunerStart);
        ekvBtn.textContent = "Start";
    }
});

const electroSamelyeHeadSpan = Array.from(document.querySelectorAll('.electronSamelye>.elecSamelye_last>.lastLine>.showScreenCont>.showScreen span'));
const discriptText = Array.from(document.querySelectorAll('.electronSamelye .showScreenCont>.showScreen>.discriptTexts>.discriptText'));
electroSamelyeHeadSpan.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.closest('div').classList.contains('shot_Sam')) {
            discriptText[0].classList.remove('disactivate')
            discriptText[0].classList.add('activate')
            discriptText[1].classList.remove('activate')
            discriptText[1].classList.add('disactivate')
        } else {
            discriptText[1].classList.remove('disactivate')
            discriptText[1].classList.add('activate')
            discriptText[0].classList.remove('activate')
            discriptText[0].classList.add('disactivate')
        }

    })
})

function backStyleClick(listOfClicks) {
    listOfClicks.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            listOfClicks.forEach((item) => {
                item.removeAttribute('class')
            })
            item.classList.add('backStyle');            
        })
    })
}
const typeList_Samelye = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_type .showScreenCont>.showScreen li'));
const strangeList_Samelye = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_strange .showScreenCont>.showScreen li'));
const baseList_Samelye = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_base .showScreenCont>.showScreen li'));
const ingredList_Samelye = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_ingred .showScreenCont>.showScreen li'));
const methodList_Samelye = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_middle>.elecSamelye_quatro>.elecSam_method>.showScreen li'))
backStyleClick(methodList_Samelye);
backStyleClick(ingredList_Samelye);
backStyleClick(baseList_Samelye);
backStyleClick(strangeList_Samelye);
backStyleClick(typeList_Samelye);
function singleElChecked(listOfClicks) {
    listOfClicks.forEach((item) => {
        item.addEventListener('change', (e) => {
            e.preventDefault();
            listOfClicks.forEach((item) => {
                item.checked = false;
            })
            item.checked = true;
        })
    })    
}
const decorList_Samelye = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_decor .showScreenCont>.showScreen input'));
const tagsList_Samelye = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_tags .showScreenCont>.showScreen input'));
singleElChecked(decorList_Samelye);
singleElChecked(tagsList_Samelye);

const imageArray = [
    {
        id: 0,
        name: 'glass(0)',
        url: '../pictures/Glasses/glass(0).png',
        direct: 'Бокал винный 1'
    },
    {
        id: 1,
        name: 'glass(1)',
        url: '../pictures/Glasses/glass(1).png',
        direct: 'Бокал винный Red'
    },
    {
        id: 2,
        name: 'glass(2)',
        url: '../pictures/Glasses/glass(2).png',
        direct: 'Бокал Шомпань'
    },
    {
        id: 3,
        name: 'glass(3)',
        url: '../pictures/Glasses/glass(3).png',
        direct: 'Iron legs'
    },
    {
        id: 4,
        name: 'glass(4)',
        url: '../pictures/Glasses/glass(4).png',
        direct: 'Бокал винный Pink'
    },
    {
        id: 5,
        name: 'glass(5)',
        url: '../pictures/Glasses/glass(5).png',
        direct: 'Бокал винный White'
    },
    {
        id: 6,
        name: 'glass(6)',
        url: '../pictures/Glasses/glass(6).png',
        direct: 'Бокал Brute'
    },
    {
        id: 7,
        name: 'glass(7)',
        url: '../pictures/Glasses/glass(7).png',
        direct: 'Бокал винный Brandy'
    }
]

const glassControl = Array.from(document.querySelectorAll('.electronSamelye .elecSamelye_glass>.showScreenCont>.showScreen>.glassControl'))
const glassShowScreen = document.querySelector('.electronSamelye .elecSamelye_glass>.showScreenCont>.showScreen>img');
const directShowScreen = document.querySelector('.electronSamelye .elecSamelye_glass>.showScreenCont>.showScreen>.glassDirect');
let glassAccount = 0;
glassControl.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.classList.contains('glassControlNext')) {
            glassAccount === imageArray.length-1 ? glassAccount = 0 : glassAccount++;
            glassShowScreen.src = `../pictures/Glasses/glass(${glassAccount}).png`
            directShowScreen.textContent = imageArray[glassAccount].direct;
        } else {
            glassAccount <= 0 ? glassAccount = imageArray.length-1 : glassAccount--;
            glassShowScreen.src = imageArray[glassAccount].url
            directShowScreen.textContent = imageArray[glassAccount].direct;
        }
    })
})

const quatroPortionList = Array.from(document.querySelectorAll('.electronSamelye .elecSam_portion>.showScreen li'));
const quatroTimeList = Array.from(document.querySelectorAll('.electronSamelye .elecSam_time>.showScreen li'));
const quatroDeffList = Array.from(document.querySelectorAll('.electronSamelye .elecSam_dific>.showScreen li'));

function quatroFunction(quatroFuncArray) {
    quatroFuncArray.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            quatroFuncArray.forEach((item)=>item.removeAttribute("style"))
            item.style = "background: linear-gradient(rgb(161, 161, 161), rgb(255, 255, 255));"
        })
    })
    const interials = quatroFuncArray.filter((el, ind) => ind !== 0 && ind !== quatroFuncArray.length - 1);
    interials.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            e.preventDefault();
            item.nextElementSibling.classList.add("nextScewing");
            item.previousElementSibling.classList.add("prevScewing");
        })
        item.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            item.nextElementSibling.removeAttribute("class");
            item.previousElementSibling.removeAttribute("class")
        })
    })
    quatroFuncArray.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            quatroFuncArray.forEach(item=>item.removeAttribute("class"))
            item.classList.add("clickedQuatroItem");
            item.closest('.quatroItem').querySelector('input').value = quatroFuncArray.indexOf(item);
        })
    })
}

quatroFunction(quatroPortionList);
quatroFunction(quatroTimeList);
quatroFunction(quatroDeffList);
