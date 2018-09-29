Ext.namespace('gTeam.tree');
Ext.define('gTeam.tree.MyUserFormPanel', {

	extend: 'Ext.form.FormPanel',

	xtype: 'gteam.myuserformpanel',

	border: false,
	title : 'User Information',
	id: 'card-0',
	buttonAlign: 'center',
	layout : {type : 'vbox',pack: 'center'},
	layoutConfig: {align : 'center',pack: 'center'},
	defaults: {
		border: false
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
			//	flex : 1,
			//frame:true,
			border: false,
		},
		items : [{
		xtype:'fieldset',
		items :[
			{
				xtype : 'textfield',
			},{
				xtype : 'textfield',
			},{
				xtype : 'textfield',
			},{
				xtype : 'textfield',
			}]
		},{
			xtype:'fieldset',
			items :[{
				xtype : 'textfield',
			}]
		}]
	}]
});