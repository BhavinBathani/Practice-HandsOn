Ext.onReady(function(){
	
	var proxy = new Ext.data.HttpProxy({
		url : 'paging-grid-data.php'
	});

	var gridStore = new Ext.data.JsonStore({
		proxy		: proxy,
		fields		: [
			{name: 'test_id', mapping: 'test_id'},
			{name: 'test_name', mapping: 'test_name'}
		],		
		autoLoad	: true,		
	});

    cols= [
        {header: "test id", width: 60, dataIndex: 'test_id', sortable: true},
        {header: "test name", width: 60, dataIndex: 'test_name', sortable: true}
    ];

	// create the Grid

	var grid = new Ext.grid.GridPanel({
		title		: 'Paging Grid',
		frame		: true,
		renderTo	: Ext.getBody(),
		height		: 400,
		width		: 400,
		store		: gridStore,
		loadMask	: true,
		columns		: cols,
		viewConfig	: {
			forceFit	: true
		}
	});
});
