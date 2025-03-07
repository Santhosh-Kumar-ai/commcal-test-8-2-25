
import { useState } from "react";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Upload, FileSpreadsheet, UserRound, Calculator, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { formatCurrency, formatPercentage } from "@/utils/formatters";

interface CSMData {
  id: string;
  name: string;
  bookStartARR: number;
  minRetentionTarget: number;
  maxRetentionTarget: number;
  maxQuarterlyChurnAllowed?: number;
  quarterlyChurnTarget?: number;
}

const ManagerMode = () => {
  const [csms, setCsms] = useState<CSMData[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);
  
  const handleFileDownload = () => {
    // Create CSV template
    const csvContent = "Rep Name,Book Start ARR,Minimum Retention Target,Maximum Retention Target\nJohn Doe,500000,0.75,0.85\nJane Smith,750000,0.80,0.90";
    
    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'csm_retention_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Template downloaded successfully");
  };
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split('\n');
        
        // Skip header line
        const dataLines = lines.slice(1);
        
        const parsedData: CSMData[] = dataLines
          .filter(line => line.trim() !== '')
          .map((line, index) => {
            const [name, bookStartARR, minRetentionTarget, maxRetentionTarget] = line.split(',');
            
            // Validate data
            if (!name || !bookStartARR || !minRetentionTarget || !maxRetentionTarget) {
              throw new Error(`Row ${index + 2} has missing data`);
            }
            
            const bookARR = parseFloat(bookStartARR);
            const minRetention = parseFloat(minRetentionTarget);
            const maxRetention = parseFloat(maxRetentionTarget);
            
            if (isNaN(bookARR) || isNaN(minRetention) || isNaN(maxRetention)) {
              throw new Error(`Row ${index + 2} has invalid numeric data`);
            }
            
            if (minRetention >= maxRetention) {
              throw new Error(`Row ${index + 2}: Min retention must be less than max retention`);
            }
            
            return {
              id: `csm-${index}`,
              name: name.trim(),
              bookStartARR: bookARR,
              minRetentionTarget: minRetention,
              maxRetentionTarget: maxRetention
            };
          });
        
        setCsms(parsedData);
        setIsCalculated(false);
        toast.success(`Uploaded data for ${parsedData.length} CSMs`);
        
        // Reset the input
        event.target.value = '';
      } catch (error) {
        toast.error(`Error parsing file: ${error instanceof Error ? error.message : 'Unknown error'}`);
        // Reset the input
        event.target.value = '';
      }
    };
    
    reader.readAsText(file);
  };
  
  const calculateAllMetrics = () => {
    const calculatedCsms = csms.map(csm => {
      // Calculate maximum quarterly churn allowed for minimum retention target
      const maxAllowedChurn = csm.bookStartARR * (1 - Math.pow(csm.minRetentionTarget, 1 / 12));
      
      // Calculate quarterly churn target for maximum retention target
      const churnTarget = csm.bookStartARR * (1 - Math.pow(csm.maxRetentionTarget, 1 / 12));
      
      return {
        ...csm,
        maxQuarterlyChurnAllowed: maxAllowedChurn,
        quarterlyChurnTarget: churnTarget
      };
    });
    
    setCsms(calculatedCsms);
    setIsCalculated(true);
    toast.success("Calculations completed for all CSMs");
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
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center text-[#9b87f5]">
                  <Download className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Step 1: Download Template</h2>
                <p className="text-gray-600">Download our CSV template to input your CSMs'Name, Book Start ARR, and Retention Targets. </p>
                <Button onClick={handleFileDownload} className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5]">
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Download CSV Template
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#9b87f5]/10 flex items-center justify-center text-[#9b87f5]">
                  <Upload className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Step 2: Upload Your Data</h2>
                <p className="text-gray-600">Fill in the template with your CSMs' information and upload it here. Make sure all fields are correctly filled.</p>
                <div className="relative">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <Button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5]">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload CSV File
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {csms.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  <UserRound className="w-6 h-6 text-[#9b87f5]" /> 
                  CSM Data ({csms.length})
                </h2>
                <Button 
                  onClick={calculateAllMetrics} 
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5] text-white"
                  disabled={isCalculated}
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  {isCalculated ? "Calculations Complete" : "Calculate Metrics"}
                </Button>
              </div>
              
              <div className="rounded-xl border overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-[#9b87f5]/5">
                      <TableRow>
                        <TableHead>Rep Name</TableHead>
                        <TableHead className="text-right">Book Start ARR</TableHead>
                        <TableHead className="text-right">Min Retention</TableHead>
                        <TableHead className="text-right">Max Retention</TableHead>
                        {isCalculated && (
                          <>
                            <TableHead className="text-right">Max Quarterly Churn</TableHead>
                            <TableHead className="text-right">Quarterly Churn Target</TableHead>
                          </>
                        )}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {csms.map((csm) => (
                        <TableRow key={csm.id}>
                          <TableCell className="font-medium">{csm.name}</TableCell>
                          <TableCell className="text-right">{formatCurrency(csm.bookStartARR)}</TableCell>
                          <TableCell className="text-right">{formatPercentage(csm.minRetentionTarget)}</TableCell>
                          <TableCell className="text-right">{formatPercentage(csm.maxRetentionTarget)}</TableCell>
                          {isCalculated && (
                            <>
                              <TableCell className="text-right">{formatCurrency(csm.maxQuarterlyChurnAllowed!)}</TableCell>
                              <TableCell className="text-right">{formatCurrency(csm.quarterlyChurnTarget!)}</TableCell>
                            </>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
              
              {isCalculated && (
                <div className="rounded-lg bg-[#9b87f5]/10 p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-[#7E69AB]">
                    <p className="font-medium text-[#6B4E9B]">Understanding These Metrics:</p>
                    <p><strong>Max Quarterly Churn:</strong> The maximum amount of ARR that can churn in a quarter while still achieving the minimum retention target.</p>
                    <p><strong>Quarterly Churn Target:</strong> The target amount of ARR that should churn in a quarter to achieve the maximum retention target.</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
          
          <div className="flex justify-center pt-6">
            <Link 
              to="/retention-calculator" 
              className="text-[#7E69AB] hover:text-[#6B4E9B] transition-colors"
            >
              Go to Individual Retention Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerMode;
