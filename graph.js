document.addEventListener('DOMContentLoaded', () => {
   
    const cartData = [
        {name: "Товар 1", quantity: 2},
        {name: "Товар 2", quantity: 3},
        {name: "Товар 3", quantity: 3},
        {name: "Товар 4", quantity: 8},
        {name: "Товар 5", quantity: 6},
    ];
    
    const ctx = document.getElementById('popularityChart').getContext('2d');
    const labels = cartData.map(item => item.name);
    const data = {
        labels: labels,
        datasets: [{
            label: 'Популярність товару',
            data: cartData.map(item => item.quantity),
            backgroundColor: [
                'rgba(0, 255, 0, 1)', 
                'rgba(0, 0, 0, 1)',   
                'rgba(255, 0, 0, 1)', 
                'rgba(255, 255, 255, 1)', 
                'rgba(128, 0, 128, 1)'    
            ],
            borderColor: [
                'rgba(0, 255, 0, 1)', 
                'rgba(0, 0, 0, 1)',   
                'rgba(255, 0, 0, 1)', 
                'rgba(255, 255, 255, 1)', 
                'rgba(128, 0, 128, 1)'   
            ],
            
            borderWidth: 1
        }]
    };

    const popularityChart = new Chart(ctx, {
        type: 'pie', 
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
