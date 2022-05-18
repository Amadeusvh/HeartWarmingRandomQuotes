import { useEffect, useState } from "react";
import QuoteService from "../services/quotesService";
import { QuoteType } from "../types/quoteType";
import {
  AuthorName,
  Content,
  DialogBox,
  NextQuoteButton,
  Quote,
  YuukaSays,
} from "../components/quoteComponents";


const Dialog = () => {
  
  const [quote, setQuote] = useState<QuoteType | undefined>(undefined)
  
  const nextQuote = () => {
    QuoteService
      .getQuote()
      .then(setQuote);
  };
  
  useEffect(() => {
    nextQuote();
  }, []);

  return(
    <>
      <DialogBox>
        <YuukaSays>Yuuka Says:</YuukaSays>
        {quote && 
        <Quote>
          <Content>&emsp;{quote.content}</Content>
          <AuthorName>~{quote.author}~</AuthorName>
        </Quote>}
        <NextQuoteButton onClick={nextQuote}>Next Quote</NextQuoteButton>
      </DialogBox>
    </>
  )
}

export default Dialog;
