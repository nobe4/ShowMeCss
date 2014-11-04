(function(){
  var css= [];
  for (var sheetIndex= 0; sheetIndex < document.styleSheets.length; sheetIndex++) {
      var sheet= document.styleSheets[ sheetIndex ];
      var rules= ('cssRules' in sheet)? sheet.cssRules : sheet.rules;
      var ref = sheet.href;
      if(rules){
        //  get style from style link
         for (var sheetIndex= 0; sheetIndex < rules.length; sheetIndex++) {
          var rule= rules[ sheetIndex ];
          if ('cssText' in rule){ // direct string with style
              css.push(rule.cssText);
          } else { 
              css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
          }
        }
      } else if(ref){
        $.when($.get(ref)).done(function(response) { console.log(response); } );
        console.log(ref);
      } else {
        console.log("cannot get styles");
      }
      $(sheet.ownerNode).remove();
  }
  
  console.log(css.join('\n'));
})();
