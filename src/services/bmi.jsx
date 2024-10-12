import React, { useState } from "react";
import '../index.css';

const BmiCalc = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    let calcBmi = (event) => {
        event.preventDefault();
        if (weight === 0 || height === 0 || weight < 0 || height < 0) {
            alert('Please enter a valid weight or height');
        } else {
            let bmi = weight / ((height / 100) * (height / 100));

            setBmi(bmi.toFixed(1));
            if (bmi < 18.5) {
                setMessage("You are underweight");
            } else if (bmi >= 18.5 && bmi < 24.9) {
                setMessage("You have a normal weight");
            } else if (bmi >= 25 && bmi < 29.9) {
                setMessage("You are overweight");
            } else {
                setMessage("You are obese");
            }
        }
    }

    let imgSrc;
    if (bmi < 1) {
        imgSrc = '';
    } else {
        if (bmi < 18.5) {
            imgSrc = require('../assets/underweight.png');
        } else if (bmi >= 18.5 && bmi < 24.9) {
            imgSrc = require('../assets/healthy.png');
        } else if (bmi >= 25 && bmi < 29.9) {
            imgSrc = require('../assets/overweight.png');
        } else {
            imgSrc = require('../assets/obese.png');
        }
    }


    const clearForm = () => {
        setWeight(0);
        setHeight(0);
        setBmi('');
        setMessage('');
    };

    return (
        <div className="bmi">
            <div className="container">
                <h2 className="center">BMI Calculator</h2>
                <form onSubmit={calcBmi}>
                    <div>
                        <label>Weight (kg)</label>
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />


                    </div>
                    <div>
                        <label>Height (cm)</label>
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />

                    </div>
                    <div>
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn btn-outline" type="button" onClick={clearForm}>Clear</button>

                    </div>
                </form>
                <div className="center">
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>
                <div className="img-container">
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BmiCalc;
