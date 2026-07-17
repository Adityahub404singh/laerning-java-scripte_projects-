let bagitems = [];
init();

function init() {
    let bagitemsStr = localStorage.getItem('bagitems');
    bagitems = bagitemsStr ? JSON.parse(bagitemsStr) : [];
    displaybagitem();
    displayitems();
}

function addToBag(itemid) {
    bagitems.push(itemid);
    localStorage.setItem('bagitems', JSON.stringify(bagitems));
    displaybagitem();
}

function displaybagitem() {
    let bagitemcountelemt = document.querySelector('.bag-count');
    if (bagitems.length > 0) {
        bagitemcountelemt.style.visibility = 'visible';
        bagitemcountelemt.textContent = bagitems.length;
    } else {
        bagitemcountelemt.style.visibility = 'hidden';
    }
}

function displayitems() {
    let itemscontainerelement = document.querySelector(".items-container");
    let innerhtml = '';
    items.forEach(item => {
        innerhtml += `<div class="item-container"> 
                <img src="${item.item_image}" alt="myntra item" class="item-image">
                <div class="rating">${item.rating.stars}★|${item.rating.count}</div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">₹${item.current_price}</span>
                    <span class="original-price">₹${item.original_price}</span>
                    <span class="discount">(${item.discount_percentage}% off)</span>
                </div>
                <button class="btn-add-Bag" onclick="addToBag('${item.id}')">Add to bag</button>
            </div>`;
    });
    itemscontainerelement.innerHTML = innerhtml;
}