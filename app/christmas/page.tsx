"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import confetti from "canvas-confetti";

// --- Data & Content ---
const TECH_JOKES = [
    "Why do programmers confuse Halloween and Christmas? Because OCT 31 == DEC 25.",
    "A SQL query walks into a bar, walks up to two tables and asks: Can I join you?",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "There are 10 types of people: those who understand binary, and those who don't.",
    "My code doesn't function, I usually have to explain it."
];

const COZY_QUOTES = [
    "The best way to spread Christmas cheer is singing loud for all to hear.",
    "Christmas isn't a season. It's a feeling.",
    "Maybe Christmas, he thought, doesn't come from a store. Maybe Christmas... perhaps... means a little bit more!",
    "It’s not how much we give but how much love we put into giving.",
    "Peace on earth will come to stay, when we live Christmas every day."
];

const SPACE_FACTS = [
    "One day on Venus is longer than one year on Venus.",
    "There are more trees on Earth than stars in the Milky Way.",
    "The sunset on Mars appears blue.",
    "Neutron stars can spin at a rate of 600 rotations per second.",
    "Space is completely silent."
];

// --- Theme Configurations ---
type ThemeKey = "cyber" | "cozy" | "party" | "minimal" | "galactic";

const themes = {
    cyber: { icon: "🤖", name: "Cyber", color: "text-green-500", bg: "bg-black" },
    cozy: { icon: "🔥", name: "Cozy", color: "text-yellow-500", bg: "bg-[#2D0A0A]" },
    party: { icon: "🎉", name: "Party", color: "text-pink-500", bg: "bg-purple-900" },
    minimal: { icon: "⚪", name: "Minimal", color: "text-gray-800", bg: "bg-gray-100" },
    galactic: { icon: "🚀", name: "Galactic", color: "text-blue-300", bg: "bg-[#0B0B2A]" },
};

// --- Sub-Components ---

const CyberLayout = () => {
    const [joke, setJoke] = useState(TECH_JOKES[0]);

    return (
        <div className="relative z-10 font-mono text-center max-w-4xl px-4">
            <h1 className="text-6xl md:text-8xl font-black text-green-500 mb-6 glitch-title">MISSION: XMAS</h1>
            <div className="border border-green-500/30 bg-black/50 p-6 md:p-10 mb-8 backdrop-blur-md">
                <div className="flex justify-between text-xs text-green-700 mb-4 border-b border-green-900 pb-2">
                    <span>SYS_UPTIME: 365 DAYS</span>
                    <span>ERRORS: 0</span>
                </div>
                <p className="text-xl md:text-2xl text-green-400 mb-6">
                    &quot;Administration, OPS, Devs: Vital systems are stable. Your collective output exceeded all parameters.&quot;
                </p>
                <div className="text-left text-sm text-gray-500 font-mono space-y-2">
                    <p>{`> INIT_PROTOCOL: REST_AND_RECHARGE`}</p>
                    <p>{`> DEPLOY_HAPPINESS: TRUE`}</p>
                </div>
            </div>

            <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setJoke(TECH_JOKES[Math.floor(Math.random() * TECH_JOKES.length)])}
                className="cursor-pointer inline-block bg-green-900/20 border border-green-500/50 px-6 py-4 rounded hover:bg-green-900/40 transition-colors"
            >
                <div className="text-xs text-green-600 mb-1 uppercase tracking-widest">Random_Joke_Gen</div>
                <p className="text-green-300 font-bold">&quot;{joke}&quot;</p>
                <div className="text-[10px] text-green-700 mt-2 text-right">Click to re-roll</div>
            </motion.div>

            <style jsx>{`
                .glitch-title {
                    text-shadow: 2px 2px 0px #ff0000, -2px -2px 0px #00ff00;
                    animation: glitch 2s infinite;
                }
                @keyframes glitch {
                    0% { text-shadow: 2px 2px 0px #ff0000, -2px -2px 0px #00ff00; }
                    20% { text-shadow: -2px 2px 0px #ff0000, 2px -2px 0px #00ff00; }
                    40% { text-shadow: 2px -2px 0px #ff0000, -2px 2px 0px #00ff00; }
                    60% { text-shadow: -2px -2px 0px #ff0000, 2px 2px 0px #00ff00; }
                    80% { text-shadow: 2px 2px 0px #ff0000, -2px -2px 0px #00ff00; }
                    100% { text-shadow: 2px 2px 0px #ff0000, -2px -2px 0px #00ff00; }
                }
            `}</style>
        </div>
    );
};

