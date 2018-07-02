(function(){
    
 scrollTo("ul li a",2700,true);   
 scrollToTop("#scrolltop",2200);

$(window).scroll(function(){
    surpassScroll("#scrolltop",220); 
}); 
    
})();