// var lat;
// var long;


// // jQuery wrapper

// $(document).ready(function () {
//     console.log("ready!");

//     $('#btn-find-loc').on('click', function (event) {
//         event.preventDefault();
//         console.log('btn-find-loc pressed');

//         // Could substittue based on https://www.w3schools.com/html/html5_geolocation.asp
//         if ("geolocation" in navigator) {
//             /* geolocation is available */
//             navigator.geolocation.getCurrentPosition(function (position) {
//                 console.log('lat: ' + position.coords.latitude, 'long: ' + position.coords.longitude);
//                 lat = position.coords.latitude;
//                 long =  position.coords.longitude;
//             });
//         } else {
//             console.log('no geolocation');
//             /* geolocation IS NOT available */
//         }
//     });



    
// });

$(function() {
    console.log("Let's Go!")
    
    var fields = [
       ["Name"],
       ["Interests"],
       ["Location"],
       ["Budget"]
    ];

	
    // for (var i = 0; i < fields.length; i++) {
    //     $("#topTrow").empty();
    //      $("#topTrow").append(fields[i][0]);
    //      $("#btn-find-loc").on('click', function() {
    //        event.preventDefault();
    //      $("#results").remove().append(fields[i]);
    //     //console.log($(this));
    //     // Constructing HTML containing the topics information
    //     var name = $("<td>").text(fields[i][0]).append(fields[i][0]);
    //     var interest = $("<td>").text().append(fields[i][1]);
    //      }); 
    //    }   
       
       for (var i = 0; i < fields.length; i++) {
        $("#topTrow").empty();
        // Constructing HTML containing the topics information
        var nameBusiness = $("<th>").text(fields[0]);
        var interest = $("<th>").text(fields[1]);
        var location = $("<th>").text(fields[2]);
        var budget = $("<th>").text(fields[3]);
         //$("#btn-find-loc").on('click', function() {
           //event.preventDefault();
         $("#topTrow").append(nameBusiness);
         $("#topTrow").append(interest);
         $("#topTrow").append(location);
         $("#topTrow").append(budget);
         
         console.log(fields[i])
        

        //  $("#btn-find-loc").on('click', function() {
        // //     event.preventDefault();
        // //   $("#results").remove().append(fields[i]);
        // //  //console.log($(this));
        // //  // Constructing HTML containing the topics information
        // //  var name = $("<td>").text(fields[i][0]).append(fields[i][0]);
        // //  var interest = $("<td>").text().append(fields[i][1]);
        //   }); 
        }   
    
    
        //console.log($(this));
        // }; 
   


    // $("#btn-find-loc").on("click", function() {
    //         console.log("button pressed");
        // Storing our API URL for a random cat image
       // var queryURL = ""
  
    //     // Perfoming an AJAX GET request to our queryURL
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //    // success: function(data) {
    //    //		  $("#topic-div").empty();
    //         //	  $("#topic-div").append("<img src='" + data.data[0].images.original_still.url + "'>"); 
    //         //	  console.log(data.data[0].images.original_still.url);
    //         //  	},
    //     }).then(function(response) {
    //         console.log(response);
    //       // Saving the image_original_url property
    //       var infoUrl = response.data.image_original_url;
  
    //       // Creating and storing an image tag
    //       var infoImage = $("<img>");
  
    //       // Setting the image src attribute to imageUrl
    //       infoImage.attr("src", imageUrl);
    //       infoImage.attr("alt", "location image");
  
    //       // Prepending the image to the images div
    //       $("#images").prepend(infoImage);
    //     });
    // function searchActivity() {
	// 	var q = topics.indexOf(topics);
    // 	var queryURL = "";
    		
           			
            
        });		

// });