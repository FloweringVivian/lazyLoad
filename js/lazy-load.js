!function(t,i){"function"==typeof define&&define.amd?define(["$"],i):"object"==typeof exports?module.exports=i():t.LazyLoad=i(window.Zepto||window.jQuery||$)}(this,function(t){function i(){this.loadImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",this.settings={container:window,effect:"show",effectArgs:null,elements:null,load:null,offset:0,event:"scroll"}}return t.fn.LazyLoad=function(e){var n=new i,s=t.extend({elements:t(this)},e);return n.init(s),n},i.prototype={init:function(i){this.settings=t.extend(this.settings,i),this.elements=t(this.settings.elements),this.loadImg=this.settings.loadImg||this.loadImg,this.loadDom=this.settings.loadDom,this.bindEvent(),"scroll"==this.settings.event&&this.load(),this.initImg()},initImg:function(){var i=this;this.elements.each(function(){var e=t(this);if((void 0===e.attr("src")||e.attr("src")===!1||""==e.attr("src"))&&e.is("img")&&(e.attr("src",i.loadImg),i.settings.loadDom)){var n=t(i.settings.loadDom).clone();e.parent().append(n),n.parent().css("position","relative"),n.css({position:"absolute",top:e.position().top,left:e.position().left,width:"100%",height:"100%","text-align":"center"}).prop("class","load-dom")}})},bindEvent:function(){var i=t(this.settings.container),e=this;i.on(e.settings.event,function(){e.load()}),t(window).on("resize",function(){e.load()})},load:function(){var t=this;this.elements.each(function(){this.loaded||(t.checkPosition(this)&&t.show(this),t.settings.load&&t.settings.load.call(t,this))})},checkPosition:function(i){var e=t(i).offset().top,n=window.clientHeight||document.documentElement.clientHeight||document.body.clientHeight,s=(window.clientWidth||document.documentElement.clientWidth||document.body.clientWidth,t(window).scrollTop());return e+this.settings.offset<=n+s?!0:!1},show:function(i){var e=this,n=t(i),s=i;s.loaded=!1;var o=n.attr("data-src");t("<img/>").attr("src",o).on("load",function(){s.loaded=!0,n.hide(),n.is("img")?n.attr("src",o):n.css("background-image","url('"+o+"')"),console.log(n.siblings(".load-dom")),n.siblings(".load-dom").remove(),n[e.settings.effect](e.settings.effectArgs)})}},i});
