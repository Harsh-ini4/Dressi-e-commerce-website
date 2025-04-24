
const receivedHeadingValue = sessionStorage.getItem("headingValue");
document.getElementById("receivedHeading").innerText = receivedHeadingValue || "No value received.";

 // Parse the URL parameters
 const queryParams = new URLSearchParams(window.location.search);
 const totalPrice = queryParams.get("myHeading");

function confirmOrder() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (name && address && phone) {
        alert(`Order confirmed!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nTotal Price:${totalPrice}`);
        // Here you can send the data to the server using JavaScript if needed
    } else {
        alert('Please fill out all fields.');
    }
}
