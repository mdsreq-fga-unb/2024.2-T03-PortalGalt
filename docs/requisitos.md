# Requisitos de Software 

> "É uma declaração que identifica características ou restrições de um produto ou processo, as quais devem ser atendidas. Podendo ser, por exemplo, funcional ou não funcionais, sendo inequívoca, testável (verificável), mensurável, e necessária para a aceitabilidade do produto ou processo (pelos clientes ou diretrizes internas de garantia de qualidade)."
> — baseado em Management Aspects of Requirements Engineering, por Jeremy Dick, Elizabeth Hull e Ken Jackson (Springer, 2017, p. 207-230).

## Requisitos Funcionais


<p style="text-indent: 50px;text-align: justify;">Definem as funcionalidades que o sistema precisa oferecer e podem variar de acordo com o tipo de software em desenvolvimento, as características do público-alvo esperado e a abordagem adotada pela equipe na elaboração e documentação dos requisitos, considerando também as necessidades específicas do produto e as metas de entrega.</p>

**Requisitos Funcionais do Portal Galt**

| Requisito | Nome e descrição | 
| ---------- | ----------- | 
| **RF01** | Logar na plataforma: O usuário poderá acessar a plataforma através de login e senha. | 
| **RF02** | Visualizar notícias: O usuário poderá visualizar as notícias postadas na plataforma. | 
| **RF03** | Criar conta de alunos: O administrador poderá criar conta para os alunos. | 
| **RF04** | Visualizar conta de alunos: O administrador poderá visualizar os alunos registrador na plataforma. | 
| **RF05** | Editar conta de alunos: O administrador poderá editar informações da conta de alunos. | 
| **RF06** | Deletar conta de alunos: O administrador poderá deletar a conta de um aluno. | 
| **RF07** | Criar notícias: O administrador deve conseguir criar notícias para os alunos. | 
| **RF08** | Editar notícias: O administrador deve conseguir editar notícias publicadas. | 
| **RF09** | Visualizar notícias: O usuário deve conseguir ver as notícias postadas na plataforma. | 
| **RF10** | Excluir notícias: O administrador dever conseguir excluir noticias. | 
| **RF11** | Postar notas de simulados: O administrador deve conseguir postar notas de simulados de alunos. | 
| **RF12** | Editar notas de simulados: O administrador deve conseguir editar as notas de simulados dos alunos. | 
| **RF13** | Excluir notas de simulado: O administrador deve conseguir excluir a nota de simulado de um aluno. | 
| **RF14** | Visualizar notas de simulado: O administrador deve conseguir visualizar as notas de todos os alunos, enquanto o aluno poderá acessar apenas as notas dos simulados realizados por ele. | 
| **RF15** | Registrar frequências: O administrador deve conseguir registrar a frequência dos alunos. | 
| **RF16** | Editar frequências: O administrador deve conseguir editar a frequência dos alunos. | 
| **RF17** | Excluir frequências: O administrador deve conseguir excluir a frequência dos alunos. | 
| **RF18** | Visualizar frequências: O administrador deve conseguir visualizar a frequência de todos os alunos, enquanto o aluno poderá acessar apenas a própria frequência. | 
| **RF19** | Adicionar cronograma: O administrador poderá adicionar um cronograma de aulas a uma turma. | 
| **RF20** | Editar cronograma: O administrador poderá editar o cronograma de uma turma. | 
| **RF21** | Visualizar cronograma: O administrador deve conseguir visualizar o cronograma de todas as turmas, enquanto o aluno poderá acessar apenas o cronograma da própria turma. | 
| **RF22** | Criar turma: O administrador poderá criar uma turma e registar os alunos que estarão nela. | 
| **RF23** | Excluir turma: O administrador poderá excluir uma turma. |
| **RF24** | Editar turma: O administrador poderá editar informações de uma turma. |
| **RF25** | Visualizar turma: O administrador poderá visualizar informações de uma turma. |
| **RF26** | Gerar gráficos de desempenho: O aluno poderá gerar gráficos relacionados ao seu desempenho nos simulados. |

## Requisitos Não Funcionais

<p style="text-indent: 50px;text-align: justify;">Refere-se a restrições que impactam os serviços ou funcionalidades oferecidos pelo sistema. Essas limitações envolvem flexibilidade, portabilidade, confiabilidade, entre outras características fundamentais para assegurar a eficiência e a qualidade do sistema.</p>

**Requisitos Não Funcionais do Portal Galt**

| Requisito | Nome e descrição | 
| ---------- | ----------- | 
| **RNF01** | Usabilidade: O site deve ser responsivo, garantindo usabilidade via dispositivos móveis e desktops | 
| **RNF02** | Desempenho: O site deve ser capaz de comportar o pico de requisições de todos os alunos (~ 400 alunos) | 
| **RNF03** | Confiabilidade: Os dados dos usuários devem ser protegidos conforme a LGPD, garantindo segurança e confiança no sistema. | 
| **RNF04** | Suportabilidade: O site deve funcionar nos navegadores mais utilizados. |
| **RNF05** | Implementação: O código deve ser desenvolvido de forma que permita a criação e execução de testes automatizados. |  

*Histórico de Revisão*

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 14/12/2024 | 1.0 | Criação da página de Requisitos de Software | Cairo Florenço |
