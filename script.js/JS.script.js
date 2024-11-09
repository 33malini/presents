let box_menu = document.getElementById('boxtime'),
    icon = document.getElementsByTagName('button')[0],
    modal = document.querySelector('.wmodal'),
    close = document.querySelector('.modal-close'),
    overlay = document.querySelector('.modal-overlay'),
    modalWindow = document.querySelector('.modal-window');
    el1 = document.querySelector('#el_1');
    el2 = document.querySelector('#el_2');
    el3 = document.querySelector('#el_3');
    field = document.querySelector('#field_delivery');
    dattimpicker = document.querySelector('#datetimepicker');
    btndate = document.querySelector('#btn_date');
    input = document.getElementById('#datetimepicker');
    menu = document.querySelector('#menu');
    btn_menu = document.querySelector('#btn-menu');
    btn_image = document.querySelector('#btn_img')





btn_menu.onclick = () => {
  if (menu.classList.toggle('open')) {
      btn_image.src = './icons/free-icon-close-page-8487257.png';
  } else {
      btn_image.srs = './icons/free-icon-menu-4254068.png';
  }
} 









box_menu.addEventListener('click', function() {
    modal.style.display = 'block';
});

icon.addEventListener('click', function() {
    modal.style.display = 'block';
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

overlay.addEventListener('click', function() {
    modal.style.display = 'none';
    field.style.display = 'none';
});

 modalWindow.addEventListener('click', function(e) {
    e.stopPropagation();
 });

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") modal.style.display = 'none'
  });
  el1.addEventListener('click', function() {
    field.style.display = 'none';
  });

  el2.addEventListener('click', function() {
    field.style.display = 'block';
  });
  el3.addEventListener('click', function() {
    field.style.display = 'block';
  });


  $(document).ready(function(){
    $.datetimepicker.setLocale('ru');
    $('#datetimepicker' ).datetimepicker({
        /*
        Создание пикера:
        Минимальная дата - текущая дата
        минимальное время - текущее время
        */
        format:'d.m.Y',
        minDate:new Date(),
        minTime:new Date(),
        maxTime: '21:30',

        onSelectDate:function(ct,$i){
            console.log(ct.getDate());
            /*
            если выбрана дата дня, отличного от сегодняшнего, то
            то минимальное время 06:30
            максимальное 21:30
            иначе 
            то минимальное время - текущее время
            максимальное 21:30
            */
            let minTime1 = ct > new Date()
                ? ct.setHours(6,30)
                : new Date();
                this.setOptions({
                  minTime : minTime1 
              }) 
        },
        onSelectTime:function(ct,$i) {
            console.log(ct.getHours());
           
            /* если выбрано время, 
            */
            
      },
    });
  });
  
  $("#btn_date").click(function(){
    var str = $("#datetimepicker").val();
    return  str.length != ''
          ?  console.log(str)
          : console.log('не получилось.');
  });

  
   
  

    