Ext.onReady(function(){
	new Ext.Viewport({
		height : 300,
		width : 300,
		border : false,
		items : [ 
			{
				xtype : 'panel',
				layout : 'hbox',
				
				layoutConfig : {
					align : 'middle', //top : Default, middle, stretch, stretchmax
					pack : 'center' //start : Default, center, end
				},
				defaults : {
					width : 150,
					height : 150,
					border : false,
				},
				items : [
					{
						xtype : 'panel',
						layout : 'vbox',
						layoutConfig : {
							align : 'center', //top : Default, middle, stretch, stretchmax
							pack : 'center' //start : Default, center, end
						},
						defaults : {
							frame : true,
							width : 75,
							height : 75
						},
						items : [
							{
								title : 'panel 1',
								html : 'pan1'
							},
							{
								title : 'panel 2',
								html : 'pan1'
							}
						]
					},
					{
						xtype : 'panel',
						layout : 'vbox',
						layoutConfig : {
							align : 'center', //top : Default, middle, stretch, stretchmax
							pack : 'center' //start : Default, center, end
						},						
						defaults : {
							frame : true,
							width : 75,
							height : 75
						},
						items : [							
							{
								title : 'panel 3',
								html : 'pan1'
							},
							{
								title : 'panel 4',
								html : 'pan1'
							}
						]
					}
				]
			}
		]
	});
});
