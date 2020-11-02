import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { PromoCodeContext } from '../../context/PromoCodeContext';
import MenuBar from './MenuBar';

const PromoCode = () => {
  const {
    promoCodes,
    handleDeactivate,
    handleActivated,
    dataLoad,
  } = useContext(PromoCodeContext);
  const [loading, setLoading] = useState(true);
  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    dataLoad(loading);
    console.log('none');
  }, []);
  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-quarters card'>
              <MenuBar />
            </div>
            <div className='column is-three-quarters'>
              <Link
                to='add-promo-code'
                className='button is-info is-pulled-right'
              >
                Add Promo Code
              </Link>
              <button className='button is-info is-outlined is-pulled-right mr-3 ' onClick={refreshPage}>
                refresh
              </button>
              <h3 className='title is-4'>Promo Code </h3>
              <hr />
              {promoCodes.map((item, index) => (
                <div className='' key={index}>
                  <div className='columns'>
                    <div className='column'>{item.promoCode}</div>
                    <div className='column'>
                      {item.status == 1 ? (
                        <button
                          className='button is-warning'
                          onClick={() => {
                            handleDeactivate(item);
                            setLoading(!loading);
                            Swal.fire('Deactivated')
                          }}
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          className='button is-primary'
                          onClick={() => {
                            handleActivated(item);
                            setLoading(!loading);
                            Swal.fire('Activated')

                          }}
                        >
                          Active
                        </button>
                      )}

                      <button
                        className='button is-success is-pulled-right is-outlined'
                        disabled
                      >
                        {item.status == 1 ? 'Actived' : 'Deactivated'}
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromoCode;
