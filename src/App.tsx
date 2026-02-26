import React from "react";
import { motion } from "framer-motion";
import Card from "./components/Card";
import Button from "./components/Button";

export default function PanoramaMercadoSite() {
  const investimentoClass = [
    {
      title: "Ações",
      content:
        "Mercados globais apresentam tendência positiva moderada. Tecnologia lidera nos EUA. Brasil mantém Ibovespa em níveis elevados, mas com volatilidade política e econômica.",
    },
    {
      title: "Renda Fixa",
      content:
        "Juros ainda elevados tornam títulos públicos e CDBs atrativos. Boa opção para perfis conservadores e proteção contra volatilidade.",
    },
    {
      title: "Criptomoedas",
      content:
        "Ativo de alta volatilidade. Potencial de valorização elevado, porém risco significativo. Deve representar pequena parcela da carteira.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Panorama Geral do Mercado 2026</h1>
          <p className="text-lg text-gray-600">
            Análise completa dos principais investimentos, índices globais e riscos atuais do mercado financeiro.
          </p>
        </header>

        {/* Ad Space 1 */}
        <div className="flex justify-center my-8">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5846237075089902"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        {/* Investimentos Section */}
        <section className="grid md:grid-cols-3 gap-6">
          {investimentoClass.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <div className="p-6 space-y-3">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* Ad Space 2 */}
        <div className="flex justify-center my-8">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5846237075089902"
            data-ad-slot="0987654321"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        {/* Risks and Strategies Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Principais Riscos</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inflação e mudanças nas taxas de juros</li>
                <li>Risco geopolítico global</li>
                <li>Volatilidade dos mercados emergentes</li>
                <li>Risco regulatório e político</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Estratégias Gerais</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Diversificação entre classes de ativos</li>
                <li>Exposição internacional</li>
                <li>Balanceamento conforme perfil de risco</li>
                <li>Revisão periódica da carteira</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Ad Space 3 */}
        <div className="flex justify-center my-8">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5846237075089902"
            data-ad-slot="5555555555"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>

        {/* Footer */}
        <footer className="text-center pt-10 border-t mt-10 space-y-4">
          <p className="text-gray-500 text-sm">
            Este site tem caráter educacional e não constitui recomendação de investimento. Consulte um consultor financeiro antes de tomar decisões.
          </p>
          <Button>Saiba Mais</Button>
          <p className="text-xs text-gray-400">
            © 2026 Análise Mercado Financeiro. Todos os direitos reservados.
          </p>
        </footer>
      </div>

      {/* Load AdSense script */}
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
    </div>
  );
}
