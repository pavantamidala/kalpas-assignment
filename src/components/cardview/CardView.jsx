import React from 'react'

function CardView(props) {
    console.log("card view")
    return (
        <div>
        <h1> card view </h1>
            { props.data.length &&
                props.data.map((obj) => {
                    return (
                        <div key={obj.id}>
                            <h4> {obj.title} </h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(CardView)