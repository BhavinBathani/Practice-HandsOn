Ext.onReady(function(){
	pan1 = new Ext.Panel({
		items : [
			{
				xtype  : 'panel',
				title  : 'Try',
				html   : 'Sliding Text<br/>Sliding Text<br/>Sliding Text<br/>Sliding Text<br/>Sliding Text<br/>Sliding Text<br/>'
			}
		]
	});

	child1 = new Ext.Panel({
		title  : 'child1',
		anchor : '100%, 50%',
		items  : pan1
	});

	child2 = new Ext.Panel({
		title  : 'child2',		
		anchor : '100%, 50%'
	});

	win1 = new Ext.Panel({
		title  : 'win1',
		renderTo : Ext.getBody(),
		height : 300,
		width  : 300,
		layout : 'anchor',
		items  : [ child1, child2 ]
	});
	//win1.show();

	pan1.el.slideOut('b',{
		callback : function(){
			child1.remove(pan1, false);
			child2.add(pan1);
			child2.doLayout();
			pan1.el.slideIn('t');
		}
	});

});
