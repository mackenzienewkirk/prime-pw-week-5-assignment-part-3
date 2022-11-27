console.log('***** Music Collection *****')

let collection = {};

let albumOne = {
    title: 'Love And Hate',
    artist: 'Michael Kiwanuka',
    yearPublished: 2016
}
let albumTwo = {
    title: 'Coloring Book',
    artist: 'Chance The Rapper',
    yearPublished: 2016
}
let albumThree = {
    title: 'Joanne',
    artist: 'Lady Gaga',
    yearPublished: 2016
}
let albumFour = {
    title: 'Renaissance',
    artist: 'Beyonce',
    yearPublished: 2022
}
let albumFive = {
    title: 'I Just Dropped By To Say Hello',
    artist: 'Johnny Hartman',
    yearPublished: 1963
}
let albumSix = {
    title: 'Blood On The Tracks',
    artist: 'Bob Dylan',
    yearPublished: 1975
}


function addToCollection(title, artist, yearPublished) {
let album = {
    albumTitle: title,
    albumArtist: artist,
    albumYear: yearPublished,
}
    collection.push(album);
return album;
}
console.log('Add Love and Hate by Michael Kiwanuka to collection:', addToCollection('Love and Hate', 'Michael Kiwanuka', 2016) );
console.log('Add Coloring Book by Chance The Rapper to the collection:')

function showCollection(array){
    console.log(('These are my albums:'), array.length);
for (let i=0; i < array.length; i++); {
    console.log(`${array[i].albumTitle} by ${array[i].albumArtist}, published in ${array[i].albumYear}`);

}
}

function findByArtist(artist){
    let found = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].albumArtist === artist) {
            found.push(collection[i]); 
        } else 
    }
    return found;
}

//Test 'findByArtist' function.

console.log('Should find Michael Kiwanuka album:', findByArtist('Michael Kiwanuka'));
console.log('Should return an empty array:', findByArtist('Pitbul'));

