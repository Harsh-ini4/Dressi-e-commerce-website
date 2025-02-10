 const likedCardsKey = 'likedCards';
    const likedContainer = document.getElementById('likedItems');

    // Get liked cards from localStorage
    const likedCards = JSON.parse(localStorage.getItem(likedCardsKey)) || [];

    if (likedCards.length === 0) {
      likedContainer.innerHTML = '<p>No liked items yet.</p>';
    } else {
      likedContainer.innerHTML = ''; // Clear default message
      likedCards.forEach((cardHTML, index) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cardHTML;
        const cardElement = tempDiv.firstElementChild;

        // Create a "Remove" button to delete the card
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add event listener to remove the card from the page and localStorage
        removeButton.addEventListener('click', () => {
          likedCards.splice(index, 1); // Remove card from array
          localStorage.setItem(likedCardsKey, JSON.stringify(likedCards)); // Update localStorage
          cardElement.remove(); // Remove card from page
        });

        // Append the "Remove" button to the card
        const cardBody = cardElement.querySelector('.card-body');
        cardBody.appendChild(removeButton);

        likedContainer.appendChild(cardElement);
      });
    }