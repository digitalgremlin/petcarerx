$("./body"){
  $("./div[@id='outer_layout']/form/div[@id='view']"){
    
    # Main Content
    $("./div[@id='mw_main_content']/div/div[@class='mw_main_content']/div"){
      move_here("/html/body//div[@id='body_container']")
    }

    # Remove unnecessary blocks
    remove("./div[@id='layout']")
    remove("./div[@id='outer_footer']")
  }
}