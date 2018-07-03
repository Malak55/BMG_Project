// *************************************************
// Class - Coding Bootcamp MW 
// Team Members: Matt Schiereck, Rod Skoglund, Danny Zamora 
// Team Name: BMG; Project
// Project #1 - Culmination Destination
// File: app.js
// *************************************************

// Declare links to APIs, etc as needded

//**********************************************************
// Declare global variables
//**********************************************************

    // Define displayState as an object with Air, Hotel and Event selection state
    var displayState = {
        airSelected: false,
        hotelSelected: false,
        eventSelected: false
    };

    // Define selected options object to store options selected
    var currentOptions = {
        airInfo: {
            airline: "",
            pricePerTravler: 0
            // other Info?????
        },
        hotelInfo: {
            hotel: "",
            pricePerDay: 0,
            location: "",
            hotel_lat: "",
            hotel_lon: ""
            // other Info?????
        },
        eventInfo: {
            event: "",
            pricePerTravler: 0,
            eventDate: "01/01/1900",
            event_lat: "",
            event_lon: ""
            // other Info?????
        }
    };

    // Object definitions for Air, Hotel and Event
    var airOptionItem = {
        optionNum: 0,
        carrier: "",
        departTime: "hh:mm A",
        arrivalTime: "hh:mm A",
        duration: "0h",
        numStops: "Nonstop",
        rating: "Very Good Flight (8/10)",
        fareType: "Round Trip",
        price: "0"
    };

    var hotelOptionItem = {
        optionNum: 0,
        hotelName: "",
        location: "Address",
        phoneNum: "888-000-0000",
        rating: "4.3/5 Excellent",
        price: "0"
    };

    var eventOptionItem = {
        optionNum: 0,
        event: "test",
        provider: "test",
        location: "Address",
        duration: "0h",
        rating: "Very Good Flight (8/10)",
        description: "Round Trip",
        price: "0"
    };

    // Arrays to store Air, Hotel and Event options
    var airOptionList = [];
    var hotelOptionList = [];
    var eventOptionList = [];

    //test data - Delete after testing complete
    var airOptionItemTest1 = {
        optionNum: 1,
        carrier: "American Airlines",
        departTime: "09:45 AM",
        arrivalTime: "11:30 AM",
        duration: "1h 45m",
        numStops: "Nonstop",
        rating: "Very Good Flight (8/10)",
        fareType: "Round Trip",
        price: "$422"
    }

    var airOptionItemTest2 = {
        optionNum: 2,
        carrier: "Southwest Airlines",
        departTime: "09:45 AM",
        arrivalTime: "11:30 AM",
        duration: "1h 45m",
        numStops: "Nonstop",
        rating: "Very Good Flight (8/10)",
        fareType: "Round Trip",
        price: "$422"
    }

    var hotelOptionItem1 = {
        optionNum: 1,
        hotelName: "Marriott Inn + Suites",
        location: "1234 W. Main Street, Overland Park Kansas",
        phoneNum: "800-123-4567",
        rating: "4.3/5 Excellent",
        price: "$136"
    };

    var hotelOptionItem2 = {
        optionNum: 1,
        hotelName: "Best Western",
        location: "1234 W. Main Street, Overland Park Kansas",
        phoneNum: "800-123-4567",
        rating: "4.3/5 Excellent",
        price: "$136"
    };

    var eventOptionItem1 = {
        optionNum: 1,
        event: "SEA LIFE Kansas City Aquarium",
        provider: "teSea Life Aquariumst",
        location: "SEA LIFE Kansas City, 2475 Grand Blvd, Kansas City 64108",
        duration: "1h 20m",
        rating: "4/5",
        description: "A wonder for all ages, SEA LIFE Kansas City Aquarium is home to more than 5,000 sea creatures. Explore interactive touch pools, walk through an underwater tunnel with 180-degree views, and get astonishingly close to a blacktip reef shark swimming alongside graceful rays in the ocean exhibit.",
        price: "$16.42"
    };

    var eventOptionItem2 = {
        optionNum: 2,
        event: "Indoor Skydiving Experience",
        provider: "iFLY Indoor Skydiving",
        location: "SEA LIFE Kansas City, 2475 Grand Blvd, Kansas City 64108",
        duration: "1h 20m",
        rating: "--",
        description: "Experience all the plummeting, free falling, and soaring sensations of skydiving without ever getting on a plane. This indoor skydiving experience puts you in a vertical wind tunnel, where you can float weightlessly in space for an unforgettable adrenaline rush in totally safe surroundings.",
        price: "$77"
    };

    airOptionList = [airOptionItemTest1, airOptionItemTest2];
    hotelOptionList = [hotelOptionItem1, hotelOptionItem2];
    eventOptionList = [eventOptionItem1, eventOptionItem2];



