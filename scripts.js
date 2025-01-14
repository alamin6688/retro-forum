const loadCategory = async (searchText = " ") => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayPosts(posts);
};


const displayPosts = (posts) => {
    const categoryContainer = document.getElementById("post-container");
    categoryContainer.textContent = "";
    posts.forEach((item) => {
        console.log(item);

    // API's Data in variables---
    const postUserImage = item.image;
    const postAuthorIsActive = item.isActive;
    const postCategory = item.category;
    const postAuthorName = item.author.name;
    const postTitle = item.title;
    const postDescription = item.description;
    const postCommentCount = item.comment_count;
    const postViewCount = item.view_count;
    const postPostedTime = item.posted_time;

    // create a div
    const categoryCard = document.createElement("div");

    // add classes in div
    categoryCard.classList = `flex gap-5 flex-col md:flex-row  bg-gray-200 shadow-2xl p-5 rounded-2xl justify-around`;

    // set innerHTML
    categoryCard.innerHTML = `
        <div>
            <div class="bg-white w-10 h-10 rounded-xl relative">
                <img class=" w-10 h-10 rounded-xl" src='${postUserImage}'>
            <div>
            <i class="fa-solid fa-circle absolute -right-1 -top-1 ${
            postAuthorIsActive ? "text-green-500" : "text-red-500"}">
            </i>
        </div>
        </div>
        </div>
        <div class="space-y-2">
        <div class="mt-2 text-gray-500 text-xs"><span># ${postCategory}</span> &nbsp; <span>Author: ${postAuthorName}</span></div>
            <h1 class="font-bold text-[18px]">${postTitle}</h1>
            <p class="text-sm">${postDescription}</p>
            <hr class="bg-gray-500 border-dashed">
        <div class="flex justify-between">
        <div class="mt-2 flex justify-between text-gray-500 text-xs space-x-4">
            <span><i class="fa-regular fa-comment-dots"></i> ${postCommentCount}</span>
            <span><i class="fa-solid fa-eye"></i> ${postViewCount}</span>
            <span><i class="fa-regular fa-clock"></i> ${postPostedTime}</span>
        </div>
        <div>
            <button class="button-for-click"><i
            class="fa-solid fa-envelope-open ml-1 p-2 bg-green-500 rounded-3xl text-white"></i></button>
        </div>
        </div>
        </div>
    `;
    categoryContainer.appendChild(categoryCard);

    // button View count functions 
    const button = categoryCard.querySelector(".button-for-click");
    button.addEventListener("click", (event) => {
        const postTitle = item.title;
        const postViewCount = item.view_count;
        const handleButtonClick = () => {
            
        // select post Container
        const postContainer = document.getElementById("post-container");

        // Count span Edits
        const countSpan = document.getElementById("count");
        let count = parseInt(countSpan.innerText);
        count++;
        countSpan.innerText = count;
        const titleContainer = document.getElementById("title-container");
        const titleCard = document.createElement("div");
        // set inner html
        titleCard.innerHTML = `
            <div class="bg-white p-2 lg:p-5 mb-5 flex justify-between rounded-xl">
                <div class=" pr-5">
                    <h1 class="font-bold text-sm">${postTitle}</h1>
                </div>
                <div>
                    <span><i class="fa-solid fa-eye"></i> ${postViewCount}</span>
                </div>
            </div>
        `;
        titleContainer.appendChild(titleCard);
      };

        handleButtonClick();

    });
  });
    // hide loading spinner
    toggleLoadingDots(false);
};

loadCategory();

// Latest Posts Functionality
const loadLatestPosts = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    const latestPosts = data;
    console.log(latestPosts);
    displayLatestPosts(latestPosts);
};

// function for display latest post
const displayLatestPosts = (latestPosts) => {
    latestPosts.forEach((latestPost) => {
    console.log(latestPost);

    // API's Data in variables---
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

    //  set innerHTML
    latestPostCard.innerHTML = `
            <div>
                <div class="card w-full bg-base-100 space-y-3 shadow-xl border p-5">
                <figure>
                <div class="bg-[#F3F3F4] w-full h-40">
                <img src="${latestPostCoverImage}">
                </div>
                </figure>
                <div class="mt-2 text-gray-500"><i class="fa-solid fa-calendar-days"></i> <span id="no-posted-date"></span> ${
                  latestPostPostedDate ? latestPostPostedDate : "No Posted Date"
                }</div>
                <div class="">
                <h1 class="font-bold text-lg">${latestPostTitle}</h1>
                <p>${latestPostDescription}</p>
                <div class="flex mt-3 items-center">
                <div class="w-[50px]"><img src="${latestPostUserImage}" class="border-2  rounded-full "></div>
                <div class="flex flex-col ml-4">
                <div><span class="font-bold">${postAuthorName}</span></div>
                <div><span class="text-sm">${
                  postDesignation ? postDesignation : "Unknown"
                }</span></div>
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

    // setTimeOut Loading Function
    setTimeout(() => {
        const searchField = document.getElementById("search-field");
        const searchText = searchField.value;
        loadCategory(searchText);
        }, 2000);
    };

// toggle loading dots
const toggleLoadingDots = (isLoading) => {
    const loadingDotsDiv = document.getElementById("loading-dots-div");
    if (isLoading) {
      loadingDotsDiv.classList.remove("hidden");
    } else {
      loadingDotsDiv.classList.add("hidden");
    }
};

// toggle loading dots when page is loading
const toggleLoadingDotsWhenPageLoading = () => {
    const loadingDots2 = document.querySelector(".loading-dots2-div-when-loading");
    loadingDots2.classList.toggle("hidden");
};

// Show loading spinner(Page Start loading)
document.addEventListener("DOMContentLoaded", function () {
    toggleLoadingDotsWhenPageLoading();
});

// Hide loading spinner(Page all loaded)
window.addEventListener("load", function () {
    toggleLoadingDotsWhenPageLoading();
});

const loadAllPostsWithDelay = () => {
  toggleLoadingDots(true);
  toggleLoadingDotsWhenPageLoading(true);

  // setTimeOut Loading Function
  setTimeout(() => {
    toggleLoadingDots(false);
    toggleLoadingDotsWhenPageLoading(false);
    loadCategory();
    loadLatestPosts();
  }, 2000);
};

loadAllPostsWithDelay();
