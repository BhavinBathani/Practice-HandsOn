Ext.onReady(function(){
		var MainForm = new Ext.form.FormPanel({			
			labelAlign: 'left',			
			border: false,
			buttonAlign: 'center',
			height : 650,
			width : 850,
			layout : 'vbox',
			layoutConfig: {align : 'stretch'},		
			defaults: {
				flex : 1,				
				border: false,
			},
			items : [
			{
				xtype : 'form',
				layout : 'hbox',
				layoutConfig : {
					align : 'stretch'
				},
				defaults : {
					flex : 1,
					//frame:true,
					border: false,
					defaults: {width:'90%'},
				},				
				items : [
				{	
					xtype:'fieldset',
					title: 'Name :',					
					items :[
						{
							xtype : 'textfield',
							fieldLabel : 'Full Name',
						},{
							xtype : 'textfield',
							fieldLabel : 'Company',
						},{
							xtype : 'textfield',
							fieldLabel : 'Job Title',
						},{
							xtype : 'textfield',
							fieldLabel : 'File As',
						}
					]
				},{	
					xtype:'fieldset',
					title: 'Photo :',					
					items :[
						{
							xtype : 'textfield',							
						}
					]
				}]
			},
			{
				xtype : 'form',
				layout : 'hbox',
				layoutConfig : {
					align : 'stretch'
				},
				defaults : {
					flex : 1,
					//frame:true,
					border: false,
					defaults: {width:'90%'},
				},				
				items : [
				{	
					xtype:'fieldset',
					title: 'Phone Numbers :',					
					items :[
						{
							xtype : 'textfield',
							fieldLabel : 'Business',
						},{
							xtype : 'textfield',
							fieldLabel : 'Home',
						},{
							xtype : 'textfield',
							fieldLabel : 'Business Fax',
						},{
							xtype : 'textfield',
							fieldLabel : 'Mobile',
						}
					]
				},{	
					xtype:'fieldset',
					title: 'Email :',					
					items :[
						{
							xtype : 'textfield',
							fieldLabel : 'Email',
						},{
							xtype : 'textfield',
							fieldLabel : 'Display name',
						},{
							xtype : 'textfield',
							fieldLabel : 'Webpage',
						},{
							xtype : 'textfield',
							fieldLabel : 'IM Adress',
						}
					]
				}]
			},
			{
				xtype : 'form',
				layout : 'hbox',
				layoutConfig : {
					align : 'stretch'
				},
				defaults : {
					flex : 1,
					//frame:true,
					border: false,
					defaults: {width:'90%'},
				},
				items : [
				{	
					xtype:'fieldset',
					title: 'Addresses :',					
					items :[
						{
							xtype: 'textarea',
							anchor : '100% 100%',
							fieldLabel : 'Business'
						}
					]
				},{	
					xtype:'fieldset',
					layout : 'hbox',
					layoutConfig : {
							align : 'stretch'
					},
					title: 'Additional Information :',					
					items :[
						{
							xtype: 'textarea',
							hideLabel : true,							
						}
					]
				}
				]
			},{
				xtype : 'form',
				layout : 'hbox',
				layoutConfig : {
					align : 'stretch'
				},
				defaults : {
					flex : 1,
					// frame:true,
					border: false,
				},
				items : [
				{	
					xtype:'fieldset',
					defaults: {width:'95%'},
					title: 'Attachments :',					
					items :[
						{
							xtype: 'textarea',
							height : 30,
							fieldLabel : 'Attachments',
						}
					]
				}]
			}
			]
		});		
	/*form_employee.addButton('Save', function(){
			if (form_employee.isValid()) {
				Ext.Msg.alert('Success', 'Your form is valid!.');
			}else{
				Ext.Msg.alert('Errors', 'Please fix the errors noted.');
			}
		}, form_employee);*/
 
	var TwoTabPan = new Ext.TabPanel({		
		activeTab : 0,
		anchor : '100% 100%',
		//width : '100%',
		//height : '100%',
		//bodyStyle: 'padding:4px',
		items : [
			{
				title : 'General',
				items : MainForm
			},
			{
				title : 'Detailed'
			}
		]
	});
	new Ext.Window ({
		title: 'Form Assignment',
		width : 850,
		height : 650,
		layout : 'anchor',
		items : TwoTabPan
	}).show();		
});
