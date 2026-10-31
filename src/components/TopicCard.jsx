import { useAppContext } from '../context/AppContext';

export default function TopicCard({ topic, onNotify }) {
  const { completedTasks, toggleTask } = useAppContext();
  const isCompleted = completedTasks.includes(topic.id);

  function handleTaskToggle() {
    const isCompleting = !isCompleted;
    toggleTask(topic.id);
    onNotify({
      type: isCompleting ? 'success' : 'info',
      title: isCompleting ? 'Tema concluído' : 'Tema reaberto',
      message: isCompleting ? 'Seu progresso foi atualizado.' : 'Você pode revisar este tema novamente.',
    });
  }

  return (
    <article className={`topic-card ${isCompleted ? 'is-completed' : ''}`}>
      <div className="topic-card-topline">
        <span className="topic-category">{topic.category}</span>
        <span className="topic-duration">{topic.duration}</span>
      </div>
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <button className="topic-action" type="button" onClick={handleTaskToggle} aria-pressed={isCompleted}>
        <span className="check-icon" aria-hidden="true">{isCompleted ? '✓' : '○'}</span>
        {isCompleted ? 'Concluído' : 'Marcar como concluído'}
      </button>
    </article>
  );
}
