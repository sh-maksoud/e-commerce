
import React from 'react';
import CountUp from 'react-countup';
import './Numbers.css';

function Numbers() {
    return (
        <section className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2><CountUp end={1287} duration={3} />+</h2>
                        <h6>Savings</h6>
                    </div>
                    <div className="col-md-3">
                        <h2><CountUp end={5786} duration={3} />+</h2>
                        <h6>Photos</h6>
                    </div>
                    <div className="col-md-3">
                        <h2><CountUp end={1440} duration={3} />+</h2>
                        <h6>Rockets</h6>
                    </div>
                    <div className="col-md-3">
                        <h2><CountUp end={7110} duration={3} />+</h2>
                        <h6>Globes</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Numbers;
