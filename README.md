cleditor.imgData
================

A Cleditor plugin allows Cleditor to upload image through html &lt;img> tag with
Data URI schema

Usage
-----

Add to your html file &lt;head&gt; section

```html
<link rel="stylesheet" href="{path-to}/jquery.cleditor.css" type="text/css" />
<script src="{path-to}/jquery-{version}.js"></script>
<script src="{path-to}/jquery.cleditor.js"></script>
<script src="{path-to}/cleditor.imgData.js"></script>
<script>
	$(function() {
		
		$( '#editor' ).cleditor({
			imgData : {
		    	swfPath : 'string' // (required) path to swf files(expressInstall.swf and filereader.swf)
			}
			//maybe other cleditor options as you like
	    });
	});
</script>
```
