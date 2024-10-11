document.addEventListener("DOMContentLoaded", function() {
    // Create grid cells dynamically
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < 9; i++) { // Rows
        for (let j = 0; j < 4; j++) { // Columns
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridContainer.appendChild(gridItem);
        }
    }

    // Function to change images to egg.png for one random cell in every row
    function changeImages() {
        // Select all grid items
        const gridItems = document.querySelectorAll('.grid-item');

        // Track which rows have been changed
        const changedRows = new Set();

        // Iterate through each grid item
        for (let i = 6; i < 9; i++) { // Rows
            let rowIndex = i;
            let columnIndex = Math.floor(Math.random() * 4); // Random column index
            let index = rowIndex * 4 + columnIndex; // Calculate index

            // Check if the row has already been changed
            if (!changedRows.has(rowIndex)) {
                // Change the image of the random cell in this row
                gridItems[index].style.backgroundImage = "url('https://i.postimg.cc/W4527Bdf/Screenshot-2024-04-29-at-10-33-05-AM.png')";
                changedRows.add(rowIndex);
            }
        }

        // Reset images to block.png after 20 seconds
        setTimeout(() => {
            gridItems.forEach(item => {
                item.style.backgroundImage = "url('https://i.postimg.cc/g2qcxXmp/Screenshot-2024-04-29-at-10-33-17-AM.png')";
            });
        }, 16000);
    }

    // Button click event listener
    document.getElementById('changeImagesBtn').addEventListener('click', changeImages);

    // Test the code
    // For testing purposes, you can manually trigger the button click event
    // document.getElementById('changeImagesBtn').click();
});

function disable() {
    var x = document.getElementById("changeImagesBtn");
    x.style.display = "none";
    setTimeout(function() {
        x.style.display = "block";
        y.innerHTML="";
    }, 16000); // Delay for 20000 milliseconds (20 seconds)
  }
  function play() {
    var audio = document.getElementById("clickk");
    audio.play();
  }

  document.getElementById('closePopup').addEventListener('click', function() {
    // Removing popup
    document.getElementById('popupOverlay').style.display = 'none';
  });


  
