Ext.onReady(function() {
	new Ext.Window({
		layout:'anchor',
		anchor:'90% 90%',
		layoutConfig: {
			pack:'center'
        },               
        items:[{
			xtype: 'panel',			
			layout	: 'hbox',
			items	: [{
				title	: 'panel 1'
			},{
				title	: 'panel 1'
			},{
				title	: 'panel 1'
			},{
				title	: 'panel 1'
			}]
        }]
	}).show().center();
});


/*
var viewport = new Ext.Viewport({
		layout:'border'

	});
*//*
Ext.onReady(function() {
            var viewport = new Ext.Viewport({
                               
                items:[{
                    title:'Item 1',
                    html:'Content 1',
                    width:800,
                    anchor:'right 20%'
                },{
                    title:'Item 2',
                    html:'Content 2',
                    width:300,
                    anchor:'50% 30%'
                },{
                    title:'Item 3',
                    html:'Content 3',
                    width:600,
                    anchor:'-100 50%'
                }]
            });
        });*/