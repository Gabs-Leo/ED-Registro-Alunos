class Aluno{
    nome
    ra
    idade
    sexo
    media
    resultado
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
    containerId
    alunos = []
    constructor(containerId) {
        this.containerId = containerId;
        this.alunos = this.getAlunosFromStorage();
        this.updateContainer();
    }
    updateContainer = () => {
        let result = "";
        this.alunos.forEach((aluno) => {
            result +=`
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.ra}</td>
                <td>${aluno.idade}</td>
                <td>${aluno.sexo}</td>
                <td>${aluno.media}</td>
                <td>${aluno.resultado ? "Aprovado" : "Reprovado"}</td>
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
        this.alunos = this.getAlunosFromStorage();
        this.alunos.push(aluno);
        localStorage.setItem("alunos", JSON.stringify(this.alunos))
        this.updateContainer();
    }
    //Valid Sort Types: name, ra, approved 
    listBySortType = (sortType) => {
        switch(sortType){
            case "ra":
                this.alunos = this.getAlunosFromStorage();
                this.alunos.bubbleSort((a, b) => (a.ra < b.ra) ? 1 : -1)
                break;
            case "approved":
                this.alunos = this.getAlunosFromStorage();
                this.alunos.bubbleSort((a, b) => (a.nome > b.nome) ? 1 : -1)
                const aprovados = [];
                this.alunos.forEach(aluno => {
                    if(aluno.media >= 6)
                        aprovados.push(aluno);
                })
                this.alunos = aprovados;
                break;
            default:
                this.alunos = this.getAlunosFromStorage();
                this.alunos.bubbleSort((a, b) => (a.nome > b.nome) ? 1 : -1);
                break;
        }
        this.updateContainer();
    }
    clearData = () => {
        localStorage.setItem("alunos", JSON.stringify([]));
        this.alunos = [];
        this.updateContainer();
    }
}

const bubbleSort = (arr, type) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}