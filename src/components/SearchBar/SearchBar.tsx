import toast, { Toaster } from 'react-hot-toast';
import { FormEvent } from 'react';

interface PropsSearchBar{
  onSubmit: (input: string) => void;
}

export default function SearchBar({ onSubmit }: PropsSearchBar) {
  const notify = () => toast.error("Oops. You forgot to fill in the inbox");

	const handleSubmit = (evt: FormEvent<HTMLFormElement> ) => {
    evt.preventDefault(); 
    
    const form = evt.currentTarget;
    const input = (form.elements.namedItem("input") as HTMLInputElement).value;
    
    if (input.trim() === "") {
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
