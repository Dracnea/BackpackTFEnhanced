(function() {
    'use strict';

    //May have to change row or add new row type to grab for first segment
    var newRows = document.querySelectorAll(".item")
    
    //Keep to append spells to item names for reading ease
    var newDesc = document.querySelectorAll("h5")

    for(var i = 0; i < newRows.length; i++){

        if(newRows[i].getAttribute(spell1) != null) {
            spellApply(spell1, newRows[i], true);
            newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell1) + " ";

            if(newRows[i].getAttribute(spell2) != null){
                spellApply(spell2, newRows[i], false)
                newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell2);
            }
        }

        if(newRows[i].getAttribute(summerTag) != null){
            summerApply(newRows[i])
            newDesc[i].textContent += "\r\n" + "Summer Adventure";
        }
    }
})();