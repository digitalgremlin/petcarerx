$("./body"){
  
  # IDENTIFYING THE PAGE
  attribute("id", "mw_aquarium_under_30_page")

  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']//div[@id='body_container']/div"){

      # Remove unnecessary blocks
      remove("./script")
      remove("/html/head/script[contains(@src, 'js/tabs.js')]")

      # Breadcrumbs
      move_here("./div[@id='right_container']/div[@class='bredcrumb']")
      $("./div[@class='bredcrumb']"){
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

      # Title
      move_here("./div[@id='right_container']/h1")

      # Tabs
      insert("div", class:"mw_tabs"){
        attribute("data-ur-set", "tabs")
        insert("div", class:"mw_togglers"){
          # Products
          insert("div", class:"mw_products"){
            attribute("data-ur-tabs-component", "button")
            attribute("data-ur-tab-id", "mw_tab1")
            attribute("data-ur-state", "enabled")
            move_here("../../../div[@id='right_container']/div/div[@class='tabs']/ul/li[1]/a/span/span")
          }

          # Information
          insert("div", class:"mw_information"){
            attribute("data-ur-tabs-component", "button")
            attribute("data-ur-tab-id", "mw_tab2")
            attribute("data-ur-state", "disabled")
            move_here("../../../div[@id='right_container']/div/div[@class='tabs']/ul/li[2]/a/span/span")
            $("./span"){
              text(){
                replace(/Information(.*)\s\((.*)\)/, "Information ($2)")
              }
            }
          }

          # Filters
          insert("div", id:"mw_button_filters"){
            attribute("data-ur-state", "disabled")
            insert("span", "F")
          }
        }
        insert("div", class:"mw_contents"){
          # Filters
          insert("div", id:"mw_content_filters"){
            attribute("data-ur-state", "disabled")
            insert("div", class:"mw_sort_by"){
              move_here("../../../../div[@id='right_container']/div/div[@class='tabs_content']/div/div/div[1]/div[1]/span[@class='short_by']")
              move_here("../../../../div[@id='right_container']/div/div[@class='tabs_content']/div/div/div[1]/div[1]/div[@class='select_box']")
              $("./span"){
                text("Sort By")
              }
              $("./div"){
                remove("./select/@class")
                remove("./div")
              }
            }
            insert("div", class:"mw_narrow_your_results"){
              move_here("../../../../div[@id='left_containet']/div/div")
              $("./div"){
                remove("./div[@id='BodyContainer_PFilter_HeaderText']")
                remove("./h2")
                remove("./h3")
                remove("./div[@class='RemoveClass']")
                $("./span[@class='narrow_results']"){
                  text(){
                    replace(":", "")
                  }
                }
                insert("ul", class:"mw_filters"){
                  move_here("../ul[not(@class='mw_filters')]")
                  attribute("data-ur-set", "tabs")
                  $("./ul"){
                    name("li")
                    $index = index()
                    $("./li[@class='sub_heading']"){
                      name("div")
                      attribute("data-ur-tabs-component", "button")
                      attribute("data-ur-tab-id", concat("mw_tab3_", $index))
                    }
                    insert("ul"){
                      attribute("data-ur-tabs-component", "content")
                      attribute("data-ur-tab-id", concat("mw_tab3_", $index))
                      move_here("../li")
                    }
                  }
                }
              }
            }
          }

          # Products
          insert("div", class:"mw_products"){
            attribute("data-ur-tabs-component", "content")
            attribute("data-ur-tab-id", "mw_tab1")
            attribute("data-ur-state", "enabled")
            move_here("../../../div[@id='right_container']/div/div[@class='tabs_content']/div/div/div[1]")
            $("./div"){
              $("./div[@class='pagination_box']"){
                $("./div[@class='page_top']/ul"){
                  remove("./li[1]")
                  remove("./li[@id='BodyContainer_mypaging_viewallli']")
                }
              }
              remove("./div[@class='compare_items_list']")
              $("./div[@class='common_box_outer']"){
                $("./div"){
                  $("./ul[1]"){
                    move_here("../ul[position()>1]/li")
                    $("./li"){
                      remove("./span")
                      remove("./div[@class='buy_now']")
                      remove("./div[@class='compare_check']")
                      $("./div[2]"){
                        move_here("../div[3]/div")
                      }
                    }
                  }
                  remove("./ul[position()>1]")
                }
              }
            }
          }

          # Information
          insert("div", class:"mw_information"){
            attribute("data-ur-tabs-component", "content")
            attribute("data-ur-tab-id", "mw_tab2")
            attribute("data-ur-state", "disabled")
            move_here("../../../div[@id='right_container']/div/div[@class='tabs_content']/div/div/div[1]")
            $("./div"){
              $("./div[@class='pagination_box']"){
                remove("./span[@class='short_by']")
                remove("./div[@class='select_box']")
                $("./div[@class='page_top']/ul"){
                  remove("./li[1]")
                  remove("./li[@id='BodyContainer_infoPagingContainer_viewallli']")
                }
              }
              $("./div[@class='article_list_outer']"){
                $("./ul"){
                  $("./li"){
                    remove("./div[@class='description']/a")
                  }
                }
              }
            }
          }

        }
      }
      remove("./div[@id='left_containet']")
      remove("./div[@id='right_container']")

    }
  }

}