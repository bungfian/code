function FeaturedPost(a){(function(e){var h={blogURL:"",MaxPost:5,idcontaint:"#featuredpost",ImageSize:500,interval:10000,autoplay:false,loadingClass:"loadingxx",pBlank:"http://3.bp.blogspot.com/-v45kaX-IHKo/VDgZxWv0xUI/AAAAAAAAHAo/QJQf8Dlh3xc/s1600/grey.gif",MonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tagName:false};h=e.extend({},h,a);var g=e(h.idcontaint);var c=h.blogURL;var d=h.MaxPost*200;if(h.blogURL===""){c=window.location.protocol+"//"+window.location.host}g.html('<div id="slides"><ul class="randomnya"></ul></div><div id="buttons"><a href="#" id="prevx" title="prev"></a><a href="#" id="nextx" title="next"></a></div>').addClass(h.loadingClass);var f=function(w){var q,k,m,u,x,p,t,v,r,l="",s=w.feed.entry;for(var o=0;o<s.length;o++){for(var n=0;n<s[o].link.length;n++){if(s[o].link[n].rel=="alternate"){q=s[o].link[n].href;break}}if("media$thumbnail"in s[o]){u=s[o].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+h.ImageSize)}else{u=h.pBlank.replace(/\/s[0-9]+(\-c|\/)/,"/s"+h.ImageSize+"$1")}k=s[o].title.$t;r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;x=r.substring(0,4);p=r.substring(5,7);t=r.substring(8,10);v=h.MonthNames[parseInt(p,10)-1];l+='<li><a target="_blank" href="'+q+'" title="'+k+'"><div class="overlayx"></div><img class="random" src="'+u+'" title="'+k+'"><h4>'+k+'</h4></a><div class="label_text"><span class="date"><span class="dd">'+t+'</span> <span class="dm">'+v+'</span> <span class="dy">'+x+'</span></span> <span class="autname">'+m+"</span></div></li>"}e("ul",g).append(l)};var b=function(){var i="/-/"+h.tagName;if(h.tagName===false){i="";e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}else{e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}(function(){setTimeout(function(){e("#prevx").click(function(){e("#slides li:first").before(e("#slides li:last"));return false});e("#nextx").click(function(){e("#slides li:last").after(e("#slides li:first"));return false});if(h.autoplay){var k=h.interval;var l=setInterval("rotate()",k);e("#slides li:first").before(e("#slides li:last"));e("#slides").hover(function(){clearInterval(l)},function(){l=setInterval("rotate()",k)});function j(){e("#nextx").click()}}g.removeClass(h.loadingClass)},d)})()};e(document).ready(b)})(jQuery)};function rotate(){$('#nextx').click();};document.write('')
function labelthumbs(e){for(var t=0;t<numposts;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}var l;try{l=n.media$thumbnail.url;l=l.replace("/s72-c/","/w"+thumb_width+"-h"+thumb_height+"-c/")}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}else l=no_thumb}var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);document.write('<ul class="rp_thumbs">');document.write("<li>");if(showpostthumbnails==true)document.write('<a href="'+i+'"><div class="rp_thumb"><span class="rollover"></span><img width="'+thumb_width+'" height="'+thumb_height+'" alt="'+r+'" title="'+r+'" src="'+l+'"/></div></a>');document.write('<span class="rp_title"><a href="'+i+'" title="'+r+'" target ="_top">'+r+"</a></span>");var y="";document.write('<span class="rp_meta">');if(showpostdate==true){y=y+'<span class="rp_meta_date">'+g+"/"+m+"/"+v+"</span>"}if(showcommentnum==true){if(u=="1 Comments")u="1 Comment";if(u=="0 Comments")u="No Comments";u='<span class="rp_meta_comment"><a href="'+f+'" target ="_top">'+u+"</a></span>";y=y+u}if(displaymore==true){y=y+'<span class="rp_meta_more"><a href="'+i+'" class="url" target ="_top">Read More...</a></span>'}document.write(y);document.write("</span>");document.write('<span class="rp_summary">');if("content"in n){var w=n.content.$t}else if("summary"in n){var w=n.summary.$t}else var w="";var E=/<\S[^>]*>/g;w=w.replace(E,"");if(showpostsummary==true){if(w.length<numchars){document.write("");document.write(w);document.write("")}else{document.write("");w=w.substring(0,numchars);var S=w.lastIndexOf(" ");w=w.substring(0,S);document.write(w+"...");document.write("")}}document.write("</span>");document.write("</li>");document.write("</ul>")}document.write('<ul class="rp_thumbs2">');for(var t=1;t<numposts2;t++){var n=e.feed.entry[t];var r=n.title.$t;var i;if(t==e.feed.entry.length)break;for(var o=1;o<n.link.length;o++){if(n.link[o].rel=="replies"&&n.link[o].type=="text/html"){var u=n.link[o].title;var f=n.link[o].href}if(n.link[o].rel=="alternate"){i=n.link[o].href;break}}var x;try{x=n.media$thumbnail.url.replace("/s72-c/","/w"+thumb_width2+"-h"+thumb_height2+"-c/")}catch(h){s=n.content.$t;a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);if(a!=-1&&b!=-1&&c!=-1&&d!=""){x=d}else x=no_thumb2}var p=n.published.$t;var v=p.substring(0,4);var m=p.substring(5,7);var g=p.substring(8,10);if(showpostthumbnails2==true)document.write('<a href="'+i+'"><div class="rp_thumb2"><img width="'+thumb_width2+'" height="'+thumb_height2+'" alt="'+r+'" title="'+r+'" src="'+x+'"/></div></a>');document.write("<li>");document.write('<span class="rp_title rp_title2"><a href="'+i+'" title="'+r+'" target ="_top">'+r+"</a></span>");var y="";document.write('<span class="rp_meta rp_meta2">');if(showpostdate2==true){y=y+'<span class="rp_meta_date rp_meta_date2">'+g+"/"+m+"/"+v+"</span>"}if(showcommentnum2==true){if(u=="1 Comments")u="1 Comment";if(u=="0 Comments")u="No Comments";u='<span class="rp_meta_comment rp_meta_comment2"><a href="'+f+'" target ="_top">'+u+"</a></span>";y=y+u}if(displaymore2==true){y=y+'<span class="rp_meta_more rp_meta_more2"><a href="'+i+'" class="url" target ="_top">Read More...</a></span>'}document.write(y);document.write("</span>");document.write("</li>")}document.write("</ul>")};
