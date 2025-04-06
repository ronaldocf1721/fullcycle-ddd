# Curso Full Cycle 3.0 - DDD: Modelagem Tática e Patterns

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **TypeScript**: Para desenvolvimento do código de aplicação com tipagem estática.
- **Jest**: Framework de testes utilizado para garantir a qualidade e funcionalidade do código.
- **Sequelize**: ORM utilizado para interagir com bancos de dados relacionais.
- **SQLite3**: Banco de dados leve utilizado durante o desenvolvimento e execução dos testes.

## Desafio 1: Métodos de OrderRepository

### Descrição:
Este desafio tem como objetivo implementar a classe `OrderRepository` que deve **implementar totalmente os métodos** definidos pela interface `OrderRepositoryInterface`. A implementação completa deve ser feita através de testes, ou seja, para cada método definido na interface, deve-se escrever testes para garantir que a implementação seja correta.

### Requisitos:
- A implementação dos métodos definidos pela interface `OrderRepositoryInterface` deve ser feita.
- A cobertura de testes deve ser garantida para todos os métodos implementados.
- Ao rodar os testes, todos devem passar sem falhas.

---

## Desafio 2: Eventos de Customer

### Descrição:
Este desafio tem como objetivo implementar **dois eventos de domínio** para o agregado `Customer`, para exercitar o conhecimento sobre **Domain Events**.

1. **Evento 1: CustomerCreated**
   - Este evento deverá ser disparado quando um novo `Customer` for criado.
   - **Handlers**:
     - **Handler1**: `EnviaConsoleLog1Handler`. Exibe a mensagem: `"Esse é o primeiro console.log do evento: CustomerCreated"`.
     - **Handler2**: `EnviaConsoleLog2Handler`. Exibe a mensagem: `"Esse é o segundo console.log do evento: CustomerCreated"`.
   
2. **Evento 2: AddressChanged**
   - Este evento será disparado quando o endereço de um `Customer` for alterado através do método `changeAddress()`.
   - O evento deve passar o **ID**, **Nome**, e os dados do **novo endereço** do cliente.
   - **Handler**:
     - **Handler**: `EnviaConsoleLogHandler`. Exibe a mensagem: `"Endereço do cliente: {id}, {nome} alterado para: {endereco}"`.

### Requisitos:
- Implementar os dois eventos de domínio.
- Implementar os respectivos handlers para cada evento.
- Criar testes para garantir que os eventos estão sendo disparados corretamente e que os handlers estão funcionando como esperado.

---

## Como Rodar o Projeto
1. **Instalação de Dependências**<br>
  Para instalar as dependências. No terminal, no diretório do projeto, execute:
    
    ```bash
    npm install
    ```

2. **Rodar os Testes**<br>
  Para rodar os testes e garantir que tudo está funcionando corretamente, execute o seguinte comando:
    
    ```bash
    npm test
    ```

3. **Compilar o Projeto**<br>
  Para compilar o código TypeScript para JavaScript, execute:
    
    ```bash
    npm run tsc
    ```