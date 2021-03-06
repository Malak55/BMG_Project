// *************************************************
// Class - Coding Bootcamp MW 
// Team Members: Matt Schiereck, Rod Skoglund, Danny Zamora 
// Team Name: BMG; Project
// Project #1 - Culmination Destination
// File: app.js
// *************************************************

//**********************************************************
// Declare links to APIs, etc as needded
//**********************************************************

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
    // var currentOptions = {
    //     airInfo: {
    //         airline: "",
    //         pricePerTravler: 0
    //         // other Info?????
    //     },
    //     hotelInfo: {
    //         hotel: "",
    //         pricePerDay: 0,
    //         location: "",
    //         hotel_lat: "",
    //         hotel_lon: ""
    //         // other Info?????
    //     },
    //     eventInfo: {
    //         event: "",
    //         pricePerTravler: 0,
    //         eventDate: "01/01/1900",
    //         event_lat: "",
    //         event_lon: ""
    //         // other Info?????
    //     }
    // };

    // // Object definitions for Air, Hotel and Event

    // var airOptionItem = {
    //     optionNum: 0,
    //     carrier: "",
    //     departTime: "hh:mm A",
    //     arrivalTime: "hh:mm A",
    //     duration: "0h",
    //     numStops: "Nonstop",
    //     // rating: "Very Good Flight (8/10)",
    //     fareType: "Round Trip",
    //     price: "0"
    // };

    // var hotelOptionItem = {
    //     optionNum: 0,
    //     hotelName: "",
    //     location: "Address",
    //     phoneNum: "888-000-0000",
    //     // rating: "4.3/5 Excellent",
    //     price: "0"
    // };

    // var eventOptionItem = {
    //     optionNum: 0,
    //     event: "test",
    //     provider: "test",
    //     location: "Address",
    //     duration: "0h",
    //     rating: "Very Good Flight (8/10)",
    //     description: "Round Trip",
    //     price: "0"
    // };

    // Arrays to store Air, Hotel and Event options
    var airOptionList = [];
    var hotelOptionList = [];
    var eventOptionList = [];

    // //test data - Delete after testing complete
    // var airOptionItemTest1 = {
    //     optionNum: 1,
    //     carrier: "American Airlines",
    //     departTime: "09:45 AM",
    //     arrivalTime: "11:30 AM",
    //     duration: "1h 45m",
    //     numStops: "Nonstop",
    //     rating: "Very Good Flight (8/10)",
    //     fareType: "Round Trip",
    //     price: "$422"
    // }

    // var airOptionItemTest2 = {
    //     optionNum: 2,
    //     carrier: "Southwest Airlines",
    //     departTime: "09:45 AM",
    //     arrivalTime: "11:30 AM",
    //     duration: "1h 45m",
    //     numStops: "Nonstop",
    //     rating: "Very Good Flight (8/10)",
    //     fareType: "Round Trip",
    //     price: "$422"
    // }

    // var hotelOptionItem1 = {
    //     optionNum: 1,
    //     hotelName: "Marriott Inn + Suites",
    //     location: "1234 W. Main Street, Overland Park Kansas",
    //     phoneNum: "800-123-4567",
    //     rating: "4.3/5 Excellent",
    //     price: "$136"
    // };

    // var hotelOptionItem2 = {
    //     optionNum: 1,
    //     hotelName: "Best Western",
    //     location: "1234 W. Main Street, Overland Park Kansas",
    //     phoneNum: "800-123-4567",
    //     rating: "4.3/5 Excellent",
    //     price: "$136"
    // };

    // var eventOptionItem1 = {
    //     optionNum: 1,
    //     event: "SEA LIFE Kansas City Aquarium",
    //     provider: "teSea Life Aquariumst",
    //     location: "SEA LIFE Kansas City, 2475 Grand Blvd, Kansas City 64108",
    //     duration: "1h 20m",
    //     rating: "4/5",
    //     description: "A wonder for all ages, SEA LIFE Kansas City Aquarium is home to more than 5,000 sea creatures. Explore interactive touch pools, walk through an underwater tunnel with 180-degree views, and get astonishingly close to a blacktip reef shark swimming alongside graceful rays in the ocean exhibit.",
    //     price: "$16.42"
    // };

    // var eventOptionItem2 = {
    //     optionNum: 2,
    //     event: "Indoor Skydiving Experience",
    //     provider: "iFLY Indoor Skydiving",
    //     location: "SEA LIFE Kansas City, 2475 Grand Blvd, Kansas City 64108",
    //     duration: "1h 20m",
    //     rating: "--",
    //     description: "Experience all the plummeting, free falling, and soaring sensations of skydiving without ever getting on a plane. This indoor skydiving experience puts you in a vertical wind tunnel, where you can float weightlessly in space for an unforgettable adrenaline rush in totally safe surroundings.",
    //     price: "$77"
    // };

    // airOptionList = [airOptionItemTest1, airOptionItemTest2];
    // hotelOptionList = [hotelOptionItem1, hotelOptionItem2];
    // eventOptionList = [eventOptionItem1, eventOptionItem2];



