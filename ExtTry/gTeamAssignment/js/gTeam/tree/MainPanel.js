Ext.namespace('gTeam');
Ext.define('gTeam.tree.MainPanel', {

	extend: 'Ext.Viewport',
	//requires: ['gTeam.TreePanel', 'gTeam.tree.MyCardPanel'],

	widget: 'widget.gteam.mainpanel',

	layout : 'border',
	items : [{
		region : 'west',
		margins : '0 5 0 0',
		width : 300,
		height : 100,
		collapsible : true,
		collapseMode : 'mini',
		items : [{
			xtype : 'gteam.mytree'
		}]
	},{
		region : 'center',
		width : 100,
		height : 100,
		items:[{
			xtype : 'gteam.mycardpanel'
		}]
	}]
});

Ext.onReady(function(){
	Ext.create('gTeam.tree.MainPanel');
});

