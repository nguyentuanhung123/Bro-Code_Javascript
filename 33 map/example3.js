const dates = ["2024-1-10", "2025-2-20", "2025-3-30"]

const formatDate = (element) => {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

const formatDates = dates.map(formatDate)
console.log(formatDates); // [ '1/10/2024', '2/20/2025', '3/30/2025' ]

