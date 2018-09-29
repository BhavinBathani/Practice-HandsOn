Ext.namespace('gTeam.tree');
Ext.define('gTeam.tree.MyCardPanel', {

	extend: 'Ext.Container',

	xtype: 'gteam.mycardpanel',

	//requires: ['gTeam.tree.MyCompanyFormPanel', 'gTeam.tree.MyUserFormPanel'],

	activeItem: 0,
	id : 'cardCenterID',
	layout: {
		type: 'card',
		deferredRender: true,
	},
	// the panels (or "cards") within the layout
	items: [{
		xtype : 'gteam.myuserformpanel'
	},{
		xtype : 'gteam.mycompanyformpanel'
	}]
});