var posts=["2023/05/21/20230521/","2023/05/24/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};