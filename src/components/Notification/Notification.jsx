import css from './Notification.module.css'

export const Notification = ({ message = '' }) => {
  return <>{message.length > 0 && <p className={css.message}>{message}</p>}</>;
};
