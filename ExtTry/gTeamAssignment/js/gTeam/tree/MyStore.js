Ext.namespace('gTeam.tree');
Ext.define('gTeam.tree.MyStore', {

	extend: 'Ext.data.TreeStore',

	xtype: 'gteam.mystore',

	model: 'gTeam.tree.MyModel',
	proxy: {
		type: 'ajax',
		url : 'http://localhost:8080/gTeam/TreeData'
	},
	root: {
		expanded: true
	}
});
