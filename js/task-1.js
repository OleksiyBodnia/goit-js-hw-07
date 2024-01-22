const nameOfCategories = document.querySelector('#categories');
const countOfCategories = nameOfCategories.childElementCount;
console.log(`Number of categories: ${countOfCategories}`);

const itemOfCat = nameOfCategories.getElementsByTagName('li');

for (let i = 0; i < itemOfCat.length; i++) {
    const itemOfCatH = itemOfCat[i].getElementsByTagName('h2');

    for (let j = 0; j < itemOfCatH.length; j++) {
        console.log(`Category: ${itemOfCatH[j].textContent}`);

        const countOfItemsOfCategory = itemOfCat[i].getElementsByTagName('li');
        console.log(`Elements: ${countOfItemsOfCategory.length}`)
    }
}
