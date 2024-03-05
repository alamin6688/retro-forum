// https://openapi.programming-hero.com/api/retro-forum/posts
// to load posts 2 secon delay
const loadPosts = async (searchText = " ") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    // calling a function for display posts
    displayPosts(posts)
}
// function for Display post
const displayPosts = posts => {
    // select post Container
    const postContainer = document.getElementById('post-container');
    // Clear posts container cards before adding new cards
    postContainer.textContent = '';
    // loop posts
    posts.forEach(post => {
        console.log(post);
        // get image, author & category
        const posUserImage = post.image;
        const postCategory = post.category;
        const postAuthorName = post.author.name;
        const postTitle = post.title;
        const postDescription = post.description;
        const postCommentCount = post.comment_count;
        const postViewCount = post.view_count;
        const postPostedTime = post.posted_time;
        const postAuthorIsActive = post.isActive;


        // create a div
        const postCard = document.createElement('div');
        // add classes in div
        postCard.classList = `flex gap-5 flex-col md:flex-row  bg-[#F3F3F5] shadow-xl p-5 rounded-xl justify-around`;
        // set inner html
        postCard.innerHTML = `
                    <div>
                    <div class="bg-white w-10 h-10 rounded-xl relative">
                    <img class=" w-10 h-10 rounded-xl" src='${posUserImage}'>
                    <div>
                    <i class="fa-solid fa-circle absolute -right-1 -top-1 ${postAuthorIsActive ? 'text-green-500' : 'text-red-500'}"></i>
                    </div>
                    </div>
                    </div>
                    <div class="space-y-2">
                    <div class="mt-2 text-gray-500 text-xs"><span># ${postCategory}</span> &nbsp; <span>Author: ${postAuthorName}</span></div>
                    <h1 class="font-bold text-[18px]">${postTitle}</h1>
                    <p class="text-sm">${postDescription}</p>
                    <hr class="bg-gray-500 border-dashed">
                    <div class="flex justify-between">
                    <div class="mt-2 text-gray-500 text-xs space-x-4">
                    <span><i class="fa-regular fa-comment-dots"></i> ${postCommentCount}</span>
                    <span><i class="fa-solid fa-eye"></i> ${postViewCount}</span>
                    <span><i class="fa-regular fa-clock"></i> ${postPostedTime}</span>
                    </div>
                    <div class="">
                    <button class="button-for-click"><i
                    class="fa-solid fa-envelope-open ml-1 p-2 bg-green-500 rounded-3xl text-white"></i></button>
                    </div>
                    </div>
                    </div>
        `
        // append to post Container
        postContainer.appendChild(postCard);



        // Find the button element within the post card
        const button = postCard.querySelector('.button-for-click');
        // Capture postTitle and postViewCount

        // Attach an event listener to the button
        button.addEventListener('click', (event) => {

            const postTitle = post.title;
            const postViewCount = post.view_count;
            // Define handleButtonClick function within the closure
    const handleButtonClick = () => {
        // select post Container
        const postContainer = document.getElementById('post-container')
        // Get the count span
        const countSpan = document.getElementById('count');
        // Parse the current count
        let count = parseInt(countSpan.innerText);
        // Increment the count
        count++;
        // Update the count span
        countSpan.innerText = count;

        // get title container
        const titleContainer = document.getElementById('title-container');
        // create div
        const titleCard = document.createElement('div');
        // set inner html
        titleCard.innerHTML = `
        <div class="bg-white p-5 mb-5 flex rounded-xl">
            <div class=" pr-5">
                <h1 class="font-bold text-sm">${postTitle}</h1>
            </div>
            <div>
                <span><i class="fa-solid fa-eye"></i> ${postViewCount}</span>
            </div>
        </div>
        `;
        // append to container
        titleContainer.appendChild(titleCard);
    };

    // Call the handleButtonClick function
    handleButtonClick();
        });
// handle search button
// const handleSearch = () => {
//     toggleLoadingDots(true);
//     // Introduce a 2-second delay before loading posts
//     setTimeout(() => {
//         const searchField = document.getElementById('search-field');
//         const searchText = searchField.value;
//         loadPosts(searchText); // Load posts after the delay
//     }, 2000);
// }







    })
    // hide loading spinner
    toggleLoadingDots(false)






};








