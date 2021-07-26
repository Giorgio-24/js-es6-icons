const display = document.getElementById("cards-grid");

let cardsTemplate = '';

icons.forEach((icons) => {
    cardsTemplate += `
    <div class="d-inline-block col-2 card">
      <div class="card-body">
    <i class="${icons.family} ${icons.prefix}${icons.name} fa-2x ${icons.type}"></i>
    <h2 class="h6">${icons.name.toUpperCase()}</h2>
      </div>
    </div>`;
});

display.innerHTML = cardsTemplate;
/*  class="${icons.family} ${icons.prefix}${icons.name}" */

