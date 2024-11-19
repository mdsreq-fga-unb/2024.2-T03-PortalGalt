# Solução Proposta

## Objetivos do Produto

<p style="text-indent: 50px; text-align: justify;">O produto tem como objetivo aprimorar a comunicação entre administradores, professores e alunos do Galt Vestibulares por meio de um portal web. Nesse ambiente, os membros administrativos e professores do cursinho poderão publicar atualizações e conteúdos relevantes de forma eficiente e acessível.</p> <p style="text-indent: 50px; text-align: justify;">O portal contará com funcionalidades dedicadas, como espaços para publicação de resultados de simulados, acompanhamento da frequência dos alunos e divulgação de notícias importantes relacionadas ao cursinho. Com isso, os alunos terão acesso centralizado e organizado a todas as informações essenciais, atendendo às demandas específicas do Galt Vestibulares e contribuindo para a eficiência de sua gestão educacional.</p>

## Características da Solução

* **Portal de notícias do cursinho:** Um espaço onde alunos e professores podem acessar atualizações,
novidades e comunicados importantes do cursinho em tempo real.
* **Consulta de resultado dos simulados:** Funcionalidade que permite aos alunos visualizarem seus
resultados nos simulados, com feedback e comparação de desempenho.
* **Integração com planilha Excel:** Os administradores podem fazer o upload de planilhas Excel para
atualizar dados como notas e matrículas diretamente na plataforma.
* **Gráficos de desempenho dos simulados:** Gráficos de desempenho dos simulados: Representações visuais que ajudam os alunos a
acompanharem sua evolução ao longo dos simulados.
* **Conta individual para alunos:** Cada aluno terá uma conta para acessar seu histórico de notas, ver as
notícias e consultar seus resultados.
* **Conta para professores:** Cada professor terá uma conta para postar atualizações e compartilhar recursos
educacionais com os alunos.
* **Conta para administradores:** Os administradores poderão fazer postagens, gerenciar o conteúdo de
notícias e atualizar resultados dos simulados.
* **Grade horária:** Funcionalidade para os administradores organizarem e disponibilizarem o cronograma
de aulas e atividades do cursinho.
* **Frequência dos alunos** Os alunos serão capazes de conferir a frequência deles em sala. 

## Tecnologias a Serem Utilizadas

<p style="text-indent: 50px;text-align: justify;">Para o desenvolvimento da solução proposta, serão utilizadas as tecnologias Next.js e Django. Next.js
será empregado como framework frontend, Django, por sua vez, será a base para o backend. Para o banco de
dados será usado PostgreSQL.</p>
<p style="text-indent: 50px;text-align: justify;">Next.js é capaz de criar interfaces responsivas para a plataforma e dá suporte para criação de gráficos.
Django é um framework com grande aderência da comunidade web de grande confiabilidade, ele é capaz de
lidar com o tráfego demandado pelo projeto. PostgreSQL é uma boa escolha para banco de dados que tem uma
boa compatibilidade com Django e consegue lidar com grandes bases de dados.</p>


## Pesquisa de Mercado e Análise Competitiva
<p style="text-indent: 50px;text-align: justify;">Para a análise de mercado e diferenciação foi feita uma pesquisa de mercado baseado em pesquisas na
internet e conversa com membros do Galt. Podemos considerar algumas plataformas já consolidadas que
poderiam atender de maneira semelhante ao Galt Vestibulares, embora com abordagens variadas:</p>
<p style="text-indent: 50px;text-align: justify;">O Google Classroom é uma plataforma amplamente utilizada por instituições educacionais para
gerenciar conteúdo e interações. Ela fornece suporte básico para compartilhamento de conteúdo e
acompanhamento de progresso, mas a plataforma é focada em comunicação entre aluno e professor. Portanto,
falta funcionalidades para administrativo da organização se comunicar com todos os alunos.</p>
<p style="text-indent: 50px;text-align: justify;">O Quality é uma plataforma estruturada para escolas, com funcionalidades que atendem a várias
necessidades acadêmicas e administrativas, mas pode ser complexa demais para cursos preparatórios devido
ao excesso de recursos.</p>
<p style="text-indent: 50px;text-align: justify;">A edukante, voltada para gestão escolar completa, também oferece uma ampla gama de
funcionalidades, mas sua estrutura multifuncional pode ser excessiva para cursos específicos, que necessitam
de uma plataforma mais direcionada para o acompanhamento dos alunos.</p>
<p style="text-indent: 50px;text-align: justify;">Essas análises indicam que a plataforma do Portal Galt pode se diferenciar oferecendo um sistema
com acompanhamento personalizado com foco nas necessidades do cliente, integração com planilhas de dados
acadêmicos, assim como autenticação que garante a segurança e acessibilidade de dados tanto para alunos
quanto para a equipe educacional e administrativa.</p>

