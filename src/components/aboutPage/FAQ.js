import React from 'react'
import FAQ from "react-faq-component";

const data = {    
    rows: [
        {
            title: "How Does Service Work?",
            content: `The pleasure of driving your Porsche is all yours, but you can share the responsibility of taking care of it. That’s what we’re here for. We do everything we can to make sure you can focus on enjoying your Porsche ownership, while we look after the rest.`,
        },
        {
            title: "How Do I Place An Order?",
            content:"Enhance the event of purchasing a new Porsche by having your vehicle delivered at the Porsche Experience Center. There’s no truer instance of dream becoming reality than the day you take delivery of your new Porsche.",
        },
        {
            title: "What Are My Financing Options?",
            content: 'Porsche Financial Services offers a range of customizable solutions for drivers who know exactly what they want. The same power, confidence, and control you experience behind the wheel of a Porsche',
        },        
    ],
};

const config = {
     animate: true,    
    tabFocus: true
};

const Questions = () => {
  return (
    <div className='faqSection'>
      <h2>FAQ</h2>
      <FAQ data={data}  config={config}/>
    </div>
  )
}

export default Questions