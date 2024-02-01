
$(document).ready(function(){
  let img = ['ran04', 'ran05', 'ran06']
  let num = Math.floor(Math.random()*3);
  document.getElementById('ran').innerHTML='<img src="./images/'+img[num]+'.png" alt="배너">';

  let img2 = ['ran07', 'ran08', 'ran09']
  let num2 = Math.floor(Math.random()*3);
  document.getElementById('ran01').innerHTML='<img src="./images/'+img2[num2]+'.png" alt="배너">';

  let img3 = ['ran10', 'ran11', 'ran12']
  let num3 = Math.floor(Math.random()*3);
  document.getElementById('ran02').innerHTML='<img src="./images/'+img3[num3]+'.png" alt="배너">';

  let img4 = ['ran04', 'ran05', 'ran06','ran07', 'ran08', 'ran09','ran10', 'ran11', 'ran12']
  let num4 = Math.floor(Math.random()*9);
  document.getElementById('ran03').innerHTML='<img src="./images/'+img4[num4]+'.png" alt="배너">';




    // 1. 변수선언
    let gnb = $('header .gnb > ul > li > a');
    const l_btn = $('.visual .s_btn li:first-child');//좌측버튼
    const r_btn = $('.visual .s_btn li:last-child');//우측버튼
    const c_btn = $('.visual .ctrl_btn li'); //콘트롤 버튼
    let v_slide_img = $('.visual > div');//슬라이드 이미지

    const e_left = $('.event i.fa-angle-left'); //이벤트 좌버튼
    const e_right = $('.event i.fa-angle-right'); //이벤트 우버튼

    // const t = $(this).parent().index();
    // console.log(t);
    // if(t==2){
    //   $('.tab_con article').height(800);
    // }else{
    //   $('.tab_Con article').height(500);
    // }

    let i = $('.visual .ctrl_btn li').index(); //0값

    gnb.click(function(){
      // $('.sub').hide(); //보이는 서브 숨기고
      // // $(this).next().show(); //자신의 다음 요소 보이게하기
      $(this).next().toggle().parent().siblings().find('.sub').hide(); //자신의 다음 요소에 토글효과를 적용하고 자신의 부모의 형제들 중 .sub를 찾아서 숨기게한다
    })
    $('.gnb').mouseleave(function(){
      $('.sub').css('display', 'none');
    })

    $('#toggle').click(function(){
      $('#toggle span:nth-child(2)').toggleClass('hide01');
      $('#toggle span:first-child').toggleClass('rotate1');
      $('#toggle span:last-child').toggleClass('rotate2');
      $(this).toggleClass('bb');
      $(this).toggleClass('tc');
      $('.gnb').slideToggle();
      $('.sub').slideUp();
    })

    //2. 움직이는 함수 = 서서히 사라지고 나타나는 효과
    function fadeInOut(){
      //console.log('시간함수호출');
      v_slide_img.stop().fadeOut(); //보이는 이미지 숨기고
      $('.visual .ctrl_btn li').removeClass('on'); //콘트롤버튼 서식 모두 제거

      if(i==2){  //만약에 마지막 이미지라면
        i=0; //처음이미지가 보이게하고
      }else{ //그렇지 않으면
        i++; //다음 이미지가 보이도록 한다.
      }
      $('.visual .ctrl_btn li').eq(i).addClass('on'); //선택한 콘트롤 버튼에 서식적용
      v_slide_img.eq(i).stop().fadeIn(); //해당 이미지가 보이게 한다.
    }

    function fadeInOut2(){
      v_slide_img.stop().fadeOut();
      $('.visual .ctrl_btn li').removeClass('on'); //콘트롤버튼 서식 모두 제거
      if(i==0){
        i=2;
      }else{
        i--;
      }
      $('.visual .ctrl_btn li').eq(i).addClass('on'); //선택한 콘트롤 버튼에 서식적용
      v_slide_img.eq(i).stop().fadeIn();
    }

    //3. 매 5초마다 함수를 반복호출하여 슬라이드가 변하게한다.
    let Timer = setInterval(fadeInOut,5000);

    //좌, 우 버튼 클릭시 해당하는 방향으로 슬라이드 이미지가 나오게하기
    l_btn.click(function(){
      fadeInOut2();
    });
    r_btn.click(function(){
      fadeInOut();
    });

    //좌, 우버튼에 마우스 오버시 시간을 제거하고
    $('.s_btn > li').hover(function(){
      clearInterval(Timer);
    },function(){//다시 마우스 아웃시 시간을 생성하여 다시 움직이게 한다.
      Timer = setInterval(fadeInOut, 5000);
    });

    //pagenation(콘트롤 버튼)
    //1. 현재이미지 번호를 체크
    //2. 이미지 전체 개수

    /*
      구현순서
      1. 콘트롤 버튼 변수 선언
      2. 콘트롤 버튼(li) 클릭시 인덱스값 0,1,2값을 출력
      3. 인덱스값을 fadeInOut함수의 매개변수값으로 넘김 => 슬라이드가 변함
      4. 사용자가 클릭한 콘트롤버튼(li)에 act서식을 적용하여 어둡게함.
    */

    c_btn.click(function(){
      clearInterval(Timer); //기존 자동슬라이드 제거

      let idx = $(this).index();

      v_slide_img.stop().fadeOut(); //보이는 이미지 숨기고
      $('.visual .ctrl_btn li').removeClass('on'); //콘트롤버튼 서식 모두 제거

      $('.visual .ctrl_btn li').eq(idx).addClass('on'); //선택한 콘트롤 버튼에 서식적용
      v_slide_img.eq(idx).stop().fadeIn(); //해당 이미지가 보이게 한다.

      i = idx; //원래 i값에 idx값을 일치시켜서 다음 순서가 제대로 나오게
    });
    //콘트롤버튼에 마우스 오버시 시간을 제거(Timer)하여 슬라이드 멈추게
    $('.ctrl_btn').hover(function(){
      clearInterval(Timer);
    },function(){//다시 마우스 아웃시 시간을 생성하여 다시 움직이게 한다.
      Timer = setInterval(fadeInOut, 5000);
    });
    //콘트롤버튼에 마우스 아웃시 다시 시간을 넣어서 다시 슬라이드 움직이게


    //윈도우창의 너비값 = $(window).width(); or $(window).height();
    //$(window).innerWidth();

    let width;
    
    // //브라우저의 크기가 변하면 함수내용을 실행한다.
    // $(window).resize(function(){
    //   w_width = $(window).innerWidth();
    //   console.log(w_width);

    //   //pc버전 해상도일 경우 배경색 노랑
    //   if(w_width >= 1025){
    //     $('header h1 img').attr('src', './images/logo2.png')
    //     // $('body').css('background', '#ff0');
    //     //tablet버전 해상도일 경우 초록색
    //   }else if(w_width > 767 && w_width <=1024){  
    //     $('header h1 img').attr('src', './images/logo.png')
    //     $('body').css('background', '#0f0');
    //     //mobile버전 해상도일 경우 회색
    //   }else{
    //     $('header h1 img').attr('src', './images/logo.png')
    //     $('body').css('background', '#ccc');
    //   }
    // }).resize();
    
    const eslide = $('.es_wrap');
    $('.es_wrap > div:last-child').insertBefore('.es_wrap > div:first-child'); //마지막녀석을 첫번째의 앞으로 보내기
    eslide.css('margin-left', '-100%'); 
    
    // moveleft함수
    function moveLeft(){
      eslide.stop().animate({'margin-left' : '-200%'},1000, function(){ 
        $('.es_wrap > div:first-child').insertAfter('.es_wrap > div:last-child');
        eslide.css('margin-left', '-100%');
      });
    }

    let Timer2 = setInterval(moveLeft, 3000);

    function moveRight(){
      eslide.stop().animate({'margin-left' : '0px'},1000, function(){ 
        $('.es_wrap > div:first-child').insertBefore('.es_wrap > div:last-child');
        eslide.css('margin-left', '-100%');
      });
    }

    e_left.click(function(){
      clearInterval(Timer2);
      moveLeft();
    })
    e_right.click(function(){
      clearInterval(Timer2);
      moveRight();
    })
    $('.event i.fas').mouseenter(function(){
      clearInterval(Timer2);
    })
    $('.event i.fas').mouseleave(function(){
      Timer2 = setInterval(moveLeft, 3000);
    })

    $('.tab_con_wrap > li > a').click(function(){
      $(this).next().show().parent().siblings().find('div').hide();
      $(this).addClass('act').parent().siblings().find('a').removeClass('act');
      return false;
    })
    $('.tab_con_wrap > li:last-child > a').click(function(){
      $('.tab_con').addClass('act2');
    })
    $('.tab_con_wrap > li:first-child > a').click(function(){
      $('.tab_con').removeClass('act2');
    })
    $('.tab_con_wrap > li:nth-child(2) > a').click(function(){
      $('.tab_con').removeClass('act2');
    })


          $(window).scroll(function(){
              let scrollTop2 = $(this).scrollTop();
              console.log(scrollTop2);

              if(scrollTop2>=800){
                  $('.t_btn').fadeIn();
              }else{
                  $('.t_btn').fadeOut();
              }
          });

      $('.t_btn').click(function(){
        $('html, body').animate({'scrollTop' : '0px'}, 50);
        return false;
      });

    let popup = `
    <div class = "p_modal">
      <div class = "banner">
          <a href = "#" title = "쿠키">
          <img src = "./images/cookie.png"  alt = "쿠키이미지">
          </a>
          <input id = "ch" type = "checkbox">
          <label for = "ch">오늘 하루 열지 않음</label>
          <input type = "button" value="닫기" id = "c_btn">
      </div>
    </div>
    `

    $('body').append(popup);

  //   현재 브라우저에 쿠키 popup의 값이 none이면 팝업을 나오지 않게 한다.
    if($.cookie('popup')=='none'){
      $('.p_modal').hide();
    }

  let cbox = $('.p_modal #ch');

  //체크박스에 사용자가 체크를 했는지 안했는지 확인하기위한 함수를 작성
    function closePopup(){
        if(cbox.is(':checked')){
            $.cookie('popup', 'none', {expires:1, path:'/'});
          }
              $('.p_modal').hide(); //쿠키를 생성하고 종료한다.
          }
    //닫기 버튼 클릭시 해당함수를 호출하여 모달윈도 닫기
    $('.p_modal #c_btn').click(function(){
      closePopup();
    });
        });