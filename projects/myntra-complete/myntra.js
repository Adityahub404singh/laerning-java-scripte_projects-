displayitems();
let addtobag=[];
function addToBag(itemsid){
bagitem.push(itemsid)
}

function displayitems(){ 
let itemscontainerelement = document.querySelector(".items-container");
//object bnana
// 
 let innerhtml='';
 items.forEach(items => {
    innerhtml += `<div class="item-container"> 
                <img src="${items.item_image}" alt="myntra item" class="item-image">
                <div class="rating">${items.rating.stars}★|${items.rating.count}</div>
                <div class="company-name">${items.company}</div>
                <div class="item-name">${items.item_name}CZ Floral Studs</div>
                <div class="price">
                    <span class="current-price">₹${items.current_price}</span>
                    <span class="original-price">${items.original_price}</span>
                    <span class="discount">${items.discount_percentage }%off</span>
                </div>
                <button class="btn-add-Bag" onclick= "Add to bag${items.id}">Add to bag</button>
            </div>`
 }); 
 itemscontainerelement.innerHTML=innerhtml;
}
