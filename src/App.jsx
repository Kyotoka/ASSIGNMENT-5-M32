import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TechCard from './components/TechCard';
import StackSidebar from './components/StackSidebar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching json:', err);
        setIsLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const isExist = selectedStack.some((item) => item.id === tech.id);
    if (isExist) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemoveItem = (id) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info('Technology removed from stack');
  };

  const handleClearAll = () => {
    setSelectedStack([]);
    toast.error('Cleared all technologies');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar />
        <ToastContainer position="bottom-right" autoClose={2000} />
        
        {/* Exact 72.5px side cushioning matching Figma */}
        <main className="w-full px-[72.5px] py-10 space-y-16">
          <HeroBanner />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Explore the <span className="text-pink-500">Technologies</span>
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Pick one technology per category to build your ideal stack.
                </p>
              </div>
              
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-violet-600"></div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {technologies.map((tech) => (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      isAdded={selectedStack.some((item) => item.id === tech.id)}
                      onAdd={handleAddToStack}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <StackSidebar
                selectedStack={selectedStack}
                onRemoveItem={handleRemoveItem}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}