// outside of display function







loadPosts()




// Latest Posts Functionality
const loadLatestPosts = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  );
  const data = await res.json();
  const latestPosts = data;
  console.log(latestPosts);
  // calling a function for display posts
  displayLatestPosts(latestPosts);
};
// function for display latest post
const displayLatestPosts = (latestPosts) => {
  // loop latest posts
  latestPosts.forEach((latestPost) => {
    console.log(latestPost);
    // get image, author & category
    const latestPostCoverImage = latestPost.cover_image;
    const latestPostPostedDate = latestPost.author.posted_date;
    const latestPostTitle = latestPost.title;
    const latestPostDescription = latestPost.description;
    const latestPostUserImage = latestPost.profile_image;
    const postAuthorName = latestPost.author.name;
    const postDesignation = latestPost.author.designation;

    // select latest post Container
    const latestPostContainer = document.getElementById(
      "latest-post-container"
    );
    // create a div
    const latestPostCard = document.createElement("div");
    // add classes in div
    latestPostCard.classList = ``;
    //  set inner html
    latestPostCard.innerHTML = `
            <div>
                <div class="card w-full bg-base-100 space-y-3 shadow-xl border p-5">
                <figure>
                <div class="bg-[#F3F3F4] w-full h-40">
                <img src="${latestPostCoverImage}">
                </div>
                </figure>
                <div class="mt-2 text-gray-500"><i class="fa-solid fa-calendar-days"></i> <span id="no-posted-date"></span> ${latestPostPostedDate?latestPostPostedDate: "No Posted Date"}</div>
                <div class="">
                <h1 class="font-bold text-lg">${latestPostTitle}</h1>
                <p>${latestPostDescription}</p>
                <div class="flex mt-3 items-center">
                <div class="w-[50px]"><img src="${latestPostUserImage}" class="border-2  rounded-full "></div>
                <div class="flex flex-col ml-4">
                <div><span class="font-bold">${postAuthorName}</span></div>
                <div><span class="text-sm">${postDesignation?postDesignation:"Unknown"}</span></div>
                </div>
                </div>
                </div>
                </div>
            </div>
         `;
    // append to post Container
    latestPostContainer.appendChild(latestPostCard);
  });
};

loadLatestPosts();

// handle search button
const handleSearch = () => {
    toggleLoadingDots(true);
    // Introduce a 2-second delay before loading posts
    setTimeout(() => {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        loadPosts(searchText); // Load posts after the delay
    }, 2000);
}

// toggle loading dots
const toggleLoadingDots = (isLoading) => {
    const loadingDoatsdiv = document.getElementById('loading-dots-div');
    if (isLoading) {
        loadingDoatsdiv.classList.remove('hidden');
    }
    else {
        loadingDoatsdiv.classList.add('hidden');
    }
}

// toggle loading dots when page is loading
const toggleLoadingDotsWhenPageLoading = () => {
    const loadingDots2 = document.querySelector('.loading-dots2-div-when-loading');
    loadingDots2.classList.toggle('hidden');
};
// Show loading dots when the page starts loading
document.addEventListener('DOMContentLoaded', function () {
    toggleLoadingDotsWhenPageLoading();
});
// Hide loading dots when the page content is fully loaded
window.addEventListener('load', function () {
    toggleLoadingDotsWhenPageLoading();
});



const loadAllPostsWithDelay = () => {
    toggleLoadingDots(true);
    toggleLoadingDotsWhenPageLoading(true);
    // Introduce a 2-second delay using setTimeout
    setTimeout(() => {
        toggleLoadingDots(false);
        toggleLoadingDotsWhenPageLoading(false);
        loadPosts();
        loadLatestPosts();
    }, 2000);
};
// calling latest posts
loadAllPostsWithDelay();
