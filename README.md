# viewport-size-checker
Viewport Size Checker is a Javascript bookmarklet tool to check your viewport size.<br>
Available in Safari, Chrome, Firefox and more.

## How to use
1. Copy and paste the following code to your bookmarks bar.
```
javascript:!function()%7Bvar%20e=document.createElement(%22link%22);e.setAttribute(%22rel%22,%22stylesheet%22),e.setAttribute(%22type%22,%22text/css%22),e.setAttribute(%22href%22,%22https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap%22),document.head.appendChild(e);let%20n=%22viewport-size-container%22;function%20i()%7Bvar%20e=window.innerWidth+%22%20X%20%22+window.innerHeight,t=document.getElementsByClassName(n);0%3Ct.length&&(t%5B0%5D.innerHTML=%22%3Cspan%3E%22+e+%22%3C/span%3E%22)%7D%7B0%3C(e=document.getElementsByClassName(n)).length&&e%5B0%5D.parentNode.removeChild(e%5B0%5D);let%20t=document.createElement(%22div%22);t.className=n,t.style.cssText=%22position:%20fixed;%20padding:%201px%2014px;%20top:%2018px;%20right:%2020px;%20text-align:%20center;%20border-radius:%207px;%20background-color:%20rgba(255,%20106,%2069,%200.8);%20color:%20#fff;%20font-family:%20'Barlow',%20'sans-serif';%20font-size:%2018px;%20line-height:%2028px;%20height:%2030px;%20z-index:%2010000;%20font-weight:%20normal;%22,document.body.appendChild(t),i(),window.onresize=i,t.addEventListener(%22click%22,function(e)%7Be.preventDefault(),t.parentNode.removeChild(t),window.onresize=null%7D)%7D%7D();
```
2. Click the bookmark to get the viewport size.
3. Check the top right corner of the browser.
