console.log("Index 55");
console.log("CV Screener Project");

//
const data = [
    {
        name: 'Amna',
        age: '20',
        city: 'karachi',
        language: 'JavaScript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },

    {
        name: 'Sara',
        age: '20',
        city: 'Lahore',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/60.jpg'
    },

    {
        name: 'Ayesha',
        age: '22',
        city: 'Multan',
        language: 'JavaScript',
        framework: false,
        image: 'https://randomuser.me/api/portraits/women/63.jpg'
    },

    {
        name: 'Salma',
        age: '20',
        city: 'Hyderabad',
        language: 'C#',
        framework: '.NET',
        image: 'https://randomuser.me/api/portraits/women/60.jpg'
    },

    {
        name: 'Sumaira',
        age: '22',
        city: 'Multan',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
]

// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } : { done: true }
        }
    }
}

// Button listener for Next Button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);
nextCV();

function nextCV() {
    const CurrentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrentCandidate != undefined){
        image.innerHTML = `<img src='${CurrentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item disabled">Name is ${CurrentCandidate.name}</li>
                            <li class="list-group-item disabled">Age is ${CurrentCandidate.age} years old</li>
                            <li class="list-group-item disabled">Lives in ${CurrentCandidate.city}</li>
                            <li class="list-group-item disabled">Primarily works on ${CurrentCandidate.language}</li>
                            <li class="list-group-item disabled">Uses ${CurrentCandidate.framework} framework</li>
                        </ul>`
    }
    else{
        alert("Candidates Applications are End");
        window.location.reload();
    }
    

}






