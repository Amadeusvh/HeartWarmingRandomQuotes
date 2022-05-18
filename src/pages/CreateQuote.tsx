import { ArrowLeft } from "@styled-icons/bootstrap";
import { useState } from "react";
import { 
  CloseButton, 
  CreateQuoteContainer, 
  InputAuthorText, 
  InputButton, 
  InputContainer, 
  InputQuoteText, 
  NewQuoteForm, 
  NewQuoteLabel 
} from "../components/createQuoteComponent";
import QuoteService from "../services/quotesService";

const CreateQuote = () => {

  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <CreateQuoteContainer>
      <CloseButton to="/"><ArrowLeft size={16}/></CloseButton>

      <h2>Create a new Quote</h2>

      <InputContainer>
        <NewQuoteForm onSubmit={(event) => {
            QuoteService.createQuote(content, author)
            .then(() => setContent(''))
            .then(() => setAuthor(''));
            event.preventDefault();
          }
        }
        >
          <NewQuoteLabel>
            Quote :
            <InputQuoteText
              onChange={(event) => {setContent(event.target.value)}}
              name="quote"
              placeholder='"when life give you lemons..."'
              value={content}
              maxLength={280}
              autoComplete="off"
              required
            />
          </NewQuoteLabel>

          <NewQuoteLabel>
            Author :
            <InputAuthorText
              onChange={(event) => {setAuthor(event.target.value)}}
              type="text" 
              name="author"
              placeholder="Author of the quote"
              value={author}
              maxLength={50}
              autoComplete="off"
              required
            />
          </NewQuoteLabel>
          <InputButton type="submit" value="Submit" />
        </NewQuoteForm>
      </InputContainer>

    </CreateQuoteContainer>
  );
};

export default CreateQuote;
