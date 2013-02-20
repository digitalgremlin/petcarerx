$("./body"){
  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_shopping_cart']/div"){
      move_here("../../div[@id='layout']/div/div[@id='header']/div[@class='column_right']/div/div/div/div")
      $("./div"){
        $("./span[@class='h2']"){
          wrap_text_children("span")
          move_to("..")
        }
        insert_top("div", class:"mw_top"){
          insert("div"){
            insert("span", "YOUR")
            insert("span", "Shopping Cart")
          }
          move_here("../div[@class='shopping_cart']")
          $("./div"){
            $("./strong"){
              $("./a"){
                $("./small"){
                  move_to("../..")
                }
                remove()
              }
            }
          }
        }
        remove("./p")
        remove("./div[last()]")
        $("./div[@class='mini_cart_sec']"){
          $("./div[@class='mid_bg png']"){
            remove("./div[@class='top_row']")
            $("./div/div[@class='col06']"){
              move_here("../../div[@class='botm_btn_row']/a[1]")
              $("./a"){
                text("CHECKOUT >")
                wrap("span", class:"mw_button")
              }
              $("./strong|./span"){
                wrap("div")
              }
            }
            remove("./div[@class='botm_btn_row']")
            $("./div[@class='common_row']"){
              inner("<span>ITEMS</span>")
            }
            $("./ul"){
              $("li"){
                $("./div[@class='col01']"){
                  $("./a|./span"){
                    wrap("div")
                  }
                }
                insert("div", class:"mw_bottom"){
                  move_here("../div[@class='col02']")
                  move_here("../div[@class='col03']")
                  move_here("../div[@class='col04']")
                  $("./div[@class='col02']"){
                    insert_top("span", "Qty:")
                  }
                  $("./div[@class='col03']"){
                    insert_top("span", "Price:")
                  }
                  $("./div[@class='col04']"){
                    insert_top("span", "Total:")
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}