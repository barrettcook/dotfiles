Vim�UnDo� q�ӣ��#g�{k�c�,`e���<͟����(                                     Y死    _�                             ����                                                                                                                                                                                                                                                                                                                                       E           V        Y��     �              E    import filepath from 'filepath';       0export default function transformer(file, api) {     const j = api.jscodeshift;         var importView = false;     var importText = false;     var root = j(file.source);   /  var imports = root.find(j.ImportDeclaration);         root.find(j.JSXIdentifier)       .forEach(path => {         j(path)   E        .filter(p => (p.node.name == "div" || p.node.name == "span"))           .replaceWith((p) => {   #          let newName = p.node.name   %          if (p.node.name == "div") {               newName = "View";               importView = true;   -          } else if (p.node.name == "span") {               newName = "Text";               importText = true;             }   &          return j.identifier(newName)   	      });       });     console.log('Updated tags');     console.log('imports');       -  var addImport = function(Component, path) {   .    console.log(`Adding ${Component} import`);       console.log(file.path);       console.log(path);   H    var relativePath = filepath.create(file.path) // Path to source file   (      .dir() // Directory of source file   ?      .relative(path); // Get relative path to Component import       *    console.log('relative', relativePath);       console.log("");           var specifiers = [];   G    specifiers.push(j.importDefaultSpecifier(j.identifier(Component)));       console.log('specifiers');   (    var filtered = imports.filter(p => {   1      var name = p.value.source.value.split()[0];   *      var matches = name.match("\.scss$");   !      console.log(name, matches);         return !matches;       });       console.log('filtered');       var last = filtered.at(-1);       console.log('last');   O    last.insertAfter(j.importDeclaration(specifiers, j.literal(relativePath)));       console.log('inserted');     }         if (importText) {   -    addImport('Text', 'src/atoms/text/Text');     }     if (importView) {   -    addImport('View', 'src/atoms/view/View');     }       !  if (importView || importText) {   .    return root.toSource({ quote: 'single' });   
  } else {       return null;     }   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        Y��    �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        Y歵     �                0export default function transformer(file, api) {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        Y歸     �                Amodule.exports = export default function transformer(file, api) {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        Y歺    �                :module.exports = default function transformer(file, api) {5��