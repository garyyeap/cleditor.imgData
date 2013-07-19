cleditor.imgData
================

A Cleditor plugin allows Cleditor to upload image through html &lt;img> tag with
Data URI schema

Usage
-----

Add to your html file <head> section

<link rel="stylesheet" href="{path-to}/jquery.cleditor.css" type="text/css">

<script type="text/javascript" src="{path-to}/jquery-{version}.js"></script>

<script type="text/javascript" src="{path-to}/jquery.cleditor.js"></script>

<script type="text/javascript" src="{path-to}/cleditor.imgData.js"></script>

<script>

$(function() {

$( '#editor' ).cleditor({

            imgData : {

                swfPath : 'string' //(required)path to swf files(expressInstall
                and filereader.swf)

            }

            //maybe other cleditor options as you like

        });

});

</script>
