// Atualiza o contador de tarefas pendentes e concluídas
function updateTaskCounter() {
    let totalTasks = document.querySelectorAll("#taskList li").length; 
    let completedTasks = document.querySelectorAll("#taskList input[type='checkbox']:checked").length;
    let pendingTasks = totalTasks - completedTasks; 
    // Atualiza o texto do contador de tarefas
    document.getElementById("taskCounter").textContent = pendingTasks > 0 
        ? `Tarefas Pendentes: ${pendingTasks}` // Se houver tarefas pendentes, exibe a quantidade
        : "✅ Todas as tarefas concluídas!"; 
}

// Adiciona uma nova tarefa à lista
function addTask() {
    let taskInput = document.getElementById("taskInput"); 
    let taskText = taskInput.value.trim(); // Pega o valor digitado e remove espaços extras

    if (taskText === "") return; // Se o usuário não digitou nada, a função para aqui

    let taskList = document.getElementById("taskList"); 
    let li = document.createElement("li"); // Cria um novo item de lista <li>

    // Cria um contêiner para a checkbox e o texto da tarefa
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container"); // Adiciona uma classe para estilização

    // Cria a checkbox para marcar a tarefa como concluída
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        span.style.textDecoration = checkbox.checked ? "line-through" : "none"; // Se marcada, risca o texto
        updateTaskCounter(); // Atualiza o contador de tarefas
    };

    // Cria o elemento de texto da tarefa
    let span = document.createElement("span");
    span.textContent = taskText; // texto digitado pelo usuário

    // Adiciona a checkbox e o texto dentro do contêiner
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(span);

    // Cria o botão de remover a tarefa
    let removeButton = document.createElement("button");
    removeButton.textContent = "❌"; 
    removeButton.style.background = "#ff4b5c"; 
    removeButton.style.border = "none"; 
    removeButton.style.padding = "5px 10px"; 
    removeButton.style.borderRadius = "5px"; 
    removeButton.style.cursor = "pointer"; 
    removeButton.style.color = "white"; 

    // Função que remove a tarefa quando o botão X for clicado
    removeButton.onclick = function () {
        taskList.removeChild(li); // Remove o item da lista
        updateTaskCounter(); 
    };

    // Adiciona os elementos no item da lista <li>
    li.appendChild(taskContainer); // Adiciona o contêiner com a checkbox e o texto
    li.appendChild(removeButton); // Adiciona o botão de remoção
    taskList.appendChild(li);

    taskInput.value = ""; // Limpa o campo de entrada para uma nova tarefa
    updateTaskCounter();
}
