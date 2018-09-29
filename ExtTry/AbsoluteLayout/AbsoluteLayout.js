Ext.onReady(function(){
	new Ext.Window({
		height   : 500,
		width    : 500,
		layout   : 'absolute',
		defaults : {
			frame : true,
			title : 'Panel A',
			height : 100,
			width : 100
		},
		items : [
			{
				x : 50,
				y : 50,
				html : '50 50'
			},
			{
				x : 150,
				y : 50,
				html : '100 100'
			}
		]
	}).show();
});
