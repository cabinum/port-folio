$(function(){
    $(".formations, .compet").hide();
    });
    
    
    $(function(){
        $("#p1").click(function(){
            $('.formations').show(function(){
            $('.compet, .centener').hide();
            });
        
        });
        });
    
        $(function(){
            $("#p2").click(function(){
                $('.compet').show(function(){
                $('.formations, .centener').hide();
                });
            
            });
            });