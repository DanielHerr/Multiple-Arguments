"use strict"

function multiplearguments(source) {
 let sourcetext = source.toString()
 let proxy = new Proxy(source, {
  apply(target, that, inputs) {
   let multiple = true
   if(inputs.length == 1) {
    if(Array.isArray(inputs[0])) {
     inputs = inputs[0]
    } else {
     multiple = false
   } }
   let results = Reflect.apply(target, that, inputs)
   if(multiple) {
    return(results)
   } else {
    return(results[0])
 } } })
 proxy.toString = function() {
  return(sourcetext)
 }
 return(proxy)
}