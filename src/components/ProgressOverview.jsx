import ProgressBar from './ProgressBar';
import { useAppContext } from '../context/AppContext';

export default function ProgressOverview({ totalTopics }) {
  const { completedCount } = useAppContext();
  const progress = Math.round((completedCount / totalTopics) * 100);

  return (
    <>
      <ProgressBar value={progress} label="Progresso geral" />
      <div className="progress-meta">
        <span>Você está construindo consistência.</span>
        <strong>{progress}% concluído</strong>
      </div>
    </>
  );
}
