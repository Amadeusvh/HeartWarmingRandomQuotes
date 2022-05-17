import { useState } from "react";
import { CreateQuoteContainer } from "../components/createModelComponent";
import QuoteService from "../services/quotesService";

const CreateQuote = () => {

  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <CreateQuoteContainer>
      <div>
        <h3>Create a new Quote</h3>
      </div>

      <div>
        <form onSubmit={(event) => {
            QuoteService.createQuote(content, author)
            .then(() => setContent(''))
            .then(() => setAuthor(''));
            event.preventDefault();
          }
        }>
          <label>
            Quote:
            <input 
              onChange={(event) => {setContent(event.target.value)}}
              type="text" 
              name="quote"
              placeholder="new quote"
              value={content}
            />
          </label>
          <label>
            Author:
            <input
              onChange={(event) => {setAuthor(event.target.value)}} 
              type="text" 
              name="author"
              placeholder="author of the quote"
              value={author}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    </CreateQuoteContainer>
  );
};

export default CreateQuote;
