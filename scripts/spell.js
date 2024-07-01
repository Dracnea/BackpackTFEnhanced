function spellApply(spell, thisRow, spellFirst) {
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