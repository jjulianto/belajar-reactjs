import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewProduk from './Review';
import PropTypes from 'prop-types';

function App() {
    return ( 
        <div className="Parentbox">
            <FotoImg />
            <ProdukInfo isDiscount="yes" category="LEBARAN" name="White Black"/>
            <ReviewProduk />
        </div>
    );
}

function FotoImg() {
    return ( 
        <div className="Foto">
            <img src="sepatu.jpg"></img>
        </div>
    );
}

function CheckDiscount(props) {
    const { isDiscount, discount } = props;
    if(isDiscount == "yes"){
        return (
            <p>Diskon {discount}% off</p>
        );
    }
    else if(isDiscount == "coming"){
        return (
            <p>Akan ada diskon.</p>
        );
    }
    else {
        return (
            <p>Belum ada diskon.</p>
        );
    }
}

function ProdukInfo(props) {
    const { category, name, isDiscount } = props;
    const benefits = ["Tidak kusut", "Lebih halus", "Tahan air"];
    const listBenefits = benefits.map((itemBenefit) =>
        <li key={itemBenefit}>{itemBenefit}</li>
    );
    return (
    <div>
        <div className="Deskripsi">
            <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
            <p className="Price">IDR 74.303.999</p>
            <CheckDiscount isDiscount={isDiscount} discount={50} />
            <p className="Info">
                One of the most recognizable shoes in AJ collection, Air Jordan 3 Retro
                features lightweight, visible cushioning just like the original from '88.
                Signature details and materials celebrate the game-changing icon.
            </p>
            <ul>
                {listBenefits}
            </ul>
            <a onClick={(e) => TambahProduk(name, e)} href="#">Add to Cart</a>
        </div>
    </div>
    );
}

function TambahProduk(e) {
    return console.log("Membeli Produk " + e);
}

CheckDiscount.propTypes = {
    discount: PropTypes.number.isRequired
};

export default App;