(function() {
    'use strict';
    var url = window.location.href

    //May have to change row or add new row type to grab for first segment
    var newRows 
    if(url.includes("premium")) {
        newRows = document.querySelectorAll("li.item")
    }
    else {
        newRows = document.querySelectorAll("div.item")
    }
    //Keep to append spells to item names for reading ease
    var newDesc = document.querySelectorAll("h5")

    for(var i = 0; i < newRows.length; i++){

        if(newRows[i].getAttribute(spell1) != null) {
            spellSearch(spell1, newRows[i], true);
            newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell1) + " ";

            if(newRows[i].getAttribute(spell2) != null){
                spellSearch(spell2, newRows[i], false)
                newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell2);
            }
        }
    }
})();

function spellSearch(spell, thisRow, spellFirst) {
    var spellName = thisRow.getAttribute(spell);
    var spellChild = document.createElement("div");
    
    spellFirst ? spellChild.classList.add('spell1') : spellChild.classList.add('spell2');
    
    if(spellName != null) {
        spellChild.style.backgroundColor = determineSpell(spellName);
        thisRow.appendChild(spellChild);
    }
}

function determineSpell(spellName) {
    //loop through each spell within spells enum
    for(const spell in Spells) {
        //check for matching name
        if(spellName.includes(Spells[spell].name)){
            //return color
            return Spells[spell].color
        }
    }
    //return default color
    return Spells.DEFAULT.color
}