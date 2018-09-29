Ext.onReady(function(){
	new Ext.Viewport({
		layout : 'border',
		defaults : {
			width : 100,
			height : 100,
			collapsible : true,
			split : true,
			collapseMode : 'mini'
		},
		items : [
			{
				title : 'center Panel',
				region : 'center'
			},
			{
				title : 'north Panel',
				region : 'north',
				margins : '0 0 5 0'
			},
			{
				title : 'east Panel',
				region : 'east',
				margins : '0 0 0 5',				
			},
			{
				title : 'west Panel',
				region : 'west',
				margins : '0 5 0 0'
			},
			{
				title : 'south Panel',
				region : 'south',
				split : true
			}
		]
		
	});
});
