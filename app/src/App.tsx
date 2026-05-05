import { useState, useRef, useEffect } from "react";
import { stories, type Story } from "./data/stories";
import { BookOpen, Play, Pause, ChevronLeft, Volume2, Clock, Users, Tag } from "lucide-react";

type Page = "home" | "story";

function App() {
  const [page, setPage] = useState<Page>("home");
  const [currentStory, setCurrentStory] = useState<Story | null>(null);

  const openStory = (story: Story) => {
    setCurrentStory(story);
    setPage("story");
  };

  const goHome = () => {
    setPage("home");
    setCurrentStory(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {page === "home" && <HomePage onOpenStory={openStory} />}
      {page === "story" && currentStory && <StoryPage story={currentStory} onBack={goHome} />}
    </div>
  );
}

// ==================== 首页 ====================
function HomePage({ onOpenStory }: { onOpenStory: (s: Story) => void }) {
  return (
    <div className="min-h-screen">
      {/* 头部 */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">睡前故事屋</h1>
            <p className="text-xs text-slate-400">精选冒险故事 · 语音朗读 · 精美配图</p>
          </div>
        </div>
      </header>

      {/* 故事列表 */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onOpenStory(story)}
              className="group text-left bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-slate-800">
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {story.title}
                </h2>
                <p className="text-sm text-slate-400 line-clamp-2 mb-3">{story.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {story.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 text-xs text-slate-300">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {story.characters.join("、")}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {stories.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>故事正在创作中，敬请期待...</p>
          </div>
        )}
      </main>
    </div>
  );
}

// ==================== 故事详情页 ====================
function StoryPage({ story, onBack }: { story: Story; onBack: () => void }) {
  const [storyText, setStoryText] = useState<string>("加载中...");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 加载故事文本
  useEffect(() => {
    fetch(story.text)
      .then((r) => r.text())
      .then((text) => {
        // 移除markdown标题标记
        const clean = text.replace(/^# .+\n+/, "").trim();
        setStoryText(clean);
      })
      .catch(() => setStoryText("故事加载失败，请刷新重试。"));
  }, [story.text]);

  // 音频事件
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const formatTime = (t: number) => {
    if (!isFinite(t)) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // 将文本按段落渲染
  const paragraphs = storyText.split("\n\n").filter((p) => p.trim());

  return (
    <div className="min-h-screen">
      {/* 顶部导航 */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold truncate">{story.title}</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* 配图 */}
        <div className="rounded-2xl overflow-hidden bg-slate-800 mb-6">
          <img
            src={story.cover}
            alt={story.title}
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* 音频播放器 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 mb-6">
          <audio ref={audioRef} src={story.voice} preload="metadata" />
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center transition-colors flex-shrink-0"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white" />
              ) : (
                <Play className="w-5 h-5 text-white ml-0.5" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <Volume2 className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-300 truncate">语音朗读</span>
                <span className="text-xs text-slate-500 ml-auto flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={seek}
                className="w-full h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer accent-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* 角色标签 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {story.characters.map((char) => (
            <span
              key={char}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-950 border border-indigo-800 text-sm text-indigo-300"
            >
              <Users className="w-3.5 h-3.5" />
              {char}
            </span>
          ))}
        </div>

        {/* 故事文本 */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-6">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            故事全文
          </h2>
          <div className="space-y-4 leading-relaxed text-slate-300">
            {paragraphs.map((para, i) => {
              // 对话段落
              if (para.startsWith('"') || para.startsWith("\"") || para.startsWith("「")) {
                return (
                  <p key={i} className="text-indigo-300 pl-4 border-l-2 border-indigo-500/30 italic">
                    {para}
                  </p>
                );
              }
              // 分隔符
              if (para.trim() === "---") {
                return <hr key={i} className="border-slate-700 my-6" />;
              }
              // 粗体标题（原文中的标题行）
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3 key={i} className="text-lg font-bold text-white mt-6 mb-2">
                    {para.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
