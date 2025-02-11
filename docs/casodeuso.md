# Estudo de Caso "ConnectCare"

## Contexto:

Em uma comunidade remota chamada Vila Esperança, onde o acesso a serviços de saúde é
limitado, um grupo de desenvolvedores e ativistas sociais se reuniu para criar o "ConnectCare".
A plataforma foi projetada para superar barreiras, como a falta de transporte e informações,
facilitando o acesso dos moradores a cuidados médicos.
O ambiente da Vila Esperança é desafiador: infraestrutura básica limitada, baixa penetração de
internet e um número reduzido de profissionais de saúde. Apesar disso, a comunidade tem uma
forte rede social e um espírito colaborativo, que serviram como base para o desenvolvimento do
"ConnectCare". 

> Baseado em "Exercício de Construção de Caso de Uso" passado em sala de aula pelo Prof. Dr. George Marsicano


## Diagrama de Caso de Uso:

![image](https://github.com/user-attachments/assets/c5625191-70d9-4022-b423-084a918b4bbd)

# Especificação Caso de Uso 

## 1. Breve Descrição 

A funcionalidade "Realizar Agendamento" no modelo de Diagrama de Casos de Uso para o ConnectCare deve envolver os principais atores e interações do sistema relacionadas ao processo de agendamento de consultas ou exames.

## 2. Atores 

- **Paciente**: Usuário que deseja marcar uma consulta ou exame.
- **Profissional de Saúde**: Médico, enfermeiro ou técnico que realizará o atendimento.
- **Sistema ConnectCare**: Plataforma que processa as solicitações e gerencia os agendamentos.

## 3. Condições Prévias 

- 3.1 O paciente deve ter uma conta ativa no ConnectCare.
- 3.2 O sistema deve ter profissionais disponíveis para agendamento.
- 3.3 O sistema precisa ter horários cadastrados e disponíveis para consultas.
- 3.4 O paciente deve poder escolher entre os serviços disponíveis.
- 3.5 Deve haver pelo menos uma unidade de saúde ativa no sistema.
- 3.6 O sistema pode impedir que o paciente marque consultas que coincidam com outras já agendadas.

## 4. Fluxo Básico (FB)

1. O paciente acessa a plataforma "ConnectCare" e faz login.
2. O paciente seleciona a opção de "Agendar Consulta".
3. O sistema apresenta uma lista de serviços de saúde disponíveis.
4. O paciente escolhe o tipo de serviço desejado e um profissional de saúde.
5. O sistema exibe os horários disponíveis.
6. O paciente seleciona um horário e confirma o agendamento.
7. O sistema valida os dados e registra a consulta.
8. O sistema gera uma confirmação e exibe as informações detalhadas.
9. O paciente recebe a notificação de confirmação do agendamento.

## 5. Fluxo Alternativo (FA)

### 5.1 Opções de Agendamento
#### 5.1.1 A1 - Agendamento com Preferência de Profissional
- O paciente pode filtrar a busca por um profissional específico.
- O sistema exibe apenas os horários desse profissional.
- O paciente seleciona o horário e confirma o agendamento.

#### 5.1.2 A2 - Agendamento para Terceiros
- O paciente pode agendar uma consulta para um dependente.
- O sistema solicita a identificação do dependente.
- O restante do fluxo segue normalmente.

## 6. Fluxos de Exceção

### 6.1 FE01 - Horário Indisponível
- No passo 4.6 do fluxo básico, caso o paciente selecione um horário que tenha sido preenchido por outro usuário simultaneamente, o sistema deve exibir a mensagem: "Horário indisponível. Por favor, escolha outro." e o caso de uso retorna ao passo 4.5 do FB.

### 6.2 FE02 - Dados Incompletos ou Inválidos
- No passo 4.7 do fluxo básico, se os dados inseridos pelo paciente estiverem incompletos ou inválidos, o sistema exibe uma mensagem de erro solicitando a correção e impede a conclusão do agendamento. O caso de uso retorna ao passo 4.6 do FB.

### 6.3 FE03 - Paciente Sem Conta Ativa
- No passo 4.1 do fluxo básico, caso o paciente tente acessar a plataforma sem uma conta ativa, o sistema deve exibir a mensagem: "Conta inativa. Verifique seu cadastro ou entre em contato com o suporte." e interromper o fluxo.

### 6.4 FE04 - Falha na Conexão com o Sistema
- Durante qualquer etapa do processo de agendamento, se houver falha na conexão com o sistema, o sistema exibe uma mensagem: "Erro de conexão. Tente novamente mais tarde." e interrompe o fluxo até a restauração da conexão.

## 7. Regra de Negócio

### 7.1 RN01 - Limite de Agendamentos
- O sistema deve permitir que um paciente tenha no máximo 3 consultas agendadas ativas. Caso tente agendar uma nova consulta, o sistema deve exibir uma mensagem de aviso e impedir o agendamento.

### 7.2 RN02 - Tempo Mínimo de Antecedência
- O sistema deve permitir agendamentos apenas com, no mínimo, 24 horas de antecedência em relação à data atual.

### 7.3 RN03 - Cancelamento de Consulta
- Caso o paciente precise cancelar um agendamento, ele deve realizar a solicitação com pelo menos 12 horas de antecedência. Caso contrário, o sistema pode restringir novos agendamentos por um período específico.

### 7.4 RN04 - Validação dos Dados do Paciente
- Antes de confirmar um agendamento, o sistema deve garantir que os dados do paciente estejam atualizados, incluindo informações de contato e plano de saúde (se aplicável).

## 8. Pós-condições

- 8.1 O sistema deve gerar uma confirmação e notificar o paciente.
- 8.2 O profissional de saúde recebe a notificação do agendamento.

## 9. Ponto de Extensão
- O agendamento pode ser um ponto de extensão para a funcionalidade "Gerenciamento de Consultas", permitindo alterações, cancelamentos e integração com prontuários eletrônicos.


---
# 1. Breve Descrição 

A funcionalidade "Registrar Campanhas de Saúde" descreve o processo pelo qual campanhas de saúde, como vacinação, mutirões de atendimento ou ações preventivas, são registradas na plataforma ConnectCare. Os atores envolvidos interagem com o sistema para fornecer os detalhes relevantes, garantindo que as campanhas fiquem acessíveis aos moradores da comunidade.

## 2. Atores 

- **Administrador do Sistema**: Responsável por gerenciar a plataforma e fornecer suporte técnico.
- **Organizações Parceiras**: Instituições ou entidades que colaboram para oferecer serviços ou recursos adicionais.

## 3. Condições Prévias 

- 3.1 O ator deve estar autenticado no sistema com permissões adequadas.
- 3.2 A base de dados deve estar funcional para armazenar as campanhas registradas.

## 4. Fluxo Básico (FB)

1. O ator acessa a plataforma "ConnectCare" e faz login.
2. O ator seleciona a opção "Registrar Campanha de Saúde".
3. O sistema exibe um formulário para preenchimento dos detalhes da campanha.
4. O ator preenche o formulário e confirma o registro.
5. O sistema valida as informações inseridas e registra a nova campanha na base de dados.
6. O sistema notifica o ator sobre o sucesso do registro e disponibiliza a campanha para consulta pelos usuários.

## 5. Fluxo Alternativo (FA)

### 5.1 Opções de Registro
#### 5.1.1 FA1: Registro por Tipo de Campanha
- O ator pode escolher entre diferentes tipos de campanhas, como vacinação, mutirão de atendimento ou ações educativas.
- O sistema apresenta opções específicas para cada tipo de campanha, ajustando os campos obrigatórios conforme necessário.
- O ator preenche os detalhes e finaliza o registro da campanha.

#### 5.1.2 FA2 - Monitoramento e Ajuste de Campanha
- O ator deseja revisar o desempenho da campanha após o registro.
- O sistema exibe métricas de participação e engajamento dos usuários.
- Se necessário, o ator pode ajustar detalhes da campanha (como estender o período de duração ou ampliar o público-alvo).
- O sistema atualiza as informações e reenvia notificações aos usuários afetados.

## 6. Fluxos de Exceção (FE)

### 6.1 FE1: Dados Incompletos ou Inválidos
- No passo 5 do fluxo principal, se os dados inseridos pelo ator estiverem incompletos ou inválidos, o sistema exibe uma mensagem de erro solicitando a correção. O caso de uso retorna ao passo 4 para que o ator revise os campos obrigatórios.

### 6.2 FE2: Falha na Conexão com o Sistema
- Durante qualquer etapa do processo de registro, se houver falha na conexão com o sistema, o sistema exibe uma mensagem: "Erro de conexão. Tente novamente mais tarde." e interrompe o fluxo até a restauração da conexão.

## 7. Regras de Negócio 

### 7.1 RN1: Validação das Informações da Campanha
- O sistema deve garantir que os dados inseridos na campanha estejam corretos e completos antes de permitir o registro.

### 7.2 RN2: Prazos para Cadastro de Campanhas
- As campanhas devem ser registradas com pelo menos 48 horas de antecedência em relação à sua realização para garantir a divulgação adequada.

### 7.3 RN3: Monitoramento de Impacto
- Após a conclusão da campanha, os organizadores devem registrar métricas de impacto na plataforma, como número de atendimentos realizados e feedback dos participantes.

## 8. Pós-condições

- 8.1 A campanha estará disponível para os usuários da plataforma.
- 8.2 O ator receberá uma notificação confirmando o sucesso do registro.

## 9. Ponto de Extensão
- 9.1 "Editar Campanhas de Saúde": Permitir a atualização de informações de campanhas já registradas.
- 9.2 "Consultar Campanhas de Saúde": Verificar as campanhas já registradas para evitar duplicidades.


---
# 1. Breve Descrição 

Este caso de uso “Gerenciar Histórico Médico” descreve o processo pelo qual médicos e organizações parceiras acessam, atualizam e monitoram os históricos médicos dos pacientes na plataforma.

## 2. Atores 

- **Profissional de Saúde**: Médico, enfermeiro ou técnico que realizará o atendimento.
- **Organizações Parceiras**: Instituições ou entidades que colaboram para oferecer serviços ou recursos adicionais.

## 3. Condições Prévias 

- 3.1 O profissional de saúde deve estar autenticado no sistema.
- 3.2 O paciente deve ter um histórico médico registrado no sistema.

## 4. Fluxo Básico (FB)

1. O profissional de saúde acessa a plataforma ConnectCare e faz login.
2. O profissional de saúde busca o histórico médico do paciente inserindo informações de identificação (nome, número do CPF, etc.).
3. O sistema exibe o histórico médico do paciente, incluindo dados como doenças passadas, tratamentos e exames realizados.
4. O profissional de saúde pode atualizar ou adicionar informações ao histórico, como novos diagnósticos, exames e receitas.
5. O sistema valida as informações inseridas e atualiza o histórico médico do paciente.
6. O sistema gera uma confirmação e notifica o profissional de saúde sobre o sucesso da atualização.

## 5. Fluxo Alternativo (FA)

### 5.1 FA1: Histórico Médico Incompleto
- Caso o sistema não tenha todos os dados do paciente, o profissional de saúde será notificado de que o histórico está incompleto.
- O profissional pode optar por adicionar informações ou aguardar que outras fontes de dados sejam adicionadas.

### 5.2 FA2: Acesso Negado
- Caso o profissional de saúde não tenha permissão para acessar o histórico médico do paciente, o sistema exibe uma mensagem de erro e impede o acesso.

## 6. Fluxos de Exceção

### 6.1 FE1: Dados Incompletos ou Inválidos
- No passo 5 do fluxo básico, se as informações inseridas pelo profissional de saúde forem inválidas ou incompletas, o sistema exibe uma mensagem de erro solicitando a correção. O caso de uso retorna ao passo 4 para que o profissional revise os dados.

### 6.2 FE2: Falha na Conexão com o Sistema
- Caso ocorra falha na conexão durante qualquer etapa do processo, o sistema exibe uma mensagem de erro informando sobre a falha de conexão.

## 7. Regras de Negócio 

### 7.1 RN1: Validação de Dados do Histórico
- O sistema deve garantir que todos os dados inseridos no histórico médico sejam válidos e completos antes de confirmar a atualização.

### 7.2 RN2: Acesso Controlado
- O sistema deve permitir que apenas profissionais de saúde autorizados acessem os históricos médicos dos pacientes.

## 8. Pós-condições

- 8.1 O histórico médico do paciente será atualizado com sucesso.
- 8.2 O profissional de saúde receberá a confirmação do sucesso da operação.

## 9. Ponto de Extensão

- 9.1 "Visualizar Histórico Médico Completo": Permitir o acesso total ao histórico médico de um paciente.
9.2 "Consultar Histórico Médico": Facilita a busca por registros específicos.


---
## 1. Breve Descrição 

A funcionalidade "Cadastrar Serviços" permite que o profissional da saúde registre novos serviços disponíveis no sistema, como consultas, exames ou campanhas de prevenção, tornando-os acessíveis para os usuários.

## 2. Atores 

- *Administrador do Sistema*: Responsável por gerenciar a plataforma e fornecer suporte técnico.       
- *Organizações parceiras*: Instituições ou entidades que colaboram para oferecer serviços ou recursos adicionais.  
- *Profissional da Saúde*: Instituições ou entidades que colaboram para oferecer serviços ou recursos adicionais.  

## 3. Condições Prévias 

1. O profissional da saúde ou administrador deve estar autenticado no sistema.
2. O sistema deve possuir categorias de serviços cadastradas previamente.
3. Deve haver espaço suficiente no banco de dados para armazenar novos serviços.

## 4. Fluxo Básico (FB)

1. O ator acessa a plataforma "ConnectCare" e faz login.
2. O sistema verifica as credenciais e concede acesso ao painel do profissional.
3. O ator seleciona a opção "Cadastrar Serviços".
4. O sistema exibe o formulário de cadastro de serviços.
5. O ator preenche os campos obrigatórios.
6. O ator confirma o cadastro clicando no botão "Salvar".
7. O sistema valida as informações inseridas e salva o serviço no banco de dados.
8. O sistema exibe uma mensagem de confirmação: *"Serviço cadastrado com sucesso"*.

## 5. Fluxo Alternativo (FA) 

### 5.1 FA1: Cadastro com Categoria Específica  
- O ator pode filtrar o cadastro por uma categoria específica de serviço (exemplo: consultas, exames, campanhas).  
- O sistema exibe apenas os campos relacionados à categoria selecionada.  
- O ator preenche os detalhes correspondentes e confirma o cadastro.  

### 5.2 FA2: Cadastro para Instituições Parceiras  
- O ator pode cadastrar um serviço em nome de uma organização parceira.  
- O sistema solicita a identificação da organização.  
- O restante do fluxo segue normalmente.  

### 5.3 FA3: Falha na Validação dos Dados  
Caso algum campo obrigatório não seja preenchido ou contenha dados inválidos:  
- O sistema destaca os campos pendentes ou inválidos.  
- O sistema exibe uma mensagem de erro: *"Preencha todos os campos obrigatórios corretamente"*.  
- O ator corrige as informações e retorna ao passo 6 do fluxo principal.  

### 5.4 FA4: Erro de Conexão  
Se ocorrer um problema de conexão com o banco de dados:  
- O sistema exibe uma mensagem de erro: *"Não foi possível salvar o serviço. Tente novamente mais tarde"*.  
- O ator pode optar por tentar novamente ou salvar as informações localmente para envio posterior.  

## 6. Fluxos de Exceção (FE) 

### 6.1 FE1: Tentativa de cadastro duplicado  
Caso o ator tente cadastrar um serviço já existente, o sistema exibe uma mensagem de erro e solicita a revisão dos dados antes de prosseguir.  

### 6.2 FE2: Falha na autenticação  
Caso o ator não esteja autenticado corretamente, o sistema impede o acesso à funcionalidade de cadastro e exibe uma mensagem informativa.  

## 7. Regras de Negócio 

1. *RN1: Validação dos dados do serviço*  
   - O sistema deve garantir que os dados inseridos estejam completos e consistentes antes de permitir o cadastro.  

2. *RN2: Atualização de serviços*  
   - O profissional da saúde ou administrador pode atualizar as informações de um serviço já cadastrado, desde que autorizado.  

3. *RN3: Limite de serviços cadastrados*  
   - Cada profissional pode cadastrar um número limitado de serviços simultaneamente, conforme política do sistema.  

## 8. Pós-condições

1. O serviço estará disponível para visualização e agendamento pelos usuários do sistema.  
2. O profissional da saúde recebe uma confirmação do cadastro.  

## 9. Ponto de extensão

1. *"Gerenciar Serviços"*: Permite alterações e exclusões de serviços já cadastrados.  
2. *"Consultar Serviços"*: Facilita a busca por serviços cadastrados previamente.  

---
## 1. Breve Descrição  

A funcionalidade “Registrar Visitas Domiciliares” descreve o processo pelo qual agentes comunitários e profissionais da saúde realizam e registram visitas domiciliares para atendimento de pacientes que não possuem acesso facilitado a unidades de saúde. A funcionalidade permite a coleta de dados sobre as condições de saúde da população e auxilia na identificação de áreas prioritárias para campanhas preventivas.

## 2. Atores  

- *Agente Comunitário*: Responsável por realizar visitas domiciliares e registrar informações sobre a condição de saúde dos pacientes.  
- *Profissional da Saúde*: Instituições ou entidades que colaboram para oferecer serviços ou recursos adicionais.    

## 3. Condições Prévias  

1. O agente comunitário ou profissional da saúde deve estar autenticado no sistema.  
2. O paciente deve estar cadastrado na plataforma.  
3. O sistema deve possuir um banco de dados atualizado de pacientes e suas localizações.  
4. As permissões de cada ator devem estar corretamente definidas para garantir a segurança dos dados.  

## 4. Fluxo Básico (FB)  

1. O ator acessa a plataforma "ConnectCare" e faz login.  
2. O sistema verifica as credenciais e concede acesso conforme o nível de permissão.  
3. O ator acessa a funcionalidade "Registrar Visita Domiciliar".  
4. O ator pode buscar pacientes utilizando filtros como localização, tipo de atendimento necessário e disponibilidade.  
5. O sistema exibe uma lista de pacientes elegíveis para visitas domiciliares.  
6. O ator seleciona um paciente e inicia o registro da visita.  
7. O sistema exibe um formulário para preenchimento de dados da visita.  
8. O ator preenche os campos obrigatórios e confirma o registro.  
9. O sistema valida as informações e salva o registro na base de dados.  
10. O sistema exibe uma mensagem de confirmação: *"Visita domiciliar registrada com sucesso"*.  
11. Os dados registrados podem ser utilizados para gerar relatórios e auxiliar na identificação de áreas prioritárias para campanhas preventivas.  

## 5. Fluxo Alternativo (FA)  

### 5.1 FA1: Reagendamento de Visita Domiciliar  
- Caso o paciente não esteja disponível no momento da tentativa de visita, o ator pode agendar uma nova data e horário.  
- O sistema notifica o paciente e registra o agendamento.  
- O ator recebe um lembrete antes do horário agendado.  

### 5.2 FA2: Registro por Terceiros Autorizados  
- O agente comunitário pode registrar a visita em nome de outro profissional da saúde que tenha realizado o atendimento.  
- O sistema solicita a identificação do profissional responsável.  

### 5.3 FA3: Falha na Validação dos Dados  
Caso algum campo obrigatório não seja preenchido ou contenha dados inválidos:  
- O sistema destaca os campos pendentes ou inválidos.  
- O sistema exibe uma mensagem de erro: *"Preencha todos os campos obrigatórios corretamente"*.  

## 6. Fluxos de Exceção (FE)  

### 6.1 FE1: Tentativa de Acesso Não Autorizado  
Caso um ator sem permissão tente acessar ou registrar visitas domiciliares, o sistema exibe uma mensagem de erro e impede a ação.  

### 6.2 FE2: Paciente Não Encontrado  
Caso o paciente não possua cadastro na plataforma, o sistema exibe uma mensagem: *"Paciente não encontrado"* e solicita o cadastro antes da realização da visita.

## 7. Regras de Negócio  

1. *RN1: Validação dos dados da visita*  
   - O sistema deve garantir que os dados inseridos estejam completos e consistentes antes de permitir o registro da visita.  

2. *RN2: Confidencialidade dos dados*  
   - Apenas profissionais autorizados podem acessar os registros de visitas domiciliares.  

3. *RN3: Relatórios de visitas*  
   - O sistema deve permitir a geração de relatórios para análise de tendências e identificação de áreas prioritárias.  

## 8. Pós-condições  

1. O registro da visita domiciliar estará disponível para consulta e análise posterior.  
2. O profissional responsável receberá uma confirmação do registro.  
3. Os dados poderão ser utilizados para planejamento de campanhas preventivas e políticas de saúde pública.  

## 9. Ponto de extensão  

1. *"Consultar Visitas Domiciliares"*: Permite a busca e visualização de registros de visitas anteriores.  
2. *"Gerar Relatórios de Visitas"*: Facilita a análise de dados e a tomada de decisões estratégicas.
