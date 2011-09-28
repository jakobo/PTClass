/*
Copyright (c) 2005-2010 Sam Stephenson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*//* Based on Alex Arnell's inheritance implementation. *//** section: Language
 * class Class
 *
 *  Manages Prototype's class-based OOP system.
 *
 *  Refer to Prototype's web site for a [tutorial on classes and
 *  inheritance](http://prototypejs.org/learn/class-inheritance).
**/(function(a){function j(a){return b.call(a)===i}function k(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function l(a){if(m(a)!==h)throw new TypeError;var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}function m(a){switch(a){case null:return c;case void 0:return d}var b=typeof a;switch(b){case"boolean":return e;case"number":return f;case"string":return g}return h}function n(a){return typeof a=="undefined"}function p(a){var b=a.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");return b.length==1&&!b[0]?[]:b}function q(a,b){var c=a;return function(){var a=r([t(c,this)],arguments);return b.apply(this,a)}}function r(a,b){var c=a.length,d=b.length;while(d--)a[c+d]=b[d];return a}function s(a,b){return a=o.call(a,0),r(a,b)}function t(a,b){if(arguments.length<2&&n(arguments[0]))return this;var c=a,d=o.call(arguments,2);return function(){var a=s(d,arguments);return c.apply(b,a)}}var b=Object.prototype.toString,c="Null",d="Undefined",e="Boolean",f="Number",g="String",h="Object",i="[object Function]",o=Array.prototype.slice,u=function(){},v=function(){function b(){}function c(){function d(){this.initialize.apply(this,arguments)}var a=null,c=[].slice.apply(arguments);j(c[0])&&(a=c.shift()),k(d,v.Methods),d.superclass=a,d.subclasses=[],a&&(b.prototype=a.prototype,d.prototype=new b,a.subclasses.push(d));for(var e=0,f=c.length;e<f;e++)d.addMethods(c[e]);return d.prototype.initialize||(d.prototype.initialize=u),d.prototype.constructor=d,d}function d(b){var c=this.superclass&&this.superclass.prototype,d=l(b);a&&(b.toString!=Object.prototype.toString&&d.push("toString"),b.valueOf!=Object.prototype.valueOf&&d.push("valueOf"));for(var e=0,f=d.length;e<f;e++){var g=d[e],h=b[g];if(c&&j(h)&&p(h)[0]=="$super"){var i=h;h=q(function(a){return function(){return c[a].apply(this,arguments)}}(g),i),h.valueOf=i.valueOf.bind(i),h.toString=i.toString.bind(i)}this.prototype[g]=h}return this}var a=function(){for(var a in{toString:1})if(a==="toString")return!1;return!0}();return{create:c,Methods:{addMethods:d}}}();a.exports?a.exports.Class=v:a.Class=v})(this)