//**********************************************************
// Define supporting functions
//**********************************************************
    
    //******************************************************
    // Update Display
    //******************************************************
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

//**********************************************************
// Define functionality to be available after the page has loaded
//**********************************************************
$(document).ready(function () { 

//**********************************************************
// Define event handlers
//**********************************************************
       
    //******************************************************
    // Air checkbox click handler
    //******************************************************
    $("#inlineCheckboxAir").on("click", function() {
        if ($("#inlineCheckboxAir").is(":checked")) {
            displayState.airSelected = true;
        }
        else {
            displayState.airSelected = false;
        }
    }); // inlineCheckboxAir on click

    //******************************************************
    // Hotel checkbox click handler
    //******************************************************
    $("#inlineCheckboxHotel").on("click", function() {
        if ($("#inlineCheckboxHotel").is(":checked")) {
            displayState.hotelSelected = true;
        }
        else {
            displayState.hotelSelected = false;
        }
    }); // inlineCheckboxHotel on click

    //******************************************************
    // Event checkbox click handler
    //******************************************************
    $("#inlineCheckboxEvents").on("click", function() {
        if ($("#inlineCheckboxEvents").is(":checked")) {
            displayState.eventSelected = true;
        }
        else {
            displayState.eventSelected = false;
        }
    }); // inlineCheckboxEvents on click

    //******************************************************
    // ShowOption button click handler
    //******************************************************
    $("#showButton").on("click", function() {
        // Capture user input into local variables
        departureAirport = $("#depart-form").val();
        destinationAirport = $("#dest-form").val();
        departDate = $("#depart-date").val();
        returnDate = $("#return-date").val();
        numPeople = $("#FormControlSelect1").val();

        console.log(departDate);

        // Variable to track validity of user input
        var validInput = true;

        // Clear modal message
        $("#modal-text").text("");

        // Verify user Inputs

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

        // if any inputs are invalid, warn user via modal dialog box
        if (!validInput) {
            $("#myModal").modal();
        }
        else {
            // Clear Air, Hotel and Event table
            $(".airline-options-list").empty();
            $(".hotel-options-list").empty();
            $(".event-options-list").empty();
        // Use API's to get options

        //Hotel API
     
        // build Air table with options
        // build Hotel table with options
           

        // build Google Map with Hotel locations
        // build Event table with options
        // build Google Map with event locations
        var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?&apikey=ch0oiVhwERRq4QV463WHIfQ7lQtelzbP&number_of_results=10&origin="+departureAirport+"&destination="+ destinationAirport + "&departure_date=" + departDate + "&return_date="+ returnDate+"&adults="+numPeople

        console.log(queryURL);
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        var airOptionList = response.results;
        console.log(airOptionList);
        console.log(airOptionList[0].fare.price_per_adult);

        for (var i = 0; i < airOptionList.length; i++) {
            $(".airline-options-list").append("<tr><td>" + i + "</td>" + 
            // "<td>" + airOptionList[i].itineraries.outbound.flights.marketing_airline + "</td>" + 
            // "<td>" + airOptionList[i].departTime + "</td>" + 
            // "<td>" + airOptionList[i].arrivalTime + "</td>" + 
            // "<td>" + airOptionList[i].duration + "</td>" + 
            // "<td>" + airOptionList[i].numStops + "</td>" + 
            // "<td>" + airOptionList[i].rating + "</td>" + 
            // "<td>" + airOptionList[i].fareType + "</td>" + 
            "<td>" + airOptionList[i].fare.price_per_adult.total_fare + "</td></tr>")

        }
        });

        var queryURL = "https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?&apikey=ch0oiVhwERRq4QV463WHIfQ7lQtelzbP&number_of_results=10&location="+ destinationAirport + "&check_in=" + departDate + "&check_out="+ returnDate

        console.log(queryURL);
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);

        var hotelOptionList = response.results;
        // var contactInfo = response.contacts; 
        console.log(hotelOptionList[0].property_name);

        for (var j = 0; j < hotelOptionList.length; j++) {
            $(".hotel-options-list").append("<tr><td>" + j + "</td>" + 
            "<td>" + hotelOptionList[j].property_name + "</td>" + 
            // "<td>" + hotelOptionList[j].location + "</td>" + 
            // "<td>" + contactInfo[j].detail + "</td>" + 
            // "<td>" + hotelOptionList[j].rating + "</td>" + 
            "<td>" + hotelOptionList[j].total_price.amount + "</td></tr>")

            // console.log(hotel[j]);
    
            // console.log("hotelOptionList[j].hotelName = " + hotelOptionList[j].hotelName);
            }
        });



        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&totalElements=1&startDateTime="+departDate+"T00:00:00Z&endDateTime="+returnDate+"T00:00:00Z&postalCode=75201&apikey=ETGlyyLFFEuPfDApGGvU4u2dcDPX9Vfh"
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);

        var eventOptionList = response;
        console.log(eventOptionList);
        console.log(eventOptionList._embedded.events[0].name);

        for (var k = 0; k < eventOptionList.length; k++) {
            var event = eventOptionList._embedded.events[k].name;
            $(".event-options-list").append("<tr><td>" + k + "</td>" + 
            "<td>" + event + "</td></tr>")
            // // "<td>" + eventOptionList[k].provider + "</td>" + 
            // "<td>" + eventOptionList._embedded.events[a].venues.name + "</td>" + 
            // // "<td>" + eventOptionList[k].duration + "</td>" + 
            // // "<td>" + eventOptionList[k].rating + "</td>" +
            // // "<td>" + eventOptionList[k].description + "</td>" + 
            // "<td>" + eventOptionList.events[a].priceRanges.min+"to" + eventOptionList.events[a].priceRanges.max+"</td></tr>")
        }
            // console.log(eventOptionList._embedded.events[a].name);
            // console.log(eventOptionList._embedded.events[a].venues.name);
            // console.log(eventOptionList._embedded.events[a].priceRanges);
        });

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

    //******************************************************
    // Reset button click handler
    //******************************************************
    $("#reset").on("click", function() {
        // Clear display lists
        $(".airline-options-list").empty();
        $(".hotel-options-list").empty();
        $(".event-options-list").empty();

        // Clear/reset user input fields
        $("#depart-form").val("");
        $("#dest-form").val("");
        $("#depart-date").val("yyyy-MM-dd");
        $("#return-date").val('0000-00-00');
        $("#FormControlSelect1").val("1");

        // Reset display state for Air, Hotel and Wevent and update the display
        displayState.airSelected = false;
        displayState.hotelSelected = false;
        displayState.eventSelected = false;
        updateDisplay();

        // Clear Air, Hotel and Event check boxes
        $('#inlineCheckboxAir').prop('checked', false);
        $('#inlineCheckboxHotel').prop('checked', false);
        $('#inlineCheckboxEvents').prop('checked', false);

        // Reset the Round Trip / One-Way radio button so Round Trip is selected
        $('#RadiosRT').prop('checked', true);
        $('#RadiosOW').prop('checked', false);

    });

    // Initialize the display
    updateDisplay();

}); // end of $(document).ready

