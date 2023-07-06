import React from 'react'
import "./App.css"
import "./Root.css"
import logo from './assets/png/clarity.png';
import icon from './assets/png/icon-park.png';
import clarity from './assets/png/clarity.png';
import support from './assets/png/support.png';
import Hero from './components/Hero';

const App = () => {
  return (
    <section className='bg z_index min-vh-100'>
      <div className='container'>
        <div className='row align-iteams-center py-5 mb-5'>
          <div className=' col-6 col-lg-3'>
            <div className='position-relative'>
              <span className='white_ball'></span>
              <div className='box_box'>
                <img src={logo} className="" alt="logo" />
                <h1 className='fs_20 ff_Space_Grotesk text-white mt-3'>Smart Contract </h1>
                <p className='ff_Space_Grotesk fs_16 max_w224 text_color mb-0'>Eu faucibus libero leo, malesuada justo, tortor pellentesque quis sit. Dui viverra at odio sodales duis integer rhoncus pulvinar. Commodo massa aliquam.</p>
              </div>
            </div>
          </div>
          <div className=' col-6 col-lg-3'>
            <div className='position-relative'>
              <span className='white_ball'></span>
              <div className='box_box'>
                <img src={icon} className="" alt="logo" />
                <h1 className='fs_20 ff_Space_Grotesk text-white mt-3'>Proof </h1>
                <p className='ff_Space_Grotesk fs_16 max_w224 text_color mb-0'>Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo ultricies quam vitae pellentesque tellus felis. Elementum tortor quis est morbi ullamcorper. </p>
              </div>
            </div>
          </div>
          <div className='col-6 col-lg-3'>
            <div className='position-relative'>
              <span className='white_ball'></span>
              <div className='box_box'>
                <img src={clarity} className="" alt="logo" />
                <h1 className='fs_20 ff_Space_Grotesk text-white mt-3'>NFT solutions </h1>
                <p className='ff_Space_Grotesk fs_16 max_w224 text_color mb-0'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
              </div>
            </div>
          </div>
          <div className='col-6 col-lg-3'>
            <div className='position-relative'>
              <span className='white_ball'></span>
              <div className='box_box'>
                <img src={support} className="" alt="logo" />
                <h1 className='fs_20 ff_Space_Grotesk text-white mt-3'>Support </h1>
                <p className='ff_Space_Grotesk fs_16 max_w224 text_color mb-0'>Tellus id et fringilla auctor. Ac viverra ullamcorper nec, senectus at nulla. Metus sem egestas volutpat cras phasellus cursus augue sagittis, enim. Sit et cras.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='container'>
          <div className='gredient_card'>
            <div className='d-flex align-items-center'>
              <h2 className='text-white max_w217 fs_39'>NFT Holders</h2>
              <h2 className='text-white fs_47 ps-4'>70%</h2>
            </div>
            <p className='text_color p1 max_w290 fs_23 mt-2 mb-0'>NFT Holders will earn $TNAT via p2e mechanism.</p>
          </div>
        </div>
      </div>

    </section >
  )
}

export default App