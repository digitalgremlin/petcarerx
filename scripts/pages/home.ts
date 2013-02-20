$("./body"){
  
  # IDENTIFYING THE PAGE
  attribute("id", "mw_home_page")

  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']//div[@id='body_container']"){
      
      # Remove unnecessary blocks
      remove("./div[@id='left_containet']")
      remove("./div[@class='clearfix']")

      # Search
      copy_here("/html/body//div[@id='mw_menu']/div/div[@class='mw_search']")
      $("./div[@class='mw_search']"){
        move_to("..", "top")
      }

      # Banners
      $("./div[@id='right_container']"){
        $("./div[@id='crausal']"){
          remove("./div[2]")
          $("./div/div"){
            attribute("data-ur-set", "carousel")
            attribute("data-ur-carousel-component", "view_container")
            attribute("data-ur-id", "HomeCarousel")
            insert("div", data-ur-carousel-component:"dots")
            $("./div[@class='belt']"){
              attribute("data-ur-carousel-component", "scroll_container")
              $("./div"){
                attribute("data-ur-carousel-component", "item")
                $("../../div[data-ur-carousel-component='dots']"){
                  insert("div", data-ur-carousel-component:"dot", data-ur-state:"inactive")
                }
              }
            }
          }
        }
      }

      # Top Selling
      $("./div[@id='right_container']"){
        $("./div[@id='BodyContainer_arrayContainer']"){
          $("./div"){
            $("./div[@class='heading_blue']"){
              $("h3"){
                text(){
                  replace("Selling ", "")
                  replace(":", "")
                }
              }
            }
            $("./div[@class='inner_section']"){
              $("./ul"){
                move_here("../../div[@class='heading_blue']/div[@class='link']")
                $("./div"){
                  name("li")
                  $("./a"){
                    inner("")
                    insert("span", class:"mw_icon")
                    insert("span", class:"mw_text", "Shop All")
                  }
                }
              }
            }
            $("./div[@class='heading_blue']"){
              remove("./div")
            }
          }
        }
      }

    }
  }

}