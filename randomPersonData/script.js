const theChosen = document.getElementById("chosen-list")
const allButtons = document.getElementById("buttons")

const addPersonToDom = (persons) => {
    persons.forEach(person => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `<a class="person__list-li__a" ${person}"></a>`;
        theChosen.appendChild(newLi);
    });
}
addPersonToDom(randomPersonData);


const addEventListeners = () => {
    allButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            handleOnChangeEvent(event.target.value)
        });
    });

    addEventListeners(buttons);

    const resetDom = () => {
        return (theChosen.innerHTML = "");
    };



    const handleOnChangeEvent = (value) => {
        switch (value) {
            case "landenlijst":
                resetDom();
                return addPersonToDom(randomPersonData.filter((person) => person.region));
            case "steenbokvrouwen":
                resetDom();
                return addPersonToDom(randomPersonData.filter((person) => person.dmy >= "22/12/1990" + person.dmy <= "20/01/2021"));
            case "oude_creditcards":
                resetDom();
                return addPersonToDom(randomPersonData.filter((person) => person.credit_card.expiration <= "6/21" + person.name.surname.phone));
            case "meeste_mensen":
                resetDom();
                return addPersonToDom(randomPersonData.filter((person) => person.region).sort);
            case "Match-making":
                resetDom()
                return addPersonToDom(randomPersonData.filter((person) => person.name).sort, person.surname.photo.region.age);
            default:
                resetDom();
                return addPersonToDom(randomPersonData.filter((person) => person.name.includes(value))
                );

        }
    }
};