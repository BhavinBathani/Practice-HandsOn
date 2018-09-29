Ext.onReady(function(){
	
	var proxy = new Ext.data.HttpProxy({
		url	: 'data.php',		
	});		

	var store = new Ext.data.JsonStore({
		proxy		: proxy,
		fields		: ['id', 'name'],
		root		: 'families',
		autoLoad	: true,
		listeners	: {
			load : function(obj,records){
				Ext.each(records,function(rec){
					console.info('hi '+rec.get('id')+' '+rec.get('name'));
				}); 
			}
		}
	});

	var columns = [
		{
			header		: 'ID',
			dataIndex	: 'id'
		},
		{
			header		: 'Name',
			dataIndex	: 'name'
		}
	];

	var grid = new Ext.grid.GridPanel({
		title		: 'My Grid Panel',
		frame		: true,
		renderTo	: Ext.getBody(),
		height		: 400,
		width		: 400,
		store		: store,
		loadMask	: true,
		columns		: columns,
		viewConfig	: {
			forceFit	: true
		}
	});
});


/*Ext.onReady(function(){
	var myArray = [
		['bhavin'],['ankit'],['chandu'],['sagar']
	];

	var proxy = new Ext.data.MemoryProxy(myArray);
	var record = Ext.data.Record.create(['name']);
	var myReader = new Ext.data.ArrayReader({},record);
	var store = new Ext.data.Store({
		reader		: myReader,
		proxy		: proxy,
		autoLoad	: true,
		listeners	: {
			load : function(obj,records){
				Ext.each(records,function(rec){
					console.info('hi'+rec.get('name'));
				});
			}
		}
	});
});*/