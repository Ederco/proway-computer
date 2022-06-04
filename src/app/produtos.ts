export interface IProduto {
    id: number;
    descricao: string;
    preco:number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}
export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}
export const produtos: IProduto[] = [
    {id:1, descricao: "Mouse gamer", preco: 439.00,descricaoPreco:"À vista no PIX",quantidadeEstoque: 100, imagem: "./assets/Mouse.jpg"},
    {id:2, descricao: "Monitor muito bom", preco: 1200.50,descricaoPreco:"À vista no PIX",quantidadeEstoque: 10, imagem: "./assets/Monitor.jpg"},
    {id:3, descricao: "Teclado sem fio", preco: 179.00,descricaoPreco:"À vista no PIX",quantidadeEstoque: 50, imagem: "./assets/Teclado.jpg"}
]