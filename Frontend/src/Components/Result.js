import React from 'react'

const Result = ({ feedback }) => {


    return (
        <>
            <div>
                <h2>Feedback List</h2>
                {feedback.length === 0 ? (
                    <p>No feedback yet.</p>
                ) : (
                    <ul>
                        {feedback.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}:</strong> {item.feedback}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        
        </>
  )
}

export default Result