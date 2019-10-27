import LocalStorageDatabase from './components/database/database';

export function ordemDasPerguntas(numeroDeQuestoes, quantidade){
    var temp = [];
    
    for(let i = 0; i < quantidade; i++){
        temp.push(i);
    }
    for (let j = temp.length - 1; j > 0; j--) {
        const k = Math.floor(Math.random() * (j + 1));
        [temp[j], temp[k]] = [temp[k], temp[j]];
    }
          
    temp.length = 10;
    return temp;
}

export function coletaDadosDatabase(){
    var database = new LocalStorageDatabase();
    let numeroDeQuestoes = database.perguntas.questoes_randomizar;
    let quantidade = database.perguntas.banco_questoes.length;

    return ordemDasPerguntas(numeroDeQuestoes, quantidade);
}