"use client";

import { Card, CardFooter, CardTitle } from "@/app/_components/ui/card";
import Image from "next/image";
import FadeInSection from "../_components/fadeIn";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="mb-16 mt-16">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        draggable
        theme="colored"
      />
      <FadeInSection>
        <div className="flex flex-row justify-center items-center gap-14">
          <Image
            src="/about.png"
            width={500}
            height={700}
            alt="três imagens, sendo elas respresentando o agronomia, outra naval e outra tecnologia"
          />
          <div className="flex flex-col break-words w-[350px] gap-10">
            <span className="text-white font-anton text-[48px]">
              Sobre a Konventus
            </span>

            <p className="text-white text-[18px] font-arial">
              A Konventus é um ecossistema inovador de projetos científicos,
              focado nas esferas de Agro, Engenharia de Software e Engenharia
              Naval.
            </p>

            <div className="flex gap-4 flex-col">
              <p className="text-white text-[16px] font-arial">
                <span className="font-bold">Agro:</span> Exploramos soluções
                avançadas para otimizar a produção agrícola, desde o
                desenvolvimento de novas técnicas até a implementação de
                tecnologias inovadoras.
              </p>
              <p className="text-white text-[16px] font-arial">
                <span className="font-bold">Engenharia de Software:</span> Nossa
                equipe está na vanguarda, desenvolvendo softwares
                revolucionários que impulsionam a eficiência, segurança e
                escalabilidade em diversas áreas.
              </p>
              <p className="text-white text-[16px] font-arial">
                <span className="font-bold">Engenharia Naval:</span> Conduzimos
                pesquisas e projetos inovadores para aprimorar embarcações e
                tecnologias navais, garantindo avanços significativos no setor.
                Junte-se a nós para explorar as fronteiras do conhecimento e
                impulsionar a inovação científica.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-[36px] mb-8 font-arial">Conheça nossas áreas</h1>
          <div className="flex flex-row bg-center justify-center gap-6 ">
            <div className="overflow-hidden">
              <Card className="object-cover border-none	w-[300px] h-[400px] bg-[url('/software.png')] flex items-end hover:scale-110 transition duration-500 cursor-pointer">
                <CardFooter>
                  <CardTitle className="text-white">
                    Engenharia de Software
                  </CardTitle>
                </CardFooter>
              </Card>
            </div>

            <div className="overflow-hidden">
              <Card className="object-cover border-none w-[300px] h-[400px] bg-[url('/naval.png')] flex items-end hover:scale-110 transition duration-500 cursor-pointer">
                <CardFooter>
                  <CardTitle>Engenharia Naval</CardTitle>
                </CardFooter>
              </Card>
            </div>

            <div className="overflow-hidden">
              <Card className="object-cover border-none w-[300px] h-[400px] bg-[url('/agro.png')] flex items-end hover:scale-110 transition duration-500 cursor-pointer">
                <CardFooter>
                  <CardTitle className="text-white">Agro</CardTitle>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
