// pages/legal.tsx
export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] text-[#0A1628]">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Legal
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-[#0A1628]/70">
          Nesta página pode consultar os nossos Termos &amp; Condições,
          Política de Privacidade e Política de Cookies.
        </p>

        <div className="mt-10 space-y-10">
          <section id="termos">
            <h2 className="text-xl font-bold">Termos &amp; Condições</h2>
            <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
              Adicione aqui o conteúdo dos seus Termos &amp; Condições.
            </p>
          </section>

          <section id="privacidade">
            <h2 className="text-xl font-bold">Política de Privacidade</h2>
            <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
              Adicione aqui o conteúdo da sua Política de Privacidade.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-xl font-bold">Política de Cookies</h2>
            <p className="mt-3 text-sm leading-7 text-[#0A1628]/80">
              Adicione aqui o conteúdo da sua Política de Cookies.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
