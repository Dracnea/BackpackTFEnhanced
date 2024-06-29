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
            spellSearch(spell1, newRows[i]);
            newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell1) + " ";

            if(newRows[i].getAttribute(spell2) != null){
                spellSearch(spell2, newRows[i])
                newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell2);
            }
        }
    }
})();

function spellSearch(spellNum, thisRow) {
    var spellName = thisRow.getAttribute(spellNum);
    var spellChild1 = document.createElement("div");
    spellChild1.classList.add('spell1');
    var spellChild2 = document.createElement("div");
    spellChild2.classList.add('spell2');
    
    if(spellName != null) {
        var currentColor = determineSpell(spellName)

        //update to remove switch
        //adapt for voices + paint spell to move paint to slot 2

        switch(currentColor) {
        case Spells.FIRE.color:
        case Spells.BOMBS.color:
        case Spells.VIOLET.color:
        case Spells.CORPSE.color:
        case Spells.GANGREEN.color:
        case Spells.BRUISED.color:
        case Spells.TEAMSPIRIT.color:
        case Spells.ROTTEN.color:
        case Spells.HEADLESS.color:
            spellChild2.style.backgroundColor = currentColor;
            thisRow.appendChild(spellChild2);
            break
        default:
            spellChild1.style.backgroundColor = currentColor;
            thisRow.appendChild(spellChild1);
            break
        }
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