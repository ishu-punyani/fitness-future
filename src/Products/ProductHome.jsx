import React from 'react'
import Itemcard from './Itemcard'
import data from './Data'

function ProductHome() {
  // console.warn(data.productData)
  return (
    <> <br />
      <h1 className='text-center mt-5'>All Items</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center' >
          {data.productData.map((item,index)=>{
            return(
              <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ProductHome
