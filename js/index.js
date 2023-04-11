$(()=>{
    let burgerIcon = $('#burgerIcon');
    let mobilMenu = $('#mobilMenu');
    burgerIcon.click(function(){
        mobilMenu.toggleClass('mobilMenu-open')
        $(this).toggleClass('open');
        $('.overlay').toggleClass('overlay-open');
        $('body').toggleClass('overflow-hidden');
    })
    let subMenu = $('#sub-menu');
    let subMenuTrigger = $('.sub-menu-trigger');
    subMenuTrigger.each(function(_,item){
        $(item).click(function (){
            let subMenu = $(this).next();
            subMenu.toggleClass("subMenu-open")
        })
    })
})