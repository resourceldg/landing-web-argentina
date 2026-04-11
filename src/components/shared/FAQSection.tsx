import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    question: 'No sé qué texto poner en mi web',
    answer: 'No te preocupes, te ayudamos con el contenido. Nos contás qué hacés y nosotros armamos los textos profesionales para tu servicio. También te damos ejemplos y guías para que elijas lo que más te guste.'
  },
  {
    question: 'No entiendo nada de tecnología',
    answer: '¡Perfecto! Este servicio está pensado exactamente para eso. Vos solo nos pasás tu información y nosotros hacemos todo el trabajo técnico. No necesitás saber nada de programación ni diseño.'
  },
  {
    question: 'Solo atiendo por WhatsApp, ¿me sirve?',
    answer: '¡Ideal! La web está pensada para llevar todo a WhatsApp. Tu web va a tener botones directos a tu WhatsApp para que los clientes te escriban con un solo toque. Es como tener una tarjeta de presentación digital profesional.'
  },
  {
    question: '¿Cuánto tiempo tarda en estar lista?',
    answer: 'La entrega es en 72 horas hábiles una vez que nos pasás toda la información. Si necesitás cambios, los hacemos en las siguientes 24 horas. Queremos que tu web esté online lo antes posible.'
  },
  {
    question: '¿Y si no me gusta el resultado?',
    answer: 'Tenés garantía de satisfacción. Si no te gusta cómo quedó, hacemos los ajustes que necesites. Y si igual no estás conforme, te devolvemos el 100% de tu dinero. No tenés nada que perder.'
  },
  {
    question: '¿Hay que pagar algo mensual?',
    answer: 'No, el precio de ARS 50.000 es único y final. Incluye el diseño, desarrollo y publicación. El hosting y dominio están incluidos por un año. Después, si querés renovar, es aproximadamente $10.000 por año.'
  },
  {
    question: '¿Puedo hacer cambios después?',
    answer: 'Sí, incluimos cambios menores durante los primeros 30 días sin costo. Después, si querés actualizar algo, podemos hacerlo por un costo adicional o te enseñamos cómo hacer cambios simples vos mismo.'
  },
  {
    question: '¿Necesito tener fotos profesionales?',
    answer: 'No es obligatorio. Podés usar fotos de tu celular si son de buena calidad. También podemos usar imágenes de stock profesionales relacionadas con tu rubro. Lo importante es que tu web se vea profesional.'
  }
];

export default function FAQSection({
  title = 'Preguntas frecuentes',
  subtitle = 'Todo lo que necesitás saber',
  items = defaultItems
}: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600">{subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-xl px-6 border-none shadow-soft"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
