import './scss/styles.scss';
import { Schedule } from './components/schedule/schedule';

window.addEventListener('load', () => {
  const app = document.getElementById('app');
  new Schedule(app);
});
