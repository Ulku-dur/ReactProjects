import { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { BOOK_DETAİLS_URL } from '../API'
import '../App.css'

const BookDetails = () => {
    const [book,setBook] = useState({});
    const {id} = useParams();
    useEffect(()=> {
axios.get(`${BOOK_DETAİLS_URL}/${id}`).then(res=>{
    setBook(res.data);
}).catch(err=>console.log(err))
    }, [book.id])

  return (
    <div className='book-details'>
      <div className='book-image'>
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt='#'/>
      </div>
      <div className='book-description'>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>
      </div>
    </div>
  )
}

export default BookDetails
