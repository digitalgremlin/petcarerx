$("./body"){
  
  # IDENTIFYING THE PAGE
  attribute("id", "mw_product_page")

  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']//div[@id='body_container']"){

      # Remove unnecessary blocks
      remove("./div[@id='BVRRContainer']")
      remove("./div[@id='BodyContainer_reviewsdiv']")
      remove("./div[@id='filter']/div[1]")
      remove("./div[@id='filter']/div[1]")
      remove("./div/div[contains(@class, 'writeReviewPop')]/..")
      remove("./div[@class='autoship_promo_details']")
      remove("./script[last()]")
      remove("./script[last()]")

      $("./div[@id='filter']/div[@class='dog_caring']"){
        # Breadcrumps
        $("./div[@class='back_link']/div"){
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
        insert("div", class:"mw_title"){
          move_here("../div[@class='right_sec']/div[1]/div/h1")
        }

        # Gallery
        insert("div", class:"mw_gallery"){
          attribute("data-ur-set", "carousel")
          attribute("data-ur-carousel-component", "view_container")
          attribute("data-ur-id", "ProductCarousel")
          move_here("../div[@class='left_sec']/div[@class='additional_view']/ul")
          insert("div"){
            attribute("data-ur-carousel-component", "dots")
          }
          $("./ul"){
            attribute("data-ur-carousel-component", "scroll_container")
            $("./li"){
              attribute("data-ur-carousel-component", "item")
              $("../../div[data-ur-carousel-component='dots']"){
                insert("div", data-ur-carousel-component:"dot", data-ur-state:"inactive")
              }
              $("./a"){
                $rel = fetch("@rel")
                $rel {
                  # replace(/(.*)largeimage: '//cdn.petcarerx.com/img/PrdImg/408x408/19125_001_xl.jpg'}/){
                  replace(/(.*)largeimage:\s\'(.*)\'\}/, "http:$2")
                }
              }
              insert("img", src:$rel)
              remove("./a")
            }
          }
        }

        # Reviews & Price
        insert("div", class:"mw_reviews_price"){
          insert("div", class:"mw_reviews"){
            insert("ul"){
              insert("li")
              insert("li")
              insert("li")
              insert("li")
              insert("li")
            }
            insert("span", "Write the first review")
          }
          move_here("../div[@class='right_sec']/div[@class='row_c']/div[@class='price_sec']")
          $("./div[@class='price_sec']"){
            insert("div", class:"mw_row1"){
              move_here("../strong")
            }
            insert("div", class:"mw_row2"){
              move_here("../span")
            }
            remove("./small")
          }
        }

        # Options
        insert("div", class:"mw_options"){
          move_here("../div[@class='right_sec']/div[@class='opt_duration_quant']")
          $("./div/ul"){
            $("./li"){
              $("./div"){
                $("./strong"){
                  text(){
                    replace(":", "")
                  }
                }
              }
              $("./strong"){
                text(){
                  replace(":", "")
                }
              }
            }
            $("./li[last()]"){
              insert("div", class:"mw_row1"){
                insert("div", class:"mw_col1"){
                  move_here("../../strong")
                }
                insert("div", class:"mw_col2"){
                  move_here("../../input")
                  $("./input"){
                    attribute("value", "Add to Cart")
                  }
                }
              }
              insert("div", class:"mw_row2"){
                move_here("../em")
              }
            }
          }
        }

        # Free Shipping & description
        insert("div", class:"mw_free_shipping_description"){
          move_here("../div[@class='right_sec']/div[@class='row_c']/div[@class='free_shipping']")
          move_here("../div[@class='right_sec']/div[@class='row_d']")
        }

        # Links
        insert("div", class:"mw_links"){
          move_here("../div[@class='right_sec']/div[@class='livechat-container']/ul[1]")
          $("./ul"){
            move_here("../../div[@class='right_sec']/div[@class='livechat-container']/ul[1]/li")
          }
        }

        # Tabs
        insert("div", class:"mw_tabs"){
          move_here("../div[@class='right_sec']/div[@class='tab_n_content']")
          attribute("data-ur-set", "tabs")
          $("./div"){
            $("./div[@class='tabs']"){
              $("./ul"){
                $("./li[1]"){
                  attribute("data-ur-tabs-component", "button")
                  attribute("data-ur-tab-id", "tab1_product")
                  attribute("data-ur-state", "enabled")
                  remove("./@class")
                }
                $("./li[2]"){
                  attribute("data-ur-tabs-component", "button")
                  attribute("data-ur-tab-id", "tab2_product")
                  attribute("data-ur-state", "disabled")
                }
                $("./li[3]"){
                  attribute("data-ur-tabs-component", "button")
                  attribute("data-ur-tab-id", "tab3_product")
                  attribute("data-ur-state", "disabled")
                }
                $("./li"){
                  $("./a"){
                    name("div")
                    remove("./@href")
                  }
                }
              }
            }
            $("./div[@class='tab_body']"){
              $("./div/div/div"){
                $("./div[1]"){
                  attribute("data-ur-tabs-component", "content")
                  attribute("data-ur-tab-id", "tab1_product")
                  attribute("data-ur-state", "enabled")
                }
                $("./div[2]"){
                  attribute("data-ur-tabs-component", "content")
                  attribute("data-ur-tab-id", "tab2_product")
                  attribute("data-ur-state", "disabled")
                }
                $("./div[3]"){
                  attribute("data-ur-tabs-component", "content")
                  attribute("data-ur-tab-id", "tab3_product")
                  attribute("data-ur-state", "disabled")
                }
              }
            }
          }
        }

        # Also Recommended
        insert("div", class:"mw_also_recommended"){
          move_here("../div[@class='left_sec']/div[contains(@class, 'related_products')][1]")
          $("./div"){
            $("./div[@class='h3']"){
              $("./span"){
                inner("Also Recommended")
              }
            }
            $("./div[@class='content']"){
              $("./div/div/ul/li"){
                $("./span[@class='h5']"){
                  wrap("div", class:"mw_row2")
                }
                $("./div[@class='mw_row2']"){
                  move_here("../div[@class='row']/div[@class='poll']")
                }
                remove("./span")
                remove("./div[@class='buy_now']")
              }
            }
          }
        }

        # Remove unnecessary blocks
        remove("./div[@class='left_sec']")
        remove("./div[@class='right_sec']")
      }

    }
  }

}