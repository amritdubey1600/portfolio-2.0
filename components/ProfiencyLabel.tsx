import { Star, Trophy, Award, Target, Zap } from 'lucide-react';

export type ProficiencyLevel = 1 | 2 | 3 | 4 | 5;

interface ProficiencyLabelProps {
  level: ProficiencyLevel;
}

export const ProficiencyLabel: React.FC<ProficiencyLabelProps> = ({ level }) => {
  const config = {
    1: { label: 'Beginner', color: 'text-red-400', bg: 'bg-red-500/15', border: 'border-red-500/40', icon: Target },
    2: { label: 'Novice', color: 'text-orange-400', bg: 'bg-orange-500/15', border: 'border-orange-500/40', icon: Zap },
    3: { label: 'Intermediate', color: 'text-yellow-400', bg: 'bg-yellow-500/15', border: 'border-yellow-500/40', icon: Star },
    4: { label: 'Advanced', color: 'text-blue-400', bg: 'bg-blue-500/15', border: 'border-blue-500/40', icon: Award },
    5: { label: 'Expert', color: 'text-green-400', bg: 'bg-green-500/15', border: 'border-green-500/40', icon: Trophy }
  };

  const { label, color, bg, border, icon: Icon } = config[level];

  return (
    <div className={`inline-flex items-center space-x-1.5 px-2 py-1 rounded-full ${bg} ${border} border`}>
      <Icon size={11} className={color} />
      <span className={`text-xs font-medium ${color} antialiased`}>
        {label}
      </span>
    </div>
  );
};