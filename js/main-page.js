 const username = localStorage.getItem("username");

        // Display a personalized welcome message
        if (username) {
            document.getElementById("welcome-message").textContent = `${username}`;
        } else {
            document.getElementById("welcome-message").textContent = "username!";
        }

        // to perform search operation
          function searchProduct() {
                 // Get the input value
             const searchInput = document.getElementById("search-bar").value.toLowerCase();
    
                 // Get all product elements
             const products = document.querySelectorAll("#product-list .product");

                 // Loop through the products and filter based on the search
              products.forEach((product) => {
                  const productName = product.textContent.toLowerCase();
        
                    // Show or hide based on match
                   if (productName.includes(searchInput)) {
                       product.style.display = "block"; // Show matching product
                   } else {
                       product.style.display = "none"; // Hide non-matching product
                    }
                 });
            }

            // random images
            const images = [
                "https://cdn.create.vista.com/api/media/small/441263964/stock-photo-shopping-bags-small-trolley-shop-now-lettering-pink-black-friday",
                "https://img.freepik.com/premium-vector/best-offer-end-year-sale-banner-discount-50-vector-illustration_275806-1905.jpg",
                "https://elements-resized.envatousercontent.com/elements-video-cover-images/files/302890952/Fashion%20Sale%20-%20Store%20Promo.jpg?w=400&cf_fit=cover&q=85&format=auto&s=d3ad349b003278f118a669c2088e706aebfcea6c5ce18b537587490ab154e268",
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNhbGV8ZW58MHx8MHx8fDA%3D",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnW9wAyROHF5X84YiR3He7k3AtcDCKcxUdYA&s",
                "https://www.textileblog.com/wp-content/uploads/2020/03/Fashion-Retailing.jpg",
                "https://cdn.venngage.com/template/thumbnail/full/c6903cac-7cae-4938-998e-16d12d560358.webp",
                "https://img-c.udemycdn.com/course/750x422/5549486_3699.jpg",
                "https://images.news18.com/ibnkhabar/uploads/2020/12/04-20.jpg?im=FitAndFill,width=1200,height=900",
                "https://stylecaster.com/wp-content/uploads/2019/10/columbus-day-sales-fashion-2019.jpg"
            ];
            
            function displayRandomImage() {
                // Get the image element
                const imageElement = document.getElementById("random-image");
                
                // Generate a random index
                const randomIndex = Math.floor(Math.random() * images.length);
                
                // Set the image source to a random image
                imageElement.src = images[randomIndex];
            }
            
            // Change the image every 2 seconds
            setInterval(displayRandomImage, 1000);
            
            // Show the first image immediately when the page loads
            displayRandomImage();
             
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

           