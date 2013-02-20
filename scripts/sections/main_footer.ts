$("./body"){
  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']/div/div[@class='mw_main_footer']/div"){
      
      # Top
      insert("div", class:"mw_top"){
        insert("span", class:"mw_logo")
      }

      # Middle
      insert("div", class:"mw_middle"){
        insert("div", class:"mw_contracted"){
          # Toggler
          insert("div", id:"mw_button_footer"){
            insert("span", "EXPAND FOOTER")
          }
          # E-mail
          insert("div", class:"mw_email"){
            move_here("../../../../../../../div[@id='outer_footer']/div/div[1]//div[@class='sign_up_box']")
            $("./div"){
              $("./h4"){
                inner("Sign Up for our Email List")
              }
              $("./input"){
                attribute("value", "Sign Up")
                wrap("span", class:"mw_button")
              }
            }
          }
          # Links
          insert("div", class:"mw_links"){
            move_here("../../../../../../../div[@id='outer_footer']/div/div[1]//div[@class='footer_left_sec']")
            remove("./div[2]")
            $("./div"){
              attribute("data-ur-set", "tabs")
              attribute("data-ur-closeable", "true")
              insert("ul", class:"mw_list"){
                # About PetCareRx
                insert("li"){
                  insert("span", "About PetCareRx")
                  insert("ul"){
                    move_here("../../../ul[1]/li[count(./a)>0]")
                  }
                }
                # Customer Service
                insert("li"){
                  insert("span", "Customer Service")
                  insert("ul"){
                    move_here("../../../ul[2]/li[count(./a)>0]")
                  }
                }
                # PetCareRx Blogs
                insert("li"){
                  insert("span", "PetCareRx Blogs")
                  insert("ul"){
                    move_here("../../li[2]/ul/li[last()]")
                  }
                }
                # PetCareRx University
                insert("li"){
                  insert("span", "PetCareRx University")
                  insert("ul"){
                    move_here("../../../ul[3]/li[count(./a)>0][position()<7]")
                  }
                }
                # Account Management
                insert("li"){
                  insert("span", "Account Management")
                  insert("ul"){
                    move_here("../../../ul[3]/li[count(./a)>0]")
                  }
                }
                # Product Categories
                insert("li"){
                  insert("span", "Product Categories")
                  insert("ul"){
                    move_here("../../../ul[4]/li[count(./a)>0]")
                  }
                }

                # Applies tabs
                $("./li"){
                  $index = index()
                  $("./span"){
                    attribute("data-ur-tabs-component", "button")
                    attribute("data-ur-tab-id", concat("mw_link", $index))
                  }
                  $("./ul"){
                    attribute("data-ur-tabs-component", "content")
                    attribute("data-ur-tab-id", concat("mw_link", $index))
                  }
                }
              }
              remove("./ul[not(@class='mw_list')]")
            }
          }
        }
      }

      # Bottom
      insert("div", class:"mw_bottom"){

        # Credit Cards
        insert("div", class:"mw_credit_cards"){
          move_here("../../../../../../div[@id='outer_footer']/div/div[2]/div[1]/ul")
        }
        
        # Powered By
        insert("div", class:"mw_powered_by"){
          insert("p"){
            inner("Mobile site powered by <a href=\"http://m.moovweb.com/\" target=\"_blank\">Moovweb</a>")
          }
        }

      }

    }
  }
}