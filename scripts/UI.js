(async function() {
    //find a better programtic way to wait until page fully loads rather than a sleep cycle
    if(isProfilePage){
        console.log("Sleep Period")
        await sleep(10000)
    }

    //May have to change row or add new row type to grab for first segment
    var newRows = document.querySelectorAll(".item")
    console.log(newRows)
    
    //Keep to append spells to item names for reading ease
    var newDesc = document.querySelectorAll("h5")

    //change to a for each since iterating through all instances
    //have separate body methods for classifieds/premium vs profiles, this way profile image names can be updated and remove need to do extra url type checks
    for(var i = 0; i < newRows.length; i++){

        if(newRows[i].getAttribute(spell1) != null) {
            spellApply(spell1, newRows[i], true);
            if(!isProfilePage){
                newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell1) + " ";
            }
        
            if(newRows[i].getAttribute(spell2) != null){
                spellApply(spell2, newRows[i], false)
                if(!isProfilePage){
                    newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell2);
                }
            }
        }

        if(newRows[i].getAttribute(summerTag) != null){
            summerApply(newRows[i])
            if(!isProfilePage){
                newDesc[i].textContent += "\r\n" + "Summer Adventure";
            }
        }
    }
})();