$(document).ready(function()
{
			if((navigator.userAgent.indexOf("iPhone")>0)||(navigator.userAgent.indexOf("iPad")>0))
				{
					 $('.afterClick').show('slow');
					 $('.beforeClick').hide('slow');
					 $('.stuck').hide('slow');
					 
        }
		else
		{$('.afterClick').hide();
	$('.newregister').hide();
	
		}
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
eventFire(document.getElementById('login'), 'click');
	$('.showLogin').click(function(){
		$('.beforeClick').hide('slow');
		// $('.afterClick').animate({
		// 	opacity:'1'
		// },1000);
		$('.afterClick').show('slow');
		// alert('hey');
	});

	$('.close').click(function(){
		console.log('hey');
		$('.afterClick').hide('slow');
		$('.beforeClick').show('slow');
	})
});