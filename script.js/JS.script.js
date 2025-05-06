let box_menu = document.getElementById('boxtime'),
    icon = document.getElementsByTagName('button')[0],
    modal = document.querySelector('.wmodal'),
    clos = document.querySelector('.modal-close'),
    overlay = document.querySelector('.modal-overlay'),
    modalWindow = document.querySelector('.modal-window');
    el1 = document.querySelector('#el_1');
    el2 = document.querySelector('#el_2');
    el3 = document.querySelector('#el_3');
    field = document.querySelector('#field_delivery');
    dattimpicker = document.querySelector('#datetimepicker');
    btnDate = document.querySelector('#btn_date');
    input = document.getElementById('#datetimepicker');
    menu_heading = document.querySelector('.heading-menu');
    btn_menu = document.querySelector('.menu-button');
    btn_image = document.querySelector('.btn-img');
    master = document.querySelector('.box-master');
    btnVideo = document.querySelector('.btn-video');
    bodyNode = document.getElementsByTagName('body')[0]

//кнопка переключения меню, при клике меняется картинка
btn_menu.onclick = () => {
  if (menu_heading.classList.toggle('open')) {
      btn_image.src = './icons/free-icon-close-page-8487257.png';
  } 
  else {
      btn_image.src = './icons/free-icon-menu-4254068.png';
  }
}
box_menu.addEventListener('click', function() {
    modal.style.display = 'block';
})
icon.addEventListener('click', function() {
    modal.style.display = 'block';
});
clos.addEventListener('click', function() {
    modal.style.display = 'none';
});
//по клику в любом месте на затемнение модальное окно скрыть
overlay.addEventListener('click', function() {
    modal.style.display = 'none';
    field.style.display = 'none';
});
//???
 modalWindow.addEventListener('click', function(e) {
    e.stopPropagation();
 });
 //при нажатии esc модальное окно закрывается
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") modal.style.display = 'none'
  });
  //нажатии на радиоэлемент открывается форма 
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
        format:'d.m.Y  H:i',
        formatDate: 'd.m.Y',
        formatTime: 'H:i',
        minDate:new Date(),
        minTime: new Date(),
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
             /*если  выбрано время,  
           то format:'d.m.Y',
           иначе format:'d.m.Y  H:i'*/
            let minTime2 = ct
                ? format:'d.m.Y  H:i';
                this.setOptions({
                  format : minTime2
            }) 
          
      },
  })
});
  
  $("#btn_date").click(function(){
    var str = $("#datetimepicker").val();
    return  str.length != ''
          ?  console.log(str)
          : console.log('не получилось.');
  });
  let textLi = document.querySelector('.text-li');
  textLi.addEventListener('click', function() {

  });


  // при клике на кнопку меняется цвет картинки и выводится счётчик количества кликов по кнопке.
  let count = 0;
  const btnText = 'Посмотреть видео';
  btnVideo.addEventListener('click', (e) => {
    e.stopPropagation();
    master.style.background = 'red';
    count++ ;
    btnVideo.textContent = count;
  });
//если следующий клик случился не по кнопке, то счетчик обнуляется, цвет и текст кнопки возвращаются
// в первоначальное состояние.
  bodyNode.addEventListener('click', (e) => {
    if(e.target !== btnVideo) { 
      count = 0;
      master.removeAttribute('style');
      btnVideo.innerText = btnText;
    }
  })
    
  