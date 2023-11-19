/**
 * jquery.formstyler-modern - JQuery HTML form styling plugin
 * @version v2.1.2
 * @link https://github.com/ange007/JQueryFormStyler-Modern
 * @license MIT
 * @author Borisenko Vladimir
 */

"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if((typeof exports==="undefined"?"undefined":_typeof(exports))==="object"){module.exports=e($||require("jquery"))}else{e(jQuery)}})(function(e){"use strict";var t="styler";var i="-"+t;var s={locale:navigator.browserLanguage||navigator.language||navigator.userLanguage||"en-US",select:{search:{limit:10,ajax:undefined},triggerHTML:'<div class="jq-selectbox__trigger-arrow"></div>',visibleOptions:0,smartPosition:true,onOpened:function a(){},onClosed:function d(){}},checkbox:{indeterminate:false},password:{switchHTML:'<button type="button" class="'+t+'"></button>'},number:{horizontal:false},onFormStyled:function c(){}};var o={"en-US":{file:{placeholder:"No file selected",browse:"Browse...",counter:"Selected files: %s"},select:{placeholder:"Select...",search:{notFound:"No matches found",placeholder:"Search..."}},password:{show:"&#10687;",hide:"&#10686;"}},"ru-RU":{file:{placeholder:"Файл не выбран",browse:"Обзор...",counter:"Выбрано файлов: %s"},select:{placeholder:"Выберите...",search:{notFound:"Совпадений не найдено",placeholder:"Поиск..."}}},"uk-UA":{file:{placeholder:"Файл не обрано",browse:"Огляд...",counter:"Обрано файлів: %s"},select:{placeholder:"Виберіть...",search:{notFound:"Збігів не знайдено",placeholder:"Пошук..."}}}};o["en"]=o["en-US"];o["ru"]=o["ru-RU"];o["ua"]=o["uk-UA"];function n(e){if(e.attr("id")!==undefined&&e.attr("id")!==""){this.id=e.attr("id")+i}this.title=e.attr("title");this.classes=(e.attr("class")||"")+" "+t;this.data=e.data()}function r(t,i){this.element=t;this.customElement=undefined;this.options=e.extend(true,{},s,i);var n=e.extend(true,{},o["en-US"],o[this.options.locale]);this.locales=e.extend(true,{},n,this.options.locales);this.init()}r.prototype={init:function h(){var i=this,s=e(this.element);var o=navigator.userAgent.match(/(iPad|iPhone|iPod)/i)&&!navigator.userAgent.match(/(Windows\sPhone)/i),r=navigator.userAgent.match(/Android/i)&&!navigator.userAgent.match(/(Windows\sPhone)/i),a=navigator.userAgent.match(/(MSI|Windows\sPhone|Trident(?=\/))/i);if(s.is(":checkbox")){var d=function(){var i=function s(t,i,o){this.element=t;this.options=i;this.locale=o;var r=new n(this.element);this.checkbox=e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:r.id,title:r.title,unselectable:"on"}).addClass(r.classes).data(r.data);this.element.addClass("jq-hidden").after(this.checkbox).prependTo(this.checkbox);this.setEvents().repaint()};i.prototype={setEvents:function o(){var i=this,s=this.options,o=this.element,n=this.checkbox;n.on("repaint",function(){i.repaint()}).on("click",function(e){e.preventDefault();if(!n.is(".disabled")){if(o.is(":checked")||o.is(":indeterminate")){o.prop("checked",s.indeterminate&&o.is(":indeterminate"));o.prop("indeterminate",false)}else{if(s.indeterminate){o.prop("checked",false).prop("indeterminate",true)}else{o.prop("checked",true).prop("indeterminate",false)}}o.focus().trigger("change").triggerHandler("click")}});o.closest("label").add('label[for="'+this.element.attr("id")+'"]').on("click."+t,function(t){if(!e(t.target).is("a")&&!e(t.target).closest(n).length){n.triggerHandler("click");t.preventDefault()}});o.on("change."+t,function(){n.triggerHandler("repaint")}).on("keydown."+t,function(e){if(e.which===32){e.preventDefault();n.triggerHandler("click")}}).on("focus."+t,function(){if(!n.is(".disabled")){n.addClass("focused")}}).on("blur."+t,function(){n.removeClass("focused")});return this},repaint:function r(){var e=this.element,t=this.checkbox;if(e.is(":checked")||e.is(":indeterminate")){if(e.is(":indeterminate")){t.removeClass("checked").addClass("indeterminate")}else{t.removeClass("indeterminate").addClass("checked")}}else{t.removeClass("indeterminate").removeClass("checked")}t.toggleClass("disabled",e.is(":disabled"));return this},destroy:function l(){var e=this.element;e.off("."+t+", refresh").removeAttr("style").parent().before(e).remove();e.closest("label").add('label[for="'+e.attr("id")+'"]').off("."+t);return this}};return i}();this.customElement=new d(s,this.options.checkbox,this.locales.checkbox)}else if(s.is(":radio")){var c=function(){var i=function s(t,i,o){this.element=t;this.options=i;this.locale=o;var r=new n(this.element);this.radio=e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:r.id,title:r.title,unselectable:"on"}).addClass(r.classes).data(r.data);this.element.addClass("jq-hidden").after(this.radio).prependTo(this.radio);this.setEvents().repaint()};i.prototype={setEvents:function o(){var i=this,s=this.element,o=this.radio;o.on("repaint",function(){i.repaint()}).on("click",function(t){t.preventDefault();if(!o.is(".disabled")){var i=s.attr("name");var n=o.closest("#"+i).find('input[name="'+i+'"]:radio');if(n.length<=0){n=e("body").find('input[name="'+i+'"]:radio')}n.prop("checked",false).parent().removeClass("checked");s.prop("checked",true).focus().trigger("change").triggerHandler("click")}});s.on("change."+t,function(){o.triggerHandler("repaint")}).on("keydown."+t,function(e){if(e.which===32){e.preventDefault();o.trigger("click")}}).on("focus."+t,function(){if(!o.is(".disabled")){o.addClass("focused")}}).on("blur."+t,function(){o.removeClass("focused")});s.closest("label").add('label[for="'+s.attr("id")+'"]').on("click."+t,function(t){if(!e(t.target).is("a")&&!e(t.target).closest(o).length){o.triggerHandler("click");t.preventDefault()}});return this},repaint:function r(){var e=this.element,t=this.radio;e.parent().toggleClass("checked",e.is(":checked"));t.toggleClass("disabled",e.is(":disabled"));return this},destroy:function l(){var e=this.element;e.off("."+t+", refresh").removeAttr("style").parent().before(e).remove();e.closest("label").add('label[for="'+e.attr("id")+'"]').off("."+t);return this}};return i}();this.customElement=new c(s,this.options.radio,this.locales.radio)}else if(s.is(":file")){var h=function(){var i=function s(t,i,o){this.element=t;this.options=i;this.locale=o;this.placeholderText=this.element.data("placeholder")||o["placeholder"];this.browseText=this.element.data("browse")||o["browse"];var r=new n(this.element);this.file=e('<div class="jq-file">'+'<div class="jq-file__name">'+this.placeholderText+"</div>"+'<div class="jq-file__browse">'+this.browseText+"</div>"+"</div>").attr({id:r.id,title:r.title}).addClass(r.classes).data(r.data);this.element.addClass("jq-hidden").after(this.file).appendTo(this.file);this.setEvents().repaint()};i.prototype={setEvents:function o(){var e=this,i=this.element,s=this.file;s.on("repaint",function(){e.repaint()});i.on("change."+t,function(){s.triggerHandler("repaint")}).on("focus."+t,function(){s.addClass("focused")}).on("blur."+t,function(){s.removeClass("focused")}).on("click."+t,function(){s.removeClass("focused")});return this},repaint:function r(){var t=this.element,i=this.file,s=this.options,o=e("div.jq-file__name",i);var n=t.val();if(t.is("[multiple]")){var r=t[0].files.length;if(r>0){n=(t.data("number")||s.counter).replace("%s",r)}else{n=""}}o.text(n.replace(/.+[\\\/]/,"")||this.placeholderText);i.toggleClass("changed",n!=="").toggleClass("disabled",t.is(":disabled"));return this},destroy:function l(){var e=this.element;e.off("."+t+", refresh").removeAttr("style").parent().before(e).remove();return this}};return i}();this.customElement=new h(s,this.options.file,this.locales.file)}else if(s.is('input[type="number"]')){var u=function(){var i=function s(t,i,o){this.element=t;this.options=i;this.locale=o;var r=new n(this.element);this.number=e('<div class="jq-number">'+'<div class="jq-number__spin minus"></div>'+'<div class="jq-number__spin plus"></div>'+"</div>").attr({id:r.id,title:r.title}).addClass(r.classes).data(r.data);this.element.after(this.number).prependTo(this.number).wrap('<div class="jq-number__field"></div>');if(this.options.horizontal){this.number.addClass("horizontal")}this.setEvents().repaint()};i.prototype={setEvents:function o(){var i=this,s=this.element,o=this.number;var n=null,r=null;o.on("repaint",function(){i.repaint()}).on("mousedown","div.jq-number__spin",function(){if(s.is(":disabled")){return}var t=e(this);i.changeValue(t);n=setTimeout(function(){r=setInterval(function(){i.changeValue(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){if(s.is(":disabled")){return}clearTimeout(n);clearInterval(r)});s.on("focus."+t,function(){o.addClass("focused")}).on("blur."+t,function(){o.removeClass("focused")});return this},repaint:function r(){this.number.toggleClass("disabled",this.element.is(":disabled"));return this},changeValue:function l(t){var i=this.element;var s=i.attr("min")||undefined,o=i.attr("max")||undefined,n=parseFloat(i.attr("step"))||1;var r=e.isNumeric(i.val())?i.val():0,l=parseFloat(r)+(t.is(".plus")?n:-n);var a=(n.toString().split(".")[1]||[]).length.prototype;var d="1";if(a>0){while(d.length<=a){d=d+"0"}l=Math.round(l*d)/d}if(e.isNumeric(s)&&e.isNumeric(o)){if(l>=s&&l<=o){i.val(l).change()}}else if(e.isNumeric(s)&&!e.isNumeric(o)){if(l>=s){i.val(l).change()}}else if(!e.isNumeric(s)&&e.isNumeric(o)){if(l<=o){i.val(l).change()}}else{i.val(l).change()}return this},destroy:function a(){var e=this.element;e.off("."+t+", refresh").closest(".jq-number").before(e).remove();return this}};return i}();this.customElement=new u(s,this.options.number,this.locales.number)}else if(s.is('input[type="password"]')&&!s.is("[nobutton]")&&this.options.password.switchHTML!==undefined&&this.options.password.switchHTML!=="none"){var f=function(){var i=function s(t,i,o){this.element=t;this.options=i;this.locale=o;var n=e('<div class="jq-password__switch">'+(this.options.switchHTML||"")+"</div>");this.password=e('<div class="jq-password">').append(n);this.button=n.children("button").length>0?n.children("button"):n;if(this.button.html()===""&&o["show"]!==""){this.button.html(o["show"]);if(n.children("button").length<=0){n.addClass("jq-password__switch-text")}}this.element.after(this.password).prependTo(this.password);this.setEvents().repaint()};i.prototype={setEvents:function o(){var i=this.locale,s=this.element,o=this.password,n=this.button;o.on("repaint",function(){o.toggleClass("disabled",s.is(":disabled"));n.prop("disabled",s.is(":disabled"))}).on("click",".jq-password__switch",function(){var t=e(this),o=t.closest(".jq-password"),r=o.is(".jq-password_seen");o.toggleClass("jq-password_seen",!r);if(i["show"]!==""&&i["hide"]!==""){n.html(r?i["show"]:i["hide"])}s.attr("type",r?"password":"text")});s.on("focus."+t,function(){o.addClass("focused")}).on("blur."+t,function(){o.removeClass("focused")});return this},repaint:function n(){var e=this.element,t=this.password,i=this.button;t.toggleClass("disabled",e.is(":disabled"));i.prop("disabled",e.is(":disabled"));return this},destroy:function r(){var e=this.element;e.off("."+t+", refresh").closest(".jq-password").before(e).remove();return this}};return i}();this.customElement=new f(s,this.options.password,this.locales.password)}else if(s.is('input[type="hidden"]')){return}else if(s.is("select")){var p=function(){var i=function s(t,i,o){this.element=t;this.options=i;this.locale=o;this.ajaxOptions=i.search.ajax;this.ajaxData={term:"",page:0};this.ajaxTimeout=undefined;var r=new n(this.element);this.searchBlock=e('<div class="jq-selectbox__search">'+'<input type="search" autocomplete="off" placeholder="'+(t.data("search-placeholder")||o.search["placeholder"])+'">'+"</div>"+'<div class="jq-selectbox__not-found">'+(t.data("search-not-found")||o.search["notFound"])+"</div>").hide();this.dropdown=e('<div class="jq-selectbox__dropdown" style="position: absolute">'+"<ul></ul>"+"</div>").prepend(this.searchBlock);this.selectbox=e('<div class="jq-selectbox jqselect">'+'<div class="jq-selectbox__select">'+'<div class="jq-selectbox__select-text"></div>'+'<div class="jq-selectbox__trigger">'+(i.triggerHTML||"")+"</div>"+"</div></div>").attr({id:r.id,title:r.title}).data(r.data).addClass(r.classes).append(this.dropdown);t.after(this.selectbox).prependTo(this.selectbox);this.selectboxSelect=e("div.jq-selectbox__select",this.selectbox);this.selectboxText=e("div.jq-selectbox__select-text",this.selectbox);this.loadDropdown();this.dropdown.hide();this.setEvents().repaint();t.addClass("jq-hidden")};i.prototype={loadDropdown:function r(){var t=this.element,i=this.options,s=this.locale,o=this.selectbox,n=this.dropdown,r=this.searchBlock;var a=e("option",t),d=a.filter(":selected"),c=l.makeList(a),h=!t.data("search")||i.search,u=t.data("search-limit")||(i.search||{}).limit,f=e("div.jq-selectbox__not-found",n);n.find("ul").replaceWith(c);var p=e("li",n).css({display:"inline-block"}),v=p.filter(".selected");if(n.css("left")==="auto"){n.css({left:0})}this.calculateDropdownWidth();this.calculateDropdownHeight();if(h&&(p.length>u||this.ajaxOptions!==undefined&&this.ajaxOptions.url!=="")){r.show();f.toggle(p.filter(":visible").length<1)}else{r.hide()}if(v.length){if(a.first().text()!==d.text()){o.addClass("changed")}o.data("jqfs-class",v.data("jqfs-class")).addClass(v.data("jqfs-class"))}return this},closeDropdown:function a(){var e=this.element,t=this.options,i=this.selectbox,s=this.dropdown;s.hide();i.removeClass("opened dropup dropdown");t.onClosed.call(i);return this},openDropdown:function d(){var t=this.element,i=this.options,s=this.selectbox,o=this.dropdown,n=this.searchBlock.find("input");var r=e("div.jq-selectbox__not-found",o);e("div.jqselect").removeClass("opened");e("div.jq-selectbox__dropdown:visible").hide();s.addClass("opened focused");o.show();this.smartPosition();if(n.parent().is(":visible")){n.trigger("focus");r.hide()}i.onOpened.call(s);return this},calculateDropdownWidth:function c(){var t=this.element,i=this.selectbox,s=this.selectboxText,o=this.dropdown;var n=e("li",o);var r=0,l=0;n.each(function(){var t=e(this);if(t.innerWidth()>r){r=t.innerWidth();l=t.width()}});n.css({display:""});if(s.is(".placeholder")&&s.width()>r){i.width(s.width())}else{var a=i.clone().appendTo("body").width("auto");var d=a.outerWidth();a.remove();if(d===i.outerWidth()){i.width(l)}}if(r>i.width()){o.width(r)}if(e("option",t).first().text()===""&&t.data("placeholder")!==""){n.first().hide()}return this},calculateDropdownHeight:function h(){var t=this.element,i=this.options,s=this.selectbox,o=this.dropdown;var n=e("li",o);if(n.data("li-height")===undefined){n.data("li-height",n.outerHeight())}if(o.css("top")==="auto"){o.css({top:s.outerHeight(true)||0})}return this},smartPosition:function u(){var t=this.element,i=this.options,s=this.ajaxOptions,o=this.selectbox,n=this.dropdown,r=this.searchBlock.find("input");var a=t.data("smart-position")||i.smartPosition;var d=e("ul",n),c=e("li",n),h=e("div.jq-selectbox__not-found",n),u=c.length,f=o.outerHeight(true)||0,p=d.css("max-height")||0,v=f||0;var m=c.data("li-height")||0;var g=t.data("visible-options")||i.visibleOptions,b=o.offset().top||0,w=e(window).height()-f-(b-e(window).scrollTop()),x=r.parent().outerHeight(true)||0,y=g===0?"auto":m*g,j=g>0&&g<6?y:m*(u<5?u:5);if(a&&w<=j+x+m){this.dropUp(d,b,y,m,p)}else{this.dropDown(d,w,y,m,p)}if(o.offset().left+n.outerWidth()>e(window).width()){n.css({left:"auto",right:0})}if(d.outerHeight(true)<j){d.css("min-height",j)}if(c.filter(".selected").length){if(t.val()===""){d.scrollTop(0)}else{if(d.innerHeight()/m%2!==0){m=m/2}d.scrollTop(d.scrollTop()+c.filter(".selected").position().top-d.innerHeight()/2+m)}}l.preventScrolling(d);return this},dropDown:function f(t,i,s,o,n){var r=e("input",this.dropdown).parent().outerHeight(true)||0;this.selectbox.removeClass("dropup").addClass("dropdown");var l=function a(){t.css("max-height",Math.floor((i-r-o)/o)*o)};l();t.css("max-height",n!=="none"&&parseInt(n)>0?parseInt(n):s);if(i<this.dropdown.outerHeight()+o){l()}return this},dropUp:function p(t,i,s,o,n){var r=e("input",this.dropdown).parent().outerHeight(true)||0;this.selectbox.removeClass("dropdown").addClass("dropup");var l=function a(){t.css("max-height",Math.floor((i-e(window).scrollTop()-r-o)/o)*o)};l();t.css("max-height",n!=="none"&&n>0?n:s);if(i-e(window).scrollTop()-o<this.dropdown.outerHeight()+o){l()}this.dropdown.css({top:"auto"});return this},setEvents:function v(){var i=this,s=this.element,n=this.options,r=this.ajaxOptions,l=this.selectbox,a=this.dropdown,d=this.searchBlock.find("input"),c=this.selectboxSelect;var h=e("ul",a),u=e("li",a),f=e("div.jq-selectbox__not-found",a);l.on("repaint",function(){i.repaint()}).on("dropdown:close",function(){i.closeDropdown()}).on("dropdown:open",function(){i.openDropdown()});c.on("click",function(t){if(s.is(":disabled")){return}if(e("div.jq-selectbox").filter(".opened").length){n.onClosed.call(e("div.jq-selectbox").filter(".opened"))}s.trigger("focus");if(o){return}if(a.is(":visible")){l.triggerHandler("dropdown:close")}else{l.triggerHandler("dropdown:open")}});d.on("keyup",function(){var t=e(this).val(),o=e("option",i.element);if(r!==undefined&&r.url!==""){if(t!==""){if(i.ajaxTimeout){window.clearTimeout(i.ajaxTimeout)}i.ajaxTimeout=window.setTimeout(function(){i.ajaxSearch(t,true)},r.delay||100)}else{s.find("option").remove();i.loadDropdown()}}else{u.each(function(){var i=e(this).html().match(new RegExp(".*?"+t+".*?","i"));e(this).toggle(i?true:false)})}if(o.first().text()===""&&s.data("placeholder")!==""){u.first().hide()}f.toggle(u.filter(":visible").length<1)});a.on("mouseout",function(){e("li.sel",this).addClass("selected")}).on("hover","li",function(){e(this).siblings().removeClass("selected")}).on("click","li",function(){var t=e(this),o=e("option",i.element);if(t.is(".disabled, .optgroup")){return}if(!t.is(".selected")){var n=t.index()-t.prevAll(".optgroup").length;o.prop("selected",false).eq(n).prop("selected",true);s.change()}l.triggerHandler("dropdown:close")});s.on("change."+t,function(){l.triggerHandler("repaint")}).on("focus."+t,function(){l.addClass("focused")}).on("blur."+t,function(e){l.removeClass("focused")}).on("keydown."+t+" keyup."+t,function(e){var t=u.data("li-height");if(e.which===38||e.which===37||e.which===33||e.which===36){if(s.val()===""){h.scrollTop(0)}else{h.scrollTop(h.scrollTop()+u.filter(".selected").position().top)}}if(e.which===40||e.which===39||e.which===34||e.which===35){h.scrollTop(h.scrollTop()+u.filter(".selected").position().top-h.innerHeight()+t)}if(e.which===13){e.preventDefault();l.triggerHandler("dropdown:close")}}).on("keydown."+t,function(e){if(e.which===32){c.triggerHandler("click");return false}});return this},ajaxSearch:function m(t,i){var s=this,o=this.element,n=this.options,r=this.ajaxOptions;this.ajaxData.term=t;var l={type:"GET",success:function d(e,t,o){return s.ajaxSearchSuccess(e,i)},error:function c(e,t,n){if(i){o.find("option").remove();s.loadDropdown()}if(s.options.debug&&window.console&&console.error){console.error("JQuery.FormStyler-Modern: Ошибка при запросе!")}}};var a=e.extend(l,r);if(typeof a.url==="function"){a.url=r.url.call(o,s.ajaxData)}if(typeof a.data==="function"){a.data=r.data.call(o,s.ajaxData)}e.ajax(a);return this},ajaxSearchSuccess:function g(t,i){var s=this,o=this.element,n=this.options,r=this.ajaxOptions;var l=r.processResults(t,s.ajaxData);if(this.options.debug&&window.console&&console.error){if(!l||!l.items||!e.isArray(l.items)){console.error("JQuery.FormStyler-Modern: В ответе не найдены данные по ключу - `items`.")}}if(i){o.find("option").remove()}var a=l.items||l;e(a).each(function(t,i){e("<option>").val(i.value||i.id||t).text(i.caption||i.name||i.text||i).appendTo(o)});this.loadDropdown();this.smartPosition();return this},repaint:function b(){var t=this.element,i=this.options,s=this.selectbox,o=this.dropdown,n=this.selectboxText;var r=e("option",t),l=e("li",o);var a=r.filter(":selected");if(a.val()===undefined||a.val()===""){n.html(t.data("placeholder")||i.placeholder).addClass("placeholder")}else{n.html(a.html()).removeClass("placeholder")}if(s.data("jqfs-class")){s.removeClass(s.data("jqfs-class"))}s.data("jqfs-class",a.attr("class")).addClass(a.attr("class"));l.removeClass("selected sel").not(".optgroup").eq(t[0].selectedIndex).addClass("selected sel");l.removeClass("disabled").not(".optgroup").filter(function(e){return r.eq(e).is(":disabled")}).addClass("disabled");s.toggleClass("changed",r.first().text()!==l.filter(".selected").text());s.toggleClass("disabled",t.is(":disabled"));return this},destroy:function w(){this.element.off("."+t).removeAttr("style").parent().before(this.element).remove();return this}};return i}();var v=function(){var i=function s(t,i,o){this.element=t;this.options=i;this.locale=o;var r=new n(this.element);this.selectbox=e('<div class="jq-select-multiple jqselect"></div>').attr({id:r.id,title:r.title}).addClass(r.classes).data(r.data);t.after(this.selectbox).prependTo(this.selectbox);this.loadList();var a=e("ul",this.selectbox),d=e("li",this.selectbox).attr("unselectable","on"),c=this.element.attr("size")||4,h=a.outerHeight()||0,u=d.outerHeight()||0;a.css({height:u*c});if(h>this.selectbox.height()){a.css("overflowY","scroll");l.preventScrolling(a);if(d.filter(".selected").length){a.scrollTop(a.scrollTop()+d.filter(".selected").position().top)}}this.element.addClass("jq-hidden");this.setEvents().repaint()};i.prototype={loadList:function a(){var t=this.element,i=this.selectbox;var s=e("option",t),o=l.makeList(s);i.remove("ul").append(o);return this},setEvents:function d(){var i=this,s=this.element,n=this.selectbox;var l=e("option",s),a=e("ul",n),d=e("li",n),c=a.outerHeight()||0,h=d.outerHeight()||0,u=r||o;n.on("repaint",function(){i.repaint()});d.on("click tap",function(t){var i=e(this);if(s.is(":disabled")||i.is(".disabled")){return}s.focus();if(u&&!s.is("[multiple]")||!u&&!t.ctrlKey&&!t.metaKey&&!t.shiftKey){i.siblings().removeClass("selected first")}if(u&&!s.is("[multiple]")||!u&&!t.ctrlKey&&!t.metaKey){i.addClass("selected")}if(s.is("[multiple]")&&i.is(".optgroup")){var o=i.nextUntil(".optgroup");o.each(function(){if(!e(this).is(".disabled, .optgroup")){if(e(this).is(".first")){e(this).removeClass("first")}e(this).toggleClass("selected")}})}else if(s.is("[multiple]")){if(!t.shiftKey){i.addClass("first")}if(u||t.ctrlKey||t.metaKey){i.toggleClass("selected first",!i.is(".selected")).siblings().removeClass("first")}else if(t.shiftKey){var n=function r(){if(e(this).is(".selected")){return false}else{e(this).not(".disabled, .optgroup").addClass("selected")}};i.siblings().removeClass("selected").siblings(".first").addClass("selected");if(i.prevAll(".first").length>0){i.prevAll().each(n)}if(i.nextAll(".first").length>0){i.nextAll().each(n)}if(d.filter(".selected").length===1){i.addClass("first")}}}l.prop("selected",false);d.filter(".selected").each(function(){var t=e(this),i=t.index()-(t.is(".option")?t.prevAll(".optgroup").length:0);l.eq(i).prop("selected",true)});s.change()});l.each(function(t){e(this).data("optionIndex",t)});s.on("change."+t,function(){n.triggerHandler("repaint")}).on("focus."+t,function(){n.addClass("focused")}).on("blur."+t,function(){n.removeClass("focused")});if(c>n.height()){s.on("keydown."+t,function(e){if(e.which===38||e.which===37||e.which===33){a.scrollTop(a.scrollTop()+d.filter(".selected").position().top-h)}if(e.which===40||e.which===39||e.which===34){a.scrollTop(a.scrollTop()+d.filter(".selected:last").position().top-a.innerHeight()+h*2)}})}return this},repaint:function c(){var t=this.element,i=this.selectbox;var s=e("option",t),o=e("li",i);var n=[];s.filter(":selected").each(function(){n.push(e(this).data("optionIndex"))});o.removeClass("selected").not(".optgroup").filter(function(t){return e.inArray(t,n)>-1}).addClass("selected");o.removeClass("disabled").not(".optgroup").filter(function(e){return s.eq(e).is(":disabled")}).addClass("disabled");i.toggleClass("disabled",t.is(":disabled"));return this},destroy:function h(){this.element.off("."+t+", refresh").removeAttr("style").parent().before(this.element).remove();return this}};return i}();if(s.is("[multiple]")||s.attr("size")>1){this.customElement=new v(s,this.options.select,this.locales.select)}else{this.customElement=new p(s,this.options.select,this.locales.select);if(!l.initEvent){l.init()}}}else if(s.is("input")||s.is("textarea")||s.is("button")||s.is("a.button")){s.addClass(t);if(s.is('input[type="reset"]')){s.on("click",function(){s.closest("form").children().trigger("repaint")})}if(s.is('input[type="range"]')&&a){var m=s.css("display");s.css("display","block");setTimeout(function(){s.css("display",m)},1)}}s.on("refresh reinitialize",function(){i.reinitialize()})},destroy:function u(i){var s=e(this.element);if(!i){s.removeData("_"+t)}s.removeClass("jq-hidden");if(this.customElement!==undefined){this.customElement.destroy()}},reinitialize:function f(t){this.destroy(true);this.options=e.extend(true,{},this.options,t);this.locales=e.extend(true,{},this.locales,this.options.locales);this.init()}};e.fn[t]=function(i){var s=arguments;if(i===undefined||(typeof i==="undefined"?"undefined":_typeof(i))==="object"){this.each(function(){if(!e.data(this,"_"+t)){e.data(this,"_"+t,new r(this,i))}}).promise().done(function(){var i=e(this[0]).data("_"+t);if(i){i.options.onFormStyled.call()}});return this}else if(typeof i==="string"&&i[0]!=="_"&&i!=="init"){var o=undefined;this.each(function(){var n=e.data(this,"_"+t);if(n instanceof r&&typeof n[i]==="function"){o=n[i].apply(n,Array.prototype.slice.call(s,1))}});return o!==undefined?o:this}};var l=function(){return{initEvent:false,init:function t(){this.initEvent=true;e(document).on("click",function(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&t.target.nodeName!=="OPTION"&&e(".jq-selectbox.opened").length){e(".jq-selectbox.opened").triggerHandler("dropdown:close")}});e(document).on("focus","select, input, textarea, button, a",function(t){var i=e(".jq-selectbox.opened"),s=e(t.currentTarget).parents(".jq-selectbox");if(i.get(0)===s.get(0)){return}i.triggerHandler("dropdown:close")})},preventScrolling:function s(e){var t=e.prop("scrollHeight")-e.outerHeight();var i=null,s=null;e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(o){i=o.originalEvent.detail<0||o.originalEvent.wheelDelta>0?1:-1;s=e.scrollTop();if(s>=t&&i<0||s<=0&&i>0){o.stopPropagation();o.preventDefault()}});return this},makeList:function o(t){var s=e("<ul>");for(var o=0;o<t.length;o++){var n=t.eq(o),r=(n.attr("id")||"")!==""?n.attr("id")+i:"",l=n.attr("title");var a=n.attr("class")||"";if(n.is(":selected")){a+=(a!==""?" ":"")+"selected sel"}if(n.is(":disabled")){a+=(a!==""?" ":"")+"disabled"}var d={title:l,data:n.data(),html:n.html()};if(r!==""){d["id"]=r}if(n.parent().is("optgroup")){var c="";if(n.parent().attr("class")!==undefined){c=" "+n.parent().attr("class")}if(n.is(":first-child")){e("<li>",{"class":"optgroup"+c,html:n.parent().attr("label")}).appendTo(s)}e("<li>",e.extend(d,{"class":"option"})).addClass(a).addClass(c).data("jqfs-class",n.attr("class")).appendTo(s)}else{e("<li>",d).addClass(a).data("jqfs-class",n.attr("class")).appendTo(s)}}return s}}}();e.fn.commonParents=function(){var t=this;return t.first().parents().filter(function(){return e(this).find(t).length===t.length})};e.fn.commonParent=function(){return e(this).commonParents().first()}});