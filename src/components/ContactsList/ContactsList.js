import PropTypes from 'prop-types';

import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, onDeleteContact }) => ( 
  <ul className={styles.List}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button
          className={styles.Btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>  
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
