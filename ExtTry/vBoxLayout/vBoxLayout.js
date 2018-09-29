Ext.onReady(function(){
	new Ext.Window({
		height : 300,
		width : 300,
		layout : 'vbox',
		layoutConfig : {
			align : 'center', //top : Default, center, stretch, stretchmax
			pack : 'center' //start : Default, center, end
		},
		defaults : {
			frame : true,
			width : 75,
			height : 50
		},
		items : [
			{
				title : 'panel 1'
			},
			{
				title : 'panel 2',
				width : 250
			},
			{
				title : 'panel 3'
			}
		]
	}).show();
});
