var app = {};
// Global vars in here we can set up global variables
// that we can update and access from within any function.
var config = {
    public_spreadsheet_url: 'https://docs.google.com/spreadsheets/d/199UDsNFKsaWDLtZGOcUGiXRzwaYOaxrcwhPAqZqzDfg/pubhtml?gid=2093684861&single=true', //This is the URL for the spreadhseet
};
(function() {
    "use strict";
    //--------------------------
    // GLOBAL-ISH VARIABLES
    //--------------------------
    var Yes;
    var No;
    var YesPercent;
    var NoPercent;
    var Total;
    var data;

    // To Keep things neat let's separate out the functions to make them easier to find.

    //--------------------------
    // GLOBAL  FUNCTIONS
    //--------------------------

    this.init = function() {
        console.log('init') //This bit initialises the tabletop script
        Tabletop.init({
            key: config.public_spreadsheet_url, // see tabletop.js for more info
            callback: this.showInfo,
            simpleSheet: true
        })
    };

    this.showInfo = function(data, tabletop) {
        console.log('running');
        Yes = (data[0].Total); // so this gives us the Yes var. Our data is an array in an object.
        YesPercent = (data[0].Percent); // so this gives us the Yes var. Our data is an array in an object.
        No = (data[1].Total); // our object is the var 'data' and No is the [1] array. Total is the bit of data we want
        NoPercent = (data[1].Percent); // our object is the var 'data' and No is the [1] array. Total is the bit of data we want
        Total = (data[2].Total); //this is it outputting the data
        console.log(Yes); // This logs the Yes data
        console.log(No);
        console.log(YesPercent); // This logs the Yes data
        console.log(NoPercent);
        console.log(Total);
        $('.question_container').animate({ opacity: 1 }, 700);
}

    //------------------------------
    // CALLING FUNCTIONS ON EVENTS
    //------------------------------
    $('.button').click(function() {
      $('.question_container').animate({ opacity: 0 }, 700);
      $('.answer_container').css("display", "block").delay(700).animate({ opacity: 1 }, 700);

        //     top: '-100vh'
        // }, 500);
        //
        // $('.answer_container').stop(true, true).delay(750).animate({
        //     top: '0'
        // }, 500);

        if( $(this).hasClass('yes')){
            Yes++;
        }else{
            No++;
        }

        $('.happy').css("width", YesPercent + "%"); //This Sets the width of the Div
        $('.happy-numbers').html(Yes); //This Sets the width of the Div
        $('.sad').css("width", NoPercent + "%");
        $('.sad-numbers').html(No); //This Sets the width of the Div


    });

}).apply(app);

//------------------------------
// CALLING FUNCTIONS ON DOC LOAD
//------------------------------

$(document).ready(function() {
    console.log('fart');
    app.init();
});
