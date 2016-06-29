"use strict"

test("single argument", function() {
 let result1 = multiplearguments(function(...inputs) {
  return(inputs)
 })
 let result2 = result1("something")
 if(result2 != "something") {
  throw('result should be "something" but is ' + result2)
} })

test("multiple arguments", function() {
 let result1 = multiplearguments(function(...inputs) {
  return(inputs)
 })
 let result2 = result1("something", "something")
 if(result2[0] != "something" || result2[1] != "something") {
  throw('results should be "something" but are ' + result2)
} })

test("single array argument", function() {
 let result1 = multiplearguments(function(...inputs) {
  return(inputs)
 })
 let result2 = result1(["something"])
 if(result2[0] != "something") {
  throw('result should be "something" but is ' + result2)
} })

test("multipe array argument", function() {
 let result1 = multiplearguments(function(...inputs) {
  return(inputs)
 })
 let result2 = result1(["something", "something"])
 if(result2[0] != "something" || result2[1] != "something") {
  throw('results should be "something" but are ' + result2)
} })