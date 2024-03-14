import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './dietchart.css'
import { useNavigate } from 'react-router-dom'

function DietChart() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar/>
        <div className='dietchart'>
            <h1> <br /> <br /> <br />Diet Plans</h1>
            
            <div className="weight-gain">
                <div className="weight-gain-content">
                
                <img className='weight-gain-chart' src="/weight-gain.webp" alt="" />
                <p>
                <h2>Diet Chart for Weight Gain.</h2>
                If you want to gain weight, you should follow a healthy lifestyle by taking healthy food, doing exercise, and many more things. Some people take soda to increase weight, no doubt soda may help you to gain weight, but it can destroy your health at the same time. Whether you are a slim man or a skinny girl, If you are underweight, then you want to gain a balanced amount of muscle mass and subcutaneous fat, not a bunch of unhealthy belly fat. <br /><br />
                There are plenty of normal-weight men or women who get type 2 diabetes, heart disease and other health problems often associated with obesity. Therefore, it is absolutely essential that you still eat a healthy diet and live an overall healthy lifestyle. <br /><br />
                It is very important to eat mostly healthy foods or follow a gaining diet if you are trying to gain weight. If you want to gain weight slowly and steadily, then aim for 300-500 calories more than you burn each day according to the calculator. If you want to gain weight fast, then aim for something like 700-1000 calories above your maintenance level. Keep in mind that calorie calculators only provide estimates. <br /><br />
                Your needs may vary by several hundred calories per day, give or take. You don't need to count calories for the rest of your life, but it helps to do it for the first few days/weeks to get a feel for how many calories you are eating. If you are concerned about your physical health, Here is a full healthy diet plan for you that should be followed every day. <br />
                </p>
                </div>
                
                
                <h2 className='ha2'>Diet Plan for Weight Gain</h2>
                <div className="weight-gain-imgs">
                  <img className='weight-gain-img' src="/wg-sun.png" alt="" />
                  <img className='weight-gain-img' src="/wg-mon.png" alt="" />
                  <img className='weight-gain-img' src="/wg-tue.png" alt="" />
                  <img className='weight-gain-img' src="/wg-wed.png" alt="" />
                  <img className='weight-gain-img' src="/wg-thu.png" alt="" />
                  <img className='weight-gain-img' src="/wg-fri.png" alt="" />
                  <img className='weight-gain-img' src="/wg-sat.png" alt="" />
                </div>
            </div>
            <div className="weight-loss">
                <div className="weight-loss-content">
                
                <img className='weight-loss-chart' src="/weight-loss.webp" alt="" />
                <p>
                <h2>Diet Chart for Weight Loss.</h2>
                Do you have trouble losing weight? Or would you like to lose faster? You’ve come to the right place. The sad truth is that conventional ideas – eat less, run more – do not work long term. Counting calories, exercising for hours every day, and trying to ignore your hunger? That’s needless suffering and it wastes your time and precious willpower. It’s weight loss for masochists. Eventually, almost everyone gives up. That’s why we have an obesity epidemic. Fortunately, there’s a better way. Either way, there are several factors that can affect your efforts to lose weight. These include making changes to your diet plan for weight loss, exercise, and lifestyle. <br /><br />
                There are tools and tips that can keep you on track. In addition, you should know what not to do. Talk to a nutritionist/dietician before you begin a new plan. They can help you customize a program and safely monitor your progress. Keep in mind, even small changes can make a big difference in your health. When it comes to weight loss, there are 3 important facts you should know in advance. The first is your weight. The second is your body mass index  - BMI. <br /><br />
                Your BMI is based on your weight and height. The third fact to know for weight loss is waist circumference. Body fat often collects in your stomach area. This is more of a health risk than body fat that builds up in your thighs or buttocks. For this reason, your waist circumference is a valuable tool. <br /><br />
                We create a diet chart for weight loss for males and females, which can be easily followed for weight management. It is a complete diet plan for weight loss of one week and you can repeat it. <br />
                </p>
                </div>
                
                
                <h2 className='ha2'>Diet Plan for Weight Loss</h2>
                <div className="weight-loss-imgs">
                  <img className='weight-loss-img' src="/wl-sun.png" alt="" />
                  <img className='weight-loss-img' src="/wl-mon.png" alt="" />
                  <img className='weight-loss-img' src="/wl-tue.png" alt="" />
                  <img className='weight-loss-img' src="/wl-wed.png" alt="" />
                  <img className='weight-loss-img' src="/wl-thu.png" alt="" />
                  <img className='weight-loss-img' src="/wl-fri.png" alt="" />
                  <img className='weight-loss-img' src="/wl-sat.png" alt="" />
                </div>
            </div>

            <div className="diet-chart-ending">
              <h2>For a personalized diet plan suitable for your body, Click the button below to connect with us.</h2>
              <button className='mid-button' onClick={()=>navigate('/contact')}>Connect</button>
            </div>

        </div>

      <Footer/>
    </>
  )
}

export default DietChart