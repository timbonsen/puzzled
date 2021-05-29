import { Link } from 'react-router-dom';

function LinkButton({ title, link, buttonStyle }) {
  if (buttonStyle === 'delete') {
    return (
      <Link className="deleteButton" to={link}>{title}</Link>
    );
  }
  return (
    <Link className="regularButton" to={link}>{title}</Link>
  );
}

export default LinkButton;
