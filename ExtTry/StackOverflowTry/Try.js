Ext.QuickTips.init();
var tb = new Ext.Toolbar({
id:'form_menu_bar',
renderTo: Ext.get('newproducttitle').dom,
items: [
    {
        tooltip:
        {
        text: "Click on this button to generate the template and save it in server.",
        title: "Save" ,
        xtype: "quicktip" 
        }
        ,iconCls : 'msai_save_template'
        , handler : generateTemplate 

    },
    {
        tooltip:
        {
        text: "Click on this button to generate the template.",
        title: "Save to clipboard" ,
        xtype: "quicktip" 
        }
        , iconCls : 'msai_save_clipboard'
        , handler : generateTemplateClipboard 
    }]});