/*!
* cleditor.imgData
* Copyright 2013, Gary Yeap <contact@garyyeap.com>
* https://github.com/garyyeap/cleditor.imgData
* MIT Licensed
*/
;(function( $ ){

  var fileReader = new FileReader();

  $.cleditor.buttons.image = {
    name: 'image',
    stripIndex : 23,
    title: 'Insert Image',
    command: 'insertimage',
    popupName: 'Insert Image',
    popupClass: 'cleditorPrompt',
    popupContent: '<div id="cleditor-img-data-wrap">'+
                    '<div>'+
                      '<label for="cleditor-img-data-file">Upload : </label>'+
                      '<input type="file" accept="image/*" id="cleditor-img-data-file" />'+
                    '</div>'+
                    '<div>'+
                      '<label for="cleditor-img-data-url-input">Or URL : </label>'+
                      '<input type="text" id="cleditor-img-data-url-input" />'+
                      '<input type="button" id="cleditor-img-data-url-button" value="Add" />'+
                    '</div>'+
                  '</div>',
    buttonClick: function( event, data ){

      var $fileButton = $( '#cleditor-img-data-file' );
      var $wrap = $( '#cleditor-img-data-wrap' );
      var $urlButton = $( '#cleditor-img-data-url-button' );
      var $urlInput = $( '#cleditor-img-data-url-input' );
      var editor = data.editor;

      var defaultOptions = {
        swfPath : '',
        lineWrapCss : {
          margin : '5px'
        }
      };

      var options = $.extend( defaultOptions, data.editor.options.imgData );

      $wrap.children( 'div' ).css( options.lineWrapCss );

      $urlButton.click( function( e ){

        var url = $urlInput.val();

        if( url.length < 1 ) return true;

        editor.execCommand( data.command, url, null, data.button );
        editor.focus();
        editor.hidePopups();
        $urlInput.val( '' );
      });

      $fileButton.change( function( buttonEvent ){

        if( buttonEvent.target.files.length < 1 ) return true;

        fileReader.onload = function( readerEvent ){

          editor.execCommand( data.command, readerEvent.target.result, null, data.button );
          editor.hidePopups();
          editor.focus();
        };

        fileReader.readAsDataURL( buttonEvent.target.files[ 0 ] );

        $( this ).val( '' );
      }).fileReader({

        filereader : options.swfPath + 'filereader.swf',
        expressInstall : options.swfPath + 'expressInstall.swf'
      });
    }
  };
})( jQuery );