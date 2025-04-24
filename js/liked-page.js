// like button
            const likedCardsKey = 'likedCards';

            // Save liked items to localStorage
            const saveLikedCards = (cards) => {
              localStorage.setItem(likedCardsKey, JSON.stringify(cards));
            };
        
            // Get liked items from localStorage
            const getLikedCards = () => {
              return JSON.parse(localStorage.getItem(likedCardsKey)) || [];
            };
        
            // Handle click on .collect
            document.querySelectorAll('.collect').forEach((collectIcon) => {
              collectIcon.addEventListener('click', (event) => {
                const clickedImage = event.target;
                const cardElement = event.target.closest('.card'); // Get the closest .card
                const cardHTML = cardElement.outerHTML; // Get the card's HTML
        
                const requiredSrc = 'https://t3.ftcdn.net/jpg/05/20/19/60/360_F_520196054_Uy8LwGHzlqAQWEG3rMICCfaSZuAzXTF2.jpg';
        
                // Toggle the collect icon and save the card if needed
                if (clickedImage.src === 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png') {
                  clickedImage.src = requiredSrc; // Change to liked icon
        
                  // Save to localStorage
                  const likedCards = getLikedCards();
                  likedCards.push(cardHTML);
                  saveLikedCards(likedCards);
                } else {
                  clickedImage.src = 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'; // Reset to default icon
                  alert('Item removed from Liked Items!');
                }
              });
            });
