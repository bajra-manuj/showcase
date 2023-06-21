import menu from '../assets/AddressBook/menu.png';
import entries from '../assets/AddressBook/entries.png';

function AddressBook() {
  return (
    <div className="address-book">
      <img src={menu} alt="menu" />
      <img src={entries} alt="menu" />
    </div>
  );
}

export default AddressBook;
