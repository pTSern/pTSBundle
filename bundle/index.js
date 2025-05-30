System.register("bundle://bundle/_virtual/bundle",["./HelloWorld.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("bundle://bundle/_virtual/HelloWorld.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,o,l,i,a,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){l=e.cclegacy,i=e._decorator,a=e.dragonBones,c=e.Component}],execute:function(){var s,u,p,d,f;l._RF.push({},"636eacSDP1KSJO8Bt66WIiL","HelloWorld",void 0);var y=i.ccclass,b=i.property;e("HelloWorld",(s=y("HelloWorld"),u=b(a.ArmatureDisplay),s((f=t((d=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return t=e.call.apply(e,[this].concat(l))||this,r(t,"skeleton",f,o(t)),t}return n(t,e),t.prototype.onEnable=function(){this.skeleton.playAnimation("stand",0)},t}(c)).prototype,"skeleton",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=d))||p));l._RF.pop()}}}));

System.register("bundle://bundle/_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){return{execute:function(){function i(t,r){return(i=e("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,i){return e.__proto__=i,e}))(t,r)}e({applyDecoratedDescriptor:function(e,i,t,r,n){var o={};Object.keys(r).forEach((function(e){o[e]=r[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,r){return r(e,i,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,i,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},inheritsLoose:function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)},initializerDefineProperty:function(e,i,t,r){if(!t)return;Object.defineProperty(e,i,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})},setPrototypeOf:i})}}}));

(function(r) {
  r('virtual:///prerequisite-imports/bundle', 'bundle://bundle/_virtual/bundle'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});