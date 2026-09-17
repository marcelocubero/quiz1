"use client";

import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { quizQuestions, OPTION_KEYS, PASS_THRESHOLD, type OptionKey } from "@/lib/quiz-data";

type Answers = Record<number, OptionKey>;
type Answered = Record<number, boolean>;

export default function Home() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [answered, setAnswered] = useState<Answered>({});
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const score = () =>
    quizQuestions.reduce(
      (acc, q) => acc + (answers[q.id] === q.correctAnswer ? 1 : 0),
      0,
    );

  const startQuiz = () => {
    if (name.trim().length < 2) {
      alert("Por favor, ingresa tu nombre completo para comenzar el quiz.");
      return;
    }
    setStarted(true);
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrentIdx(0);
    setAnswers({});
    setAnswered({});
    setShowResults(false);
    setName("");
  };

  // ---------- INTRO SCREEN ----------
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#16213e] flex flex-col items-center justify-center p-6">
        <Card className="w-full max-w-3xl bg-[#1a1a2e]/90 border-2 border-[#9d4edd] shadow-[0_0_30px_rgba(157,78,221,0.3)]">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl md:text-4xl font-bold text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              Universidad de Costa Rica
            </CardTitle>
            <CardDescription className="text-xl md:text-2xl text-[#9d4edd] font-semibold mt-2">
              Escuela de Geografía
            </CardDescription>
            <p className="text-lg text-[#ff0080] font-medium mt-1">
              Curso de Cartografía Básica - Topografía
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00ff00] drop-shadow-[0_0_8px_rgba(0,255,0,0.4)] mb-4">
                Quiz: La Tierra pierde el Norte
              </h2>
              <p className="text-lg text-gray-300">
                Evaluación sobre el documental de los polos magnéticos terrestres
              </p>
            </div>

            <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-[#00ffff]/50 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5k1nmjFINvE"
                title="La Tierra pierde el Norte"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="bg-[#0d0d1a] p-6 rounded-lg border border-[#ff0080]/30">
              <p className="text-lg text-gray-200 mb-4">
                <span className="text-[#00ffff] font-bold">Instrucciones:</span> Este
                quiz contiene <span className="text-[#ff0080] font-bold">20 preguntas</span> de
                selección única sobre el contenido del video. Cada respuesta correcta vale{" "}
                <span className="text-[#00ff00] font-bold">1 punto</span>.
              </p>
              <p className="text-base text-gray-300">
                Observa el video atentamente antes de comenzar. Al finalizar, descarga el PDF
                con tus resultados.
              </p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="name" className="text-lg text-[#00ffff] font-medium">
                Nombre del estudiante:
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg p-4 bg-[#0d0d1a] border-2 border-[#9d4edd]/50 text-white placeholder-gray-500 focus:border-[#00ffff] focus:ring-[#00ffff] rounded-lg"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pb-8">
            <Button
              onClick={startQuiz}
              className="text-xl px-10 py-6 bg-gradient-to-r from-[#9d4edd] to-[#ff0080] hover:from-[#ff0080] hover:to-[#9d4edd] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const total = quizQuestions.length;
  const earned = score();
  const percentage = (earned / total) * 100;
  const passed = percentage >= PASS_THRESHOLD;

  // ---------- RESULTS SCREEN ----------
  if (showResults) {
    return (
      <div
        ref={resultsRef}
        className="min-h-screen bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#16213e] flex flex-col items-center p-6 py-12"
      >
        <Card className="w-full max-w-4xl bg-[#1a1a2e]/90 border-2 border-[#9d4edd] shadow-[0_0_30px_rgba(157,78,221,0.3)]">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              Resultados del Quiz
            </CardTitle>
            <CardDescription className="text-xl text-[#9d4edd] mt-2">
              {name}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center p-4 rounded-xl bg-[#00ffff]/10 border border-[#00ffff]/50">
              <p className="text-lg text-[#00ffff]">
                📥 Descarga el PDF con tus resultados y envíalo al profesor
              </p>
            </div>

            <div
              className={`text-center p-8 rounded-xl border-2 ${
                passed
                  ? "border-[#00ff00] bg-[#00ff00]/10 shadow-[0_0_30px_rgba(0,255,0,0.2)]"
                  : "border-[#ff0080] bg-[#ff0080]/10 shadow-[0_0_30px_rgba(255,0,128,0.2)]"
              }`}
            >
              <div
                className={`text-7xl font-bold ${
                  passed ? "text-[#00ff00]" : "text-[#ff0080]"
                }`}
              >
                {earned}/{total}
              </div>
              <div className="text-3xl text-gray-300 mt-2">
                {percentage.toFixed(1)}%
              </div>
              <div
                className={`text-2xl font-bold mt-2 ${
                  passed ? "text-[#00ff00]" : "text-[#ff0080]"
                }`}
              >
                {passed ? "✓ APROBADO" : "✗ NECESITA MEJORAR"}
              </div>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              <h3 className="text-2xl font-bold text-[#00ffff] sticky top-0 bg-[#1a1a2e] py-2">
                Detalle de Respuestas
              </h3>
              {quizQuestions.map((q, i) => {
                const userAns = answers[q.id];
                const correct = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 ${
                      correct
                        ? "border-[#00ff00]/50 bg-[#00ff00]/5"
                        : "border-[#ff0080]/50 bg-[#ff0080]/5"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Badge
                        className={`text-lg ${
                          correct
                            ? "bg-[#00ff00] text-black"
                            : "bg-[#ff0080] text-white"
                        }`}
                      >
                        {i + 1}
                      </Badge>
                      <div className="flex-1">
                        <p className="text-lg text-white font-medium mb-2">
                          {q.question}
                        </p>
                        <p className="text-base">
                          <span className="text-gray-400">Tu respuesta: </span>
                          <span
                            className={correct ? "text-[#00ff00]" : "text-[#ff0080]"}
                          >
                            {q.options[userAns]}
                          </span>
                        </p>
                        {!correct && (
                          <p className="text-base">
                            <span className="text-gray-400">
                              Respuesta correcta:{" "}
                            </span>
                            <span className="text-[#00ff00]">
                              {q.options[q.correctAnswer]}
                            </span>
                          </p>
                        )}
                        <p className="text-base text-gray-300 mt-2 italic">
                          <span className="text-[#00ffff]">Explicación:</span>{" "}
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
            <Button
              onClick={() => downloadResults(name, answers, earned, total, percentage)}
              className="text-lg px-8 py-4 bg-gradient-to-r from-[#00ffff] to-[#00ff00] hover:from-[#00ff00] hover:to-[#00ffff] text-black font-bold rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              📄 Descargar Resultado (PDF)
            </Button>
            <Button
              onClick={resetQuiz}
              className="text-lg px-8 py-4 bg-gradient-to-r from-[#9d4edd] to-[#ff0080] hover:from-[#ff0080] hover:to-[#9d4edd] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all duration-300"
            >
              🔄 Realizar Nuevo Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  // ---------- QUIZ SCREEN ----------
  const current = quizQuestions[currentIdx];
  const progressValue = ((currentIdx + 1) / total) * 100;
  const isAnswered = answered[current.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d1a] via-[#1a1a2e] to-[#16213e] flex flex-col items-center p-4 md:p-6">
      <div className="w-full max-w-4xl mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
              Quiz: La Tierra pierde el Norte
            </h1>
            <p className="text-lg text-[#9d4edd]">Estudiante: {name}</p>
          </div>
          <Badge className="text-xl px-4 py-2 bg-[#9d4edd] text-white shadow-[0_0_10px_rgba(157,78,221,0.5)]">
            Pregunta {currentIdx + 1} de {total}
          </Badge>
        </div>
        <Progress
          value={progressValue}
          className="h-3 bg-[#0d0d1a] [&>div]:bg-gradient-to-r [&>div]:from-[#9d4edd] [&>div]:to-[#00ffff]"
        />
      </div>

      <Card className="w-full max-w-4xl bg-[#1a1a2e]/90 border-2 border-[#9d4edd] shadow-[0_0_30px_rgba(157,78,221,0.3)]">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-white leading-relaxed">
            {current.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={answers[current.id] || ""}
            className="space-y-4"
          >
            {OPTION_KEYS.map((key) => {
              const selected = answers[current.id] === key;
              const isCorrectChoice = key === current.correctAnswer;
              const stateClass = !isAnswered
                ? "border-2 border-[#00ffff]/30 bg-[#1a1a2e]/80 hover:border-[#00ffff] hover:bg-[#1a1a2e]"
                : isCorrectChoice
                  ? "border-2 border-[#00ff00] bg-[#00ff00]/20 shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                  : selected && !isCorrectChoice
                    ? "border-2 border-[#ff0080] bg-[#ff0080]/20 shadow-[0_0_15px_rgba(255,0,128,0.3)]"
                    : "border-2 border-[#444] bg-[#1a1a2e]/50 opacity-60";
              const labelClass =
                isAnswered && isCorrectChoice
                  ? "text-[#00ff00] font-semibold"
                  : isAnswered && selected && !isCorrectChoice
                    ? "text-[#ff0080]"
                    : "text-gray-200";
              return (
                <div
                  key={key}
                  onClick={() => {
                    if (isAnswered) return;
                    setAnswers((prev) => ({ ...prev, [current.id]: key }));
                    setAnswered((prev) => ({ ...prev, [current.id]: true }));
                  }}
                  className={`flex items-start p-4 rounded-xl cursor-pointer transition-all duration-300 ${stateClass}`}
                >
                  <RadioGroupItem
                    value={key}
                    id={`option-${key}`}
                    className="mt-1 border-[#00ffff] text-[#00ffff]"
                    disabled={isAnswered}
                  />
                  <Label
                    htmlFor={`option-${key}`}
                    className={`ml-4 text-lg leading-relaxed cursor-pointer flex-1 ${labelClass}`}
                  >
                    <span className="font-bold mr-2">{key.toUpperCase()}.</span>
                    {current.options[key]}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>

          {isAnswered && (
            <div
              className={`mt-6 p-5 rounded-xl border-2 ${
                answers[current.id] === current.correctAnswer
                  ? "border-[#00ff00]/50 bg-[#00ff00]/10"
                  : "border-[#ff0080]/50 bg-[#ff0080]/10"
              }`}
            >
              <p className="text-lg">
                <span
                  className={`font-bold ${
                    answers[current.id] === current.correctAnswer
                      ? "text-[#00ff00]"
                      : "text-[#ff0080]"
                  }`}
                >
                  {answers[current.id] === current.correctAnswer
                    ? "✓ ¡Correcto!"
                    : "✗ Incorrecto"}
                </span>
              </p>
              <p className="text-base text-gray-300 mt-2 leading-relaxed">
                <span className="text-[#00ffff] font-medium">Explicación:</span>{" "}
                {current.explanation}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between gap-4 pt-4 pb-6">
          <Button
            onClick={() => currentIdx > 0 && setCurrentIdx(currentIdx - 1)}
            disabled={currentIdx === 0}
            className="text-lg px-6 py-3 bg-[#0d0d1a] border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Anterior
          </Button>
          <Button
            onClick={() => {
              if (currentIdx < total - 1) {
                setCurrentIdx(currentIdx + 1);
              } else {
                setShowResults(true);
                setTimeout(() => {
                  resultsRef.current?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }}
            disabled={!isAnswered}
            className="text-lg px-6 py-3 bg-gradient-to-r from-[#9d4edd] to-[#ff0080] hover:from-[#ff0080] hover:to-[#9d4edd] text-white font-bold rounded-xl shadow-[0_0_15px_rgba(157,78,221,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentIdx === total - 1 ? "Ver Resultados →" : "Siguiente →"}
          </Button>
        </CardFooter>
      </Card>

      <div className="w-full max-w-4xl mt-6 p-4 bg-[#0d0d1a]/80 rounded-xl border border-[#9d4edd]/30">
        <p className="text-base text-gray-400 mb-3 text-center">Navegación rápida:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {quizQuestions.map((q, i) => {
            const ans = answered[q.id];
            const correct = answers[q.id] === q.correctAnswer;
            return (
              <Button
                key={q.id}
                onClick={() => setCurrentIdx(i)}
                className={`w-10 h-10 text-base font-bold rounded-lg transition-all ${
                  i === currentIdx
                    ? "bg-[#00ffff] text-black shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                    : ans
                      ? correct
                        ? "bg-[#00ff00] text-black"
                        : "bg-[#ff0080] text-white"
                      : "bg-[#1a1a2e] text-gray-400 border border-[#9d4edd]/50"
                }`}
              >
                {i + 1}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---------- PDF / PRINT EXPORT ----------
function downloadResults(
  name: string,
  answers: Answers,
  earned: number,
  total: number,
  percentage: number,
) {
  const passed = percentage >= PASS_THRESHOLD;
  const dateStr = new Date().toLocaleDateString("es-CR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const detailHtml = quizQuestions
    .map((q, i) => {
      const userAns = answers[q.id];
      const correct = userAns === q.correctAnswer;
      return `<div class="question-result ${correct ? "correct" : "incorrect"}">
        <div style="font-weight:bold;color:#9d4edd;">Pregunta ${i + 1}</div>
        <div style="font-weight:500;margin-bottom:10px;">${q.question}</div>
        <div style="font-size:14px;color:#666;">
          <p>Tu respuesta: <strong style="color:${correct ? "#28a745" : "#dc3545"}">${q.options[userAns]}</strong></p>
          ${!correct ? `<p style="color:#28a745;">Respuesta correcta: ${q.options[q.correctAnswer]}</p>` : ""}
          <p style="font-style:italic;margin-top:10px;">Explicación: ${q.explanation}</p>
        </div>
      </div>`;
    })
    .join("");

  const html = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Resultado del Quiz - Cartografía Básica</title>
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #1a1a2e; }
      .header { text-align: center; border-bottom: 3px solid #9d4edd; padding-bottom: 20px; margin-bottom: 30px; }
      .header h1 { color: #9d4edd; margin: 0; font-size: 28px; }
      .header h2 { color: #7b2cbf; margin: 10px 0 0 0; font-size: 20px; }
      .info-box { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-left: 5px solid #00ffff; padding: 20px; margin: 20px 0; border-radius: 8px; }
      .score-box { background: ${passed ? "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)" : "linear-gradient(135deg, #fff3cd 0%, #ffeeba 100%)"}; border: 2px solid ${passed ? "#28a745" : "#ffc107"}; border-radius: 12px; padding: 25px; text-align: center; margin: 30px 0; }
      .score-number { font-size: 48px; font-weight: bold; color: ${passed ? "#28a745" : "#ffc107"}; }
      .question-result { border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin: 15px 0; page-break-inside: avoid; }
      .question-result.correct { border-left: 4px solid #28a745; background: #f8fff8; }
      .question-result.incorrect { border-left: 4px solid #dc3545; background: #fff8f8; }
      .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #eee; text-align: center; color: #888; font-size: 14px; }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Universidad de Costa Rica</h1>
      <h2>Escuela de Geografía - Curso de Cartografía Básica</h2>
    </div>
    <div class="info-box">
      <p><strong>Estudiante:</strong> ${name}</p>
      <p><strong>Fecha de evaluación:</strong> ${dateStr}</p>
      <p><strong>Tema:</strong> Video "La Tierra pierde el Norte" - Polos Magnéticos y Cartografía</p>
    </div>
    <div class="score-box">
      <div>Puntuación obtenida</div>
      <div class="score-number">${earned}/${total}</div>
      <div>${percentage.toFixed(1)}% - ${passed ? "APROBADO" : "NECESITA MEJORAR"}</div>
    </div>
    <h3>Detalle de Respuestas</h3>
    ${detailHtml}
    <div class="footer">
      <p>Este documento fue generado automáticamente por el sistema de evaluación.</p>
      <p style="font-weight:bold;color:#9d4edd;">Universidad de Costa Rica - Escuela de Geografía</p>
    </div>
  </body>
  </html>
  `;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Quiz_Cartografia_${name.replace(/\s+/g, "_")}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  const win = window.open("", "_blank");
  if (win) {
    win.document.write(html);
    win.document.close();
    win.onload = () => win.print();
  }
}
