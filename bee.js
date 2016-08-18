$(document).ready(function() {
 	
	var terms = ["HTML5", "javascript", "Aston Villa", "Wordpress", "Tea", "PHP", "Knitting", "Sass", "Responsive Design", "jQuery", "CSS3", "Shopify", "Jekyll", "Nintendo"];

    function rotateTerm() {
      var ct = $("#rotate").data("term") || 0;
      $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(2000).fadeOut(200, rotateTerm);
    }
  $(rotateTerm);

  });
