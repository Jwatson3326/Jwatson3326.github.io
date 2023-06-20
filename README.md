# PersonalWebsite
My personal website for professional use

<h1> Dev Diary Space </h1>
<h2> Update 1 </h2>
<p>Gunna start updating this space on development progress.<br>
So far I have gotten the bare basics done, some buttons are there (they do not work yet) but the main focus has been on the background, thought it would be cool to have a starry background, of which I found a <a href="https://codepen.io/riley-pearce/pen/OJWPjZM?fbclid=IwAR2HwzINeVhFg7-YQvFDV8Teh-IH6akXO9RY3uMTapRobDt-R9fJ6-GIMkY">cool script online</a> for animated stars made in css.<br>
I took this, removed the animation because I thought it looked tacky, but I then realised that this only covered a space of 1440p. Figured if I was going to update it to at least 4k then I might as well randomly generate the positions of the stars lol.<br>
So I did that with some javascript work, and I got it working over an 8k space, and I used some simple math to keep the star desity the same regardless of screen size. It then turned out that 8k was too big and crashed my friend's browser xD <br>
I've since reduced it to 4k, which will reduce the number of calculations by a factor of 4. I also wanted to offload this onto a server, but github pages only allows static pages, so I'll have to look back into that later when I start to properly implement the "blog" thing which is half the point of the website </p>
<h2> Update 2 </h2>
<p>Okay now its time to start accomplishing the main goal: the blog system. First thigs first I need an area for blog posts to go in, and then create the actual post space. Making the blogspace was kind of annoying due to my lack of css knowledge but I eventually got there, and implemented it so that the space scales with the screen size, I will probably need to update this later to fit different viewports better but for now it works. <br>
Similarly to the blog space, I need the post space to look good in smaller screens too! Regardless the basic idea behind each post is that I need a number of things: a photo/thumbnail, a title, a description, and a date, all of which need to be presented well regardless of screen size. However once again, presentation for all scren sizes will come later.<br>
I'm not too happy with my first rendition to be honest, but I have made decent progress today and have ideas for the future!</p>