const PLAYLIST = [
    { title: "Jingle Bells", src: "/audio/jingle-bells.mp3" },
    { title: "Silent Night", src: "/audio/silent-night.mp3" },
    { title: "Deck the Halls", src: "/audio/deck-the-halls.mp3" },
    { title: "We Wish You a Merry Christmas", src: "/audio/we-wish-you-a-merry-christmas.mp3" },
    { title: "O Holy Night", src: "/audio/o-holy-night.mp3" }
];

const CozyLayout = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    // Format time helpers
    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const song = PLAYLIST[currentSongIndex];
        const newAudio = new Audio(song.src);
        // newAudio.loop = true; // Loop playlist instead of single song

        const handleReady = () => {
            console.log("Audio ready:", song.title);
            setDuration(newAudio.duration);
            if (isPlaying) {
                newAudio.play().catch(e => console.error("Playback failed:", e));
            }
        };

        const handleTimeUpdate = () => {
            setProgress(newAudio.currentTime);
        };

        const handleEnded = () => {
            nextSong(); // Auto-advance
        };

        const handleError = (e: Event) => {
            if (newAudio.src === "" || newAudio.src.endsWith("/")) return;
            console.error("Audio error:", newAudio.error, e);
        };

        newAudio.addEventListener('canplaythrough', handleReady);
        newAudio.addEventListener('timeupdate', handleTimeUpdate);
        newAudio.addEventListener('ended', handleEnded);
        newAudio.addEventListener('error', handleError);

        setAudio(newAudio);

        return () => {
            newAudio.removeEventListener('canplaythrough', handleReady);
            newAudio.removeEventListener('timeupdate', handleTimeUpdate);
            newAudio.removeEventListener('ended', handleEnded);
            newAudio.removeEventListener('error', handleError);
            newAudio.pause();
            newAudio.src = "";
        };
    }, [currentSongIndex]); // Re-run when song changes

    // Watch isPlaying to handle play/pause on the current audio instance
    useEffect(() => {
        if (!audio) return;
        if (isPlaying) {
            audio.play().catch(e => console.error("Playback failed:", e));
        } else {
            audio.pause();
        }
    }, [isPlaying, audio]);

    const toggleMusic = () => setIsPlaying(!isPlaying);

    const nextSong = () => {
        setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
        setIsPlaying(true); // Auto-play next
    };

    const prevSong = () => {
        setCurrentSongIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
        setIsPlaying(true);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audio) return;
        const time = Number(e.target.value);
        audio.currentTime = time;
        setProgress(time);
    };

    return (
        <div className="relative z-10 font-serif text-center max-w-2xl px-4 md:px-6">
            <div className="bg-[#4a0e0e]/80 border-2 border-[#FFD700]/30 p-6 md:p-10 rounded-[2rem] shadow-2xl backdrop-blur-sm relative overflow-hidden transition-all">
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 text-2xl md:text-4xl text-[#FFD700]/20">❄️</div>
                <div className="absolute top-4 right-4 text-2xl md:text-4xl text-[#FFD700]/20">❄️</div>
                <div className="absolute bottom-4 left-4 text-2xl md:text-4xl text-[#FFD700]/20">❄️</div>
                <div className="absolute bottom-4 right-4 text-2xl md:text-4xl text-[#FFD700]/20">❄️</div>

                <h1 className="text-4xl md:text-6xl text-[#FFD700] mb-4 font-medium italic tracking-tight">Warm Wishes</h1>

                <p className="text-lg md:text-xl text-red-100 leading-relaxed mb-6">
                    To the incredible team that keeps the fires burning: Thank you.
                </p>

                <div className="text-center mb-8">
                    <div className="inline-block py-2 px-6 border-t border-b border-[#FFD700]/30">
                        <p className="text-[#FFD700] text-sm md:text-base italic">&quot;{COZY_QUOTES[0]}&quot;</p>
                    </div>
                </div>

                {/* Audio Player UI */}
                <div className="bg-[#2D0A0A]/50 rounded-xl p-4 border border-[#FFD700]/20">
                    <div className="text-[#FFD700] text-sm mb-2 font-sans tracking-widest uppercase opacity-80">
                        Now Playing
                    </div>
                    <div className="text-xl text-white font-medium mb-4">
                        {PLAYLIST[currentSongIndex].title}
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center gap-3 text-xs text-[#FFD700]/70 font-sans mb-4">
                        <span>{formatTime(progress)}</span>
                        <input
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={progress}
                            onChange={handleSeek}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[#FFD700] [&::-webkit-slider-thumb]:rounded-full"
                        />
                        <span>{formatTime(duration)}</span>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center items-center gap-6">
                        <button onClick={prevSong} className="text-2xl hover:scale-110 transition text-[#FFD700]">
                            ⏮
                        </button>
                        <button
                            onClick={toggleMusic}
                            className="w-12 h-12 rounded-full bg-[#FFD700] text-[#2D0A0A] flex items-center justify-center hover:bg-white transition-all shadow-lg hover:shadow-[#FFD700]/50"
                        >
                            <span className="text-xl ml-0.5">{isPlaying ? '⏸' : '▶'}</span>
                        </button>
                        <button onClick={nextSong} className="text-2xl hover:scale-110 transition text-[#FFD700]">
                            ⏭
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="w-12 h-12 relative">
                        <div className="absolute bottom-0 w-full h-full bg-orange-500 rounded-full mix-blend-screen filter blur-md animate-pulse"></div>
                        <div className="absolute bottom-0 left-2 w-8 h-10 bg-yellow-400 rounded-full mix-blend-screen filter blur-lg animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PartyLayout = () => {
    const [score, setScore] = useState(0);
    const [scale, setScale] = useState(1);

    const pop = () => {
        setScore(s => s + 1);
        setScale(1.5);
        setTimeout(() => setScale(1), 100);
        confetti({
            particleCount: 20,
            spread: 60,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: ['#FF00FF', '#00FFFF', '#FFFF00']
        });
    };

    return (
        <div className="relative z-10 font-display text-center max-w-4xl px-4 flex flex-col items-center">
            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-2 transform -rotate-6">
                LETS GO!
            </h1>
            <h2 className="text-3xl font-bold text-white mb-8">2026 IS OUR YEAR</h2>

            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 mb-12 max-w-lg w-full">
                <p className="text-xl text-pink-200 mb-4">
                    &quot;Work hard, party harder. You crushed it this year.&quot;
                </p>
            </div>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: scale }}
                onClick={pop}
                className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.5)] border-4 border-white select-none"
            >
                <span className="text-6xl mb-2">🎉</span>
                <span className="font-bold text-white uppercase tracking-wider text-sm">Hype Meter</span>
                <span className="text-4xl font-black text-white">{score}</span>
            </motion.button>

            <p className="text-white/50 mt-4 text-sm animate-pulse">Keep clicking!</p>
        </div>
    );
};

const MinimalLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`relative z-10 font-sans transition-colors duration-700 ease-in-out max-w-5xl px-8 w-full ${isDarkMode ? "text-white" : "text-gray-900"}`}>

            {/* Blueprint Grid Background (Visible in Dark Mode) */}
            {/* Blueprint Grid Background (Visible in Dark Mode) - Fixed to cover viewport */}
            <div
                className={`fixed inset-0 pointer-events-none transition-opacity duration-700 z-[1] ${isDarkMode ? "opacity-100" : "opacity-0"}`}
                style={{
                    backgroundColor: isDarkMode ? '#000' : 'transparent',
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Dark Mode Toggle - Fixed to Top Right Viewport */}
            <div className="fixed top-6 right-6 z-[200]">
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`w-12 h-6 rounded-full p-1 transition-colors duration-500 ease-in-out flex items-center shadow-lg border ${isDarkMode ? "bg-white border-white" : "bg-gray-200 border-gray-300"}`}
                >
                    <motion.div
                        layout
                        className={`w-4 h-4 rounded-full shadow-sm ${isDarkMode ? "bg-black" : "bg-white"}`}
                    />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Decorative technical lines for "Blueprint" feel */}
                {isDarkMode && (
                    <div className="absolute -left-8 top-0 bottom-0 w-px bg-white/20 hidden md:block">
                        <div className="absolute top-0 -left-1 text-[10px] bg-black px-1">HASH: 0x882</div>
                        <div className="absolute bottom-0 -left-1 text-[10px] bg-black px-1">END_BLOCK</div>
                    </div>
                )}

                <div className="text-left">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 transition-colors duration-700">
                        Efficient.<br />Impactful.
                    </h1>
                    <p className={`text-xl max-w-md transition-colors duration-700 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        To the team that simplifies complexity: Your work speaks for itself. Clean code, clear operations, executed perfectly.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className={`p-8 rounded-none border transition-colors duration-700 ${isDarkMode ? "bg-black border-white/30" : "bg-white border-gray-200 shadow-sm"}`}>
                        <div className="text-xs uppercase tracking-widest mb-2 opacity-50">Tasks Completed</div>
                        <div className="text-4xl font-light">∞</div>
                    </div>
                    <div className={`p-8 rounded-none border transition-colors duration-700 ${isDarkMode ? "bg-black border-white/30" : "bg-white border-gray-200 shadow-sm"}`}>
                        <div className="text-xs uppercase tracking-widest mb-2 opacity-50">Effort Level</div>
                        <div className="text-4xl font-light">110%</div>
                    </div>
                    <div className={`p-8 rounded-none col-span-2 transition-colors duration-700 ${isDarkMode ? "bg-white text-black underline decoration-1 underline-offset-4" : "bg-black text-white"}`}>
                        <div className="text-xs uppercase tracking-widest mb-2 opacity-50">Notice</div>
                        <div className="text-xl font-medium">Have a restful break.</div>
                    </div>
                </div>
            </div>

            {/* Global Dark Mode Override for Parent Container */}
            {isDarkMode && (
                <style jsx global>{`
                    body { background: #000 !important; }
                `}</style>
            )}
        </div>
    );
};

const GalacticLayout = () => {
    const [fact, setFact] = useState(SPACE_FACTS[0]);

    return (
        <div className="relative z-10 font-sans tracking-widest text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-8xl font-thin text-white mb-2 uppercase">Horizons</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12"></div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="space-y-8"
            >
                <p className="text-2xl text-blue-200 font-light max-w-2xl mx-auto leading-relaxed">
                    &quot;We don&apos;t just build products; we explore the unknown. To the visionaries on our team: keep aiming for the stars.&quot;
                </p>

                <div className="mt-16 relative group cursor-help inline-block">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-[#0B0B2A] border border-blue-500/30 px-8 py-6 rounded-full flex items-center gap-4">
                        <span className="text-2xl">🪐</span>
                        <div className="text-left">
                            <div className="text-[10px] text-blue-400 uppercase">Cosmic Fact</div>
                            <div className="text-white text-sm md:text-base w-64 md:w-80">{fact}</div>
                        </div>
                        <button
                            onClick={() => setFact(SPACE_FACTS[Math.floor(Math.random() * SPACE_FACTS.length)])}
                            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition"
                        >
                            ↻
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const MobileThemeDrawer = ({ currentTheme, onSelect }: { currentTheme: ThemeKey, onSelect: (t: ThemeKey) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 border border-white/20"
            >
                <span>🎨</span> Themes
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-white/10 rounded-t-3xl z-[160] p-6 pb-12"
                        >
                            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-8" />

                            <h3 className="text-white font-bold text-xl mb-4 px-2">Select Theme</h3>

                            <div className="grid grid-cols-1 gap-2">
                                {(Object.keys(themes) as ThemeKey[]).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            onSelect(key);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-4 transition-all ${currentTheme === key
                                            ? 'bg-white text-black font-bold'
                                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                                            }`}
                                    >
                                        <span className="text-2xl">{themes[key].icon}</span>
                                        <span className="uppercase tracking-wide">{themes[key].name}</span>
                                        {currentTheme === key && <span className="ml-auto text-green-600">✓</span>}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

// --- Main Page Component ---

function ChristmasContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const isTeam = type === "team";
    const [mounted, setMounted] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<ThemeKey>("cyber");

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (isTeam) {
        const theme = themes[currentTheme];

        return (
            <>
                <motion.div
                    key={currentTheme}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`min-h-screen ${theme.bg} ${theme.color} relative overflow-hidden flex items-center justify-center transition-colors duration-1000`}
                >
                    {/* Backgrounds */}
                    {currentTheme === 'cyber' && (
                        <>
                            <div className="absolute inset-0 bg-[url('/matrix-bg.png')] opacity-10" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent pointer-events-none" />
                        </>
                    )}
                    {currentTheme === 'cozy' && <div className="absolute inset-0 bg-gradient-to-b from-[#4a0e0e] to-[#1a0505]" />}
                    {currentTheme === 'party' && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black" />
                            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.2),transparent_50%)]" />
                        </>
                    )}
                    {currentTheme === 'minimal' && <div className="absolute inset-0 bg-gray-50" />}
                    {currentTheme === 'galactic' && (
                        <>
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-black" />
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                        </>
                    )}

                    {/* Layouts */}
                    <div className="w-full flex justify-center pb-32">
                        {currentTheme === 'cyber' && <CyberLayout />}
                        {currentTheme === 'cozy' && <CozyLayout />}
                        {currentTheme === 'party' && <PartyLayout />}
                        {currentTheme === 'minimal' && <MinimalLayout />}
                        {currentTheme === 'galactic' && <GalacticLayout />}
                    </div>

                </motion.div>

                {/* Responsive Theme Switcher */}
                <div className="fixed bottom-8 left-0 right-0 z-[100] px-4 flex justify-center pointer-events-none">

                    {/* Desktop: Full Width Bar */}
                    <div className="hidden md:flex pointer-events-auto bg-black/60 backdrop-blur-md rounded-full border border-white/20 shadow-2xl p-2 gap-2">
                        {(Object.keys(themes) as ThemeKey[]).map((key) => (
                            <button
                                key={key}
                                onClick={() => setCurrentTheme(key)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${currentTheme === key
                                    ? 'bg-white text-black scale-105 shadow-lg'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <span className="text-xl">{themes[key].icon}</span>
                                <span className="uppercase tracking-wide">{themes[key].name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile: FAB & Drawer */}
                    <div className="md:hidden pointer-events-auto">
                        <MobileThemeDrawer currentTheme={currentTheme} onSelect={setCurrentTheme} />
                    </div>
                </div>
            </>
        );
    }

    // Visitor View
    return (
        <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black" />
            <div className="relative z-10 max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block font-display text-2xl text-gold-400 mb-4 tracking-widest text-[#FFD700]">SEASON&apos;S GREETINGS</span>
                    <h1 className="font-display text-6xl md:text-9xl text-white mb-8 leading-none">
                        Thank You
                        <span className="block text-4xl md:text-6xl mt-2 font-light italic text-gray-400 font-serif">for believing in us</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
                >
                    To our visitors, partners, and friends—your curiosity drives our innovation.
                    May your holidays be filled with peace, joy, and meaningful connections.
                </motion.p>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link href="/" className="inline-block px-10 py-4 bg-white text-black font-display font-medium rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg shadow-white/10">
                        Continue Exploring APPBAI
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default function ChristmasPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading Holiday Spirit...</div>}>
            <ChristmasContent />
        </Suspense>
    );
}
