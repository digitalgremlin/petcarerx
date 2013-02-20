$("./body"){
  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']/div/div[@class='mw_main_head']/div"){
      insert("div", id:"mw_toggler_menu"){
        insert("span", "M")
      }
      insert("div", class:"mw_home"){
        insert("a", href:"/", "PetCareRX")
      }
      insert("div", id:"mw_toggler_shopping_cart"){
        insert("span", "S")
      }
    }
  }
}