import { Minuto as MinutoType } from '@/types/Minuto';
import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import DOMPurify from "dompurify";

type Props = {
    minutos: MinutoType[];
};

const Minuto: React.FC<Props> = ({ minutos}) => {

  
    const parseAudioEmbeds = (content: string): string => {
        // Reemplaza [audio_embend]URL[/audio_embend] por un <audio> embebido
        return content.replace(/\[audio_embend\]\s*(.*?)\s*\[\/audio_embend\]/gi, (_match, url) => {
            const src = String(url ?? '').trim();
            if (!src) return '';
            return `
                <audio controls class="my-4 w-full">
                  <source src="${src}" type="audio/mpeg">
                  Tu navegador no soporta la etiqueta de audio.
                </audio>
            `;
        });
    };

    const extractContentFromParsed = (parsed: any): string | null => {
        if (parsed == null) return null;

        if (Array.isArray(parsed)) {
            const parts = parsed.map((p) => {
                if (typeof p === 'string') return p;
                return String(p?.contenido ?? p?.html ?? p?.content ?? p?.text ?? '');
            }).filter(Boolean);
            return parts.join('');
        }

        const candidates = [
            parsed.contenido,
            parsed.content,
            parsed.html,
            parsed.body,
            parsed.text,
            parsed.descripcion,
            parsed?.data?.html
        ];
        for (const c of candidates) {
            if (c !== undefined && c !== null && String(c).trim() !== '') return String(c);
        }

        if (typeof parsed.contenido === 'object' && parsed.contenido !== null) {
            const nested = parsed.contenido;
            if (typeof nested === 'string' && nested.trim() !== '') return nested;
            const nestedCandidates = [nested.html, nested.content, nested.text];
            for (const nc of nestedCandidates) {
                if (nc) return String(nc);
            }
        }
        const joinedValues = Object.values(parsed)
            .filter(v => typeof v === 'string' && v.trim() !== '')
            .join(' ');
        if (joinedValues) return joinedValues;

        return null;
    };

    const getRawContenido = (minuto: any): any => {
        if (!minuto) return null;
        const candidates = [
            minuto.contenido,
            minuto.contenido_normal,
            minuto.id_titulo_minuto,
            minuto.titulo_minuto,
            minuto.html,
            minuto.content,
            minuto.body,
            minuto.text,
            minuto.raw,
            minuto.descripcion,
            minuto?.data?.contenido,
            minuto?.data?.html
        ];
        for (const c of candidates) {
            if (c === undefined || c === null) continue;
            if (typeof c === 'string' && c.trim() === '') continue;
            return c;
        }
        return null;
    };

    const parseContenidoField = (contenidoField: any): string => {
        if (contenidoField === null || contenidoField === undefined) return '';

        if (typeof contenidoField === 'object') {
            return String(extractContentFromParsed(contenidoField) ?? '');
        }

        if (typeof contenidoField === 'string') {
            const trimmed = contenidoField.trim();
            if (trimmed === '' || trimmed.toLowerCase() === 'null' || trimmed.toLowerCase() === 'undefined') return '';

            try {
                const parsed = JSON.parse(trimmed);
                const extracted = extractContentFromParsed(parsed);
                return String(extracted ?? trimmed);
            } catch (e) {
                return trimmed;
            }
        }

        return '';
    };

    const contenidoemb = (contenido: string, embebido: any) => {
        let result = contenido ?? '';
        if (embebido && Array.isArray(embebido)) {
            embebido.forEach((embed: any, index: number) => {
                const placeholder = `{{EMBED_${index}}}`;
                if (embed && embed.html) {
                    result = result.replace(placeholder, embed.html);
                }
            });
        }
        return result;
    };

    const minutosOrdenados = [...minutos].sort((a, b) => {
        return new Date(b.creado_en).getTime() - new Date(a.creado_en).getTime();
    });

    const FormattedDate = (date: string) => {
        try {
            const rawFormatted = format(new Date(date), 'h:mm a', {
                locale: es,
            });
            const lowerCased = rawFormatted.replace('AM', 'a. m.').replace('PM', 'p. m.');
            return lowerCased;
        } catch (error) {
            console.error('Error formatting date:', error);
            return 'Hora no disponible';
        }
    };

    return (
        <div className="space-y-4">
            {minutosOrdenados.map((minuto) => {
                const raw = getRawContenido(minuto);
                const contenidoHtml = parseContenidoField(raw);

                let contenidoWithAudio = parseAudioEmbeds(contenidoHtml);
                const contenidoConEmbeds = contenidoemb(contenidoWithAudio, minuto.embebido);
                const sanitized = typeof window !== "undefined"
                    ? DOMPurify.sanitize(contenidoConEmbeds, {
                        ADD_TAGS: ["iframe", "audio", "source"],
                        ADD_ATTR: [
                          "allow",
                          "allowfullscreen",
                          "frameborder",
                          "src",
                          "width",
                          "height",
                          "controls",
                        ],
                      })
                    : contenidoConEmbeds;

                return (
                    <div
                        key={minuto.id}
                        className="border-l-4 border-headerColor p-4 "
                        style={{ borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}
                    >
                        <div className="font-bold text-lg mb-2">
                            {FormattedDate(minuto.creado_en)}
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: sanitized }} />

                        {minuto.audios && (
                            <audio controls className="mt-2 w-full">
                                <source src={minuto.audios} type="audio/mpeg" />
                                Tu navegador no soporta audio HTML5.
                            </audio>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Minuto;