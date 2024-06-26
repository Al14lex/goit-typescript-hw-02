import toast, { Toaster } from 'react-hot-toast';
export default function SearchBar({ onSubmit }) {

  const notify = () => toast.error("Oops. You forgot to fill in the inbox");

	const handleSubmit = (evt, ) => {
        evt.preventDefault();
        
    const form = evt.target;
        const input = form.elements.input.value;
        console.log(input);
        
    if (form.elements.input.value.trim() === "") {
      notify();    
			return;
		}
    onSubmit(input);
    form.reset();
  };

  
  return (
  <>
      <header>
      <form onSubmit={handleSubmit}>
            <input type="text"
                name="input"
                placeholder="Search images and photos" />
      <button type="submit">Search</button>
      </form>   
    </header>
    <Toaster/>
  </>
    
  );
}
