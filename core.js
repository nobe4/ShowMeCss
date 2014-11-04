(function(){
  var css= [];
  for (var sheeti= 0; sheeti<document.styleSheets.length; sheeti++) {
      var sheet= document.styleSheets[sheeti];
      var rules= ('cssRules' in sheet)? sheet.cssRules : sheet.rules;
      if(rules){
         for (var rulei= 0; rulei<rules.length; rulei++) {
          var rule= rules[rulei];
          if ('cssText' in rule)
              css.push(rule.cssText);
          else
              css.push(rule.selectorText+' {\n'+rule.style.cssText+'\n}\n');
        }
      } else {console.log("cannot get styles");}
  }
  
  console.log(css.join('\n'));
})();
