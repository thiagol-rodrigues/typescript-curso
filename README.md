# Estudo de Angular README

## Objetivo
Atualmente estou estudando o desenvolvimento em Angular e focando em construir uma base sólida nas seguintes tecnologias:

1. **HTML** - Compreendendo a estrutura de aplicativos web.
2. **CSS** - Aprendendo a estilizar e projetar páginas web de forma eficaz.
3. **JavaScript** - Desenvolvendo funcionalidades dinâmicas e interativas.
4. **TypeScript** - Explorando um superset tipado do JavaScript, amplamente utilizado em aplicativos Angular.

---

## Configuração do TypeScript
Para facilitar o processo de desenvolvimento, estou usando um arquivo `tsconfig.json` para configurar o compilador TypeScript. Abaixo está a configuração:

```json
{
  "compilerOptions": {
    "outDir": "dist/js",
    "target": "ES6",
    "noEmitOnError": true
  },
  "include": ["app/**/*"]
}
```

### Explicação:
- **outDir**: Especifica o diretório de saída para os arquivos JavaScript compilados.
- **target**: Define a versão do ECMAScript como ES6.
- **noEmitOnError**: Impede a geração de arquivos JavaScript em caso de erros.
- **include**: Especifica os arquivos a serem incluídos no processo de compilação.

---

## Executando a Aplicação
O projeto está configurado para usar scripts `npm` para gerenciar tarefas. O arquivo `package.json` contém os seguintes scripts:

```json
{
  "name": "alurabank",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "lite-server --baseDir=dist",
    "start": "concurrently \"npm run watch\" \"npm run server\"",
    "compile": "tsc",
    "watch": "tsc -w"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "concurrently": "^6.0.0",
    "lite-server": "^2.6.1",
    "typescript": "^4.2.2"
  }
}
```

### Principais Scripts:
1. **server**: Executa o `lite-server` para servir a aplicação a partir do diretório `dist`.
2. **start**: Executa tanto o compilador TypeScript em modo de observação quanto o servidor simultaneamente usando o pacote `concurrently`.
3. **compile**: Compila os arquivos TypeScript para JavaScript.
4. **watch**: Observa continuamente mudanças nos arquivos TypeScript e os recompila automaticamente.

### Processo de Desenvolvimento:
1. Execute `npm run start` para:
   - Iniciar o compilador TypeScript em modo de observação.
   - Lançar o servidor de desenvolvimento para servir a aplicação.
2. Alterações feitas no código são capturadas em tempo real e o servidor é atualizado automaticamente.

---

## Dependências
As seguintes dependências de desenvolvimento são usadas neste projeto:
- **concurrently**: Permite executar múltiplos scripts npm simultaneamente.
- **lite-server**: Um servidor de desenvolvimento leve com recarregamento ao vivo.
- **typescript**: Um superset tipado do JavaScript usado para construir aplicações escaláveis.


