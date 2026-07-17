import { HOSPITAL_INFO } from "../data";
import { Building2, Award, ArrowRight } from "lucide-react";

interface HospitalProfilesProps {
  onAskAboutHospital: (hospitalName: string) => void;
}

export default function HospitalProfiles({ onAskAboutHospital }: HospitalProfilesProps) {
  return (
    <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-xs space-y-6">
      <div className="max-w-xl">
        {/* Cathay General Hospital */}
        <div className="flex flex-col justify-between border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-emerald-300 hover:shadow-xs transition duration-300 bg-white">
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <h4 className="font-semibold text-sm text-slate-800 font-display">
                  {HOSPITAL_INFO.cathay.name}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                Taipei
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
              {HOSPITAL_INFO.cathay.specialty}
            </p>
            <div className="mt-4 bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-emerald-800">
                <Award className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                <span>CBME Leadership</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                {HOSPITAL_INFO.cathay.cbmContribution}
              </p>
            </div>
          </div>
          <button
            onClick={() => onAskAboutHospital(HOSPITAL_INFO.cathay.name)}
            className="mt-4 w-full flex items-center justify-between py-2 px-3 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 rounded-lg border border-slate-200 hover:border-emerald-300 transition duration-200 cursor-pointer"
            id="ask-cathay-btn"
          >
            <span>Ask Concierge about Cathay</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
