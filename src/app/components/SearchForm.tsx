import React from 'react';
import Form from 'next/form';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';
type SearchFormProps = {
    query?:string;
}
const SearchForm = ({query} : SearchFormProps) => {
   
  return (
    <Form action='/' scroll={false} className="search-form">
      {/* On submission, the input value will be appended to
        the URL, e.g. /search?query=abc */}
      <input name='query' defaultValue={query} className='search-input' placeholder='Search Startup'/>
        <div className="flex gap-2">
            {query && <SearchFormReset/>}
            <button type='submit' className="search-btn text-white">
                <Search className='size-50' ></Search>
            </button>
        </div>
        

    </Form>
  );
};

export default SearchForm;
