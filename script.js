let employees = [
    "RITA", "TOYIN", "BANKOLE", "LEONARD", "AUGUSTINE", "KEHINDE", "VICTOR", "", 
    "ENO", "ENECHE", "ANYANWU", "DENNIS", "EVA", "INNOCENT", "HUMPHREY", "TIMOTHY", "ESTHER", "", 
    "BLESSING", "SALAMAT", "JOEL", "", "FRANCES", "OKOCHUKWU", "ROSE", "DANJUMA"
];

const OFF_DAY_OPTIONS = [1, 2, 3]; // Indices for Tuesday, Wednesday, Thursday

// Function to generate the table dynamically
function generateRoster() {
    let tableBody = "";
    employees.forEach((name, index) => {
        if (name === "") {
            tableBody += `<tr><td colspan='7'></td></tr>`; // Empty row for spacing
        } else {
            tableBody += `<tr>
                <td>${name}</td>
                <td class='day-cell office'>Office</td>
                <td class='day'></td> <!-- Tuesday -->
                <td class='day'></td> <!-- Wednesday -->
                <td class='day'></td> <!-- Thursday -->
                <td class='day'></td> <!-- Friday -->
            </tr>`;
        }
    });
    document.getElementById("roster-body").innerHTML = tableBody;
    shuffleDays(); // Assign random off days initially
}

// Function to shuffle office/off days for all employees
function shuffleDays() {
    let rows = document.querySelectorAll("#roster-body tr");

    rows.forEach(row => {
        let cells = row.querySelectorAll(".day");
        if (cells.length === 4) {
            let offDayIndex = OFF_DAY_OPTIONS[Math.floor(Math.random() * OFF_DAY_OPTIONS.length)]; // Pick random index (Tuesday-Thursday)

            cells.forEach((cell, index) => {
                if (index === offDayIndex) {
                    cell.textContent = "Off";
                    cell.className = "day-cell off";
                } else {
                    cell.textContent = "Office";
                    cell.className = "day-cell office";
                }
            });
        }
    });
}

// Ensure shuffle button is working
document.addEventListener("DOMContentLoaded", function () {
    generateRoster(); // Generate table on load

    let shuffleButton = document.createElement("button");
    shuffleButton.textContent = "Shuffle Off Days";
    shuffleButton.style.marginTop = "20px";
    shuffleButton.onclick = shuffleDays;

    document.body.appendChild(shuffleButton);
});
