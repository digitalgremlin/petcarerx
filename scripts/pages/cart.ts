$("./body"){
  
  # IDENTIFYING THE PAGE
  attribute("id", "mw_cart_page")

  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']//div[@id='body_container']/div[@id='checkout_page']"){

      # Remove unnecessary blocks
      remove("./link")
      remove("./script")
      remove("./div/div[@class='left_container']/div[@class='autoship_promo_details']")
      remove("./div/div[@class='left_container']/script")
      remove("./div/div[@class='right_container']")
      remove("./div[2]")

      $("./div/div"){

        # Continue shopping
        move_here("./div[@class='continue_shopping']", "top")
        $("./div[@class='continue_shopping']"){
          $("./a"){
            text("<  Continue Shopping")
          }
        }

        # Points and Checkout Button
        $("./div[@class='thank_sec']"){
          $("./div[@class='right']"){
            $("./div/a"){
              text("CHECKOUT")
            }
          }
        }

        # Your Items
        $("./div[@class='item_price_section']"){
          $("./div"){
            $("./div[1]"){
              inner("<h2>Your Items</h2")
            }
            $("./div[2]"){
              $("./div"){
                $("./div"){
                  $("./div"){
                    insert("div", class:"mw_row1"){
                      move_here("../div[1]")
                      move_here("../div[1]")
                    }
                    insert("div", class:"mw_row2"){
                      move_here("../div[1]")
                      move_here("../div[1]")
                      move_here("../div[1]")
                      $("./div[1]"){
                        insert_top("span", "Quantity:")
                      }
                      $("./div[2]"){
                        insert_top("span", "Unit Price:")
                      }
                      $("./div[3]"){
                        insert_top("span", "Total:")
                      }
                    }
                  }
                }
              }
            }
          }
        }

        # Discounts and Promotions
        $("./div[@class='order_box']"){
          $("./div[@class='order_btm']/div/div/ul"){
            attribute("data-ur-set", "tabs")
            attribute("data-ur-closeable", "true")
            $("./li[1]"){
              $("./h6"){
                attribute("data-ur-tabs-component", "button")
                attribute("data-ur-tab-id", "tab1_cart")
              }
              insert("div", class:"mw_content"){
                attribute("data-ur-tabs-component", "content")
                attribute("data-ur-tab-id", "tab1_cart")
                move_here("../div[@class='tooltip']")
                move_here("../div[@class='textbox']")
                move_here("../p")
              }
            }
            $("./li[2]"){
              $("./h6"){
                attribute("data-ur-tabs-component", "button")
                attribute("data-ur-tab-id", "tab2_cart")
              }
              insert("div", class:"mw_content"){
                attribute("data-ur-tabs-component", "content")
                attribute("data-ur-tab-id", "tab2_cart")
                move_here("../div[@class='tooltip']")
                move_here("../div[@class='textbox']")
                move_here("../p")
              }
            }
            $("./li[3]"){
              $("./h6"){
                attribute("data-ur-tabs-component", "button")
                attribute("data-ur-tab-id", "tab3_cart")
              }
              insert("div", class:"mw_content"){
                attribute("data-ur-tabs-component", "content")
                attribute("data-ur-tab-id", "tab3_cart")
                move_here("../div[@class='tooltip']")
                move_here("../strong")
                move_here("../p")
              }
            }
          }
        }

        # Order Summary
        $("./div[@class='order_box pad_top']"){
          $("./div[contains(@class, 'order_sumry')]"){
            $("./div[@class='left_sec']/div"){
              remove("./p[3]")
              remove("./ul")
            }
            $("./div[@class='right_sec']"){
              $("./div[2]"){
                remove("./small")
                $("./div"){
                  $("./a"){
                    inner("CHECKOUT")
                  }
                }
                $("./a"){
                  inner("CHECKOUT WITH PAYPAL")
                  wrap("div", class:"mw_paypal")
                }
              }
            }
          }
        }

      }

    }
  }

}