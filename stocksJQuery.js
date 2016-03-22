$(document).ready(function(){
    $("button").click(function(){
         $("#stockDiv0").animate({left: "450px"}, 2000,function() {
            $("#stockDiv1").animate({width: "350px"}, 2000, function() {
                $("#stockDiv1").animate({top: "-295px"}, 2000, function() {
                    $("#stockDiv2").animate({top: "-300px"}, 2000, function() { 
                        $("#stockDiv2").animate({width: "2500px"}, 2000, function() {
                            $("#stockDiv2").animate({right: "300px"}, 2000, function() {
                                $("#stockDiv3").animate({top: "-300px"}, 2000, function() {
                                    $("#stockDiv4").animate({top: "-300px"}, 2000, function() {
                                        $("#stockDiv4").animate({left: "500px"}, 2000, function() {
                                            $("#stockDiv5").animate({bottom: "300px"}, 2000, function() {
                                                $("#stockDiv5").animate({right: "250px"}, 2000, function() {
                                                    $("#stockDiv6").animate({bottom: "300px"}, 2000, function() {
                                                        $("#stockDiv7").animate({bottom: "300px"}, 2000, function() {
                                                            $("#stockDiv8").animate({bottom: "300px"}, 2000, function() {
                                                                $("#stockDiv9").animate({bottom: "300px"}, 2000, function() {
                                                                    ("#stockDiv10").animate({bottom: "300px"}, 2000, window.location.reload());
                                                                });  
                                                            });
                                                        });
                                                    });
                                                });
                                            });        
                                        });
                                    });    
                                });  
                            });   
                        });
                    });
                });
            });
        });
    });
});
