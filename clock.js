function $(element){
    return document.getElementsByClassName(element);
}

setInterval(Time,1000);
    function Time(){
    var time = new Date();
    var day=time.getDay();
    var hr=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var am_pm;
    
    switch(day){
        case 0:day="Sun";
        break;
        case 1:day="Mon";
        break;
        case 2:day="Tue";
        break;
        case 3:day="Wed";
        break;
        case 4:day="Thus";
        break;
        case 5:day='Fri';
        break;
        case 6:day="Sat";
        break;
    }
    
    if(hr>12){
        hr-=12;
        am_pm="PM";
    }
    else{ 
        am_pm="AM";
    }
    (hr==12)? am_pm="PM": am_pm;
    
    (hr<10)?hr="0"+hr :hr;
    (min<10)?min="0"+min :min;
    (sec<10)?sec="0"+sec :sec;
    
    CurrentTime= day + " : " + hr  + " : " + min  + ": " + sec  + " : " + am_pm ;
    $("text")[0].innerHTML=CurrentTime;
    }
    Time();
