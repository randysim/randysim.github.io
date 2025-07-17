'use client';

import { useState, useEffect, useRef } from 'react';

export default function EyeTimerPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [breakTimeLeft, setBreakTimeLeft] = useState(20); // 20 seconds
  const [cycles, setCycles] = useState(0);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element for notifications
  useEffect(() => {
    audioRef.current = new Audio('/notification.mp3'); // You'll need to add this sound file
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playNotification = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(20 * 60);
    setBreakTimeLeft(20);
    setCycles(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      if (isBreak) {
        setBreakTimeLeft((prev) => {
          if (prev <= 1) {
            setIsBreak(false);
            setTimeLeft(20 * 60);
            setCycles((c) => c + 1);
            playNotification();
            return 20;
          }
          return prev - 1;
        });
      } else {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsBreak(true);
            setBreakTimeLeft(20);
            playNotification();
            return 20 * 60;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isBreak]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    if (isBreak) {
      return ((20 - breakTimeLeft) / 20) * 100;
    }
    return ((20 * 60 - timeLeft) / (20 * 60)) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2 shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          20 Eye Timer
        </h1>
        
        <div className="text-center mb-8">
          <div className={`text-6xl font-bold mb-4 ${
            isBreak ? 'text-orange-600' : 'text-blue-600'
          }`}>
            {isBreak ? formatTime(breakTimeLeft) : formatTime(timeLeft)}
          </div>
          
          <div className="text-lg font-medium text-gray-600 mb-2">
            {isBreak ? 'Break Time - Look Away!' : 'Work Time - Focus'}
          </div>
          
          <div className="text-sm text-gray-500">
            Cycle {cycles + 1}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-1000 ${
                isBreak ? 'bg-orange-500' : 'bg-blue-500'
              }`}
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 justify-center">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Start
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Pause
            </button>
          )}
          
          <button
            onClick={resetTimer}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">How it works:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Work for 20 minutes</li>
            <li>• Take a 20-second break</li>
            <li>• Look at something 20 feet away</li>
            <li>• Repeat the cycle</li>
          </ul>
        </div>

        {/* Status */}
        <div className="mt-4 text-center">
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
            isBreak 
              ? 'bg-orange-100 text-orange-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {isBreak ? '🔄 Break Time' : '💻 Work Time'}
          </div>
        </div>
      </div>
    </div>
  );
}
