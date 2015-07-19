"use strict";angular.module("dailweddinginfo2App",["firebase","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/event.html",controller:"EventCtrl"}).when("/rsvp",{templateUrl:"views/rsvp.html",controller:"RSVPCtrl"}).when("/lodging",{templateUrl:"views/lodging.html",controller:"lodgingCtrl"}).when("/gifts",{templateUrl:"views/gifts.html",controller:"giftsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("dailweddinginfo2App").controller("EventCtrl",["$scope",function(a){a.circle=document.querySelector(".circle"),a.circle.addEventListener("click",function(){a.circle.classList.toggle("circleAnimation")})}]),angular.module("dailweddinginfo2App").controller("RSVPCtrl",["$scope","$firebase",function(a,b){var c=new Firebase("https://dail-wedding.firebaseio.com/"),d=b(c);a.data=d.$asArray(),a.attende={firstname:"",lastname:"",email:"",notes:""},a.messages={rsvpStatus:"Thanks for coming!"},a.rsvpStatus="Thanks for coming!",a.rsvpTitle="RSVP!",a.addRSVP=function(b){if(""!==b.firstname&&""!==b.lastname&&""!==b.email)a.data.$add(b),a.rsvpStatus="Thanks for RSVP'ing!",a.messages.rsvpStatus="Thanks for RSVP'ing!",a.rsvpIcon=document.querySelector(".rsvp-icon"),a.rsvpIcon.innerHTML="<img src=\"./images/rsvp-completed.svg\" alt=\"\" class='icon' style='margin-top: 20%'>";else{a.messages.rsvpStatus="Please enter your full name and email!",a.rsvpStatus="error",a.inputSet=document.querySelectorAll('#rsvpForm input[type="text"], #rsvpForm input[type="email"] ');for(var c=0;c<a.inputSet.length;c++)a.inputSet[c].className=""===a.inputSet[c].value?"has-error":""}}}]),angular.module("dailweddinginfo2App").controller("lodgingCtrl",["$scope",function(a){a.hotels=[{coordinates:[37.743763,-119.59817],name:"Yosemite Lodge",location:"Yosemite, CA",distance:"6 min (0.3 mi)",description:"As the closest property to Yosemite Falls, Yosemite Lodge at the Falls is an idyllic spot for families, group retreats and visitors seeking the comforts of a hotel after an exciting day exploring the wilderness.",img:"http://i.imgur.com/mNGT53L.jpg",website:"http://www.yosemitepark.com/yosemite-lodge.aspx",phone:"801-559-4884"},{coordinates:[37.536878,-119.6549],name:"Wawona Hotel",location:"Yosemite, CA",distance:"51 minutes (26.8 mi)",description:"Wawona Hotel in Yosemite is located four miles from the Park's south entrance, cradled between the majestic Mariposa Grove of Giant Sequoias and the bustling activity of Yosemite Valley.",img:"http://i.imgur.com/EZ0Y8fA.jpg",website:"http://www.yosemitepark.com/wawona-hotel.aspx",phone:"801-559-4884"},{coordinates:[37.737693,-119.572057],name:"Curry Village",location:"Yosemite, CA",distance:"6 minutes (1.7 mi)",description:"Right in the heart of Yosemite Valley, tucked below the towering majesty of Half Dome and Glacier Point, Curry Village cabins offer guests a unique and magnificent place to stay. Scattered throughout the village, guests will find 46 comfortable Yosemite cabins with private baths, plus 18 standard motel rooms, and 424 canvas tent cabins.",img:"http://i.imgur.com/IvTqzir.jpg",website:"http://www.yosemitepark.com/curry-village.aspx",phone:"801-559-4884"},{coordinates:[37.48477,-119.964374],name:"5th Street Inn",location:"Mariposa, CA",distance:"1 hour, 7 minutes (43.8 mi)",description:"The 5th Street Inn is located in historic downtown Mariposa, California. Nestled in the beautiful Sierra Foothills, we are only 43 miles from the main Arch Rock Entrance of Yosemite National Park and Yosemite Valley.",img:"http://i.imgur.com/oi3zv9E.jpg",website:"http://fifthstreetinn.com/",phone:"209-966-6048"},{coordinates:[37.493225,-119.972332],name:"Yosemite Inn",location:"Mariposa, CA",description:"Yosemite Inn is only 35 scenic minutes (following the beautiful Merced River) from the popular Arch Rock which is the closest entrance to Yosemite Valley.",img:"http://i.imgur.com/wUi550V.jpg",website:"http://www.yosemiteinnca.com/",phone:"209-742-6800"},{coordinates:[37.483999,-119.962709],name:"Comfort Inn",location:"Mariposa, CA",description:"Comfort Inn Yosemite Valley Gateway hotel near West entrance of Yosemite National Park",img:"http://i.imgur.com/GRCIT3t.png",website:"http://www.comfortinn.com/hotel-mariposa-california-CA938",phone:"209-966-4344"},{coordinates:[37.492762,-119.973573],name:"Miners Inn",location:"Mariposa, CA",description:"Experience the beauty of Yosemite National Park while enjoying the surprising comforts and conveniences of an affordable Yosemite National Park hotel at the Yosemite Miners Inn, a top-choice Mariposa, CA hotel.",img:"http://i.imgur.com/vQ4YGHT.jpg",website:"http://www.yosemiteminersinn.com/",phone:"888-516-1372"},{coordinates:[37.482615,-119.964191],name:"Best Western",location:"Mariposa, CA",description:"Nestled amidst the majestic beauty of the Sierra Nevada Mountains, this Yosemite hotel is the perfect place to stay when traveling in California's Gold Country. Conveniently located on Highway 140, it is only 32 miles from the main waterfall at Yosemite National Park",img:"http://i.imgur.com/SXffp2Y.jpg",website:"http://www.yosemitebestwestern.com/",phone:"209-966-7545"}];var b=L.map("map",{scrollWheelZoom:!1}).setView([37.74742,-119.596287],9);L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(b);for(var c=0;c<a.hotels.length;c++)if(a.hotels[c].coordinates){L.marker(a.hotels[c].coordinates).addTo(b).bindPopup(a.hotels[c].name)}}]),angular.module("dailweddinginfo2App").controller("giftsCtrl",["$scope",function(a){a.gifts=[{name:"Visa",description:"This is really the same thing as basic funds, but some folks might feel more comfortable with the format. Visa gift cards would be great, as they give us almost the same flexibility as straight cash. They aren't accepted everywhere unfortunately, but it would still be useful to us.",website:"http://www.google.com",img:"../images/visa-gift-card.svg"},{name:"REI",description:"We absolutely love all things outdoors. We are avid hikers and camp whenever we can. REI is our go-to source for equipment and definitely one of our favorite stores. While the biggest roadblock for these trips is funds, we could definitely use some better gear here and there.",website:"http://www.google.com",img:"../images/rei-gift-card.svg"},{name:"IKEA",description:"I don't think we have ever gone to IKEA without buying something. This would be the most traditional route for gifts, as IKEA mainly has household items. While we do have most of the things we need, there are a few household items here and there that we may need to upgrade soon.",website:"http://www.google.com",img:"../images/ikea-gift-card.svg"}]}]);