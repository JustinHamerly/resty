import React from 'react';

function History(props) {

  const history = props.history.map((item) => {
    return (
      <div key={item.id}>
        <p id="method">{item.method}</p>
        <p id="url">{item.url}</p>
      </div>
    );
  });

  return (
    <>
      <h3>History</h3>
      {history}
    </>
  );
}

export default History;