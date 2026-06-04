
const filterList = [];

function getFilteredones(tag, thing) {

    filterList.push(tag)
    filterList.push(thing)
    // console.log(filterList);

    const filteredArrayList = filterList.filter(item => item === "Summer")

    console.log(filteredArrayList);
}

getFilteredones("Summer", "Beach");