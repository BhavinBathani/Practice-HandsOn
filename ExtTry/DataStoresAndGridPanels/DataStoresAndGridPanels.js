Ext.onReady(function(){
	var fields = [
		{
			name : 'lastName',
			mapping : 'lastname'
		},
		{
			name : 'firstName',
			mapping : 'firstname'
		},
	];

	var proxy = new Ext.data.ScriptTagProxy({
		url	: 'http://extjsinaction.com/dataQuery.php',
		baseParams	: {
			limit	: 50
		}
	});		

	var store = new Ext.data.JsonStore({
		proxy		: proxy,
		fields		: fields,
		root		: 'records',
		autoLoad	: true,
		listeners	: {
			load : function(obj,records){
				Ext.each(records,function(rec){
					console.info('hi '+rec.get('firstName')+' '+rec.get('lastName'));
				}); 
			}
		}
	});

	var columns = [
		{
			header		: 'First Name',
			dataIndex	: 'firstName'
		},
		{
			header		: 'Last Name',
			dataIndex	: 'lastName'
		},
		{
			header		: 'Full Name',
			dataIndex	: 'firstName',
			renderer	: function(value, metaData, record){
				metaData.style += 'color: #F00;font-weight: bold;';
				return record.get('lastName')+' , '+value;
			}
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