let sineChart, cosineChart, tangentChart;

function plotGraphs() {
    const angle = parseFloat(document.getElementById('angle').value);
    if (angle > 360) {
        alert("Please enter an angle less than or equal to 360 degrees.");
        return;
    }
    const radians = angle * (Math.PI / 180);
    const labels = [];
    const sineData = [];
    const cosineData = [];
    const tangentData = [];
    const isInverse = document.getElementById('inverse').checked;

    for (let i = 0; i <= 360; i++) {
        labels.push(i);
        const rad = i * (Math.PI / 180);
        sineData.push(isInverse ? 1 / Math.sin(rad) : Math.sin(rad));
        cosineData.push(isInverse ? 1 / Math.cos(rad) : Math.cos(rad));
        tangentData.push(isInverse ? 1 / Math.tan(rad) : Math.tan(rad));
    }

    const sineCtx = document.getElementById('sineChart').getContext('2d');
    const cosineCtx = document.getElementById('cosineChart').getContext('2d');
    const tangentCtx = document.getElementById('tangentChart').getContext('2d');

    if (sineChart) sineChart.destroy();
    if (cosineChart) cosineChart.destroy();
    if (tangentChart) tangentChart.destroy();

    sineChart = new Chart(sineCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: isInverse ? 'Cosecant' : 'Sine',
                data: sineData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 3,
                fill: false,
                pointRadius: labels.map(label => label === angle ? 5 : 0),
                pointBackgroundColor: labels.map(label => label === angle ? 'red' : 'rgba(75, 192, 192, 1)')
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    cosineChart = new Chart(cosineCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: isInverse ? 'Secant' : 'Cosine',
                data: cosineData,
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 3,
                fill: false,
                pointRadius: labels.map(label => label === angle ? 5 : 0),
                pointBackgroundColor: labels.map(label => label === angle ? 'red' : 'rgba(153, 102, 255, 1)')
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    tangentChart = new Chart(tangentCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: isInverse ? 'Cotangent' : 'Tangent',
                data: tangentData,
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 3,
                fill: false,
                pointRadius: labels.map(label => label === angle ? 5 : 0),
                pointBackgroundColor: labels.map(label => label === angle ? 'red' : 'rgba(255, 159, 64, 1)')
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                }
            }
        }
    });

    document.getElementById('sineHeading').innerText = isInverse ? 'Cosecant' : 'Sine';
    document.getElementById('cosineHeading').innerText = isInverse ? 'Secant' : 'Cosine';
    document.getElementById('
