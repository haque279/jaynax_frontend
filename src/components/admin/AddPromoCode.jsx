import React, { useContext, useState, useEffect } from 'react';
import { PromoCodeContext } from '../../context/PromoCodeContext';
import MenuBar from './MenuBar';

const AddPromoCode = () => {
  const { addPromoCode, dataLoad } = useContext(PromoCodeContext);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [useTime, setUseTime] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    addPromoCode(promoCode, startDate, endDate, discountRate, useTime);
    setLoading(!loading);
    console.log('loading', loading)
  };

  useEffect(()=>{
     dataLoad(loading)
  },[loading])

  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-quarters card'>
              <MenuBar />
            </div>
            <div className='column is-three-quarters'>
              <h3 className='title is-4'>Add Promo Code</h3>
              <hr />
              <div className='columns'>
                {/* <div className='column one-third'>one</div> */}
                <div className='column two-third'>
                  <form action='' onSubmit={handleSubmit}>
                    <div class='field'>
                      <label class='label'>Promo Code</label>
                      <div class='control'>
                        <input
                          class='input'
                          type='text'
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        Alphanumeric only
                      </div>
                    </div>
                    <div class='field'>
                      <label class='label'>Start Date</label>
                      <div class='control'>
                        <input
                          class='input'
                          type='date'
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class='field'>
                      <label class='label'>End Date</label>
                      <div class='control'>
                        <input
                          class='input'
                          type='date'
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class='field'>
                      <label class='label'>Discount Rate</label>
                      <div class='control'>
                        <input
                          class='input'
                          type='number'
                          value={discountRate}
                          onChange={(e) => setDiscountRate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class='field'>
                      <label class='label'>Use Time</label>
                      <div class='control'>
                        <input
                          class='input'
                          type='number'
                          value={useTime}
                          onChange={(e) => setUseTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class='field'>
                      <div class='control'>
                        <button type='submit' className='button is-info'>
                          Add Promo Code
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='column one-third'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPromoCode;
