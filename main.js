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