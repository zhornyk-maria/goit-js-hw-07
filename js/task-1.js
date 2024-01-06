const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemsCount}`);
});
