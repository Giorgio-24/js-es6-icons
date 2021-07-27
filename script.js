/* console.log('Vue è connesso', Vue)

Vue.config.devtools = true;
*/

//= VAR AND FUNCTIONS
const display = document.getElementById("cards-grid");

const getSelect = document.getElementById('select-type');

//?CREATE CARDS STRUCTURE
const renderCards = (iconsArray, targetElement) => {
  let cardsTemplate = '';

  iconsArray.forEach((icons, index) => {

    const addOffset = index % 5 === 0 ? 'offset-xl-1' : '';

    cardsTemplate += `
    <div class="d-inline-block col-12 col-sm-4 col-md-2  ${addOffset} card">
      <div class="card-body">
    <i class="${icons.family} ${icons.prefix}${icons.name} fa-2x ${icons.type}"></i>
    <h2 class="h6">${icons.name.toUpperCase()}</h2>
      </div>
    </div>`;
  });

  targetElement.innerHTML = cardsTemplate;
};

renderCards(icons, display);

getSelect.addEventListener('change', () => {
  const selectedValue = getSelect.value;

  if (selectedValue === 'all') {
    renderCards(icons, display);
    return;
  }

  let filteredIcons = icons.filter((icon) => selectedValue === icon.type);//^A FILTER SERVE L'OGGETTO E LA FUNZIONE, ALTRIMENTI NON VA.
  /* if(selectedValue === icon.type){//^COME SCRIVERE QUESTO.
    return true;
  }//^SE E' TRUE IL FILTER LO INCLUDERA'. 
   */
  renderCards(filteredIcons, display);
  console.log(filteredIcons);
});


const iconsValue = [];
icons.forEach((icon) => {
  if (!iconsValue.includes(icon.type)) {
    iconsValue.push(icon.type);
  }
});
console.log(iconsValue)

let selectOptions = `<option selected value="all" selected>all</option>`;
iconsValue.forEach((type) => {
  selectOptions += `<option value="${type}" selected>${type}</option>`;
}, selectOptions);

getSelect.innerHTML = selectOptions;

//= PRINT EVERITHING IN PAGE

