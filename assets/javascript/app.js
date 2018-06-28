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
    // displayState = {
        // airSelected: false
        // hotelSelected: false
        // eventSelected: false
    // }

    // Define selected options object to store options selected
    // currentOptions {
        // airInfo {
            // airline: ""
            // pricePerTravler: 0
            // other Info?????
        // }
        // hotelInfo {
            // hotel: ""
            // pricePerDay: 0
            // location: ""
            // other Info?????
        // }
        // eventInfo {
            // event: ""
            // pricePerTravler: 0
            // eventDate: "01/01/1900"
            // other Info?????
        // }
    // }

//**********************************************************
// Define supporting functions
//**********************************************************
    // Update Display
        //updates display based on displayState

//**********************************************************
// Define event handlers
//**********************************************************
    // Air-Hotel-Event checkbox click handler
        // if Air checkbox clicked
            // set displayState.airSelected = !(displayState.airSelected)
        // if Hotel checkbox clicked
            // set displayState.hotelSelected = !(displayState.hotelSelected)
        // if Event checkbox clicked
            // set displayState.eventSelected = !(displayState.eventSelected)
        // call updateDisplay
    // end Air-Hotel-Event checkbox click handler

    // RoundTrip-OneWay radio button click
        // Expect this to be handled by radio button 

    // ShowOption button click
        // verify user inputs
            // Departure airport
            // Destination airport
            // Departure date
            // Return Date
            // At least one option (Air / Hotel / Event) selected
            // At least one in the Number of People field
        // Use API's to get options
        // build Air table with options
        // build Hotel table with options
        // build Google Map with Hotel locations
        // build Event table with options
        // build Google Map with event locations
        // call updateDisplay
    // end ShowOption button click

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

    // clear inputs button click
        // clear departure airport
        // clear destination airport
        // clear departure date
        // clear return date
        // clear number of people field
        // set RoundTrip-OneWay radio button to RoundTrip
        // clear Air, Hotel and Event checkboxes
        // set displayState to "no-selection"
        // call updateDisplay to clear Air, Hotel & event tables
    // end clear button click