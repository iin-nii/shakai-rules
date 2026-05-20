"use client";

import { useState } from "react";
import Link from "next/link";

// ==========================================
// 型定義
// ==========================================
type KotobaQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

type KyuyoQuestion = {
  id: number;
  question: string;
  blanks: string[];
  answers: string[];
  hint: string;
  explanation: string;
};

type MannerQuestion = {
  id: number;
  question: string;
  answer: boolean;
  explanation: string;
};

type Genre = "kotoba" | "kyuyo" | "manner";

interface QuizClientProps {
  genre: Genre;
  questions: KotobaQuestion[] | KyuyoQuestion[] | MannerQuestion[];
  meta: {
    title: string;
    format: string;
    icon: string;
    color: string;
    bgColor: string;
  };
}

// ==========================================
// 4択クイズ
// ==========================================
function KotobaQuiz({
  questions,
  onNext,
  current,
  total,
  color,
}: {
  questions: KotobaQuestion[];
  onNext: (correct: boolean) => void;
  current: number;
  total: number;
  color: string;
}) {
  const q = questions[current];
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
  };

  const handleNext = () => {
    onNext(selected === q.answer);
    setSelected(null);
  };

  return (
    <div>
      <p className="text-sm font-bold mb-4" style={{ color }}>
        問題 {current + 1} / {total}
      </p>
      <h2 className="text-xl font-bold mb-6 leading-relaxed">{q.question}</h2>
      <div className="grid gap-3 mb-6">
        {q.options.map((opt, i) => {
          let borderColor = "#334155";
          let bgColor = "#273449";
          let textColor = "#f1f5f9";
          if (answered) {
            if (i === q.answer) {
              borderColor = "#4ade80";
              bgColor = "#0a2a1a";
              textColor = "#4ade80";
            } else if (i === selected) {
              borderColor = "#f87171";
              bgColor = "#2a0a0a";
              textColor = "#f87171";
            }
          } else if (selected === i) {
            borderColor = color;
            bgColor = "#0c2a3a";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="w-full text-left px-4 py-3 rounded-xl font-medium transition-all"
              style={{
                border: `2px solid ${borderColor}`,
                backgroundColor: bgColor,
                color: textColor,
                cursor: answered ? "default" : "pointer",
              }}
            >
              <span
                className="inline-block w-6 h-6 rounded-full text-xs font-black mr-3 text-center leading-6"
                style={{ backgroundColor: "#334155" }}
              >
                {["A", "B", "C", "D"][i]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          className="rounded-xl p-4 mb-6"
          style={{
            backgroundColor: selected === q.answer ? "#0a2a1a" : "#2a0a0a",
            borderLeft: `4px solid ${selected === q.answer ? "#4ade80" : "#f87171"}`,
          }}
        >
          <p className="font-bold mb-1" style={{ color: selected === q.answer ? "#4ade80" : "#f87171" }}>
            {selected === q.answer ? "✅ 正解！" : "❌ 不正解"}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
            {q.explanation}
          </p>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div />
        {answered && (
          <button onClick={handleNext} className="btn-primary">
            {current + 1 < total ? "次の問題 →" : "結果を見る"}
          </button>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 穴埋めクイズ
// ==========================================
function KyuyoQuiz({
  questions,
  onNext,
  current,
  total,
  color,
}: {
  questions: KyuyoQuestion[];
  onNext: (correct: boolean) => void;
  current: number;
  total: number;
  color: string;
}) {
  const q = questions[current];
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const isCorrect =
    submitted &&
    q.answers.some((ans) => input.trim().includes(ans) || ans.includes(input.trim()));

  const handleSubmit = () => {
    if (!input.trim()) return;
    setSubmitted(true);
  };

  const handleNext = () => {
    onNext(isCorrect);
    setInput("");
    setSubmitted(false);
    setShowHint(false);
  };

  const parts = q.question.split("【　①　】");

  return (
    <div>
      <p className="text-sm font-bold mb-4" style={{ color }}>
        問題 {current + 1} / {total}
      </p>
      <h2 className="text-xl font-bold mb-6 leading-relaxed">
        {parts[0]}
        <span
          className="inline-block px-3 py-1 rounded-lg mx-1"
          style={{ backgroundColor: "#273449", border: `2px dashed ${color}`, color }}
        >
          ①
        </span>
        {parts[1]}
      </h2>

      {!submitted && (
        <>
          {showHint && (
            <div
              className="rounded-lg px-4 py-2 mb-4 text-sm"
              style={{ backgroundColor: "#2a1e0a", color: "#fbbf24", borderLeft: "4px solid #fbbf24" }}
            >
              💡 ヒント：{q.hint}
            </div>
          )}
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              placeholder="①に入る言葉を入力…"
              className="flex-1 px-4 py-3 rounded-xl text-base"
              style={{
                backgroundColor: "#273449",
                border: `2px solid ${color}44`,
                color: "#f1f5f9",
                outline: "none",
              }}
            />
            <button onClick={handleSubmit} className="btn-primary px-6" style={{ backgroundColor: color }}>
              答える
            </button>
          </div>
          <button
            onClick={() => setShowHint(true)}
            className="text-sm underline"
            style={{ color: "#64748b" }}
          >
            ヒントを見る
          </button>
        </>
      )}

      {submitted && (
        <>
          <div
            className="rounded-xl p-4 mb-6"
            style={{
              backgroundColor: isCorrect ? "#0a2a1a" : "#2a0a0a",
              borderLeft: `4px solid ${isCorrect ? "#4ade80" : "#f87171"}`,
            }}
          >
            <p className="font-bold mb-1" style={{ color: isCorrect ? "#4ade80" : "#f87171" }}>
              {isCorrect ? "✅ 正解！" : `❌ 不正解　正解は「${q.answers[0]}」`}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
              {q.explanation}
            </p>
          </div>
          <div className="flex justify-end">
            <button onClick={handleNext} className="btn-primary">
              {current + 1 < total ? "次の問題 →" : "結果を見る"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ==========================================
// ○×クイズ
// ==========================================
function MannerQuiz({
  questions,
  onNext,
  current,
  total,
  color,
}: {
  questions: MannerQuestion[];
  onNext: (correct: boolean) => void;
  current: number;
  total: number;
  color: string;
}) {
  const q = questions[current];
  const [selected, setSelected] = useState<boolean | null>(null);
  const answered = selected !== null;

  const handleSelect = (val: boolean) => {
    if (answered) return;
    setSelected(val);
  };

  const handleNext = () => {
    onNext(selected === q.answer);
    setSelected(null);
  };

  const isCorrect = answered && selected === q.answer;

  return (
    <div>
      <p className="text-sm font-bold mb-4" style={{ color }}>
        問題 {current + 1} / {total}
      </p>
      <h2 className="text-xl font-bold mb-8 leading-relaxed">{q.question}</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { val: true, label: "○", color: "#4ade80", bg: "#0a2a1a" },
          { val: false, label: "×", color: "#f87171", bg: "#2a0a0a" },
        ].map(({ val, label, color: c, bg }) => {
          let borderColor = "#334155";
          let bgColor = "#273449";
          let textColor = "#94a3b8";

          if (answered) {
            if (val === q.answer) {
              borderColor = c;
              bgColor = bg;
              textColor = c;
            } else if (val === selected) {
              borderColor = "#f87171";
              bgColor = "#2a0a0a";
              textColor = "#f87171";
            }
          } else if (selected === val) {
            borderColor = c;
            bgColor = bg;
            textColor = c;
          }

          return (
            <button
              key={String(val)}
              onClick={() => handleSelect(val)}
              className="py-8 rounded-2xl text-6xl font-black transition-all"
              style={{
                border: `3px solid ${borderColor}`,
                backgroundColor: bgColor,
                color: textColor,
                cursor: answered ? "default" : "pointer",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          className="rounded-xl p-4 mb-6"
          style={{
            backgroundColor: isCorrect ? "#0a2a1a" : "#2a0a0a",
            borderLeft: `4px solid ${isCorrect ? "#4ade80" : "#f87171"}`,
          }}
        >
          <p className="font-bold mb-1" style={{ color: isCorrect ? "#4ade80" : "#f87171" }}>
            {isCorrect ? "✅ 正解！" : `❌ 不正解　正解は「${q.answer ? "○" : "×"}」`}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
            {q.explanation}
          </p>
        </div>
      )}

      {answered && (
        <div className="flex justify-end">
          <button onClick={handleNext} className="btn-primary">
            {current + 1 < total ? "次の問題 →" : "結果を見る"}
          </button>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 結果画面
// ==========================================
function ResultScreen({
  score,
  total,
  genre,
  color,
  onRetry,
}: {
  score: number;
  total: number;
  genre: string;
  color: string;
  onRetry: () => void;
}) {
  const rate = Math.round((score / total) * 100);
  let rank = "";
  let rankColor = "";
  let message = "";

  if (rate >= 90) {
    rank = "社会人マスター";
    rankColor = "#fbbf24";
    message = "完璧！社会人として自信を持ってOK。";
  } else if (rate >= 70) {
    rank = "社会人中級";
    rankColor = "#4ade80";
    message = "いい感じ！あと少し磨けば完璧。";
  } else if (rate >= 50) {
    rank = "社会人見習い";
    rankColor = "#38bdf8";
    message = "基礎はある。間違えた問題を復習しよう。";
  } else {
    rank = "これから学ぶ人";
    rankColor = "#94a3b8";
    message = "知らなかっただけ。今日から変わればOK！";
  }

  return (
    <div className="text-center">
      <p className="text-5xl mb-4">
        {rate >= 80 ? "🎉" : rate >= 60 ? "👍" : "💪"}
      </p>
      <h2 className="text-2xl font-black mb-2">クイズ終了！</h2>
      <p className="text-5xl font-black my-6" style={{ color }}>
        {score} <span className="text-2xl" style={{ color: "#94a3b8" }}>/ {total}</span>
      </p>

      <div
        className="inline-block px-4 py-2 rounded-full font-black text-lg mb-3"
        style={{ backgroundColor: rankColor + "22", color: rankColor, border: `2px solid ${rankColor}44` }}
      >
        {rank}
      </div>
      <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>
        {message}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button onClick={onRetry} className="btn-primary" style={{ backgroundColor: color }}>
          もう一度挑戦
        </button>
        <Link href="/quiz" className="btn-secondary">
          他のジャンルへ
        </Link>
        <Link href="/" className="btn-secondary">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}

// ==========================================
// メインクライアントコンポーネント
// ==========================================
export default function QuizClient({ genre, questions, meta }: QuizClientProps) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);

  const total = questions.length;

  const handleNext = (correct: boolean) => {
    const newScore = correct ? score + 1 : score;
    if (current + 1 >= total) {
      setScore(newScore);
      setFinished(true);
    } else {
      setScore(newScore);
      setCurrent(current + 1);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setStarted(false);
  };

  const progress = ((current + (finished ? 1 : 0)) / total) * 100;

  if (!started) {
    return (
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6"
          style={{ backgroundColor: meta.bgColor }}
        >
          {meta.icon}
        </div>
        <div
          className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-3"
          style={{ backgroundColor: meta.bgColor, color: meta.color }}
        >
          {meta.format}
        </div>
        <h1 className="text-2xl font-black mb-2">{meta.title}クイズ</h1>
        <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>
          全{total}問　解説付き
        </p>
        <button
          onClick={() => setStarted(true)}
          className="btn-primary text-lg px-10"
          style={{ backgroundColor: meta.color }}
        >
          スタート！
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* プログレスバー */}
      {!finished && (
        <div className="mb-6">
          <div className="h-2 rounded-full" style={{ backgroundColor: "#273449" }}>
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%`, backgroundColor: meta.color }}
            />
          </div>
        </div>
      )}

      {finished ? (
        <ResultScreen
          score={score}
          total={total}
          genre={genre}
          color={meta.color}
          onRetry={handleRetry}
        />
      ) : genre === "kotoba" ? (
        <KotobaQuiz
          questions={questions as KotobaQuestion[]}
          onNext={handleNext}
          current={current}
          total={total}
          color={meta.color}
        />
      ) : genre === "kyuyo" ? (
        <KyuyoQuiz
          questions={questions as KyuyoQuestion[]}
          onNext={handleNext}
          current={current}
          total={total}
          color={meta.color}
        />
      ) : (
        <MannerQuiz
          questions={questions as MannerQuestion[]}
          onNext={handleNext}
          current={current}
          total={total}
          color={meta.color}
        />
      )}
    </div>
  );
}
