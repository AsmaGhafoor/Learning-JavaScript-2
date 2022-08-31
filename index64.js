console.log("Index 64");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

//For Drag
imgBox.addEventListener('dragstart', (e) => {
    console.log("Drag Started");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});


// For Drop
imgBox.addEventListener('dragend', (e) => {
    //e.preventDefault();
    console.log("Drag End");
    e.target.className = 'imgBox';
});


for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag Over");
    });


// whiteBox.addEventListener('dragenter', (e) => {
//     console.log("Drag Enter");
//     e.target.className += 'dashed';
// })

//     whiteBox.addEventListener('dragleave', () => {
//         console.log("Drag Leave");
//         e.target.className = 'whiteBox'
//     });

//     whiteBox.addEventListener('drop', (e) => {
//         console.log("Drag Drop");
//         e.target.append(imgBox);
//     });
// }










// for (whiteBox of whiteBoxes) {
//     whiteBox.addEventListener('dragover', (e) => {
//         e.preventDefault();
//         console.log('DragOver has been triggered');
//     });

    whiteBox.addEventListener('dragenter', (e) => {
        console.log('DragEnter has been triggered');
        e.target.className += ' dashed';
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log('DragLeave has been triggered');
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    })
}









