import React from 'react'

const AccessControl = () => {
  return (
    <div className = {`flex
        justify-between
    w-full
    h-auto`}>
        <div className = {`w-2/3
        border
            border-white`}>
        <h1>User details here</h1>

        </div>

        <div className = {`w-1/3
            border
            border-white`}>
        <h1>Generated code here</h1>

        </div>
    </div>
  )
}

export default AccessControl