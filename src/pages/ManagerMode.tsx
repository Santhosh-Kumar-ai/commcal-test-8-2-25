
import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CSMData } from "@/types/manager";
import { FileOperations } from "@/components/manager/FileOperations";
import { CSMTable } from "@/components/manager/CSMTable";
import { CalculationControls } from "@/components/manager/CalculationControls";
import { InfoSection } from "@/components/manager/InfoSection";

const ManagerMode = () => {
  const [csms, setCsms] = useState<CSMData[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  
  const scrollToTable = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#9b87f5]/5">
      <Header />
      
      <div className="py-[48px]">
        <div className="max-w-6xl mx-auto p-6 space-y-12">
          <div className="flex justify-between items-center">
            <Link to="/features" className="text-[#7E69AB] hover:text-[#6B4E9B] transition-colors">
              ← Back to features
            </Link>
            <span className="px-4 py-1 text-xs font-medium bg-[#9b87f5]/10 text-[#9b87f5] rounded-full">
              Beta Feature
            </span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-[#1A1F2C]">
              Manager Mode
            </h1>
            <p className="text-[#7E69AB] max-w-2xl mx-auto">
              Analyze retention metrics for multiple CSMs at once. Download the template, fill in the data, and upload for bulk calculations.
            </p>
          </motion.div>
          
          {/* Step 1 & 2: File Operations */}
          <FileOperations 
            setCsms={setCsms}
            setIsCalculated={setIsCalculated}
            scrollToTable={scrollToTable}
          />
          
          {csms.length > 0 && (
            <motion.div
              ref={tableRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Calculation Controls */}
              <CalculationControls 
                csms={csms}
                isCalculated={isCalculated}
                setIsCalculated={setIsCalculated}
                setCsms={setCsms}
              />
              
              {/* CSM Data Table */}
              <CSMTable 
                csms={csms} 
                isCalculated={isCalculated} 
              />
              
              {/* Information and Disclaimer */}
              {isCalculated && (
                <InfoSection />
              )}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerMode;
