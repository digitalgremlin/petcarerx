$("./body"){
  
  # IDENTIFYING THE PAGE
  attribute("id", "mw_aquatic_center_page")

  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']//div[@id='body_container']/div/div"){

      # Remove unnecessary blocks
      remove("./div[@id='left_containet']")
      

      $("./div[@id='right_container']"){

        remove("./div[@class='floatL']")

        # Breadcrumbs
        $("./div[@class='bredcrumb_outer']"){
          $("./div"){
            wrap_text_children("span")
            remove("./span")
            insert("ul"){
              move_here("../a|../strong")
              $("./a|./strong"){
                wrap("li")
              }
              $("./li[position()>1]"){
                $("./a|./strong"){
                  $text = fetch("text()")
                  $text2 = concat(" / ", $text)
                  text($text2)
                  text(){
                    replace("&amp;", "&")
                  }
                }
              }
            }
          }
        }

        # Categories
        insert("div", class:"mw_categories"){
          insert("div", class:"mw_title"){
            move_here("../../div[contains(@class, 'heading')]//h3")
            $("./h3"){
              text(){
                replace(":", "")
                replace("Aquariums & Furniture Main Categories", "Aquariums & Furniture")
              }
            }
          }
          insert("div", class:"mw_content"){
            insert("ul"){
              move_here("../../../div[@class='prod_cat']/div/ul/li")
              $("./li"){
                attribute("view", "front")
                insert("div", class:"mw_front"){
                  move_here("../div[@class='thumb_nail']")
                  move_here("../h5")
                  $("./h5"){
                    name("div")
                  }
                  $(".//a"){
                    name("span")
                    remove("./@href")
                    attribute("class", "mw_front_categorie")
                  }
                }
                insert("div", class:"mw_back"){
                  move_here("../div[@class='content']")
                  $("./div[@class='content']"){
                    insert("div", class:"mw_top"){
                      insert("span", class:"mw_back_categorie"){
                        text("BACK TO COVER")
                      }
                    }
                    insert("div", class:"mw_middle"){
                      move_here("../div[@class='h4']")
                      move_here("../ul")
                      $("./div[@class='h4']"){
                        text(){
                          replace("Shop ",  "")
                          replace(":",  "")
                        }
                      }
                    }
                    insert("div", class:"mw_bottom"){
                      move_here("../div[@class='shop_all']")
                    }
                  }
                }
              }
            }
          }
        }
        remove("./div[contains(@class, 'heading')]")
        remove("./div[@class='prod_cat']")

        # Top Flea & Tick
        insert("div", class:"mw_top_flea_tick"){
          insert("div", class:"mw_title"){
            move_here("../../div[@class='buy_now_section']/div[1]/ul/li[@class='active']/a/span")
            $("./span"){
              name("h3")
            }
          }
          insert("div", class:"mw_content"){
            move_here("../../div[@class='buy_now_section']/div[2]//div[@id='tab_container']/div[1]/ul")
            $("./ul/li"){
              remove("./a")
              remove("./div[@class='buy_now']")
              $("./em"){
                name("h5")
              }
            }
          }
        }
        remove("./div[@class='buy_now_section']")

      }

    }
  }

}