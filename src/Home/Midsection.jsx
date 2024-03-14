import React from 'react'
import './Midsection.css'
import { useNavigate } from 'react-router-dom'

function midsection() {
  const navigate = useNavigate()
  return (
    <div className='midsection'>

      <div className='mid-one'>
        <div className='one-left'>
            <h1>Get Ready to TRANSFORM!</h1>
            <p>Are you ready to take your transformation to next level with latest equipments? Look no further! At Fitness Future, we specialize in providing best services. Our team has elite trainers with great knowledge and provide best solutions to meet your unique needs whether its weight loss or gain muscle.</p>
            {/* <br /><br /> */}
            <button className='mid-button' onClick={()=> navigate('/contact')}>Free Trial</button>
        </div>
        <div className='one-right'>
            {/* <img src="/fitness future logo.png" alt="" /> */}
        </div>
      </div>


      <div className='mid-two'>
          <div className="two-left">
          <span>What Makes Us <br />
          Different Than Others</span>
          </div>
          <div className="two-right">
            <div className='part'>
                <div className='bold'>20+</div>
                <div className='small'>Branches in Delhi</div>
            </div> 
            <div className='bar'></div>
            <div className='part'>
                <div className='bold'>5000+</div>
                <div className='small'>Happy Clients</div>
            </div> 
            <div className='bar'></div>
            <div className='part'>
                <div className='bold'>5+</div>
                <div className='small'>Medals Recieved from BBFA</div>
            </div> 
            <div className='bar'></div>
            <div className='part'>
                <div className='bold'>12Hrs</div>
                <div className='small'>Open</div>
            </div>
        </div>
      </div>


      <div className='mid-three'>
        <div className='three-left'>
        {/* <img src="./fitness.jpg" alt="" /> */}
        </div>
        <div className='three-right'>
            <h1>Supplements - Your Supporter </h1>
            <p>We porvide the best range of supplements for extreme results. No need to worry about duplicacy as we are certified from BBFA, the top organization of standards. <br />
            Click below to check out some amazing products. </p>
            <button  className='mid-button' onClick={()=> navigate('/products')}>Have a Look</button>
        </div>
      </div>


      <div className="mid-four">
          <div className="four-left">
            <h1>Wondering whether to lose <br /> or gain weight?</h1> <br />
            <p>Check out your BMI by clicking the button below and solve your confusion.</p>
            <button className='mid-button' onClick={()=> navigate('/bmi')}>Check your BMI</button>
          </div>
          <div className="four-right"></div>
        </div>

        <div className="mid-five">
            <div className="five-left"></div>

            <div className="five-right">
              <h1>Don't know what to eat <br /> to achieve your GOAL?</h1> <br />
              <p>Check out our free diet plans for weight gain as well as weight loss.</p>
              <button className='mid-button' onClick={()=> navigate('/dietchart')}>Diet Plan</button>
            </div>
        </div>
    </div>
  )
}

export default midsection
