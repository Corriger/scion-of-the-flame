var sacredIcon = document.querySelectorAll(".navigation li");
for (var i = 0, len = sacredIcon.length; i < len; i++)
{
    (function(index){
        var greatJourney = document.querySelectorAll("main article")
        sacredIcon[i].onclick = function(){
          greatJourney[index].classList.remove("current")
          greatJourney[index].classList.toggle("current")
        }
    })(i);

}
