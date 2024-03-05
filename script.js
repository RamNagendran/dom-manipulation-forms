document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const food = [...document.querySelectorAll('input[name="food"]:checked')].map(food => food.value).join(', ');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Add values to table
    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow(-1);
    const cells = [firstName, lastName, address, pincode, gender, food, state, country];
    cells.forEach((cellData, index) => {
        const cell = newRow.insertCell(index);
        cell.textContent = cellData;
    });

    // Clear form fields
    document.getElementById('myForm').reset();
});
