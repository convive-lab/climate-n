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