## Análise de Viabilidade 
<p style="text-indent: 50px;text-align: justify;">Com base nas informações levantadas e no uso de tecnologias como Next.js e Django, além da
disponibilidade de todos os membros do grupo na parte da noite, o projeto para o Galt Vestibulares se mostra
viável. A seguir, detalhamos os pontos principais que reforçam essa viabilidade:</p>
<p style="text-indent: 50px;text-align: justify;">Para o front-end, a escolha do Next.js é ideal, pois ele facilita a construção de interfaces dinâmicas e
escaláveis, que são essenciais para o portal de notícias e a consulta de resultados dos simulados. Já o Django,
selecionado para o back-end, é uma escolha robusta para gerenciar dados com segurança, autenticação e
estruturação de APIs REST, principalmente para aplicações que exigem permissões de acesso diferenciadas para
administradores, professores e alunos.</p>
<p style="text-indent: 50px;text-align: justify;">A liderança do Galt esté animada com o projeto e já se comprometeu com reuniões periódicas. A diretoria
de dados contribui bastante com a descrição do problema e de regras de negócio. Também um dos membros,
Pedro Cruz, é ex-membro do Galt na parte administrativa. Portanto, dentro da equipe tem uma pessoa com grande
conhecimento das regras de negócio e do dia-a-dia da empresa.</p>
<p style="text-indent: 50px;text-align: justify;">A equipe já possui experiência prévia no desenvolvimento de aplicações web e familiaridade com as
tecnologias que serão utilizadas. Além disso, contará com suporte técnico de colegas, do professor e do cliente,
que fornecerá orientações claras sobre os requisitos.</p>

## Impacto da Solução
<p style="text-indent: 50px;text-align: justify;">Espera-se que a plataforma para os alunos traga vários benefícios para o Galt, diretos e indiretos.
Dentre esses benefícios estão:</p>

### ***Meio de comunicação oficial***
<p style="text-indent: 50px;text-align: justify;">A plataforma vai facilitar a comunicação entre administração e alunos, trazendo um meio de
comunicação oficial e rápido para a administração. Sem precisar de usar somente a comunicação física por
meio de professores, grupos não-oficiais de whatsapp ou email.</p>

### ***Evitar perguntas repetidas***
<p style="text-indent: 50px;text-align: justify;">Devido a forma de comunicação atual, é recorrente alunos perguntarem várias vezes informações sobre
o cursinho que a administração já respondeu várias vezes. Com uma plataforma unificada, os alunos vão ter
um lugar para tirar dúvidas e então mitigar esse problema.
</p>

### ***Comunicação Perene***
<p style="text-indent: 50px;text-align: justify;">A plataforma será um meio de comunicação onde o aluno pode rever informações que já foram dadas. Por
exemplo, o resultado dos simulados hoje é enviado por email. Se o aluno quiser ver seu resultado de dois ou
três meses atrás. Ele tem de buscar na sua caixa de email no meio de spam e várias outras informações alheias
ao Galt. Na plataforma Galt o aluno conseguiria rever todos os seus resultados de forma mais simples.</p>

### ***Conformidade com a LGPD***
<p style="text-indent: 50px;text-align: justify;">A plataforma terá total conformidade com a LGPD. Todos os dados de alunos e voluntários será guardado
e utilizado conforme a lei.</p>

*Histórico de Revisão*

| Data | Versão | Descrição | Autores |
| ---------- | ----------- | -------------- | -------------- |
| 30/10/2024 | 1.0 | Criação do documento de Visão de Produto | Bruno de Oliveira, Cairo Florenço, João Pedro, Paola Rebeca, Pedro Fonseca |
| 09/11/2024 | 1.1 | Terminando a visão de projeto, adequando a comentários do professor | Cairo Florenço, João Pedro, Paola Rebeca, Pedro Fonseca |