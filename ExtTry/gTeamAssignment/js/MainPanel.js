Ext.onReady(function(){
	var curNode = null;

	var store = new Ext.data.TreeStore({
		model: 'UserTree',
		proxy: {
	        type: 'ajax',
	        url : 'http://localhost:8080/gTeam/TreeData'
	    },
		root: {
			expanded: true
		}
	});

	var simpleTree = new Ext.tree.Panel({
		store: store,
		border : false,
		rootVisible: true
	});
var menu1 = new Ext.menu.Menu({
		items: [
				{
				xtype: 'menuitem',
				text: 'Add',
				listeners: {
					'click' : function(menuItem, eventObject, eOpts){
						if(curNode.get('leaf')){
							CardPanel.layout.setActiveItem('card-1', {type: 'slide', cover: false, direction: 'left'});
						} else {
							CardPanel.layout.setActiveItem('card-0', {type: 'slide', cover: false, direction: 'left'});
						}
					}
				}
			},{
				xtype: 'menuitem',
				listeners: {
					'click' : function(menuItem, eventObject, eOpts){
						if(curNode.get('leaf')){
							CardPanel.layout.setActiveItem('card-1', {type: 'slide', cover: false, direction: 'left'});
						} else {
							CardPanel.layout.setActiveItem('card-0', {type: 'slide', cover: false, direction: 'left'});
						}
					}
				},
				text: 'Edit'

			},{
				xtype: 'menuitem',
				listeners: {
					'click' : function(menuItem, eventObject, eOpts){
						if(curNode.get('leaf')){
							CardPanel.layout.setActiveItem('card-1', {type: 'slide', cover: false, direction: 'left'});
						} else {
							CardPanel.layout.setActiveItem('card-0', {type: 'slide', cover: false, direction: 'left'});
						}
					}
				},
				text: 'Delete'
			}
		]
	});
simpleTree.on('itemcontextmenu', function(view, record, item, index, event){
			//alert(record)
			//treePanelCurrentNode = record;
			menu1.showAt(event.getXY());
			curNode = record;
			event.stopEvent();
	},this);


		var userForm = new Ext.form.FormPanel({			
			border: false,
			id: 'card-0',
			buttonAlign: 'center',
			layout : {type : 'vbox',pack: 'center'},
			layoutConfig: {align : 'center',pack: 'center'},		
			defaults: {
				border: false
			},
			buttons: [
			  { text: 'Save' },
			  { text: 'Undo' }
			],
			items : [
			{
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
				items : [
				{	
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
						}
					]
				},{	
					xtype:'fieldset',
					items :[
						{
							xtype : 'textfield',
						}
					]
				}]
			}]
		});

		var companyForm = new Ext.form.FormPanel({			
			border: false,
			id: 'card-1',
			buttonAlign: 'center',
			layout : {type : 'vbox',pack: 'center'},
			layoutConfig: {align : 'center',pack: 'center'},		
			defaults: {
				border: false,
			},
			buttons: [
			  { text: 'Save' },
			  { text: 'Undo' }
			],
			items : [
			{
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
					items :[
						{
							xtype : 'textfield',
						},{
							xtype : 'textfield',
						},{
							xtype : 'textfield',
						},{
							xtype : 'textfield',
						}
					]
				}]
			}]
		});	

var CardPanel = new Ext.Container({
    			activeItem: 0,
    			layout: {
        			type: 'card',
        			deferredRender: true,
    			},
			    // the panels (or "cards") within the layout
    			items: [
    				userForm,
    				companyForm
    			]});

	var MainPanel = new Ext.Viewport({
		layout : 'border',
		items : [{
			title : 'west Panel',
			region : 'west',
			margins : '0 5 0 0',
			width : 300,
			height : 100,
			collapsible : true,
			collapseMode : 'mini',
			items : [{
				simpleTree
			}]
		},{
			title : 'center Panel',
			region : 'center',
			width : 100,
			height : 100,
			items:[{
				xtype : 'gteam.mycardpanel'
			}]
		}]
	});
});
