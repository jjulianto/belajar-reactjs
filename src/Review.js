import React from 'react';
import './App.css';

function Review() {
    //mempersiapkan data dummy JSON
    const users = [
        {
            "id": 1,
            "photo": "https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Matsamune",
            "review": "Harganya murah, kualitas bagus, desain mantap. Pokoknya keren."
        },
        {
            "id": 2,
            "photo": "https://images.pexels.com/photos/4275726/pexels-photo-4275726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Yukimura",
            "review": "Nice brand bro, i like it."
        },
        {
            "id": 3,
            "photo": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Nobunaga",
            "review": "Barang yang bagus, miskin."
        }
    ];
    const listReviews = users.map((itemReviews) =>
        <div key={itemReviews.id} className="Item">
            <img src={itemReviews.photo} />
            <div className="User">
                <h3>{itemReviews.name}</h3>
                <p>{itemReviews.review}</p>
            </div>
        </div>
    );
    return (
        <div className="Review-box">
            <h2>Reviews</h2>
            {listReviews}
        </div>
    );
}

export default Review;