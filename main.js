function toggleDetail(e){
    const target =$(e.target)

    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    }else{
        $(target).html("Less Info").addClass("active")
    }
    const item=$(target).parents(".about-exp-item")
    const detil=$(item).children(".about-exp-item-detil")
    $(detil).slideToggle()
}
function onFormSubmit(e){
    e.preventDefault()
    const email=$("#email")
    const subject=$("#subject")
    const message=$("#message")

    if(!$(email).val()){
        alert ('Email is required')
    }  else if(!$(subject).val()){
        alert ('Subject is required')
    } else if(!$(message).val()){
        alert ('Message is required')
    } else{
        alert ('Form Submited')
        $(email).val('')
        $(message).val('')
        $(message).val('')
    }
}