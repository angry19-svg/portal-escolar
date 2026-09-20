// 1. Sistema de Templates Escolares (Componentes Visuais Dinâmicos)
const templates = {
    dashboard: () => `
        <h1>Painel do Estudante</h1>
        <p>Bem-vindo de volta! Aqui está o resumo das suas atividades pedagógicas desta semana.</p>
        <div style="margin-top: 15px; background: #e9ecef; padding: 15px; border-left: 5px solid #28a745; border-radius: 4px;">
            <strong>Aviso Importante:</strong> O prazo para entrega do trabalho de História termina na próxima sexta-feira! Fique atento para não perder a data.
        </div>
    `,
    materias: () => `
        <h1>Minhas Matérias</h1>
        <p>Selecione uma disciplina para acessar os conteúdos dinâmicos do seu portal escolar:</p>
        <ul style="line-height: 1.8;">
            <li><strong>Matemática:</strong> Funções Afins, Álgebra e Trigonometria</li>
            <li><strong>História:</strong> Brasil Colônia e Grandes Navegações</li>
            <li><strong>Português:</strong> Literatura Moderna e Redação Dissertativa</li>
        </ul>
    `,
    prazos: () => `
        <h1>Prazos e Entregas</h1>
        <p>Fique de olho no cronograma para organizar sua rotina de estudos:</p>
        <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; border-color: #ddd; text-align: left;">
            <tr style="background-color: #f2f2f2;">
                <th>Atividade Pedagógica</th>
                <th>Matéria</th>
                <th>Prazo Limite</th>
            </tr>
            <tr>
                <td>Exercícios de Funções</td>
                <td>Matemática</td>
                <td>25/11</td>
            </tr>
            <tr>
                <td>Resenha de Livro</td>
                <td>Português</td>
                <td>30/11</td>
            </tr>
        </table>
    `
};

// 2. Sistema Base de Navegação SPA (Muda o conteúdo sem recarregar a página)
function navegar(pagina) {
    const container = document.getElementById('conteudo-principal');
    
    // Verifica se a página existe na nossa lista de templates
    if (templates[pagina]) {
        container.innerHTML = templates[pagina]();
    } else {
        container.innerHTML = '<h1>Página não encontrada</h1>';
    }
}

// Inicializa a aplicação exibindo o Painel do Estudante assim que a página carrega
window.onload = () => navegar('dashboard');
