Ext.onReady(function(){
	new Ext.Window({
		height   : 300,
		width    : 300,
		layout   : 'accordion',
		layoutCongig : {
			animate : true
		},
		items : [
			{
				title : 'pan 1'
			},
			{
				title : 'pan 1'
			},
			{
				xtype : 'panel',
				title : 'panel for tab',
				layout : 'fit',
				items : {
					xtype : 'tabpanel',
					activeTab : 0,
					items : [
						{
							title : 'tab1',
							html : 'tab1'
						},
						{
							title : 'tab2',
							html : 'tab2'
						}
					]
				}
			}
		]
	}).show();
});
