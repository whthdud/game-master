$(function(){

//1

    $(".sub li:nth-child(1) .me").click(function(){
        $(".sub li:nth-child(1) .one").show()
    })

    $(".sub li:nth-child(1) .one").click(function(){
        $(".sub li:nth-child(1) .two").show()
    })

    $(".sub li:nth-child(1) .two").click(function(){
        $(".sub li:nth-child(1)").hide()
    })


//2


    $(".sub li:nth-child(2) .me").click(function(){
        $(".sub li:nth-child(2) .one").show()
    })

    $(".sub li:nth-child(2) .one").click(function(){
        $(".sub li:nth-child(2) .two").show()
    })

    $(".sub li:nth-child(2) .two").click(function(){
        $(".sub li:nth-child(2)").hide()
    })


//3


    $(".sub li:nth-child(3) .me").click(function(){
        $(".sub li:nth-child(3) .one").show()
    })

    $(".sub li:nth-child(3) .one").click(function(){
        $(".sub li:nth-child(3) .two").show()
    })

    $(".sub li:nth-child(3) .two").click(function(){
        $(".sub li:nth-child(3)").hide()
    })


//4


    $(".sub li:nth-child(4) .me").click(function(){
        $(".sub li:nth-child(4) .one").show()
    })

    $(".sub li:nth-child(4) .one").click(function(){
        $(".sub li:nth-child(4) .two").show()
    })

    $(".sub li:nth-child(4) .two").click(function(){
        $(".sub li:nth-child(4)").hide()
    })


//5


    $(".sub li:nth-child(5) .me").click(function(){
        $(".sub li:nth-child(5) .one").show()
    })

    $(".sub li:nth-child(5) .one").click(function(){
        $(".sub li:nth-child(5) .two").show()
    })

    $(".sub li:nth-child(5) .two").click(function(){
        $(".sub li:nth-child(5)").hide()
    })

//6


    $(".sub li:nth-child(6) .me").click(function(){
        $(".sub li:nth-child(6) .one").show()
    })

    $(".sub li:nth-child(6) .one").click(function(){
        $(".sub li:nth-child(6) .two").show()
    })

    $(".sub li:nth-child(6) .two").click(function(){
        $(".sub li:nth-child(6)").hide()
    })


//7


    $(".sub li:nth-child(7) .me").click(function(){
        $(".sub li:nth-child(7) .one").show()
    })

    $(".sub li:nth-child(7) .one").click(function(){
        $(".sub li:nth-child(7) .two").show()
    })

    $(".sub li:nth-child(7) .two").click(function(){
        $(".sub li:nth-child(7)").hide()
    })


//8


    $(".sub li:nth-child(8) .me").click(function(){
        $(".sub li:nth-child(8) .one").show()
    })

    $(".sub li:nth-child(8) .one").click(function(){
        $(".sub li:nth-child(8) .two").show()
    })

    $(".sub li:nth-child(8) .two").click(function(){
        $(".sub li:nth-child(8)").hide()
    })


//9


    $(".sub li:nth-child(9) .me").click(function(){
        $(".sub li:nth-child(9) .one").show()
    })

    $(".sub li:nth-child(9) .one").click(function(){
        $(".sub li:nth-child(9) .two").show()
    })

    $(".sub li:nth-child(9) .two").click(function(){
        $(".sub li:nth-child(9)").hide()
    })


//10


    $(".sub li:nth-child(10) .me").click(function(){
        $(".sub li:nth-child(10) .one").show()
    })

    $(".sub li:nth-child(10) .one").click(function(){
        $(".sub li:nth-child(10) .two").show()
    })

    $(".sub li:nth-child(10) .two").click(function(){
        $(".sub li:nth-child(10)").hide()
    })


//11


    $(".sub li:nth-child(11) .me").click(function(){
        $(".sub li:nth-child(11) .one").show()
    })

    $(".sub li:nth-child(11) .one").click(function(){
        $(".sub li:nth-child(11) .two").show()
    })

    $(".sub li:nth-child(11) .two").click(function(){
        $(".sub li:nth-child(11)").hide()
    })


    $(".button img").mouseenter(function(){
        $(".button img:nth-child(2)").stop().hide()
    })
    $(".button img").mouseleave(function(){
        $(".button img:nth-child(2)").stop().show()
    })




    var i;

        setInterval(function(){

            if( i < 10000 ){
                i++;
            }else{
                i = 0;
            }//if
            console.log(i);

            $(".time").text(i)

        },100)//setInterval

        setTimeout(function(){
            location.href="end.HTML"
        },10000)


        $(".me").draggable({
            cursor:"move"
        })





})