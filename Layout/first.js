function afterFunc()
{
	var leftPanel = document.getElementById('leftid').offsetHeight;
	var centerPanel = document.getElementById('centerid').offsetHeight;
	var rightPanel =	document.getElementById('rightid').offsetHeight;
	var max = 0;
	
	max = leftPanel;
	
	if(centerPanel > max)
	{
		max = centerPanel;
	}	

	if(rightPanel > max )
	{
		max = rightPanel;
	}	
	
	if(max == leftPanel)
	{
		document.getElementById('centerid').style.height = max.toString() + "px";
		document.getElementById('rightid').style.height = max.toString() + "px";	
	}
	else if(max == centerPanel)
	{
		document.getElementById('leftid').style.height = max.toString() + "px";
		document.getElementById('rightid').style.height = max.toString() + "px";	
	}
	else if(max == rightPanel)
	{
		document.getElementById('leftid').style.height = max.toString() + "px";
		document.getElementById('centerid').style.height = max.toString() + "px";	
	}

	//document.getElementById('footerid').style.marginTop = max.toString() + "px";
	//document.getElementById('rightupperid').style.height = "10%";
	//document.getElementById('rightlowerid').style.height = "90%";
	//alert(l+" "+c+" "+r+" "+max);
}
window.onload=afterFunc;