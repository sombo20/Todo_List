const BotaoConclui = function() {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir';
    
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = function(evento) {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done');
}

const BotaoDeleta = function (){
    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta;
}

const deletarTarefa = function(evento) {
    const botaoDeleta = evento.target;
    
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.style.display = "none"

    return botaoDeleta;
}



const criarTarefa = function(event) {
    event.preventDefault();
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
        
    const tarefa = document.createElement('li');
    const date  = document.createElement("span")
    tarefa.classList.add('task')
    
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    var minu;
    
    if(minuto < 10){
      minu = "0"+minuto
    }else{
      minu = minuto
    }
    
    var horas = hora+ ":" +minu
    
    var dia = data.getDay()
    var ano = data.getDate()
    var mes = data.getMonth()
    
    var mese = ["Javeiro","Fevereiro","Março","Abril","Maio","Junho"]
    var semana = ["DOM","Seg","Ter","Quart","Qui","Sext","Sab"]
    var dias = semana[dia]+","+ano+" "+mese[mes]
    
    
    const conteudo = '<p class="content">'+valor+'</p>'
    const Dates = '<br><span style="margin-left:-2rem;">'+dias+'</span><span style="margin-left:6rem;">'+horas+'<br>';        

    tarefa.innerHTML = conteudo;
     date.innerHTML = Dates
	
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    tarefa.appendChild(date)
    lista.appendChild(tarefa);

    input.value = "";
    
}

const novaTarefa = document.querySelector('#btn');
novaTarefa.addEventListener('click', criarTarefa);
