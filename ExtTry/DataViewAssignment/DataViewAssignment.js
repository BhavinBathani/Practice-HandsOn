Ext.onReady(function(){
    var proxyData = new Ext.data.HttpProxy({
        url: 'data.php'
    });

    var strData = new Ext.data.JsonStore({
        proxy: proxyData,
        root: 'families',
        fields: ['id', 'name'],
		autoLoad : true
    });
	var cntr = 0;
	var tplData = new Ext.XTemplate(
			'<tpl for=".">',
				'<div style="display: inline-block;border: medium solid #99BBE8;margin: 5px;">',
					'<div id="ext-gen9" class="x-panel-header x-unselectable" style="-moz-user-select: none;">{id}</div>',
					'<div class="x-panel-header x-unselectable">{name}</div>',
				'</div>',
			'</tpl>'	
    );

    var panel = new Ext.Panel({
		renderTo : 'thumb-wrap',
        title: 'List Data View',
		frame: true,
		width: '50%',
		height: '100%',
		id: 'panelBottom',		
		items: [
			{
				xtype : 'dataview',				
				store: strData,
				tpl: tplData,
				itemSelector: 'div.databox',
				autoScroll: true,		
				emptyText: 'No data to display',
				loadingText: 'Please Wait...',			
			}
		]  
    });

	//strData.load();
});


/*

var tplData = new Ext.XTemplate(
			'<div id="ext-comp-1002" class=" x-panel">',
			   '<div id="ext-gen5" class="x-panel-bwrap">',
				  '<div id="ext-gen6" class="x-panel-body x-panel-body-noheader x-box-layout-ct">',
					 '<div id="ext-gen8" class="x-box-inner" style="width: 1256px; height: 100px;">',
						'<tpl for=".">',
						'<div id="ext-comp-1003" class=" x-panel x-box-item" style="width: 75px; left: 0px; top: 0px;">',
						   '<div class="x-panel-tl">',
							  '<div class="x-panel-tr">',
								 '<div class="x-panel-tc">',
									'<div id="ext-gen9" class="x-panel-header x-unselectable" style="-moz-user-select: none;">',
									   '<span id="ext-gen14" class="x-panel-header-text">{id}</span>',
									'</div>',
								 '</div>',
							  '</div>',
						   '</div>',
						   '<div id="ext-gen10" class="x-panel-bwrap">',
							  '<div class="x-panel-ml">',
								 '<div class="x-panel-mr">',
									'<div id="ext-gen13" class="x-panel-mc">',
									   '<div id="ext-gen11" class="x-panel-body" style="width: 63px; height: 65px;">{name}</div>',
									'</div>',
								 '</div>',
							  '</div>',
							  '<div id="ext-gen12" class="x-panel-bl x-panel-nofooter">',
								 '<div class="x-panel-br">',
									'<div class="x-panel-bc"></div>',
								 '</div>',
							  '</div>',
						   '</div>',
						'</div>',
						'</tpl>',
					 '</div>',
				  '</div>',
			   '</div>',
			'</div>'
			{[this.incrementCounter()]}
		{
			incrementCounter : function(){
				cntr += 150;
				return cntr+'px';
			}
		}
    );

*/