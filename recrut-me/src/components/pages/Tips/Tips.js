import React from 'react'
import "./Tips.css"
import TipsCategories from './TipsCategories'


const Tips = () => {
  return (
      <div className="Tips">
          <section className="headerTop">
              <h1 className="headerTips">How to get your dream Job ?</h1>
          </section>
          <section className="headerImage"></section>
          <TipsCategories />
          
          <div className="row">
           <div className="columnText">
                <h2  className="titreCol">Simple But Effective Ways to Make Your CV Stand Out</h2>
                <div className="MyList">
                  
                    <li>
                      <b style={{color:"red"}}>Start Strong :</b>
                      <br /> Start with a summary of your skills and key accomplishments to attract the recruiter and grap their attention .
                    </li>
                    <li>
                    <b style={{color:"red"}}>Customize for the job you want.</b>
                    </li>
                    <li>
                    <b style={{color:"red"}}>Highlight changes and growth :</b>
                      <br />You should focus on your personal development and that you are committed to learning and expanding your skill set
                    </li>
                </div>
           </div>
           <div className="columnImage" >
           <img className="image" src={require('./images/cv.jpg')} />
           </div>
          </div>
          
          
          <div className="bordure"></div>
          
          <div className="row">
            <div className="columnImage" >
              <img className="image" src={require('./images/Networking.jpg')} />
            </div>
            <div className="columnText">
              <h2  className="titreCol">Simple But Effective Ways to Make Your CV Stand Out</h2>
              <p className="contenuCol">Some text..</p>
            </div>
           
          </div>

          <div className="bordure"></div>

          <div className="row">
           <div className="columnText">
                <h2  className="titreCol">Simple But Effective Ways to Make Your CV Stand Out</h2>
                <p className="contenuCol">Some text..</p>
           </div>
           <div className="columnImage" >
           <img className="image" src={require('./images/jobInterview.jpg')} />
           </div>
          </div>

          <div className="bordure"></div>

          <div className="row">
            <div className="columnImage" >
              <img className="image" src={require('./images/linkedin.jpg')} />
            </div>
            <div className="columnText">
              <h2  className="titreCol">Simple But Effective Ways to Make Your CV Stand Out</h2>
              <p className="contenuCol">Some text..</p>
            </div>
           
          </div>
         
       </div>
    
  )
}

export default Tips