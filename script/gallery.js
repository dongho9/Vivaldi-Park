

$(document).ready(function(){
    const girl = $('.girl figure a');

    girl.click(function(){
        let img_src = $(this).attr('href');
        let title = $(this).next().find('h6').text();
        let i = $(this).parent().index()+1;
        console.log(i);
        console.log(img_src);
        console.log(title);
        
        let modal = `
        <div class = "modal">
            <div class = "center">
                <h3>${title}</h3>
                <i class = "fas fa-close"></i>
                <img src = ${img_src} alt = "이미지">
                <i class = "fas fa-angle-left"></i>
                <i class = "fas fa-angle-right"></i>
                <span class = "p_num">${i}/8</span>
            </div>        
        </div>`

        $('body').append(modal);
        $('i.fa-angle-left').click(function(){
            if(i==1){
                i=8;
            }else{
                i--;
            }
            dataChange(i)
        });

        $('i.fa-angle-right').click(function(){
            if(i==8){
                i=1;
            }else{
                i++;
            }
            dataChange(i)
        });

        function dataChange(i){
            $('.p_num').text(i+'/8');
            
            $('.modal h3').text($('.girl figure').eq(i-1).find('h6').text());

            if(i==4){
                $('.modal img').attr('src', './images/mcon5_'+i+'.png');
            }else{
                $('.modal img').attr('src', './images/mcon5_'+i+'.jpg');
            }
        }

        $('i.fa-close').click(function(){
            $('.modal').fadeOut();
        })
        return false;
    });
});