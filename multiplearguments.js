"use strict"

function multiplearguments(source) {
 return(new Proxy(source, {
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
  } },
  get(target, key) {
   if(key == "toString") {
    return(function() {
     return(target.toString())
    })
   } else {
    return(Reflect.get(target, key))
} } })) }