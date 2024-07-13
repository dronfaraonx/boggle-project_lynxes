const boggleLetters = {
            cube1: "AAEEGN",
            cube2: "ABBJOO",
            cube3: "ACHOPS",
            cube4: "AFFKPS",
            cube5: "AOOTTW",
            cube6: "CIMOTU",
            cube7: "DEILRX",
            cube8: "DELRVY",
            cube9: "DISTTY",
            cube10: "EEGHNW",
            cube11: "EEINSU",
            cube12: "EHRTVW",
            cube13: "EIOSST",
            cube14: "ELRTTY",
            cube15: "HIMNUQu",
            cube16: "HLNNRZ",
        };

        // Function to generate a random letter from a cube
        function getRandomLetter(cube) {
            const randomIndex = Math.floor(Math.random() * cube.length);
            return cube[randomIndex];
        }

        // Select all buttons
        const buttons = document.querySelectorAll('.button');
        // Select the Mix button
        const buttonMix = document.querySelector('.buttonMix');

        // Event listener for the Mix button
        buttonMix.addEventListener('click', () => {
            Object.keys(boggleLetters).forEach(cubeKey => {
                const cube = boggleLetters[cubeKey]
                const randomLetter = getRandomLetter(cube);

                // Find the corresponding button and update its text content
                const buttonIndex = parseInt(cubeKey.slice(4)) - 1; // Adjust index to start from 0
                buttons[buttonIndex].textContent = randomLetter
            });
        });