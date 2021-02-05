export class Perguntas {
    public pergunta: string
    public resposta: any
    public tipo: string
    public respostaCerta: any
    constructor(respostaCerta: any, pergunta: string, resposta: any, tipo: string){
        this.pergunta = pergunta
        this.resposta = resposta
        this.tipo = tipo
        this.respostaCerta = respostaCerta
    }
}