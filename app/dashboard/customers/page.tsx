import React from 'react'

const Customers = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <div>Customers</div>
  )
}

export default Customers