var posts=["2023/05/21/hello-world/","2023/05/21/test1/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};