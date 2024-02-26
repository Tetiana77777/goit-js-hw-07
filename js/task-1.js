const elem = document.querySelectorAll(".item");
console.log(`Number of categories: ${elem.length}`)

const titles = document.querySelectorAll("h2");
titles.forEach(function (title) {
    const titleName = title.textContent;
    console.log(`Category: ${titleName}`);
    const categoryName = title.parentElement.querySelectorAll("ul > li");
console.log(`Elements: ${categoryName.length}`);
})

