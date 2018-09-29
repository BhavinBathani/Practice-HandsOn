Ext.onReady(function() {
	new Ext.Window({
		width : 300,
		height : 300,
		layout : 'anchor',
		title : 'NestedForm',
		items : [
			{
				xtype : 'form',
				anchor : '100% 100%',
				layout : 'vbox',
				layoutConfig : {
					align : 'stretch'
				},
				defaults : {
					flex : 1,
					frame:true,
					width : 100,
					height: 100,
				},
				items : [
					{
						xtype : 'form',
						layout : 'hbox',
						layoutConfig : {
							align : 'stretch'
						},
						defaults : {
							flex : 1,
							frame:true,
						},
						items : [{
							title: 'one',
							html : 'one'
						},
						{
							title: 'two',
							html : 'two'
						},{
							title: 'one',
							html : 'one'
						}]
					},{
						xtype : 'form',
						layout : 'hbox',
						layoutConfig : {
							align : 'stretch'
						},
						defaults : {
							flex : 1,
							frame:true,
						},
						items : [{
							title: 'one',
							html : 'one'
						},
						{
							title: 'two',
							html : 'two'
						},{
							title: 'one',
							html : 'one'
						}]
					},{
						xtype : 'form',
						layout : 'hbox',
						layoutConfig : {
							align : 'stretch'
						},
						defaults : {
							flex : 1,
							frame:true,
						},
						items : [{
							title: 'one',
							html : 'one'
						},
						{
							title: 'two',
							html : 'two'
						},{
							title: 'one',
							html : 'one'
						}]
					}
				]
			}
		]
	}).show();
});