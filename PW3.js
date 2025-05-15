function calculateProfit() {
    // Отримання введених даних
    let pc = parseFloat(document.getElementById('pc').value);
    let sigma1 = parseFloat(document.getElementById('sigma1').value);
    let sigma2 = parseFloat(document.getElementById('sigma2').value);
    let v = parseFloat(document.getElementById('v').value);

    // Частки енергії без небалансів
    let delta1 = 0.2; // Для σ1
    let delta2 = 0.68; // Для σ2

    // Розрахунки для σ1
    let W1 = pc * 24 * delta1;
    let P1 = W1 * v * 1000;

    let W2 = pc * 24 * (1 - delta1);
    let S1 = W2 * v * 1000;

    // Розрахунки для σ2
    let W3 = pc * 24 * delta2;
    let P2 = W3 * v * 1000;

    let W4 = pc * 24 * (1 - delta2);
    let S2 = W4 * v * 1000;

    // Остаточний прибуток
    let profit = (P2 - S2)/1000;

    // Відображення результату
    document.getElementById('result').innerText = `Прибуток: ${profit.toFixed(2)} тис. грн.`;
}
