# lazyLoad
图片懒加载-lazyLoad

Lazy Load 这个 jQuery 插件，是用来缓冲加载图片的插件。如果页面很长有很多图片的话，下载图片就需要很多时间。而这款插件，会检测你的滚动情况，只有当浏览器的滚动条滚动到图片可见的位置，它才会从后台请求下载图片，然后显示出来。使用这个插件，可以在需要显示图片的时候，才下载图片，所以可以减少服务器的压力，避免不必要的资源下载。

## 第一步：加载相关文件
引入zepto.js或者jquery.js

```javascript
<script type="text/javascript" src="js/zepto.js"></script>
<script type="text/javascript" src="js/lazy-load.js"></script>
```

## 第二步：定义图片结构
按照官方的建议，定义你的img结构，为需要懒加载的图片加上相同的class，并把默认的src引入一个1x1像素的图片，把data-src的值设置为图片的实际地址

```javascript
<img class="lazy" src="images/tempimage.gif" data-src="images/img1.jpg" alt="lazyload" width="164" height="164">
```

## 第三步：调用这个插件

```javascript
$('.lazy').LazyLoad();
```
