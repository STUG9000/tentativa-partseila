document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:3000/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        } else {
            alert(`Erro: ${result.erro}`);
        }
    } catch (err) {
        console.error('Erro ao enviar cadastro:', err);
    }
});

