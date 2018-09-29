Ext.namespace('gTeam.tree');
Ext.define('gTeam.tree.MyCompanyFormPanel', {

	extend: 'Ext.form.FormPanel',

	xtype: 'gteam.mycompanyformpanel',

	border: false,
	id: 'card-1',
	title : 'Company Information',
	buttonAlign: 'center',
	layout : {type : 'vbox',pack: 'center'},
	layoutConfig: {align : 'center',pack: 'center'},		
	defaults: {
		border: false,
	},
	buttons: [{
		text: 'Save'
	},{
		text: 'Undo'
	}],
	items : [{
		xtype : 'form',
		layout : {type : 'hbox',pack: 'center'},
		layoutConfig : {
			align : 'center',
			pack: 'center'
		},
		defaults : {
			border: false,
		},
		items : [
		{
			xtype:'fieldset',
			items :[{
				xtype : 'textfield',
			},{
				xtype : 'textfield',
			},{
				xtype : 'textfield',
			},{
				xtype : 'textfield',
			}]
		}]
	}]
});
