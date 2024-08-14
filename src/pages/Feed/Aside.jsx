import React from 'react'

const Aside = () => {
  return (
    <div className='max-xl:hidden'></div>
  )
}
//react.memo bileşenin aldığu proplar değişmediği sürece 
//tekrardan render olmasını engeller.
export default React.memo(Aside);