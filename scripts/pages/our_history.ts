$("./body"){
  
  # IDENTIFYING THE PAGE
  attribute("id", "mw_our_history_page")

  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_main_content']//div[@id='body_container']"){

      # Remove unnecessary blocks
      remove("./div[@id='left_containet']")

      $("./div"){
        
        # Breadcrumps and Banner
        $("./div[@class='outer_banner']"){
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
        }

        # Content
        $("./div[@id='about_us']"){
          attribute("data-ur-set", "toggler")
          $("./div[1]"){
            $("./div[@class='heading']"){
              inner("<h3>Our History</h3>")
            }
            $("./div[@class='inner_section']"){
              copy_to("../../div[2]", "top")
              remove("./p[2]")
              remove("./object")
            }
          }
          $("./div[2]"){
            attribute("data-ur-toggler-component", "content")
            $("./div[1]"){
              remove("./p[1]")
              remove("./p[1]")
            }
            $("./div[2]"){
              inner("<h3>Our Mission</h3>")
            }
          }
          insert("div", class:"mw_more"){
            insert("span", "Read More"){
              attribute("data-ur-toggler-component", "button")
            }
          }
        }

      }

    }
  }

}