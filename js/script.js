document.addEventListener("DOMContentLoaded", function() {
    const dances = [
        { name: "Bharatanatyam", imageUrl: "images/Anjani-350.jpg", pageUrl: "bharatanatyam.html" },
        { name: "Kathak", imageUrl: "images/kathakreeya.jpg", pageUrl: "kathak.html" },
        { name: "Bhangra", imageUrl: "images/b3.jpeg", pageUrl: "bhangra.html" },
        { name: "Raas Garba", imageUrl: "images/raas3.jpeg", pageUrl: "raasgarba.html" },
        { name: "Kuchipudi", imageUrl: "images/k1.webp", pageUrl: "kuchipudi.html" },
        { name: "Mohiniyattam", imageUrl: "images/mohi2.jpeg", pageUrl: "mohiniyattam.html" },
        { name: "Odissi", imageUrl: "images/odi3.webp", pageUrl: "odissi.html" },
        { name: "Manipuri", imageUrl: "images/manip3.jpeg", pageUrl: "manipuri.html" },
        { name: "Kathakali", imageUrl: "images/katha1.jpeg", pageUrl: "kathakali.html" },
        { name: "Bollywood", imageUrl: "images/bolly1.jpeg", pageUrl: "bollywood.html" }
    ];
    
    const listElement = document.getElementById('dance-list');
    const searchBox = document.getElementById('searchBox');

    dances.forEach(dance => {
        const itemElement = document.createElement('a');
        itemElement.className = 'dance-item';
        itemElement.href = dance.pageUrl;
        itemElement.innerHTML = `
            <div>
                <img src="${dance.imageUrl}" alt="${dance.name} Dance">
                <h2>${dance.name}</h2>
            </div>
        `;
        listElement.appendChild(itemElement);
    });

    searchBox.addEventListener('keyup', function(e) {
        const term = e.target.value.toLowerCase();
        const filteredDances = dances.filter(dance => dance.name.toLowerCase().includes(term));
        listElement.innerHTML = ''; // Clear existing dance items
        filteredDances.forEach(dance => {
            const itemElement = document.createElement('a');
            itemElement.className = 'dance-item';
            itemElement.href = dance.pageUrl;
            itemElement.innerHTML = `
                <div>
                    <img src="${dance.imageUrl}" alt="${dance.name} Dance">
                    <h2>${dance.name}</h2>
                </div>
            `;
            listElement.appendChild(itemElement);
        });
    });
});

