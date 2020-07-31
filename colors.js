var Links = {
  SetColor:function (color){
    // var alist = document.querySelectorAll('a');
    // for(var i=0; i<alist.length; i++){
    //   alist[i].style.color = color;
    // }
    $('a').css('color',color);
  }
}
var Body = {
  SetColor:function (color){
    // q_style = document.querySelector('body').style;
    // q_style.color = color;
    $('body').css('color',color);
  },
  SetBackgroundColor:function (color){
    // q_style = document.querySelector('body').style;
    // q_style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){
  var q_style = document.querySelector('body').style;
  var alist = document.querySelectorAll('a');
  if(self.value === 'night'){
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';
    Links.SetColor('powderblue');
  }
  else{
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';
    Links.SetColor('blue');
  }
}
