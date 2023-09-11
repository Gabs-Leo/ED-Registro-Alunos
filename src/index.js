class Aluno{
    constructor(nome, ra, idade, sexo, media, resultado) {
        this.nome = nome;
        this.ra = ra;
        this.idade = idade;
        this.sexo = sexo;
        this.media = media;
        this.resultado = resultado;
    }
}

class AlunoService {
    getAlunosFromStorage = () => {
        const alunos = localStorage.getItem("alunos");
        if(alunos)
            return JSON.parse(alunos);
        localStorage.setItem("alunos", JSON.stringify([]))
        return [];
        
    }
    save = (aluno) => {
        const alunos = getAlunosFromStorage();
        alunos.push(aluno);
    }
    //Valid Sort Types: name, ra, approved 
    listBySortType = (sortType) => {
        switch(sortType){
            case "ra":
                break;
            case "approved":
                break;
            default:
                ;
        }
    }
    clearData = () => {
        
    }
}