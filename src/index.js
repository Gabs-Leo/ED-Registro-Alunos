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
    constructor(containerId) {
        this.containerId = containerId;
        this.updateContainer();
    }
    updateContainer = () => {
        const alunos = getAlunosFromStorage();
        let result = "";
        alunos.forEach((aluno) => {
            result +=`
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.ra}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.sexo}</td>
                <td>${aluno.media}</td>
                <td>${aluno.resultado}</td>
            </tr>
            `
        })
        document.querySelector(this.containerId).innerHTML = result;
    }
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
        localStorage.setItem("alunos", JSON.stringify(alunos))
        this.updateContainer();
    }
    //Valid Sort Types: name, ra, approved 
    listBySortType = (sortType) => {
        switch(sortType){
            case "ra":
                break;
            case "approved":
                break;
            default:
                break;
        }
    }
    clearData = () => {
        localStorage.setItem("alunos", JSON.stringify([]));
        this.updateContainer();
    }
}