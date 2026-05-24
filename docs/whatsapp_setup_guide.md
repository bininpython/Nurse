# Guia Prático: Conectando a Nurse na Z-API 📱

A **Z-API** é fantástica pois simplifica muito a conexão do WhatsApp e lida com números de telefone de forma extremamente estável, sem os problemas de validação de contas comerciais.

Siga este passo a passo para colocar a sua Inteligência Artificial para falar com a Z-API:

## Passo 1: Criar a Instância na Z-API
1. Entre no painel da [Z-API](https://z-api.io) e faça login.
2. Contrate uma nova Instância (ou inicie um período de testes gratuito, se disponível).
3. Após criar a instância, a Z-API vai gerar um **QR Code**. Pegue o celular com o número oficial da Nurse, abra o WhatsApp, vá em "Aparelhos Conectados" e **leia o QR Code**.
4. Quando a conexão for concluída com sucesso, volte na página da instância no painel da Z-API e anote **três coisas cruciais** que usaremos no n8n:
   - **ID da Instância** (Ex: `3C15...`)
   - **Token da Instância** (Ex: `A1B2...`)
   - **Client-Token** (Geralmente disponível na aba de "Segurança" ou na tela inicial da instância).

## Passo 2: Importar e Configurar os Fluxos no n8n
Os fluxos foram totalmente atualizados para aceitar a sintaxe limpa da Z-API.

1. Abra o seu painel do **n8n**. Apague o fluxo antigo da Evolution API.
2. Clique em **Add Workflow** -> Escolha **Import from File**.
3. Selecione o arquivo `1-receber-mensagens.json` que está na pasta `n8n-flows/` do seu projeto.

### Configurando o Nó Final (Z-API Responder)
1. Dê um duplo clique no último nó (agora chamado **Z-API Responder**).
2. Na opção **URL**, modifique o link padrão substituindo os textos em maiúsculo (`SUA_INSTANCIA` e `SEU_TOKEN`) pelos dados que você anotou na Z-API.
   - *Exemplo de como deve ficar: `https://api.z-api.io/instances/3C15/token/A1B2/send-text`*
3. Ainda dentro deste nó, abra a seção **Headers**, e substitua o valor temporário de `Client-Token` pelo seu token real de segurança da Z-API.

*(Lembre-se também de entrar no nó "Buscar Dados Supabase" e re-selecionar a sua credencial do banco de dados, como fizemos anteriormente)*

## Passo 3: Conectar o Webhook da Z-API
Este é o passo mágico que liga o WhatsApp com o n8n.
1. Dê um duplo clique no primeiro nó, o **Webhook Z-API**.
2. Clique em "Production URL" e **copie o link gerado pelo n8n**.
3. Volte no painel da Z-API e procure o menu de **Webhooks** da sua instância.
4. Você verá um campo chamado **"Ao Receber Mensagem"** (On Message Received). Cole a URL do n8n ali e salve.

## Pronto! 🎉
1. Ative o fluxo no n8n clicando no botão no canto superior direito para o modo **Active**.
2. Pegue seu celular pessoal e mande um **"Oi, Nurse!"** para o celular oficial do projeto. A Z-API enviará o aviso para o n8n e o ciclo se completará lindamente!

> [!TIP]
> Repita a importação e os mesmos ajustes de URL / Header para os outros dois arquivos da pasta `n8n-flows` (`2-lembrete-medicamentos.json` e `3-relatorios-quinzenais.json`), pois ambos são ativados por tempo e apenas precisam enviar as mensagens proativamente através da Z-API.
