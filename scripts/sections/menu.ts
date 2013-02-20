$("./body"){
  $("./div[@id='outer_layout']/form/div[@id='view']"){
    $("./div[@id='mw_menu']/div"){

      # Search
      move_here("../../div[@id='layout']/div/div[@id='header']/div[@class='column_left']")
      $("./div[1]"){
        attribute("class", "mw_search")
        remove("./div[@class='logo']")
        remove("./div[@class='cols01']")
      }

      # Categories
      move_here("../../div[@id='layout']/div/div[@id='menu']")
      $("./div[@id='menu']"){
        insert_top("h3", "CATEGORIES")
        $("./ul"){
          attribute("data-ur-set", "tabs")
          attribute("data-ur-closeable", "true")
          $("./li[count(./div)>0]"){
            $index = index()
            $("./strong"){
              attribute("data-ur-tabs-component", "button")
              attribute("data-ur-tab-id", concat("mw_categorie", $index))
              $("./a"){
                name("span")
                remove("./@href")
                remove("./span")
              }
            }
            $("./div"){
              attribute("data-ur-tabs-component", "content")
              attribute("data-ur-tab-id", concat("mw_categorie", $index))
              remove("./span[@class='bot_curve']")
              $("./div"){
                $("./div"){
                  
                  # Remove unnecessary blocks
                  remove("./span")
                  remove("./div[contains(@class, 'featuraed_product')]")
                  $(".//span[@class='h4']"){
                    text(){
                      replace(":", "")
                    }
                  }
                  
                  # Standard 1
                  $("./div[contains(@class, 'half_list_sm2')][2]"){
                    $("./div/ul/li"){
                      move_to("../../../../div[1]/div/ul")
                    }
                    remove()
                  }
                  $("./div[contains(@class, 'half_list_sm2')]"){
                    move_here("./div/span")
                    move_here("./div/ul")
                    remove("./div[1]")
                  }

                  # Standard 2
                  $("./div[contains(@class, 'half_list_sm3')][1]"){
                    move_here("./div/span")
                    move_here("./div/ul")
                    remove("./div[1]")
                    $("./ul"){
                      $("./li[@class='subhead']"){
                        $("./strong"){
                          name("span")
                          add_class("h5")
                        }
                        insert("ul")
                        $("./a"){
                          text(){
                            replace("»", "")
                          }
                          wrap("li", class:"mw_all"){
                            move_to("../ul")
                          }
                        }
                        $("./ul"){
                          move_here("../../li[not(contains(@class, 'subhead'))]")
                        }
                      }
                      insert("li", class:"subhead"){
                        insert("span", class:"h5", "Fish")
                        insert("ul"){
                          insert("li")
                        }
                      }
                    }
                  }
                  $("./div[contains(@class, 'half_list_sm3')][2]"){
                    $("./div/ul"){
                      $("./li[1]/p/a"){
                        text("Aquatic Center")
                        move_to("../../../../../../div[1]/ul/li[2]/ul/li")
                      }
                      remove("./li[1]")
                      remove("./li[1]")
                      $("./li[1]"){
                        $("./strong"){
                          name("span")
                          add_class("h5")
                        }
                        insert("ul")
                        move_to("../../../../div[1]/ul")
                      }
                      $("./li"){
                        move_to("../../../../div[1]/ul/li[3]/ul")
                      }
                    }
                    remove()
                  }

                  # Standard 3
                  $("./div[contains(@class, 'half_list_sm4')][1]"){
                    move_here("./div/span")
                    move_here("./div/ul")
                    remove("./div[1]")
                  }
                  $("./div[contains(@class, 'half_list_sm4')][2]"){
                    $("./div/ul/li"){
                      move_to("../../../../div[2]/ul")
                    }
                    remove()
                  }

                  # Standard 4
                  $("./div[contains(@class, 'half_list_sm5')]"){
                    move_here("./div/span")
                    move_here("./div/ul")
                    remove("./div[1]")
                  }

                  # Standard 5
                  $("./div[contains(@class, 'half_list_sm6')]"){
                    move_here("./div/span")
                    move_here("./div/ul")
                    remove("./div[1]")
                  }

                  # Standard 6
                  $("./div[contains(@class, 'half_list_sm7')][2]"){
                    $("./div/ul/li"){
                      move_to("../../../../div[1]/div/ul")
                    }
                    remove()
                  }
                  $("./div[contains(@class, 'half_list_sm7')]"){
                    move_here("./div/span")
                    move_here("./div/ul")
                    remove("./div[1]")
                  }
                  
                }
              }
            }

            # Applies tabs
            $("./div/div/div"){
              attribute("data-ur-set", "tabs")
              attribute("data-ur-closeable", "true")
              $("./div"){
                $index2 = index()
                $("./span"){
                  attribute("data-ur-tabs-component", "button")
                  attribute("data-ur-tab-id", concat(concat(concat("mw_categorie", $index), "_"), $index2))
                }
                $("./ul"){
                  attribute("data-ur-tabs-component", "content")
                  attribute("data-ur-tab-id", concat(concat(concat("mw_categorie", $index), "_"), $index2))
                  $("./li[@class='subhead']"){
                    $(".."){
                      insert("div"){
                        attribute("data-ur-set", "tabs")
                        attribute("data-ur-closeable", "true")
                        move_here("../li")
                      }
                    }
                    $index3 = index()
                    $("./span"){
                      attribute("data-ur-tabs-component", "button")
                      attribute("data-ur-tab-id", concat(concat(concat(concat(concat("mw_categorie", $index), "_"), $index2), "_"), $index3))
                    }
                    $("./ul"){
                      attribute("data-ur-tabs-component", "content")
                      attribute("data-ur-tab-id", concat(concat(concat(concat(concat("mw_categorie", $index), "_"), $index2), "_"), $index3))
                    }
                  }
                }
              }
            }
          }
          $("./li[last()]"){
            $("./a"){
              wrap("strong")
            }
          }
        }
      }

      # Others Links
      insert("div", class:"mw_other_links"){
        insert("h3", "OTHER LINKS")
        move_here("../../../div[@id='layout']/div/div[@id='header']/ul")
        $("./ul/li[last()]/strong"){
          inner("Call Us")
          name("a")
          attribute("href", "/")
        }
        $("./ul/li"){
          insert_top("span", class:"mw_icon")
        }
      }

    }
  }
}