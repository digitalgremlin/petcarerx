# Mappings

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($path) {

      # PAGE-TYPE: Aquatic Center or Aquariums & Furniture
      # http://www.petcarerx.com/catalog/category.aspx?oid=312
      with(/\/catalog\/category\.aspx\?oid\=([0-9])/) {
        log("--> Importing pages/aquatic_center.ts in mappings.ts")
        @import pages/aquatic_center.ts
      }

      # PAGE-TYPE: Aquariums Under 30 gal.
      # http://www.petcarerx.com/catalog/browse.aspx?oid=356&meta=aquariums-under-30-gal
      # http://www.petcarerx.com/catalog/browse.aspx?oid=356&meta=aquariums-under-30-gal&Price=6|60
      with(/\/catalog\/browse\.aspx\?oid\=([0-9])(.*)meta\=(.*)/) {
        log("--> Importing pages/aquarium_under_30.ts in mappings.ts")
        @import pages/aquarium_under_30.ts
      }

      # PAGE-TYPE: Product Page
      # http://www.petcarerx.com/catalog/productdetails.aspx?pid=19125&k=aqueon-mini-bow-desktop-aquarium-kit
      with(/\/catalog\/productdetails\.aspx\?pid\=([0-9])(.*)k=(.*)/) {
        log("--> Importing pages/product.ts in mappings.ts")
        @import pages/product.ts
      }

      # PAGE-TYPE: Cart Page
      # http://www.petcarerx.com/Checkout/Cart.aspx
      with(/\/Checkout\/Cart\.aspx/) {
        log("--> Importing pages/cart.ts in mappings.ts")
        @import pages/cart.ts
      }

      # PAGE-TYPE: Our History
      # http://www.petcarerx.com/AboutUs/Default.aspx
      with(/\/AboutUs\/Default\.aspx/) {
        log("--> Importing pages/our_history.ts in mappings.ts")
        @import pages/our_history.ts
      }

      # PAGE-TYPE: Home Page
      # https://www.petcarerx.com/
      with(/\/|\/Default\.aspx/) {
        log("--> Importing pages/home.ts in mappings.ts")
        @import pages/home.ts
      }
      
      else() {
        log("--> No page match in mappings.ts")
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import pages/error.ts
  }

}