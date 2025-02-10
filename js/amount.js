  function goToNextPage() {
            const headingValue = document.getElementById("myHeading").innerText;
            window.location.href = `confirmation.html?totalPrice=${encodeURIComponent(totalPrice)}`;
            sessionStorage.setItem("headingValue", headingValue);
            window.location.href = "buy now page.html";
        }