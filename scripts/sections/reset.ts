# ------------------------------------------------------------------------------
# Needed for Perfect Proxy
# ------------------------------------------------------------------------------

rewrite_links()
absolutize_srcs()
remove_html_comments()
remove_all_styles()

# insert our css, js
add_assets()

# insert meta tags i.e. viewport
insert_mobile_meta_tags()

# Late load all the images on the site
# lateload()

$("./body"){
  
  # Add Javascript
  # insert("script", src:asset('javascript/main.js'), data-keep:"true")

  # Table dump
  table_dump(".//table")

  # Remove css inline
  remove(".//@style")

  # Remove span empty
  remove(".//span[@class='clear']")

  # Remove unecessary attributes
  remove(".//@width")
  remove(".//@height")
  remove(".//@cellpadding")
  remove(".//@cellspacing")
  remove(".//@colspan")
  remove(".//@bgcolor")
  remove(".//@border")
  remove(".//@align")
  remove(".//@valign")
  remove(".//@color")

}

# Remove unecessary blocks
$("./head"){
  remove("./script[contains(@src, 'common/js/dropdown.js')]")
  remove("./script[contains(@src, 'common/js/master.js')]")
  remove("./script[contains(@src, 'prx_home.js')]")
  remove("./script[contains(@src, 'default.js')]")
  remove("./link[contains(@href, 'hp_personalize.css')]")
}
$("./body"){
  remove("./script[contains(text(), 'petcarerx/live.js')]")
  remove("./script[contains(text(), 'mboxCreate')]")
  remove("./script[contains(text(), 'mboxCreate')]")
  remove("./div[@class='footet_shadow']")
  remove("./div[@id='outer_layout']/form/fieldset/div[last()]")
}

# Basic Structure
$("./body"){
  $("./div[@id='outer_layout']/form/fieldset"){

    add_class("mw_main")
    attribute("id", "view")
    name("div")

    # Menu
    insert("div", id:"mw_menu"){
      insert("div", class:"mw_content")
    }

    # Main Content
    insert("div", id:"mw_main_content"){
      insert("div", class:"mw_content"){
        
        # Main Head
        insert("div", class:"mw_main_head"){
          insert("div", class:"mw_content")
        }

        # Main Content
        insert("div", class:"mw_main_content"){
          insert("div", class:"mw_content")
        }

        # Main Footer
        insert("div", class:"mw_main_footer"){
          insert("div", class:"mw_content")
        }
      }
    }

    # Shopping Cart
    insert("div", id:"mw_shopping_cart"){
      insert("div", class:"mw_content")
    }

  }
}