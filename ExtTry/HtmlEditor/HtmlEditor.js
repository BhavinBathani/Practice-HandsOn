Ext.onReady(function(){
	new Ext.Window({
		height : 300,
		width : 300,
		layout : 'vbox',
		layoutConfig : {
			align : 'center', //top : Default, center, stretch, stretchmax
			pack : 'center' //start : Default, center, end
		},
		items : {
			xtype: 'htmleditor',
			enableColors: false,
			enableAlignments: false
			}
	}).show();
});
