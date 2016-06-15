function localstorageIni() {
  jQuery.getJSON( "http://cn.convive.io/wp-json/wp/v2/posts/?filter[orderby]=modified&filter[posts_per_page]=1", function( data ) {
    console.log(data[0].modified);
             //das ist für die gecacheten wp-posts
    localStorage.getItem("version");
    if (localStorage.getItem("version")!=data[0].modified){
      console.log("cache cleared")
      localStorage.clear();
      localStorage.setItem("version",data[0].modified);
    }
  });
  if (localStorage.getItem("lang") === null){
    console.log(navigator.language || navigator.userLanguage);
    var lang = navigator.language || navigator.userLanguage;
    localStorage.setItem("lang",JSON.stringify('de_DE'));
      if (lang=='de'){
        localStorage.setItem("lang",JSON.stringify('de_DE'));
        localStorage.setItem("lang_wp",321);
        localStorage.setItem("translation", $.getJSON( "http://cn.convive.io/wp-json/wp/v2/posts/321" ));
    }
      else if (lang=='fr'){
        localStorage.setItem("lang",JSON.stringify('fr_FR'));
        localStorage.setItem("lang_wp",720);
        localStorage.setItem("translation", $.getJSON( "http://cn.convive.io/wp-json/wp/v2/posts/720" ));
    }
      else if (lang=='es'){
        localStorage.setItem("lang",JSON.stringify('es_ES'));
        localStorage.setItem("lang_wp",722);
        localStorage.setItem("translation", $.getJSON( "http://cn.convive.io/wp-json/wp/v2/posts/722" ));
    }
      else {
        localStorage.setItem("lang",JSON.stringify('en_EN'));
        localStorage.setItem("lang_wp",323);
        localStorage.setItem("translation", $.getJSON( "http://cn.convive.io/wp-json/wp/v2/posts/323" ));
    }
  };
}
