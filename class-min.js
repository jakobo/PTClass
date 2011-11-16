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
*//* Based on Alex Arnell's inheritance implementation. */
(function(h){function p(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);return a}function q(a){if(r(a)!==l)throw new TypeError;var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(b);return c}function r(a){switch(a){case null:return s;case void 0:return t}switch(typeof a){case "boolean":return u;case "number":return v;case "string":return w}return l}function x(a){a=a.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g,"").replace(/\s+/g,"").split(",");
return a.length==1&&!a[0]?[]:a}function y(a,c){return function(){var b=m([k(a,this)],arguments);return c.apply(this,b)}}function m(a,c){for(var b=a.length,d=c.length;d--;)a[b+d]=c[d];return a}function k(a,c){if(arguments.length<2&&typeof arguments[0]==="undefined")return this;var b=a,d=n.call(arguments,2);return function(){var a;a=d;var e=arguments;a=n.call(a,0);a=m(a,e);return b.apply(c,a)}}var o=Object.prototype.toString,s="Null",t="Undefined",u="Boolean",v="Number",w="String",l="Object",n=Array.prototype.slice,
z=function(){},f=function(){function a(){}var c=function(){for(var a in{toString:1})if(a==="toString")return false;return true}();return{create:function(){function b(){this.initialize.apply(this,arguments)}var d=null,c=[].slice.apply(arguments);o.call(c[0])==="[object Function]"&&(d=c.shift());p(b,f.Methods);b.superclass=d;b.subclasses=[];if(d)a.prototype=d.prototype,b.prototype=new a,d.subclasses.push(b);for(var d=0,e=c.length;d<e;d++)b.addMethods(c[d]);if(!b.prototype.initialize)b.prototype.initialize=
z;return b.prototype.constructor=b},Methods:{addMethods:function(a){var d=this.superclass&&this.superclass.prototype,j=q(a);c&&(a.toString!=Object.prototype.toString&&j.push("toString"),a.valueOf!=Object.prototype.valueOf&&j.push("valueOf"));for(var e=0,h=j.length;e<h;e++){var f=j[e],g=a[f];if(d&&o.call(g)==="[object Function]"&&x(g)[0]=="$super"){var i=g,g=y(function(a){return function(){return d[a].apply(this,arguments)}}(f),i);g.valueOf=k(i.valueOf,i);g.toString=k(i.toString,i)}this.prototype[f]=
g}return this}}}}();h.exports?h.exports.Class=f:h.Class=f})(this);