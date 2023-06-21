import menu from '../assets/AddressBook/menu.png';
import entries from '../assets/AddressBook/entries.png';

function AddressBook() {
  return (
    <div className="address-book ">
      <h3 className="text-center text-transparent text-3xl bg-clip-text bg-gradient-to-br  from-fuchsia-500 to-pink-500 my-5">
        Address Book
      </h3>
      <div className="images flex gap-8 justify-center">
        <img src={menu} alt="menu" />
        <img src={entries} alt="menu" />
      </div>
    </div>
  );
}

export default AddressBook;
