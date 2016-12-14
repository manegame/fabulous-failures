(function () {

    "use strict";
  
    // Require jQuery
    global.$              = require("jquery");

    var classes = ["slant-0", "slant-2", "slant-3", "slant-4", "slant-5", "slant-6", "slant-7", "slant-8", "slant-9", "slant-10", ];

    function split () {
        $('h1').html(function (i, html) {
            // Split characters
            var chars = $.trim(html).split("");
            return '<span class="letter">' + chars.join('</span><span class="letter">') + '</span>';
        });
    }

    function addClasses () {
        $('.letter').each(function(){
            var randomClass = classes[Math.floor((Math.random() * classes.length))];
            $(this).addClass(randomClass);
        });
        $('.titles').show();
    }

    $(function () {

        console.log('HEY');

        // Before displaying the page, do this
        split();
        addClasses();

        // Then this
        $('h1').on('mouseover', function(){
            var info = $(this).attr('class');
            $('.info').load('descriptions/'+info+'.txt');
        });
    });

}());