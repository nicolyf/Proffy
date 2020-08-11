//search button
document.querySelector("#add-time")

//when click the button
.addEventListener('click', cloneField)


//perform an action
function cloneField() {

    //duplicate fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //catch fields
    const fields = newFieldContainer.querySelectorAll('input')

    // clear each field
    fields.forEach(function(fields) {
        //catch current field and clear
        fields.value = ""
    })

    //put on the page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}



