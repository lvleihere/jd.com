/*
**author: nanshanyun
**data:2017/6/28
**addr:compus
*/

window.onload = function() {
    var oxx = document.getElementById('xx');
    var obanner = document.getElementById('top-banner');
    var otext = document.getElementById('textt');
    oxx.onmousedown = function() {
        obanner.style.display = 'none';
    };
    otext.onmousedown = function() {
        otext.value = '';
        otext.style.color = 'rgb(51, 51, 51)';
    };
}
$(function() {
    //手动控制轮播图
    $('#one li').eq(0).show();

    $('#two li').mouseover(function() {
            $(this).addClass('on').siblings().removeClass('on');
            var index = $(this).index();
            i = index;
            $('#one li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
        })
        //自动播放
    var i = 0;
    var t = setInterval(move, 1500);
    //自动播放核心函数
    function move() {
        i++;
        if (i == 5) {
            i = 0;
        }
        $('#two li').eq(i).addClass('on').siblings().removeClass('on');
        $('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }

    //向右播放核心函数
    function moveL() {
        i--;
        if (i == -1) {
            i = 4;
        }
        $('#two li').eq(i).addClass('on').siblings().removeClass('on');
        $('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    $('#left').click(function() {
        moveL();
    })
    $('#right').click(function() {
            move();
        })
        //鼠标移入移除
    $('#lunbo').hover(function() {
        clearInterval(t);
    }, function() {
        t = setInterval(move, 1500);
    })

})

//**************服装鞋包选项卡*******************
$(function() {
        $('.tab li').mouseover(function() {
            $(this).addClass('active').siblings().removeClass('active');
            $('.tatab-item span').css('right', '1px');
            var index = $(this).index();
            $('.main').eq(index).show().siblings().hide();
            $('.side').css('display', 'block');
        })

    })
    //**************服装鞋包轮播*******************
$(function() {
        //scroll news
        var scrnews = $(".slider .slider-main1");
        //获取序号元素
        var liNum = $(".slider-item");
        console.log(liNum)
        var newst = setInterval(scro, 3500);
        scrnews.hover(function() {
                clearInterval(newst);

            }, function() {
                newst = setInterval(scro, 3500);
            })
            //点击右方向按钮
        $('.slider-next').bind('click', function() {

            //将第一张图片切换到后面
            scrnews.children("li:first").appendTo(scrnews);
        });
        //点击左方向按钮
        $('.slider-prev').bind('click', function() {
            clearInterval(newst);
            //将第一张图片切换到前面
            scrnews.children("li:last").prependTo(scrnews);
        });

        var i = 0;

        function scro() {
            scrnews.animate({ left: -439 }, 2000, function() {
                    $(this).children("li:first").appendTo(this);
                    $(this).css("left", 0);
                })
                //序号变化
            liNum.removeClass('active2');
            liNum.eq(i).addClass('active2');
            i++;
            if (i > 3) {
                i = 0;
            }
        }
    })
    //**************今日推荐*******************
$(function() {
        var xhRight = null;
        //scroll news
        var scrnews = $(".slider-main");

        if (scrnews.children().length < 4) {
            return false; }

        var newst = setInterval(scro, 3500);

        scrnews.hover(function() {
            clearInterval(newst);
        }, function() {
            newst = setInterval(scro, 3500);
        })

        function scro() {
            scrnews.animate({ left: -1000 }, 1500, function() {
                $(this).children("li:first").appendTo(this);
                $(this).css("left", 0);
            });
        }


        $('.slider-page li').hover(function() {
            clearInterval(newst);
        }, function() {
            newst = setInterval(scro, 3500);
        })

        $('.slider-prev').click(function() {
            scrnews.children("li:first").appendTo(scrnews);

        })
        $('.slider-next').click(function() {
            scrnews.children("li:last").prependTo(scrnews);

        })

    })
    //**************天天特价*******************
$(function() {

    //scroll news
    var scrnews = $(".sw ul");

    if (scrnews.children().length < 10) {
        return false; }
    var newst = setInterval(scro, 3500);
    scrnews.hover(function() {
        clearInterval(newst);
    }, function() {
        newst = setInterval(scro, 3500);
    })

    function scro() {
        scrnews.animate({ marginTop: -100 }, 1500, function() {
            $(this).children("li:first").appendTo(this);
            $(this).css("marginTop", '20px');
        })
    }

})
$(function() {


    //当点击跳转链接后，回到页面顶部位置  

    $("#jdm-tbar-tab-top").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 2000);
        return false;
    });
});
//*************hidein*****
$(function() {
    $('.hidein').click(function() {
        $(this).css('display', 'none');
        $('#jd_chaojidapai').css('display', 'none');
    })
})
