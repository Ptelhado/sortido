// pages/legal.tsx
export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] text-[#0A1628]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="border-b border-[#0A1628]/10 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0A1628]/50">
            Planeta Sortido, Unipessoal Lda · NIF 518 655 253
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Informação Legal &amp; Proteção de Dados
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#0A1628]/70 sm:text-base">
            Nesta página pode consultar informação sobre privacidade,
            tratamento de dados pessoais, cookies, livro de reclamações e meios
            de resolução alternativa de litígios.
          </p>
        </header>

        <div className="mt-10 space-y-14">
          <section id="termos" className="scroll-mt-24">
            <h2 className="text-2xl font-bold">Termos &amp; Condições</h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-[#0A1628]/80">
              <p>
                O presente website pertence e é operado por{" "}
                <strong>Planeta Sortido, Unipessoal Lda</strong>, pessoa
                coletiva n.º <strong>518 655 253</strong>.
              </p>

              <p>
                A navegação e utilização deste website pressupõem a aceitação
                das presentes condições legais, bem como das políticas de
                privacidade e cookies aqui disponibilizadas.
              </p>

              <p>
                O conteúdo presente neste website tem natureza informativa e
                comercial e pode ser alterado, atualizado, corrigido ou removido
                sem aviso prévio, sempre que tal se revele necessário.
              </p>

              <p>
                O utilizador compromete-se a utilizar o website de forma lícita,
                responsável e em conformidade com a legislação aplicável, não
                devendo praticar atos suscetíveis de comprometer a segurança, a
                integridade, a disponibilidade ou o correto funcionamento da
                plataforma.
              </p>

              <p>
                Sempre que aplicável, eventuais litígios de consumo poderão ser
                submetidos aos mecanismos de resolução alternativa de litígios
                identificados na presente página.
              </p>
            </div>
          </section>

          <section id="privacidade" className="scroll-mt-24">
            <h2 className="text-2xl font-bold">Política de Privacidade</h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold">
                  1.1 Identidade e Contactos do Responsável pelo Tratamento
                </h3>
                <div className="mt-3 space-y-4 text-sm leading-7 text-[#0A1628]/80">
                  <p>
                    O responsável pelo tratamento dos seus dados pessoais é a
                    sociedade <strong>Planeta Sortido, Unipessoal Lda</strong>,
                    pessoa coletiva n.º <strong>518 655 253</strong>, com sede
                    na{" "}
                    <strong>
                      Avenida Infante D. Henrique, n.º 333 H, Escritório 17,
                      1800-282 Lisboa, Portugal
                    </strong>
                    .
                  </p>

                  <p>
                    Para exercer os seus direitos ou esclarecer dúvidas
                    relacionadas com o tratamento dos seus dados pessoais,
                    contacte-nos através do endereço eletrónico{" "}
                    <a
                      href="mailto:geral@planetasortido.pt"
                      className="underline underline-offset-4"
                    >
                      geral@planetasortido.pt
                    </a>
                    .
                  </p>

                  <div className="rounded-2xl border border-[#0A1628]/10 bg-white p-5">
                    <h4 className="font-semibold">
                      Encarregado de Proteção de Dados (DPO)
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[#0A1628]/75">
                      O Planeta Sortido não está obrigado à nomeação de um DPO,
                      ao abrigo do artigo 37.º do RGPD, dado que o tratamento de
                      dados não constitui a sua atividade principal, não envolve
                      tratamento em larga escala de categorias especiais de dados
                      nem monitorização sistemática em larga escala.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  1.2 Categorias de Dados Pessoais Tratados
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Dependendo da sua interação com o nosso sítio web e serviços,
                  poderão ser tratados dados de identificação, contacto, dados
                  transacionais, referências de pagamento, dados técnicos e de
                  navegação, bem como preferências e comunicações.
                </p>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-[#0A1628]/10 bg-white">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-[#0A1628] text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Categoria</th>
                        <th className="px-4 py-3 font-semibold">Exemplos</th>
                        <th className="px-4 py-3 font-semibold">
                          Quando recolhemos
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0A1628]/10 text-[#0A1628]/80">
                      <tr>
                        <td className="px-4 py-3 font-medium">Identificação</td>
                        <td className="px-4 py-3">
                          Nome, morada, número de identificação fiscal
                        </td>
                        <td className="px-4 py-3">
                          Criação de conta, encomenda, fatura
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Contacto</td>
                        <td className="px-4 py-3">
                          Endereço eletrónico, número de telefone
                        </td>
                        <td className="px-4 py-3">
                          Registo, formulário de contacto, envio de encomenda
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">
                          Transacionais
                        </td>
                        <td className="px-4 py-3">
                          Histórico de encomendas, artigos adquiridos, valor das
                          transações
                        </td>
                        <td className="px-4 py-3">Realização de compra</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Pagamento</td>
                        <td className="px-4 py-3">
                          Referência de transação
                        </td>
                        <td className="px-4 py-3">Checkout</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">
                          Técnicos e de navegação
                        </td>
                        <td className="px-4 py-3">
                          Endereço IP, browser, sistema operativo, páginas
                          visitadas, duração da sessão, cookies
                        </td>
                        <td className="px-4 py-3">Acesso ao sítio web</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">
                          Preferências e comunicação
                        </td>
                        <td className="px-4 py-3">
                          Preferências de marketing, histórico de interação com
                          comunicações
                        </td>
                        <td className="px-4 py-3">
                          Subscrição de newsletter, quando aplicável
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-5 rounded-2xl border border-[#0A1628]/10 bg-[#0A1628]/[0.03] p-5">
                  <p className="text-sm leading-7 text-[#0A1628]/80">
                    <strong>Não tratamos categorias especiais de dados.</strong>{" "}
                    O Planeta Sortido não recolhe nem trata dados de saúde,
                    biométricos, genéticos, origem racial ou étnica, convicções
                    religiosas, opiniões políticas, vida ou orientação sexual.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  1.3 Finalidades do Tratamento e Bases Jurídicas
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  O documento identifica como principais finalidades o
                  cumprimento de obrigações fiscais, contabilísticas e legais, a
                  prevenção de fraude e segurança do sítio web, bem como a
                  análise de navegação e melhoria do sítio web com base em
                  consentimento para cookies não essenciais.
                </p>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-[#0A1628]/10 bg-white">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-[#0A1628] text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Finalidade</th>
                        <th className="px-4 py-3 font-semibold">
                          Base jurídica
                        </th>
                        <th className="px-4 py-3 font-semibold">
                          Prazo de conservação
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0A1628]/10 text-[#0A1628]/80">
                      <tr>
                        <td className="px-4 py-3">
                          Cumprimento de obrigações fiscais, contabilísticas e
                          legais
                        </td>
                        <td className="px-4 py-3">
                          Obrigação jurídica
                        </td>
                        <td className="px-4 py-3">
                          10 anos após encerramento do exercício
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          Prevenção de fraude, segurança do sítio web e proteção
                          de direitos
                        </td>
                        <td className="px-4 py-3">Interesse legítimo</td>
                        <td className="px-4 py-3">
                          12 meses (logs técnicos) ou duração do litígio
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          Análise de navegação e melhoria do sítio web
                          (analytics)
                        </td>
                        <td className="px-4 py-3">
                          Consentimento (cookies não essenciais)
                        </td>
                        <td className="px-4 py-3">
                          Conforme política de cookies
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  1.5 Transferências para Países Terceiros
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Sempre que recorramos a prestadores de serviços situados fora
                  do Espaço Económico Europeu, as transferências serão efetuadas
                  com base em mecanismos adequados, incluindo decisões de
                  adequação, cláusulas contratuais-tipo ou outras garantias
                  previstas no Capítulo V do RGPD.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  1.6 Direitos dos Titulares dos Dados
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Nos termos do RGPD e da Lei n.º 58/2019, dispõe dos direitos
                  de acesso, retificação, apagamento, limitação, portabilidade,
                  oposição, não sujeição a decisões automatizadas e revogação do
                  consentimento. Os pedidos podem ser exercidos gratuitamente
                  através de{" "}
                  <a
                    href="mailto:geral@planetasortido.pt"
                    className="underline underline-offset-4"
                  >
                    geral@planetasortido.pt
                  </a>
                  .
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Acesso", "Saber se tratamos os seus dados e obter cópia."],
                    ["Retificação", "Corrigir dados inexatos ou incompletos."],
                    ["Apagamento", "Solicitar o apagamento, salvo obrigação legal."],
                    ["Limitação", "Restringir o tratamento em certas circunstâncias."],
                    ["Portabilidade", "Receber os dados em formato estruturado."],
                    ["Oposição", "Opor-se a tratamento por interesse legítimo ou marketing."],
                    ["Decisões automatizadas", "Não ficar sujeito exclusivamente a decisões automatizadas com efeitos jurídicos significativos."],
                    ["Revogação do consentimento", "Retirar o consentimento a qualquer momento."],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-[#0A1628]/10 bg-white p-4"
                    >
                      <h4 className="font-semibold">{title}</h4>
                      <p className="mt-2 text-sm leading-7 text-[#0A1628]/75">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-[#0A1628]/80">
                  Responderemos ao pedido no prazo máximo de 30 dias, podendo
                  esse prazo ser prorrogado por mais 60 dias em casos de
                  especial complexidade, com informação prévia ao titular.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  1.7 Direito de Reclamação à Autoridade de Controlo
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Sem prejuízo de qualquer outra via de recurso administrativo
                  ou judicial, o titular tem o direito de apresentar reclamação
                  à Comissão Nacional de Proteção de Dados (CNPD), autoridade de
                  controlo competente em Portugal, caso considere que o
                  tratamento dos seus dados viola o RGPD.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  1.8 Segurança dos Dados
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Implementamos medidas técnicas e organizativas adequadas para
                  proteger os dados pessoais contra destruição, perda, alteração,
                  divulgação não autorizada ou acesso indevido, incluindo
                  transmissão cifrada (TLS/SSL), controlo de acessos e registos
                  de auditoria.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">1.9 Menores de Idade</h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Os nossos serviços não se destinam a menores de 16 anos. Não
                  recolhemos intencionalmente dados pessoais de menores e, caso
                  tal ocorra inadvertidamente, os dados serão apagados logo que
                  a situação seja identificada.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  1.10 Alterações à Política de Privacidade
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Esta política pode ser atualizada periodicamente para refletir
                  alterações nos procedimentos internos ou na legislação
                  aplicável. A versão atualizada será publicada nesta página.
                </p>
              </div>
            </div>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <h2 className="text-2xl font-bold">Política de Cookies</h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-lg font-semibold">2.1 O Que São Cookies</h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Os cookies são pequenos ficheiros de texto colocados no seu
                  dispositivo quando visita um sítio web. Permitem recordar
                  ações e preferências durante um determinado período. Os
                  cookies não estritamente necessários apenas podem ser
                  instalados com consentimento prévio, livre, específico,
                  informado e inequívoco.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  2.2 Tipos de Cookies que Utilizamos
                </h3>

                <div className="mt-5 overflow-x-auto rounded-2xl border border-[#0A1628]/10 bg-white">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-[#0A1628] text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Categoria</th>
                        <th className="px-4 py-3 font-semibold">Tipo</th>
                        <th className="px-4 py-3 font-semibold">Finalidade</th>
                        <th className="px-4 py-3 font-semibold">Prazo</th>
                        <th className="px-4 py-3 font-semibold">
                          Consentimento
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0A1628]/10 text-[#0A1628]/80">
                      <tr>
                        <td className="px-4 py-3 font-medium">
                          Estritamente Necessários
                        </td>
                        <td className="px-4 py-3">Sessão / Persistente</td>
                        <td className="px-4 py-3">
                          Funcionamento do carrinho, autenticação, segurança da
                          sessão e preferências de idioma
                        </td>
                        <td className="px-4 py-3">Sessão / até 12 meses</td>
                        <td className="px-4 py-3">Não necessário</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Funcionais</td>
                        <td className="px-4 py-3">Persistente</td>
                        <td className="px-4 py-3">
                          Memorizar preferências do utilizador e melhorar a
                          experiência personalizada
                        </td>
                        <td className="px-4 py-3">Até 12 meses</td>
                        <td className="px-4 py-3">Necessário</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">
                          Analíticos / Desempenho
                        </td>
                        <td className="px-4 py-3">Persistente</td>
                        <td className="px-4 py-3">
                          Análise estatística de navegação para melhorar o sítio
                          web
                        </td>
                        <td className="px-4 py-3">Até 26 meses</td>
                        <td className="px-4 py-3">Necessário</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">2.3 Cookies de Terceiros</h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  O sítio pode incorporar funcionalidades de terceiros, como
                  botões de redes sociais, vídeos ou mapas, que podem instalar
                  os seus próprios cookies. Esses cookies regem-se pelas
                  políticas de privacidade das respetivas entidades.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  2.4 Como Gerir ou Recusar Cookies
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
                  Pode alterar as preferências de cookies através do painel de
                  configuração disponível no sítio, quando aplicável, ou através
                  das definições do browser. A desativação de cookies
                  estritamente necessários pode afetar o correto funcionamento
                  do sítio.
                </p>

                <div className="mt-4 rounded-2xl border border-[#0A1628]/10 bg-[#0A1628]/[0.03] p-5">
                  <p className="text-sm leading-7 text-[#0A1628]/80">
                    Ao aceder ao sítio web pela primeira vez, é apresentado um
                    banner de consentimento de cookies. O consentimento é
                    registado e pode ser retirado a qualquer momento com a mesma
                    facilidade com que foi concedido.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="reclamacoes" className="scroll-mt-24">
            <h2 className="text-2xl font-bold">Livro de Reclamações</h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-[#0A1628]/80">
              <p>
                Nos termos do Decreto-Lei n.º 156/2005, com as alterações
                introduzidas pelo Decreto-Lei n.º 74/2017 e demais legislação
                complementar, o Planeta Sortido disponibiliza acesso ao Livro de
                Reclamações Eletrónico.
              </p>

              <p>
                O Livro de Reclamações Eletrónico é gerido pelo Portal do
                Consumidor, sendo as reclamações transmitidas às entidades
                reguladoras competentes para apreciação e eventual instauração
                de procedimento.
              </p>

              <p>
                Para apresentar uma reclamação, aceda a{" "}
                <a
                  href="https://www.livroreclamacoes.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  www.livroreclamacoes.pt
                </a>
                .
              </p>

              <p>
                Para contacto direto, poderá também utilizar o endereço{" "}
                <a
                  href="mailto:geral@planetasortido.pt"
                  className="underline underline-offset-4"
                >
                  geral@planetasortido.pt
                </a>
                .
              </p>
            </div>
          </section>

          <section id="ral" className="scroll-mt-24">
            <h2 className="text-2xl font-bold">
              Resolução Alternativa de Litígios
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-[#0A1628]/80">
              <p>
                Nos termos do artigo 18.º da Lei n.º 144/2015 e da Diretiva
                2013/11/UE, em caso de litígio de consumo, o consumidor pode
                recorrer a entidades de resolução alternativa de litígios.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  CNIACC — Centro Nacional de Informação e Arbitragem do
                  Conflito de Consumo
                </li>
                <li>
                  CIMAAL — Centro de Informação, Mediação e Arbitragem do
                  Algarve, quando aplicável por domicílio
                </li>
                <li>
                  Plataforma Europeia de Resolução de Litígios em Linha (RLL)
                  para litígios transfronteiriços em matéria de contratos
                  celebrados em linha
                </li>
              </ul>

              <p>
                O Planeta Sortido declara disponibilidade para submeter
                eventuais litígios de consumo às entidades de RAL identificadas,
                sem prejuízo do direito do consumidor de recorrer aos tribunais
                competentes.
              </p>
            </div>
          </section>

          <footer className="rounded-2xl border border-[#0A1628]/10 bg-white p-6">
            <p className="text-sm leading-7 text-[#0A1628]/75">
              <strong>Planeta Sortido, Unipessoal Lda</strong> · NIF 518 655
              253 · Av. Infante D. Henrique, n.º 333 H, Escritório 17, 1800-282
              Lisboa · Capital Social: 1.000,00 EUR.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
