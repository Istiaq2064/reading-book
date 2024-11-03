import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../utility/addToDB,';

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId)
    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;


    const handleMarkAsRead = (id) =>{
        addToStoreReadList(id);
    }

    
    return (
        <div className='my-5'>
            <h3>Book details: {bookId}</h3>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className=" text-4xl py-6">
                            {bookName}
                        </p>
                        <p>by: {author}</p>
                        <div className='border-t-2 border-gray-500 border-dashed mt-4 mb-4'></div>
                        <p> {category} </p>
                        <div className='border-t-2 border-gray-500 border-dashed mt-4'></div>
                        <p>
                            {review}
                        </p>

                        <div className='flex justify-center space-x-28'>
                            {
                                tags.map((tag, index) => <button key={index} className="btn btn-xs bg-gray-300 text-green-700">Tag: {tag}</button>)
                            }
                        </div>
                        <div className='border-t-2 border-gray-500 border-dashed mt-4'></div>
                        <p>Number of page: {totalPages}</p>
                        <p> Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                        <br />
                        <button onClick={()=>handleMarkAsRead(bookId)} className="btn   btn-outline mr-4 btn-accent">Mark to Read</button>
                        <button className="btn  btn-accent">Add to Wish List</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;