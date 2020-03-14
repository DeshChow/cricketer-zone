const users = [
    {
        "id": 1,
        "name": "Tamim Iqbal",
        "email": "tamimbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263600/263604.jpg",
        "phone": "01764786201",
        "salary": "$100,000"
    },
    {
        "id": 2,
        "name": "Shakib Al Hasan",
        "email": "sakibbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263584.jpg",
        "phone": "01764786202",
        "salary": "$120,000"
    },
    {
        "id": 3,
        "name": "Masrafee Bin Mortuza",
        "email": "mashbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263576.jpg",
        "phone": "01764786203",
        "salary": "$90,000"
    },
    {
        "id": 4,
        "name": "Mushfiqur Rahim",
        "email": "musfiqbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263582.jpg",
        "phone": "01764786204",
        "salary": "$99,000"
    },
    {
        "id": 5,
        "name": "Mahmudullah Riyad",
        "email": "riyadbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263581.jpg",
        "phone": "01764786205",
        "salary": "$70,000"
    },
    {
        "id": 6,
        "name": "Mustafijur Rahman",
        "email": "thefizbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263578.jpg",
        "phone": "01764786206",
        "salary": "$90,000"
    },
    {
        "id": 7,
        "name": "Afif Hussain",
        "email": "afifbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/255800/255889.5.jpg",
        "phone": "01764786207",
        "salary": "$50,000"
    },
    {
        "id": 8,
        "name": "Shafiul Islam",
        "email": "shafiulbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263591.jpg",
        "phone": "01764786208",
        "salary": "$40,000"
    },
    {
        "id": 9,
        "name": "Al Amin Hussain",
        "email": "alaminbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/181200/181231.1.jpg",
        "phone": "01764786209",
        "salary": "$30,000"
    },
    {
        "id": 10,
        "name": "Soumya Sarker",
        "email": "sarkerbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263575.jpg",
        "phone": "01764786210",
        "salary": "$40,000"
    },
    {
        "id": 11,
        "name": "Mehadi Hasan",
        "email": "mehadibd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/286600/286686.1.jpg",
        "phone": "01764786211",
        "salary": "$30,000"
    },
    {
        "id": 12,
        "name": "Nayem Hasan",
        "email": "nayembd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/269500/269532.1.jpg",
        "phone": "01764786281",
        "salary": "$44,000"
    },
    {
        "id": 13,
        "name": "Taijul Islam",
        "email": "taijulbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/205300/205363.1.jpg",
        "phone": "01764786291",
        "salary": "$50,000"
    },
    {
        "id": 14,
        "name": "Sabbir Rahman",
        "email": "sabbirbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/263500/263580.1.jpg",
        "phone": "01764786261",
        "salary": "$55,000"
    },
    {
        "id": 15,
        "name": "Liton Das",
        "email": "litonbd@gmail.com",
        "image": "https://p.imgci.com/db/PICTURES/CMS/179500/179581.1.jpg",
        "phone": "01764786278",
        "salary": "$90,000"
    }
]

function shuffleUsers(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


const fakeData = shuffleUsers(users)

export default fakeData;