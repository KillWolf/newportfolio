	 $.noConflict();
	 jQuery(document).ready(function(){
            //Switch statement, to change the color scheme on the page, depending on the parameter. 
		 changeColor = function(scheme) {
			switch(scheme) {
				case "change1":
					jQuery('body').animate({backgroundColor: '#673AB7'}, 'slow');
					jQuery('nav').animate({backgroundColor: '#673AB7'}, 'slow');
					jQuery('.introcolor').animate({color: '#FF5722'}, 'slow');
                    jQuery('.namecchange').animate({color: '#FF5722'}, 'slow');
					jQuery('#introtext').animate({color: 'white'}, 'slow');
					jQuery('.btn-default').animate({color: 'white'}, 'slow');
                    jQuery('.cl-effect-1 a').animate({color: 'white'}, 'slow');
                    jQuery('#classadd').addClass('colorlink');
                    
					break;
				case "change2":
					jQuery('body').animate({backgroundColor: '#F44336'}, 'slow');
					jQuery('nav').animate({backgroundColor: '#F44336'}, 'slow');
					jQuery('.introcolor').animate({color: '#0bbcc9'}, 'slow');
                    jQuery('.namecchange').animate({color: '#0bbcc9'}, 'slow');
					jQuery('#introtext').animate({color: 'white'}, 'slow');
					jQuery('.btn-default').animate({color: 'white'}, 'slow');
                    jQuery('.cl-effect-1 a').animate({color: 'white'}, 'slow');
                    jQuery('#classadd').addClass('colorlink');
          
					break;
				case 'change3':
					jQuery('body').animate({backgroundColor: 'white'}, 'slow');
					jQuery('nav').animate({backgroundColor: 'white'}, 'slow');
					jQuery('.introcolor').animate({color: '#3F51B5'}, 'slow');
                    jQuery('.namecchange').animate({color: '#3F51B5'}, 'slow');
					jQuery('#introtext').animate({color: 'black'}, 'slow');
					jQuery('.btn-default').animate({color: 'black'}, 'slow');
                    jQuery('.cl-effect-1 a').animate({color: 'black'}, 'slow');
                    jQuery('#classadd').addClass('whitelink');
                    
					break;


			}
		}

        //header menu functionality, enabling all elements to scale depending on page offset

		function init() {
    	window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector(".cl-effect-1");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();

		function init2() {
    	window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector("img");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init2();


		function init3() {
    	window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector("#change");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init3();

	function init4() {
    	window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector("nav");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
	window.onload = init4();
	});	