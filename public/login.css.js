document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { login, senha } = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(`http://localhost:3000/cadastro/${login}`);
        const cadastro = await response.json();

        if (response.ok && cadastro.senha === senha) {
            alert('Login realizado com sucesso!');
        } else {
            alert('CPF ou senha incorretos.');
        }
    } catch (err) {
        console.error('Erro ao fazer login:', err);
    }
});
