"use strict"
var isProperty = require("../is-property.js")
require("tape")("is-property", function(t) {
  
  t.assert(isProperty("foo"))
  t.assert(!isProperty(".foo"))
  t.assert(!isProperty("a.b.c"))
  t.assert(isProperty("_joke"))
  t.assert(isProperty("j_a_b_c"))
  t.assert(isProperty("f00"))
  t.assert(!isProperty("0bad"))
  t.assert(isProperty("break"))
  t.assert(!isProperty("@context"))
  
  t.end()
})