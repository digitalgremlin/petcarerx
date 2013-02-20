x$(window).load(function(e) {
  x$("#mw_toggler_menu").click(function(){
    if(x$("#view").attr("class")=="mw_menu"){
      x$("#view").attr("class", "mw_main");
    }else{
      x$("#view").attr("class", "mw_menu");
    }
  });
  x$("#mw_toggler_shopping_cart").click(function(){
    if(x$("#view").attr("class")=="mw_shopping_cart"){
      x$("#view").attr("class", "mw_main");
    }else{
      x$("#view").attr("class", "mw_shopping_cart");
    }
  });
  x$("#mw_button_footer").click(function(){
    if(x$(this.parentNode).attr("class")=="mw_contracted"){
      x$(this.parentNode).attr("class", "mw_expanded");
      x$(this).find("span").html("CONTRACT FOOTER");
    }else{
      x$(this.parentNode).attr("class", "mw_contracted");
      x$(this).find("span").html("EXPAND FOOTER");
    }
  });
  x$("body#mw_aquatic_center_page .mw_front_categorie").click(function(){
    x$(this.parentNode.parentNode.parentNode.parentNode).find("li").attr("view", "front");
    x$(this.parentNode.parentNode.parentNode).attr("view", "back");
  });
  x$("body#mw_aquatic_center_page .mw_back_categorie").click(function(){
    x$(this.parentNode.parentNode.parentNode.parentNode).attr("view", "front");
  });
  x$("body#mw_aquarium_under_30_page #mw_button_filters").click(function(){
    if(x$(this).attr("data-ur-state")=="disabled"){
      x$("#mw_content_filters").attr("data-ur-state", "enabled");
      x$(this).attr("data-ur-state", "enabled");
    }else{
      x$("#mw_content_filters").attr("data-ur-state", "disabled");
      x$(this).attr("data-ur-state", "disabled");
    }
  });
});