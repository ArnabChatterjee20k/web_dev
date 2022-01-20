async function load_into_table(url, table) {
    const table_head = document.querySelector("thead");
    const table_body = document.querySelector("tbody");
    const response = await fetch(url); // to pause the function here till the promise is not resolved
    const { headers, rows } = await response.json()

    // clear the table(reset the table)
    table_head.innerHTML = "<tr></tr>";
    table_body.innerHTML = "";

    // populate the headers
    for (const header_text of headers) {
        const header_elem = document.createElement("th");

        header_elem.textContent = header_text;
        table_head.querySelector("tr").appendChild(header_elem)
    }

    // populate the rows
    for (const row of rows) {
        const row_elem = document.createElement("tr");
        // rows is array of array
        for (const cell_text of row) {
            const cell_elem = document.createElement("td");

            cell_elem.textContent = cell_text
            row_elem.appendChild(cell_elem)
        }
        table_body.appendChild(row_elem)
    }
}

load_into_table("./data.json", document.querySelector(".table"))