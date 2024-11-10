# Cenário Atual do Cliente e do Negócio
![logo galt](/images/Galt.png)

## Introdução ao Negócio e Contexto  
<p style="text-indent: 50px;text-align: justify;">Galt Vestibulares é um cursinho popular criado em 2015 por 4 alunos da Universidade de Brasília. O cursinho oferece aulas gratuitas para alunos de baixa renda focadas em ajudá-los a passar no vestibular. As aulas ocorrem de forma presencial e online. Em cada sala, há aulas focadas em uma prova específica: ENEM, vestibular tradicional da UnB ou PAS. A organização é responsável por impactar mais de 400 estudantes e 200 voluntários todos os anos.</p>  

<p style="text-indent: 50px;text-align: justify;">A missão da organização é ter um duplo impacto: proporcionar acesso ao ensino superior para alunos interessados, mas que não teriam condições de arcar com um cursinho pré-vestibular, e oferecer uma oportunidade para os professores voluntários, que geralmente são estudantes de licenciatura em busca de experiência docente. Muitos desses professores encontram dificuldades em ingressar diretamente no ensino público ou privado.</p>  

<p style="text-indent: 50px;text-align: justify;">O Galt tem como diferencial o fato de que a parte administrativa, ou seja, todas as responsabilidades fora de sala de aula, são realizadas por outros voluntários dedicados. O Galt possui sete diretorias executivas, cada uma com sua equipe específica, como Marketing, Dados, Ensino, Pedagógico, Gente e Gestão, entre outras. Esses voluntários, geralmente, também são estudantes universitários, mas atuam em áreas relacionadas à sua diretoria. Cerca de metade dos voluntários, aproximadamente 100 pessoas, fazem parte da equipe administrativa e não têm contato diário com os alunos, com exceção da Diretoria Pedagógica, que serve como conexão entre os alunos e a administração, sendo responsável por coletar comentários e feedback dos estudantes.</p>

## Identificação da Oportunidade ou Problema
<p style="text-indent: 50px;text-align: justify;">O Galt Vestibulares tem dois grupos principais de voluntários: o corpo de professores e o corpo administrativo. Os professores têm contato diário com os alunos, enquanto o corpo administrativo não possui esse contato direto. A comunicação oficial entre o administrativo e os alunos é feita por e-mail, e a Diretora Pedagógica atua como representante do administrativo. A diretora costuma fornecer seu número pessoal aos alunos e se mantém disponível para esclarecer dúvidas. Dessa forma, as dúvidas são respondidas de maneira individual e manual.</p>

<p style="text-indent: 50px;text-align: justify;">O e-mail funciona em muitos casos. No entanto, ele apresenta algumas falhas que um software poderia solucionar. Os alunos muitas vezes perdem os e-mails recebidos, especialmente quando precisam recuperar informações enviadas semanas ou meses atrás. Isso os leva a buscar esclarecimentos com colegas de classe ou diretamente com a diretora pedagógica. Uma plataforma exclusiva para notícias e avisos do Galt resolveria as limitações do e-mail.</p>

<p style="text-indent: 50px;text-align: justify;">Um exemplo disso são os eventos extracurriculares organizados pelo administrativo. É comum a Diretoria Pedagógica receber várias mensagens de alunos com dúvidas sobre detalhes de eventos para os quais receberam convites por e-mail semanas antes. Normalmente, os alunos sabem que o evento vai acontecer porque os professores avisam em sala de aula, mas não se lembram ou não anotam os detalhes. Além disso, muitos alunos não costumam revisar seus e-mails, que ficam desorganizados entre spams e outros assuntos alheios ao Galt.</p>

<p style="text-indent: 50px;text-align: justify;">A Figura, a seguir apresenta o diagrama de Ishikawa contendo as causas e o problema atual do Galt Vestibulares.</p>
![diagrama](/images/diagrama.png)

## Desafios do Projeto

<p style="text-indent: 50px;text-align: justify;">Com base na ideia inicial do projeto, o grupo identificou alguns desafios principais que poderão surgir
durante o desenvolvimento:</p>

* **Integração com Planilhas Excel:**
Esse ponto exige que o sistema seja capaz de interpretar e armazenar dados variados a partir de
uploads feitos pela administração, garantindo que diferentes tipos de informações (notas,
históricos, etc.) sejam lidos corretamente. Problemas com a compatibilidade de formato ou
falhas de importação de dados podem comprometer a experiência e a precisão dos dados.

* **Autenticação e Controle de Acesso:**
Como a aplicação será utilizada tanto por alunos quanto pela administração e professores, é
essencial que a autenticação e os níveis de acesso de cada perfil sejam bem definidos e seguros.
Esse controle é fundamental para que cada usuário tenha acesso apenas ao conteúdo necessário,
evitando problemas de segurança e garantindo a privacidade dos dados

* **Escalabilidade:**
O cursinho impacta centenas de estudantes e voluntários todos os anos, o que demanda um
sistema escalável, capaz de suportar um aumento contínuo de usuários e dados. Para isso, é
provável que seja necessária uma arquitetura robusta e soluções em nuvem que garantam o
desempenho e a continuidade do sistema a longo prazo.


## Segmentação de Clientes
<p style="text-indent: 50px;text-align: justify;">O Portal Galt atenderá 3 segmentos de clientes:</p>

* **Alunos (16-25 anos):** Este grupo é formado por jovens vestibulandos que compõem a maioria dos
usuários do Galt Vestibulares. São estudantes de baixa renda com o desejo de ingressar no ensino
superior de forma acessível e com uma preparação de alta qualidade.
* **Equipe Educacional (20-50 anos):** Este segmento é composto por professores, psicólogos e
monitores que trabalham de forma voluntária.
* **Equipe Administrativa (20-50 anos):** São os voluntários que organizam e coordenam o cursinho,
garantindo que tudo funcione de forma organizada para os alunos e professores. 



*Histórico de Revisão*

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 30/10/2024 | 1.0 | Criação do documento de Visão de Produto | Bruno de Oliveira, Cairo Florenço, João Pedro, Paola Rebeca, Pedro Fonseca |
| 09/11/2024 | 1.1 | Terminando a visão de projeto, adequando a comentários do professor | Cairo Florenço, João Pedro, Paola Rebeca, Pedro Fonseca |