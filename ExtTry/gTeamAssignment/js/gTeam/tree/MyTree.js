Ext.namespace('gTeam.tree');
Ext.define('gTeam.TreePanel', {

	extend: 'Ext.tree.Panel',

	xtype: 'gteam.mytree',

	title: 'Countries',
	store: new gTeam.tree.MyStore(),
	border : false,
	rootVisible: true,

	constructor : function(config){
		this.callParent(this, config);

		this.on('itemcontextmenu', this.onItemContextMenu, this);
	},

	onItemContextMenu : function(view, record, item, index, event){
		var menu1 = new Ext.menu.Menu({
			items: [
					{
					xtype: 'menuitem',
					text: 'Add',
					listeners: {
						'click' : function(menuItem, eventObject, eOpts){
							if(record.get('leaf')){
								Ext.getCmp('cardCenterID').layout.setActiveItem('card-1', {type: 'slide', cover: false, direction: 'left'});
							} else {
								Ext.getCmp('cardCenterID').layout.setActiveItem('card-0', {type: 'slide', cover: false, direction: 'left'});
							}
						},
						scope: this
					}
				},{
					xtype: 'menuitem',
					listeners: {
						'click' : function(menuItem, eventObject, eOpts){
							if(record.get('leaf')){
								Ext.getCmp('cardCenterID').layout.setActiveItem('card-1', {type: 'slide', cover: false, direction: 'left'});
							} else {
								Ext.getCmp('cardCenterID').layout.setActiveItem('card-0', {type: 'slide', cover: false, direction: 'left'});
							}
						}
					},
					text: 'Edit'

				},{
					xtype: 'menuitem',
					listeners: {
						'click' : function(menuItem, eventObject, eOpts){
							if(record.get('leaf')){
								Ext.getCmp('cardCenterID').layout.setActiveItem('card-1', {type: 'slide', cover: false, direction: 'left'});
							} else {
								Ext.getCmp('cardCenterID').layout.setActiveItem('card-0', {type: 'slide', cover: false, direction: 'left'});
							}
						}
					},
					text: 'Delete'
				}
			]
		});
		menu1.showAt(event.getXY());
		event.stopEvent();
	}
});