//**********************************************************
// Define supporting functions
//**********************************************************
    // Update Display
        //updates display based on displayState
    function updateDisplay() {
        //updates display based on displayState
        if (displayState.airSelected) {
            $("#airlineDiv").show();
        }
        else {
            $("#airlineDiv").hide();
        };

        if (displayState.hotelSelected) {
            $("#hotelDiv").show();
        }
        else {
            $("#hotelDiv").hide();
        };

        if (displayState.eventSelected) {
            $("#eventsDiv").show();
        }
        else {
            $("#eventsDiv").hide();
        };
    }; // function updateDisplay

// Define functionality to be available after the page has loaded
$(document).ready(function () { 

//**********************************************************
// Define event handlers
//**********************************************************
        
    // Air-Hotel-Event checkbox click handler
    $("#inlineCheckboxAir").on("click", function() {
        if ($("#inlineCheckboxAir").is(":checked")) {
            displayState.airSelected = true;
        }
        else {
            displayState.airSelected = false;
        }
        // console.log("Airline checkbox clicked");
        // console.log("displayState.airSelected = " + displayState.airSelected);
        // console.log("displayState.hotelSelected = " + displayState.hotelSelected);
        // console.log("displayState.eventSelected = " + displayState.eventSelected);
        // console.log("*********************************************");
    }); // inlineCheckboxAir on click

    $("#inlineCheckboxHotel").on("click", function() {
        if ($("#inlineCheckboxHotel").is(":checked")) {
            displayState.hotelSelected = true;
        }
        else {
            displayState.hotelSelected = false;
        }
        // console.log("Hotel checkbox clicked");
        // console.log("displayState.airSelected = " + displayState.airSelected);
        // console.log("displayState.hotelSelected = " + displayState.hotelSelected);
        // console.log("displayState.eventSelected = " + displayState.eventSelected);
        // console.log("*********************************************");
    }); // inlineCheckboxHotel on click
    
    $("#inlineCheckboxEvents").on("click", function() {
        if ($("#inlineCheckboxEvents").is(":checked")) {
            displayState.eventSelected = true;
        }
        else {
            displayState.eventSelected = false;
        }
        // console.log("Events checkbox clicked");
        // console.log("displayState.airSelected = " + displayState.airSelected);
        // console.log("displayState.hotelSelected = " + displayState.hotelSelected);
        // console.log("displayState.eventSelected = " + displayState.eventSelected);
        // console.log("*********************************************");
    }); // inlineCheckboxEvents on click

    // ShowOption button click
    $("#showButton").on("click", function() {
        // Declare local variables
        departureAirport = $("#depart-form").val();
        destinationAirport = $("#dest-form").val();
        departDate = $("#depart-date").val();
        returnDate = $("#return-date").val();
        numPeople = $("#FormControlSelect1").val();

        // console.log("moment().diff(departDate, 'days') = " + moment().diff(departDate, "days"));
        

        // Verify user Inputs
        var validInput = true;

        // Clear modal message
        $("#modal-text").text("");


        if (departureAirport === "") {
            validInput = false;
            $("#modal-text").append("- Please select a valid Departure Airport." + "\n");
        };

        if (destinationAirport === "") {
            validInput = false;
            $("#modal-text").append("- Please select a valid Destination Airport." + "\n");
        };

        if (departDate === "" || departDate === "mm/dd/yyy") {
            validInput = false;
            $("#modal-text").append("- Please select a valid Departure Date." + "\n");
        };

        var isDateInPast = (moment().diff(departDate, "days") > 0);
        if (isDateInPast) {
            validInput = false;
            $("#modal-text").append("- Please select a Departure Date that is today or later." + "\n");  
        }

        isDateInPast = (moment().diff(returnDate, "days") > 0);
        if (isDateInPast) {
            validInput = false;
            $("#modal-text").append("- Please select a Return Date that is today or later." + "\n");  
        }

        if (returnDate === "" || returnDate === "mm/dd/yyyy") {
            validInput = false;
            $("#modal-text").append("- Please select a valid Return Date." + "\n");
        };

        if (departDate > returnDate) {
            validInput = false;
            $("#modal-text").append("- Please select a Departure Date that is prior to the Return Date." + "\n");
        };

        if ( !displayState.airSelected && !displayState.hotelSelected && !displayState.eventSelected) {
            validInput = false;
            $("#modal-text").append("- Please select at least one from the Airline, Hotel or Event checkboxes." + "\n");
        }

        // number of people is forced to be a number - no input validation required

        if (!validInput) {
            // console.log("In showButton");
            // console.log("validInput = " + validInput);
            $("#myModal").modal();
        }
        else {
            // Clear Air, Hotel and Event table
            $(".airline-options-list").empty();
            $(".hotel-options-list").empty();
            $(".event-options-list").empty();
        // Use API's to get options
        // build Air table with options
        // build Hotel table with options
        // build Google Map with Hotel locations
        // build Event table with options
        // build Google Map with event locations

        for (var i = 0; i < airOptionList.length; i++) {
            $(".airline-options-list").append("<tr><td>" + airOptionList[i].optionNum + "</td>" + 
            "<td>" + airOptionList[i].carrier + "</td>" + 
            "<td>" + airOptionList[i].departTime + "</td>" + 
            "<td>" + airOptionList[i].arrivalTime + "</td>" + 
            "<td>" + airOptionList[i].duration + "</td>" + 
            "<td>" + airOptionList[i].numStops + "</td>" + 
            "<td>" + airOptionList[i].rating + "</td>" + 
            "<td>" + airOptionList[i].fareType + "</td>" + 
            "<td>" + airOptionList[i].price + "</td></tr>");
            
            // console.log("airOptionList[i].carrier = " + airOptionList[i].carrier);
        };

        for (var j = 0; j < hotelOptionList.length; j++) {
            $(".hotel-options-list").append("<tr><td>" + hotelOptionList[j].optionNum + "</td>" + 
            "<td>" + hotelOptionList[j].hotelName + "</td>" + 
            "<td>" + hotelOptionList[j].location + "</td>" + 
            "<td>" + hotelOptionList[j].phoneNum + "</td>" + 
            "<td>" + hotelOptionList[j].rating + "</td>" + 
            "<td>" + hotelOptionList[j].price + "</td></tr>");
    
            // console.log("hotelOptionList[j].hotelName = " + hotelOptionList[j].hotelName);
        };

        for (var k = 0; k < eventOptionList.length; k++) {
            $(".event-options-list").append("<tr><td>" + eventOptionList[k].optionNum + "</td>" + 
            "<td>" + eventOptionList[k].event + "</td>" + 
            "<td>" + eventOptionList[k].provider + "</td>" + 
            "<td>" + eventOptionList[k].location + "</td>" + 
            "<td>" + eventOptionList[k].duration + "</td>" + 
            "<td>" + eventOptionList[k].rating + "</td>" +
            "<td>" + eventOptionList[k].description + "</td>" + 
            "<td>" + eventOptionList[k].price + "</td></tr>");

            // console.log("eventOptionList[k].event = " + eventOptionList[k].event);
        };

        updateDisplay();

        }

    }); // end ShowOption button click

    // Airline option selection handler
        // write option date to currentOptions.airInfo
        // mark selection as selected (highlight or checkbox/radio buton selected, ???)
    // end Airline option selection handler

    // Hotel option selection handler
        // write option date to currentOptions.hotelInfo
        // mark selection as selected (highlight or checkbox/radio buton selected, ???)
    // end Hotel option selection handler

    // Event option selection handler
        // write option date to currentOptions.eventInfo
        // mark selection as selected (highlight or checkbox/radio buton selected, ???)
    // end Event option selection handler

    $("#reset").on("click", function() {
        $(".airline-options-list").empty();
        $(".hotel-options-list").empty();
        $(".event-options-list").empty();

        $("#depart-form").val("");
        $("#dest-form").val("");
        $("#depart-date").val('0000-00-00');
        $("#return-date").val('0000-00-00');
        $("#FormControlSelect1").val("1");

        displayState.airSelected = false;
        displayState.hotelSelected = false;
        displayState.eventSelected = false;
        updateDisplay();

        $('#inlineCheckboxAir').prop('checked', false);
        $('#inlineCheckboxHotel').prop('checked', false);
        $('#inlineCheckboxEvents').prop('checked', false);

        $('#RadiosRT').prop('checked', true);
        $('#RadiosOW').prop('checked', false);

    });

    updateDisplay();

}); // $(document).ready
