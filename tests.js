"use strict"

test("name property", function() {
 let result = multiplearguments(function something() { })
 if(result.name != "something") {
  throw('should be "something" but is ' + result.name)
} })

test("toString method", function() {
 let result1 = multiplearguments(function() { })
 let result2 = result1.toString()
 if(result2 != "function () { }") {
  throw('should return "function () { }" but returns ' + result2)
} })

test("this value", function() {
 let result = multiplearguments(function() {
  if(this != "something") {
   throw('should be "something" but is ' + this)
 } })
 result.call("something")
})

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