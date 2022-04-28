import axios from "axios";
import { QuoteType } from "../types/quoteType";

const { BACKEND_URL } = process.env;

const getQuote = async () => {
  return axios.get("http://localhost:3030/quote")
  .then(res => res.data)
}

const QuoteService = {
  getQuote,
}

export default QuoteService;