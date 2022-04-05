// //make a fetch call to server side route handler

// const setup = async () => {
//     let results = await fetch('/blogs');
//     let records = await results.json();

//     console.log(records);

//     //find div dom element with class 'item' from html
//     let div = document.querySelector('.item');
//     let html = "";

//     //loop through db records
//     records.forEach(blogEntry => {

//     //create div tag with the db blog items
//     html+=`
//     <div class="media">
//         <img class="mr-3 img-fluid post-thumb d-none d-md-flex" src="/images/blog/blog-post-thumb-7.jpg" alt="image">
//         <div class="media-body">
//             <h3 class="title mb-1"><a href="/blog-post">${blogEntry.title}</a></h3>
//             <div class="meta mb-1"><span class="date">Published 3 months ago</span><span class="time">5 min read</span><span class="comment"><a href="#">4 comments</a></span></div>
//             <div class="intro">${blogEntry.body}</div>
//             <a class="more-link" href="/blog-post">Read more &rarr;</a>
//         </div>
//     </div>
//     `
//     })

//     //append chunk of code to div.innerHTML

//     div.innerHTML = html;

// }
// setup();