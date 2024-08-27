function submitForm() {
    let loanAmount = document.getElementById('loan-amount').value;
    let interestRate = document.getElementById('interest-rate').value;
    let numInstallments = document.getElementById('num-installments').value;
    
    // Valida se todos os campos foram preenchidos
    if (loanAmount && interestRate && numInstallments) {
        // Se os campos estão preenchidos, mostra o link de simulação e clica nele
        let valorReal = loanAmount * (1 +(interestRate/100) * numInstallments);
        let valorParcela = valorReal / numInstallments;
        localStorage.setItem('resultado',valorReal);
        localStorage.setItem('resultadoParcela', valorParcela);
        window.location.href = 'simulacao.html';
        
        // document.getElementById('simulate-link').click(); // 
        
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function loadValue(){
    
    const value = localStorage.getItem('resultado');
    const valueParcela = localStorage.getItem('resultadoParcela');
    document.getElementById('result').innerHTML = `Resultado Real: ${value}<br><br>Resultado Parcelado: ${valueParcela}`;

}
